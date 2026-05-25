import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";

export const Route = createFileRoute("/docs/$slug")({
  loader: ({ params }) => ({ slug: params.slug, title: params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) }),
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Docs"} — DevForge Docs` },
      { name: "description", content: `Documentation: ${loaderData?.title ?? "guide"}.` },
      { property: "og:title", content: loaderData?.title ?? "Docs" },
      { property: "og:description", content: `Documentation: ${loaderData?.title ?? "guide"}.` },
      { property: "og:url", content: `/docs/${loaderData?.slug ?? ""}` },
    ],
    links: loaderData ? [{ rel: "canonical", href: `/docs/${loaderData.slug}` }] : [],
  }),
  component: DocsPage,
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground text-sm">{error.message}</p>
    </div>
  ),
});

function DocsPage() {
  const { title } = Route.useLoaderData();
  return (
    <ContentPage
      crumbs={[{ label: "Docs", to: "/docs" }, { label: title }]}
      title={title}
      description="A placeholder docs page."
    >
      <p>This is a placeholder docs page. Replace with real documentation content.</p>
    </ContentPage>
  );
}
