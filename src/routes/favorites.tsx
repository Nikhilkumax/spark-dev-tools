import { createFileRoute } from "@tanstack/react-router";
import { useFavorites } from "@/hooks/use-favorites";
import { allTools } from "@/data/tools";
import { ToolCard } from "@/components/tool-card";
import { EmptyState } from "@/components/empty-state";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const Route = createFileRoute("/favorites")({
  head: () => ({
    meta: [
      { title: "Favorites — DevForge" },
      { name: "description", content: "Your saved developer tools, pinned for quick access." },
      { property: "og:title", content: "Favorites — DevForge" },
      { property: "og:description", content: "Your saved developer tools." },
      { property: "og:url", content: "/favorites" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/favorites" }],
  }),
  component: FavoritesPage,
});

function FavoritesPage() {
  const { favorites } = useFavorites();
  const tools = favorites
    .map((id) => {
      const [c, t] = id.split("/");
      return allTools.find((tool) => tool.category === c && tool.slug === t);
    })
    .filter(Boolean) as typeof allTools;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 lg:py-12">
      <Breadcrumbs items={[{ label: "Favorites" }]} />
      <div className="mt-6">
        <h1 className="text-3xl font-bold tracking-tight">Favorites</h1>
        <p className="mt-2 text-muted-foreground">
          Your pinned tools, saved in this browser.
        </p>
      </div>

      <div className="mt-10">
        {tools.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tools.map((t, i) => (
              <ToolCard key={`${t.category}/${t.slug}`} tool={t} index={i} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No favorites yet"
            description="Tap the star icon on any tool to pin it here for quick access."
            cta={{ label: "Browse tools", to: "/tools" }}
          />
        )}
      </div>
    </div>
  );
}
