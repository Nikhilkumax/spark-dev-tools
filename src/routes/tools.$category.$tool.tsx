import { createFileRoute, notFound } from "@tanstack/react-router";
import { findTool, allTools } from "@/data/tools";
import { ToolPageLayout } from "@/components/tool-page-layout";

export const Route = createFileRoute("/tools/$category/$tool")({
  loader: ({ params }) => {
    const result = findTool(params.category, params.tool);
    if (!result) throw notFound();
    return {
      toolName: result.tool.name,
      toolDescription: result.tool.description,
      categorySlug: result.category.slug,
      toolSlug: result.tool.slug,
    };
  },
  head: ({ loaderData, params }) => ({
    meta: [
      { title: `${loaderData?.toolName ?? "Tool"} — DevForge` },
      { name: "description", content: loaderData?.toolDescription ?? "" },
      { property: "og:title", content: `${loaderData?.toolName ?? "Tool"} — DevForge` },
      { property: "og:description", content: loaderData?.toolDescription ?? "" },
      { property: "og:url", content: `/tools/${params.category}/${params.tool}` },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `/tools/${params.category}/${params.tool}` }],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Tools", item: "/tools" },
                { "@type": "ListItem", position: 2, name: params.category, item: `/tools/${params.category}` },
                { "@type": "ListItem", position: 3, name: loaderData.toolName, item: `/tools/${params.category}/${params.tool}` },
              ],
            }),
          },
        ]
      : [],
  }),
  component: ToolPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-2xl font-bold">Tool not found</h1>
      <p className="mt-2 text-muted-foreground">That tool doesn't exist yet.</p>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground text-sm">{error.message}</p>
    </div>
  ),
});

function ToolPage() {
  const { category: catSlug, tool: toolSlug } = Route.useParams();
  const result = findTool(catSlug, toolSlug)!;
  const related = allTools
    .filter((t) => t.category === catSlug && t.slug !== toolSlug)
    .slice(0, 4);

  return (
    <ToolPageLayout
      tool={result.tool}
      category={result.category}
      relatedTools={related}
    />
  );
}
