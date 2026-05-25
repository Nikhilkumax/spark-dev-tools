import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";

const posts = [
  { slug: "json-formatting-at-scale", title: "A developer's guide to formatting JSON at scale", excerpt: "Best practices and tooling for keeping JSON readable.", date: "Dec 2025" },
  { slug: "regex-survival-guide", title: "The regex survival guide", excerpt: "Patterns every developer should know by heart.", date: "Nov 2025" },
  { slug: "jwt-without-tears", title: "JWT without tears", excerpt: "Decode, debug, and validate JSON web tokens.", date: "Oct 2025" },
];

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — DevForge" },
      { name: "description", content: "Tutorials, deep-dives, and updates from the DevForge team." },
      { property: "og:title", content: "Blog — DevForge" },
      { property: "og:description", content: "Tutorials and updates from DevForge." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: () => (
    <ContentPage crumbs={[{ label: "Blog" }]} title="Blog" description="Tutorials, tooling deep-dives, and updates.">
      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((p) => (
          <Link
            key={p.slug}
            to="/blog/$slug"
            params={{ slug: p.slug }}
            className="rounded-2xl border border-border bg-[var(--gradient-card)] p-6 hover-lift hover-glow block"
          >
            <div className="text-xs text-muted-foreground">{p.date}</div>
            <h3 className="mt-2 text-lg font-semibold text-foreground">{p.title}</h3>
            <p className="mt-1.5 text-sm">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </ContentPage>
  ),
});
