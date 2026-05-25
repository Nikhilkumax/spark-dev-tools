import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  Search, Menu, X, Github, Star, Moon, Sun, Command as CommandIcon,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/tools";
import { useTheme } from "@/hooks/use-theme";

export function SiteNavbar({ onOpenCommand }: { onOpenCommand: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const q = (data.get("q") as string).trim();
    navigate({ to: "/search", search: q ? { q } : undefined });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border glass">
      <nav className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 mr-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--gradient-hero)] text-primary-foreground font-bold">
            D
          </div>
          <span className="text-base font-semibold tracking-tight hidden sm:inline">
            DevForge
          </span>
        </Link>

        {/* Categories dropdown — desktop */}
        <div
          className="relative hidden md:block"
          onMouseEnter={() => setCatOpen(true)}
          onMouseLeave={() => setCatOpen(false)}
        >
          <button className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface transition-colors">
            Categories
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
          {catOpen && (
            <div className="absolute left-0 top-full pt-2 w-[640px]">
              <div className="rounded-2xl border border-border bg-popover p-4 shadow-2xl">
                <div className="grid grid-cols-2 gap-1">
                  {categories.map((c) => {
                    const Icon = c.icon;
                    return (
                      <Link
                        key={c.slug}
                        to="/tools/$category"
                        params={{ category: c.slug }}
                        className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-surface transition-colors"
                      >
                        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-elevated border border-border ${c.accent}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-medium">{c.name}</div>
                          <div className="text-xs text-muted-foreground line-clamp-1">{c.description}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-3 border-t border-border pt-3">
                  <Link to="/tools" className="text-xs text-primary hover:underline">
                    View all tools →
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        <Link to="/tools" className="hidden md:inline-block rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface transition-colors">
          All Tools
        </Link>
        <Link to="/blog" className="hidden md:inline-block rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface transition-colors">
          Blog
        </Link>
        <Link to="/docs" className="hidden md:inline-block rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface transition-colors">
          Docs
        </Link>

        {/* Search — desktop */}
        <form onSubmit={handleSearchSubmit} className="hidden lg:flex flex-1 max-w-md mx-2">
          <button
            type="button"
            onClick={onOpenCommand}
            className="group flex w-full items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 text-sm text-muted-foreground hover:border-primary/40 hover:bg-surface-elevated transition-colors"
          >
            <Search className="h-4 w-4" />
            <span className="flex-1 text-left">Search tools…</span>
            <kbd className="hidden md:inline-flex items-center gap-1 rounded-md border border-border bg-background px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
              <CommandIcon className="h-3 w-3" />K
            </kbd>
          </button>
        </form>

        <div className="ml-auto flex items-center gap-1">
          <button
            onClick={onOpenCommand}
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
          <Link
            to="/favorites"
            className="hidden sm:flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
            aria-label="Favorites"
          >
            <Star className="h-4 w-4" />
          </Link>
          <button
            onClick={toggle}
            className="hidden sm:flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <Button asChild size="sm" className="hidden md:inline-flex ml-1">
            <Link to="/tools">Get Started</Link>
          </Button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[88vw] max-w-sm bg-popover border-l border-border overflow-y-auto animate-fade-in-up">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="font-semibold">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-surface"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 space-y-1">
              <Link to="/" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-surface">Home</Link>
              <Link to="/tools" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-surface">All Tools</Link>
              <Link to="/favorites" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-surface">Favorites</Link>
              <Link to="/recent" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-surface">Recent</Link>
              <Link to="/blog" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-surface">Blog</Link>
              <Link to="/docs" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-surface">Docs</Link>
              <Link to="/about" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-surface">About</Link>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-surface">Contact</Link>
            </div>
            <div className="px-4 pb-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-3 py-2">Categories</div>
              <div className="space-y-0.5">
                {categories.map((c) => {
                  const Icon = c.icon;
                  return (
                    <Link
                      key={c.slug}
                      to="/tools/$category"
                      params={{ category: c.slug }}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-surface"
                    >
                      <Icon className={`h-4 w-4 ${c.accent}`} />
                      <span className="text-sm">{c.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center gap-2 p-4 border-t border-border">
              <button onClick={toggle} className="flex-1 rounded-lg border border-border px-3 py-2 text-sm flex items-center justify-center gap-2 hover:bg-surface">
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </button>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg border border-border hover:bg-surface">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
