import { createFileRoute } from "@tanstack/react-router";
import { useRecentTools } from "@/hooks/use-recent-tools";
import { allTools } from "@/data/tools";
import { ToolCard } from "@/components/tool-card";
import { EmptyState } from "@/components/empty-state";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export const Route = createFileRoute("/recent")({
  head: () => ({
    meta: [
      { title: "Recently Used — DevForge" },
      { name: "description", content: "Tools you used recently, kept in your browser." },
      { property: "og:title", content: "Recently Used — DevForge" },
      { property: "og:description", content: "Your recent developer tools." },
      { property: "og:url", content: "/recent" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/recent" }],
  }),
  component: RecentPage,
});

function RecentPage() {
  const { recent, clear } = useRecentTools();
  const tools = recent
    .map((id) => {
      const [c, t] = id.split("/");
      return allTools.find((tool) => tool.category === c && tool.slug === t);
    })
    .filter(Boolean) as typeof allTools;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 lg:py-12">
      <Breadcrumbs items={[{ label: "Recent" }]} />
      <div className="mt-6 flex items-start justify-between gap-3 flex-wrap">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Recently used</h1>
          <p className="mt-2 text-muted-foreground">
            The last {tools.length} tools you opened.
          </p>
        </div>
        {tools.length > 0 && (
          <Button variant="outline" size="sm" onClick={clear}>
            <Trash2 className="h-4 w-4" />
            Clear history
          </Button>
        )}
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
            title="Nothing here yet"
            description="Open a tool and it'll show up here next time."
            cta={{ label: "Browse tools", to: "/tools" }}
          />
        )}
      </div>
    </div>
  );
}
