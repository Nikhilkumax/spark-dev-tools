import { createFileRoute } from "@tanstack/react-router";
import { categories, allTools } from "@/data/tools";
import { CategoryCard } from "@/components/category-card";
import { ToolCard } from "@/components/tool-card";
import { SectionHeading } from "@/components/section-heading";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const Route = createFileRoute("/tools/")({
  head: () => ({
    meta: [
      { title: "All Tools — DevForge" },
      { name: "description", content: "Browse 100+ browser-based developer tools across 20 categories." },
      { property: "og:title", content: "All Tools — DevForge" },
      { property: "og:description", content: "Browse 100+ developer tools across 20 categories." },
      { property: "og:url", content: "/tools" },
    ],
    links: [{ rel: "canonical", href: "/tools" }],
  }),
  component: ToolsIndex,
});

function ToolsIndex() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 lg:py-12">
      <Breadcrumbs items={[{ label: "All Tools" }]} />
      <div className="mt-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">All Tools</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          {allTools.length} developer tools across {categories.length} categories — all free, all in your browser.
        </p>
      </div>

      <div className="mt-10">
        <SectionHeading title="Browse by category" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((c, i) => (
            <CategoryCard key={c.slug} category={c} index={i} />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <SectionHeading title="Every tool" description="Scroll the entire catalog." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allTools.map((t, i) => (
            <ToolCard key={`${t.category}/${t.slug}`} tool={t} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
