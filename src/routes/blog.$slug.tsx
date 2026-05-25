import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => ({ slug: params.slug, title: params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) }),
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Article"} — DevForge Blog` },
      { name: "description", content: `Read ${loaderData?.title ?? "this article"} on the DevForge blog.` },
      { property: "og:title", content: loaderData?.title ?? "Article" },
      { property: "og:description", content: `Read ${loaderData?.title ?? "this article"} on DevForge.` },
      { property: "og:url", content: `/blog/${loaderData?.slug ?? ""}` },
      { property: "og:type", content: "article" },
    ],
    links: loaderData ? [{ rel: "canonical", href: `/blog/${loaderData.slug}` }] : [],
  }),
  component: BlogPost,
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground text-sm">{error.message}</p>
    </div>
  ),
});

function BlogPost() {
  const { title } = Route.useLoaderData();
  return (
    <ContentPage
      crumbs={[{ label: "Blog", to: "/blog" }, { label: title }]}
      title={title}
      description="A placeholder blog post."
    >
      <p>This is a placeholder blog article. Replace with real content.</p>
      <p>Use this template to write tutorials, deep-dives, and platform updates.</p>
    </ContentPage>
  );
}
