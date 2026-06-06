import { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search, X, CornerDownLeft, ArrowUp, ArrowDown } from "lucide-react";
import { tools, categories, categorySlug, type Tool } from "@/data/tools";
import { fuzzyScore } from "@/lib/fuzzy";
import { cn } from "@/lib/utils";

interface Scored {
  tool: Tool;
  score: number;
}

export function ToolSearch() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [focused, setFocused] = useState(false);
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Global keyboard shortcuts: "/" or Cmd/Ctrl+K to focus
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isEditable =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
      } else if (e.key === "/" && !isEditable) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const results = useMemo<Scored[]>(() => {
    const pool = activeCategory
      ? tools.filter((t) => t.category === activeCategory)
      : tools;

    if (!query.trim()) {
      return pool.map((tool) => ({ tool, score: 0 }));
    }

    const scored: Scored[] = [];
    for (const tool of pool) {
      const nameScore = fuzzyScore(tool.name, query);
      const catScore = fuzzyScore(tool.category, query);
      const descScore = fuzzyScore(tool.description, query);
      const best = Math.max(
        nameScore ?? -Infinity,
        (catScore ?? -Infinity) - 50,
        (descScore ?? -Infinity) - 100,
      );
      if (best > -Infinity) scored.push({ tool, score: best });
    }
    scored.sort((a, b) => b.score - a.score);
    return scored;
  }, [query, activeCategory]);

  useEffect(() => {
    setSelected(0);
  }, [query, activeCategory]);

  const showDropdown = focused && (query.trim().length > 0 || activeCategory !== null);
  const visible = results.slice(0, 8);

  const go = (tool: Tool) => {
    navigate({
      to: "/tools/$category/$tool",
      params: { category: categorySlug(tool.category), tool: tool.slug },
    });
    setQuery("");
    setFocused(false);
    inputRef.current?.blur();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, Math.max(0, visible.length - 1)));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter") {
      if (visible[selected]) {
        e.preventDefault();
        go(visible[selected].tool);
      }
    } else if (e.key === "Escape") {
      setQuery("");
      inputRef.current?.blur();
    }
  };

  useEffect(() => {
    const el = listRef.current?.querySelector<HTMLElement>(`[data-idx="${selected}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [selected]);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div
        className={cn(
          "relative flex items-center rounded-xl border border-border bg-card transition-all",
          focused && "ring-2 ring-primary/40 border-primary/50",
        )}
        style={{ boxShadow: "var(--card-shadow)" }}
      >
        <Search className="absolute left-4 h-5 w-5 text-muted-foreground pointer-events-none" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          onKeyDown={onKeyDown}
          placeholder="Search 310+ tools…  (press / or ⌘K)"
          className="w-full bg-transparent pl-12 pr-24 py-3.5 text-[15px] text-foreground placeholder:text-muted-foreground outline-none"
          aria-label="Search tools"
        />
        <div className="absolute right-3 flex items-center gap-2">
          {query && (
            <button
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-accent"
              aria-label="Clear"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-1 rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Category chips */}
      <div className="mt-3 flex flex-wrap gap-1.5 justify-center">
        <button
          onClick={() => setActiveCategory(null)}
          className={cn(
            "px-2.5 py-1 rounded-full text-xs font-medium border transition-colors",
            activeCategory === null
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-primary/40",
          )}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory((c) => (c === cat ? null : cat))}
            className={cn(
              "px-2.5 py-1 rounded-full text-xs font-medium border transition-colors",
              activeCategory === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-primary/40",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results dropdown */}
      {showDropdown && (
        <div
          ref={listRef}
          className="absolute left-0 right-0 top-full mt-2 z-40 rounded-xl border border-border bg-popover overflow-hidden"
          style={{ boxShadow: "var(--card-shadow-hover)" }}
        >
          {visible.length === 0 ? (
            <div className="px-4 py-6 text-center text-sm text-muted-foreground">
              No tools match "{query}"
            </div>
          ) : (
            <>
              <div className="max-h-[60vh] overflow-y-auto py-1">
                {visible.map(({ tool }, i) => {
                  const Icon = tool.icon;
                  return (
                    <button
                      key={tool.slug + tool.category}
                      data-idx={i}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        go(tool);
                      }}
                      onMouseEnter={() => setSelected(i)}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors",
                        selected === i ? "bg-accent" : "hover:bg-accent/60",
                      )}
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium text-foreground truncate">
                          {tool.name}
                        </div>
                        <div className="text-xs text-muted-foreground truncate">
                          {tool.description}
                        </div>
                      </div>
                      <span className="hidden sm:inline text-[10px] text-muted-foreground uppercase tracking-wider shrink-0">
                        {tool.category}
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className="flex items-center justify-between gap-3 px-4 py-2 border-t border-border bg-muted/30 text-[11px] text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1">
                    <ArrowUp className="h-3 w-3" />
                    <ArrowDown className="h-3 w-3" /> navigate
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <CornerDownLeft className="h-3 w-3" /> open
                  </span>
                  <span className="hidden sm:inline">esc to clear</span>
                </div>
                <span>{results.length} result{results.length === 1 ? "" : "s"}</span>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
