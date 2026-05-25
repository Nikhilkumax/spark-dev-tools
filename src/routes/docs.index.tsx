import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";

const docs = [
  { slug: "getting-started", title: "Getting started", excerpt: "Find your first tool and pin it." },
  { slug: "keyboard-shortcuts", title: "Keyboard shortcuts", excerpt: "Move through DevForge without touching the mouse." },
  { slug: "favorites-and-history", title: "Favorites & history", excerpt: "How DevForge remembers your tools." },
];

export const Route = createFileRoute("/docs/")({
  head: () => ({
    meta: [
      { title: "Docs — DevForge" },
      { name: "description", content: "Documentation and guides for the DevForge developer tools platform." },
      { property: "og:title", content: "Docs — DevForge" },
      { property: "og:description", content: "Documentation and guides for DevForge." },
      { property: "og:url", content: "/docs" },
    ],
    links: [{ rel: "canonical", href: "/docs" }],
  }),
  component: () => (
    <ContentPage crumbs={[{ label: "Docs" }]} title="Documentation" description="Guides, references, and tips for getting the most out of DevForge.">
      <div className="grid gap-4 sm:grid-cols-2">
        {docs.map((d) => (
          <Link
            key={d.slug}
            to="/docs/$slug"
            params={{ slug: d.slug }}
            className="rounded-2xl border border-border bg-[var(--gradient-card)] p-6 hover-lift hover-glow block"
          >
            <h3 className="text-lg font-semibold text-foreground">{d.title}</h3>
            <p className="mt-1.5 text-sm">{d.excerpt}</p>
          </Link>
        ))}
      </div>
    </ContentPage>
  ),
});
