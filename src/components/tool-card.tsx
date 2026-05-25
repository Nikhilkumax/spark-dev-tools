import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { ToolWithCategory } from "@/data/tools";
import { categories } from "@/data/tools";
import { Star } from "lucide-react";
import { useFavorites } from "@/hooks/use-favorites";

export function ToolCard({ tool, index = 0 }: { tool: ToolWithCategory; index?: number }) {
  const cat = categories.find((c) => c.slug === tool.category)!;
  const Icon = cat.icon;
  const { isFavorite, toggle } = useFavorites();
  const id = `${tool.category}/${tool.slug}`;
  const fav = isFavorite(id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.3) }}
    >
      <Link
        to="/tools/$category/$tool"
        params={{ category: tool.category, tool: tool.slug }}
        className="group relative block h-full rounded-2xl border border-border bg-[var(--gradient-card)] p-5 hover-lift hover-glow"
      >
        <div className="flex items-start justify-between gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-surface-elevated border border-border ${cat.accent}`}>
            <Icon className="h-5 w-5" />
          </div>
          <button
            type="button"
            aria-label={fav ? "Remove from favorites" : "Add to favorites"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggle(id);
            }}
            className="rounded-lg p-1.5 text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors"
          >
            <Star className={`h-4 w-4 ${fav ? "fill-current text-primary" : ""}`} />
          </button>
        </div>
        <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
          {tool.name}
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{tool.description}</p>
        <div className="mt-4 text-xs text-muted-foreground/80">{tool.categoryName}</div>
      </Link>
    </motion.div>
  );
}
