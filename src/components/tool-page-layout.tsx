import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Copy, Check, Share2, Star, Eraser, Download, Upload, Keyboard,
} from "lucide-react";
import type { Tool, Category } from "@/data/tools";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";
import { useFavorites } from "@/hooks/use-favorites";
import { useRecentTools } from "@/hooks/use-recent-tools";
import { ToolCard } from "@/components/tool-card";

export function ToolPageLayout({
  tool,
  category,
  relatedTools,
}: {
  tool: Tool;
  category: Category;
  relatedTools: Array<{
    slug: string;
    name: string;
    description: string;
    category: string;
    categoryName: string;
  }>;
}) {
  const id = `${category.slug}/${tool.slug}`;
  const { isFavorite, toggle } = useFavorites();
  const { push } = useRecentTools();
  const [copied, setCopied] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    push(id);
  }, [id, push]);

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success("Link copied");
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.error("Could not copy");
    }
  };

  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: tool.name, url: window.location.href });
      } catch {}
    } else {
      copyUrl();
    }
  };

  const Icon = category.icon;
  const fav = isFavorite(id);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: "Tools", to: "/tools" },
          { label: category.name, to: "/tools/$category", params: { category: category.slug } },
          { label: tool.name },
        ]}
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"
      >
        <div className="flex items-start gap-4">
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-elevated border border-border ${category.accent}`}>
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{tool.name}</h1>
            <p className="mt-1.5 text-muted-foreground max-w-2xl">{tool.description}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" onClick={copyUrl}>
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            Copy URL
          </Button>
          <Button variant="outline" size="sm" onClick={share}>
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          <Button
            variant={fav ? "default" : "outline"}
            size="sm"
            onClick={() => toggle(id)}
          >
            <Star className={`h-4 w-4 ${fav ? "fill-current" : ""}`} />
            {fav ? "Saved" : "Favorite"}
          </Button>
        </div>
      </motion.div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_300px]">
        {/* Main tool interface */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-[var(--gradient-card)] overflow-hidden">
            <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border">
              {/* Input */}
              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Input</span>
                  <div className="flex items-center gap-1">
                    <button className="rounded-lg p-1.5 text-muted-foreground hover:text-foreground hover:bg-surface" aria-label="Upload">
                      <Upload className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => setInput("")}
                      className="rounded-lg p-1.5 text-muted-foreground hover:text-foreground hover:bg-surface"
                      aria-label="Clear"
                    >
                      <Eraser className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={`Paste your input for ${tool.name} here…`}
                  className="w-full h-72 lg:h-96 resize-none rounded-xl border border-border bg-background px-3 py-2.5 text-sm font-mono outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/20 transition"
                />
              </div>

              {/* Output */}
              <div className="p-4 sm:p-5 bg-surface/40">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Output</span>
                  <div className="flex items-center gap-1">
                    <button className="rounded-lg p-1.5 text-muted-foreground hover:text-foreground hover:bg-surface" aria-label="Copy output">
                      <Copy className="h-3.5 w-3.5" />
                    </button>
                    <button className="rounded-lg p-1.5 text-muted-foreground hover:text-foreground hover:bg-surface" aria-label="Download">
                      <Download className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
                <div className="w-full h-72 lg:h-96 rounded-xl border border-dashed border-border bg-background/50 flex items-center justify-center text-sm text-muted-foreground">
                  Output will appear here
                </div>
              </div>
            </div>

            {/* Action bar */}
            <div className="border-t border-border px-4 sm:px-5 py-3 flex flex-wrap items-center justify-between gap-2 bg-surface/30">
              <div className="text-xs text-muted-foreground">
                Real-time processing • Runs entirely in your browser
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={() => setInput("")}>
                  <Eraser className="h-4 w-4" />
                  Reset
                </Button>
                <Button size="sm">
                  Run {tool.name}
                </Button>
              </div>
            </div>
          </div>

          {/* Tabs: How to use / Features / FAQ */}
          <Tabs defaultValue="how" className="w-full">
            <TabsList>
              <TabsTrigger value="how">How to use</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>
            <TabsContent value="how" className="mt-4 rounded-2xl border border-border bg-[var(--gradient-card)] p-6 prose prose-invert max-w-none">
              <ol className="space-y-3 text-sm text-muted-foreground list-decimal pl-5">
                <li>Paste or type your input into the left panel.</li>
                <li>Click <strong className="text-foreground">Run {tool.name}</strong> or wait for live processing.</li>
                <li>Copy or download the result from the output panel.</li>
                <li>Optionally save this tool to your favorites for quick access.</li>
              </ol>
            </TabsContent>
            <TabsContent value="features" className="mt-4 rounded-2xl border border-border bg-[var(--gradient-card)] p-6">
              <ul className="grid gap-3 sm:grid-cols-2 text-sm">
                {[
                  "100% browser-based — no upload to a server",
                  "Real-time processing",
                  "Copy and download results",
                  "Keyboard shortcuts",
                  "Saved in favorites",
                  "Mobile friendly",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="faq" className="mt-4 rounded-2xl border border-border bg-[var(--gradient-card)] p-2">
              <Accordion type="single" collapsible>
                <AccordionItem value="1">
                  <AccordionTrigger>Is this tool free?</AccordionTrigger>
                  <AccordionContent>Yes — every tool on DevForge is completely free.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="2">
                  <AccordionTrigger>Does my data leave my browser?</AccordionTrigger>
                  <AccordionContent>No. {tool.name} runs entirely client-side.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="3">
                  <AccordionTrigger>Can I use this on mobile?</AccordionTrigger>
                  <AccordionContent>Yes — the entire platform is mobile optimized.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>

          {/* SEO content area */}
          <section className="rounded-2xl border border-border bg-[var(--gradient-card)] p-6">
            <h2 className="text-lg font-semibold">About {tool.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {tool.name} is part of our {category.name} collection. It's designed for developers who need a fast,
              reliable, and privacy-first way to {tool.description.toLowerCase()} Built with modern web standards,
              it works in any browser on any device — no install required.
            </p>
          </section>

          {/* Related tools */}
          {relatedTools.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold mb-4">Related tools</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {relatedTools.map((t, i) => (
                  <ToolCard key={`${t.category}/${t.slug}`} tool={t as any} index={i} />
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Side panel */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-border bg-[var(--gradient-card)] p-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Keyboard className="h-3.5 w-3.5" />
              Shortcuts
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                { k: "⌘ K", v: "Open command palette" },
                { k: "⌘ Enter", v: "Run tool" },
                { k: "⌘ ⇧ C", v: "Copy output" },
                { k: "Esc", v: "Clear input" },
              ].map((s) => (
                <li key={s.k} className="flex items-center justify-between">
                  <span className="text-muted-foreground">{s.v}</span>
                  <kbd className="rounded-md border border-border bg-background px-1.5 py-0.5 text-[10px] font-mono">{s.k}</kbd>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-[var(--gradient-card)] p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">More in {category.name}</div>
            <ul className="mt-3 space-y-1.5">
              {category.tools.filter((t) => t.slug !== tool.slug).slice(0, 6).map((t) => (
                <li key={t.slug}>
                  <Link
                    to="/tools/$category/$tool"
                    params={{ category: category.slug, tool: t.slug }}
                    className="block rounded-lg px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
                  >
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-dashed border-border bg-surface/30 p-5 text-center">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Ad placeholder</div>
            <div className="mt-3 h-32 flex items-center justify-center text-xs text-muted-foreground">
              Your ad here
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
