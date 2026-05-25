import { Link } from "@tanstack/react-router";
import { Fragment } from "react";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = { label: string; to?: string; params?: Record<string, string> };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground">
      <Link to="/" className="flex items-center hover:text-foreground transition-colors" aria-label="Home">
        <Home className="h-3.5 w-3.5" />
      </Link>
      {items.map((item, i) => (
        <Fragment key={i}>
          <ChevronRight className="h-3.5 w-3.5 opacity-50" />
          {item.to ? (
            <Link
              to={item.to as any}
              params={item.params as any}
              className="hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground">{item.label}</span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
