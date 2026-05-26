import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { Moon, Sun, ChevronDown } from "lucide-react";
import { tools, categories, categorySlug } from "@/data/tools";
import { useTheme } from "@/hooks/use-theme";

export function SiteNavbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border"
      style={{ boxShadow: "var(--header-shadow)" }}
    >
      <div className="container-page flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-1.5 font-bold text-xl tracking-tight">
          <span className="text-primary">Dev</span>
          <span className="text-foreground">Forge</span>
        </Link>

        <div className="flex items-center gap-1">
          <div className="relative" ref={ref}>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md transition-colors"
            >
              Tools
              <ChevronDown className="h-4 w-4" />
            </button>
            {open && (
              <div
                className="absolute right-0 top-full mt-2 w-[92vw] sm:w-[560px] max-h-[70vh] overflow-y-auto rounded-lg border border-border bg-popover p-4 shadow-lg"
                style={{ boxShadow: "var(--card-shadow-hover)" }}
              >
                {categories.map((cat) => (
                  <div key={cat} className="mb-4 last:mb-0">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      {cat}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {tools
                        .filter((t) => t.category === cat)
                        .map((tool) => {
                          const Icon = tool.icon;
                          return (
                            <Link
                              key={tool.slug}
                              to="/tools/$category/$tool"
                              params={{ category: categorySlug(cat), tool: tool.slug }}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-foreground hover:bg-accent transition-colors"
                            >
                              <Icon className="h-4 w-4 text-primary" />
                              <span className="truncate">{tool.name}</span>
                            </Link>
                          );
                        })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={toggle}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>
  );
}
