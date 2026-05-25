import { useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Search, ArrowRight, Sparkles, Command as CommandIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trendingTools } from "@/data/tools";

export function HeroSection({ onOpenCommand }: { onOpenCommand: () => void }) {
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const q = (fd.get("q") as string).trim();
    navigate({ to: "/search", search: q ? { q } : undefined });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-glow)" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Floating chips */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[8%] top-[28%] rounded-xl border border-border glass px-3 py-2 text-xs font-mono text-muted-foreground"
        >
          {`{ "format": true }`}
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute right-[10%] top-[22%] rounded-xl border border-border glass px-3 py-2 text-xs font-mono text-muted-foreground"
        >
          base64.encode()
        </motion.div>
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute left-[14%] bottom-[18%] rounded-xl border border-border glass px-3 py-2 text-xs font-mono text-muted-foreground"
        >
          regex /^d+$/
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute right-[12%] bottom-[24%] rounded-xl border border-border glass px-3 py-2 text-xs font-mono text-muted-foreground"
        >
          sha256(input)
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            100+ developer tools, all in one place
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            The developer toolbox{" "}
            <span className="text-gradient">that just works</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Format, encode, convert, test, and generate — every utility a developer needs,
            running blazingly fast in your browser. No installs. No tracking.
          </p>

          <form onSubmit={onSubmit} className="mt-8 mx-auto max-w-xl">
            <div className="flex items-center gap-2 rounded-2xl border border-border bg-surface p-1.5 shadow-lg focus-within:border-primary/40">
              <div className="pl-3 text-muted-foreground">
                <Search className="h-4 w-4" />
              </div>
              <input
                name="q"
                placeholder="Search 100+ tools — JSON, JWT, regex, base64…"
                className="flex-1 bg-transparent py-2.5 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="button"
                onClick={onOpenCommand}
                className="hidden sm:inline-flex items-center gap-1 rounded-lg border border-border bg-background px-2 py-1 text-[11px] font-mono text-muted-foreground hover:text-foreground"
                title="Open command palette"
              >
                <CommandIcon className="h-3 w-3" />K
              </button>
              <Button type="submit" size="sm" className="mr-1">
                Search
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </form>

          {/* Trending pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-muted-foreground">Trending:</span>
            {trendingTools.slice(0, 5).map((t) => (
              <a
                key={`${t.category}-${t.slug}`}
                href={`/tools/${t.category}/${t.slug}`}
                className="rounded-full border border-border bg-surface/60 px-3 py-1 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
              >
                {t.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
