import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { useState, useMemo } from "react";
import { searchTools, categories } from "@/data/tools";
import { ToolCard } from "@/components/tool-card";
import { EmptyState } from "@/components/empty-state";
import { Search as SearchIcon, X } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";

const searchSchema = z.object({ q: z.string().optional() });

export const Route = createFileRoute("/search")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Search — DevForge" },
      { name: "description", content: "Search 100+ developer tools by name, category, or use case." },
      { property: "og:title", content: "Search — DevForge" },
      { property: "og:description", content: "Search developer tools instantly." },
      { property: "og:url", content: "/search" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/search" }],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q = "" } = Route.useSearch();
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string | null>(null);
  const [query, setQuery] = useState(q);

  const results = useMemo(() => {
    const base = searchTools(query);
    return filter ? base.filter((t) => t.category === filter) : base;
  }, [query, filter]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 lg:py-12">
      <Breadcrumbs items={[{ label: "Search" }]} />
      <h1 className="mt-6 text-3xl font-bold tracking-tight">Search</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate({ to: "/search", search: query ? { q: query } : undefined });
        }}
        className="mt-6"
      >
        <div className="flex items-center gap-2 rounded-2xl border border-border bg-surface p-1.5 max-w-2xl focus-within:border-primary/40">
          <SearchIcon className="ml-3 h-4 w-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tools…"
            className="flex-1 bg-transparent py-2.5 text-sm outline-none"
            autoFocus
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="rounded-lg p-1.5 text-muted-foreground hover:text-foreground hover:bg-surface-elevated"
              aria-label="Clear"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </form>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <button
          onClick={() => setFilter(null)}
          className={`rounded-full border px-3 py-1 text-xs transition-colors ${
            !filter
              ? "border-primary/40 bg-primary/10 text-primary"
              : "border-border bg-surface text-muted-foreground hover:text-foreground"
          }`}
        >
          All ({searchTools(query).length})
        </button>
        {categories.map((c) => {
          const count = searchTools(query).filter((t) => t.category === c.slug).length;
          if (count === 0) return null;
          return (
            <button
              key={c.slug}
              onClick={() => setFilter(filter === c.slug ? null : c.slug)}
              className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                filter === c.slug
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border bg-surface text-muted-foreground hover:text-foreground"
              }`}
            >
              {c.name} ({count})
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        {results.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((t, i) => (
              <ToolCard key={`${t.category}/${t.slug}`} tool={t} index={i} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No tools found"
            description={`We couldn't find anything matching "${query}". Try a different keyword.`}
            cta={{ label: "Browse all tools", to: "/tools" }}
          />
        )}
      </div>
    </div>
  );
}
