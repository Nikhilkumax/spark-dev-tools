import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "@/data/tools";

export function CategoryCard({ category, index = 0 }: { category: Category; index?: number }) {
  const Icon = category.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.3) }}
    >
      <Link
        to="/tools/$category"
        params={{ category: category.slug }}
        className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-[var(--gradient-card)] p-6 hover-lift hover-glow"
      >
        <div className="flex items-start justify-between">
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-surface-elevated border border-border ${category.accent}`}>
            <Icon className="h-6 w-6" />
          </div>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </div>
        <h3 className="mt-5 text-lg font-semibold tracking-tight">{category.name}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{category.description}</p>
        <div className="mt-4 text-xs text-muted-foreground/80">
          {category.tools.length} tools
        </div>
      </Link>
    </motion.div>
  );
}
