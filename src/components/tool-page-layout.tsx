import { useState } from "react";
import type { Tool } from "@/data/tools";
import { categorySlug } from "@/data/tools";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Copy, Eraser, Download, Upload } from "lucide-react";
import { ToolCard } from "@/components/tool-card";
import { toast } from "sonner";

export function ToolPageLayout({
  tool,
  categoryName,
  relatedTools,
}: {
  tool: Tool;
  categoryName: string;
  relatedTools: Tool[];
}) {
  const [input, setInput] = useState("");
  const Icon = tool.icon;

  const copyOutput = async () => {
    try {
      await navigator.clipboard.writeText(input);
      toast.success("Copied to clipboard");
    } catch {
      toast.error("Could not copy");
    }
  };

  return (
    <div className="container-page py-8 lg:py-12">
      <Breadcrumbs
        items={[
          { label: categoryName },
          { label: tool.name },
        ]}
      />

      <div className="mt-6 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{tool.name}</h1>
          <p className="mt-1.5 text-muted-foreground max-w-2xl">{tool.description}</p>
        </div>
      </div>

      <div
        className="mt-8 rounded-2xl border border-border bg-card overflow-hidden"
        style={{ boxShadow: "var(--card-shadow)" }}
      >
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
          <div className="p-4 sm:p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Input
              </span>
              <div className="flex items-center gap-1">
                <button
                  className="rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-accent"
                  aria-label="Upload"
                >
                  <Upload className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => setInput("")}
                  className="rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-accent"
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

          <div className="p-4 sm:p-5 bg-muted/30">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Output
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={copyOutput}
                  className="rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-accent"
                  aria-label="Copy output"
                >
                  <Copy className="h-3.5 w-3.5" />
                </button>
                <button
                  className="rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-accent"
                  aria-label="Download"
                >
                  <Download className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
            <div className="w-full h-72 lg:h-96 rounded-xl border border-dashed border-border bg-background flex items-center justify-center text-sm text-muted-foreground">
              Output will appear here
            </div>
          </div>
        </div>

        <div className="border-t border-border px-4 sm:px-5 py-3 flex flex-wrap items-center justify-between gap-2 bg-muted/20">
          <div className="text-xs text-muted-foreground">
            Runs entirely in your browser. No data leaves your device.
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => setInput("")}>
              <Eraser className="h-4 w-4" />
              Reset
            </Button>
            <Button size="sm">Run {tool.name}</Button>
          </div>
        </div>
      </div>

      {relatedTools.length > 0 && (
        <section className="mt-12">
          <h2 className="text-lg font-bold mb-4">More in {categoryName}</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {relatedTools.map((t) => (
              <ToolCard key={t.slug} tool={t} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
