import { createFileRoute, notFound } from "@tanstack/react-router";
import { findCategory, categories } from "@/data/tools";
import { ToolCard } from "@/components/tool-card";
import { CategoryCard } from "@/components/category-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/tools/$category")({
  loader: ({ params }) => {
    const category = findCategory(params.category);
    if (!category) throw notFound();
    return { categorySlug: category.slug, categoryName: category.name, categoryDescription: category.description };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.categoryName ?? "Category"} — DevForge` },
      { name: "description", content: loaderData?.categoryDescription ?? "" },
      { property: "og:title", content: `${loaderData?.categoryName ?? "Category"} — DevForge` },
      { property: "og:description", content: loaderData?.categoryDescription ?? "" },
      { property: "og:url", content: `/tools/${loaderData?.categorySlug ?? ""}` },
    ],
    links: loaderData ? [{ rel: "canonical", href: `/tools/${loaderData.categorySlug}` }] : [],
  }),
  component: CategoryPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-2xl font-bold">Category not found</h1>
      <p className="mt-2 text-muted-foreground">That category doesn't exist.</p>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground text-sm">{error.message}</p>
    </div>
  ),
});

function CategoryPage() {
  const { category: slug } = Route.useParams();
  const category = findCategory(slug)!;
  const Icon = category.icon;
  const related = categories.filter((c) => c.slug !== category.slug).slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 lg:py-12">
      <Breadcrumbs items={[{ label: "Tools", to: "/tools" }, { label: category.name }]} />

      <div className="mt-6 flex items-start gap-4">
        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-elevated border border-border ${category.accent}`}>
          <Icon className="h-7 w-7" />
        </div>
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{category.name}</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">{category.description}</p>
        </div>
      </div>

      <div className="mt-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {category.tools.map((t, i) => (
            <ToolCard
              key={t.slug}
              tool={{ ...t, category: category.slug, categoryName: category.name }}
              index={i}
            />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <SectionHeading title="Related categories" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((c, i) => (
            <CategoryCard key={c.slug} category={c} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
