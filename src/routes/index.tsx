import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import { CategoryCard } from "@/components/category-card";
import { ToolCard } from "@/components/tool-card";
import { categories, trendingTools, allTools } from "@/data/tools";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Sparkles, Mail } from "lucide-react";
import { useCommandPalette } from "@/hooks/use-command-palette";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DevForge — Premium browser-based developer tools" },
      {
        name: "description",
        content:
          "100+ free developer tools in your browser — JSON, regex, encoding, image, CSS, security, AI and more. Fast, private, no installs.",
      },
      { property: "og:title", content: "DevForge — Browser-based developer tools" },
      { property: "og:description", content: "100+ developer tools, all in one fast, private platform." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const { openPalette } = useCommandPalette();
  const aiTools = allTools.filter((t) => t.category === "ai");
  const jsonTools = allTools.filter((t) => t.category === "json");

  return (
    <div>
      <HeroSection onOpenCommand={openPalette} />

      {/* Trending tools */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <SectionHeading
          eyebrow="Trending"
          title="Popular developer tools"
          description="The most-used tools from across the platform."
          action={
            <Button variant="outline" asChild>
              <Link to="/tools">
                Browse all
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trendingTools.map((t, i) => (
            <ToolCard key={`${t.category}/${t.slug}`} tool={t} index={i} />
          ))}
        </div>
      </section>

      {/* Categories grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 border-t border-border">
        <SectionHeading
          eyebrow="20 categories"
          title="Every tool you need"
          description="From JSON formatting to AI-powered helpers — explore the full collection."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((c, i) => (
            <CategoryCard key={c.slug} category={c} index={i} />
          ))}
        </div>
      </section>

      {/* AI tools strip */}
      <section className="relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 -z-10 opacity-40" style={{ background: "var(--gradient-glow)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <SectionHeading
            eyebrow={<span><Sparkles className="inline h-3 w-3 mr-1" />AI-powered</span> as any}
            title="AI developer utilities"
            description="Describe what you need — let AI write the regex, SQL, or commit message."
            action={
              <Button variant="outline" asChild>
                <Link to="/tools/$category" params={{ category: "ai" }}>
                  Open AI tools
                </Link>
              </Button>
            }
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aiTools.map((t, i) => (
              <ToolCard key={`${t.category}/${t.slug}`} tool={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* JSON / featured collection */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 border-t border-border">
        <SectionHeading
          eyebrow="Featured collection"
          title="JSON, XML & API utilities"
          description="The complete kit for working with structured data and HTTP APIs."
          action={
            <Button variant="outline" asChild>
              <Link to="/tools/$category" params={{ category: "json" }}>
                View JSON tools
              </Link>
            </Button>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {jsonTools.map((t, i) => (
            <ToolCard key={`${t.category}/${t.slug}`} tool={t} index={i} />
          ))}
        </div>
      </section>

      {/* Blog preview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 border-t border-border">
        <SectionHeading
          eyebrow="From the blog"
          title="Learn, build, ship"
          action={
            <Button variant="outline" asChild>
              <Link to="/blog">All articles</Link>
            </Button>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-[var(--gradient-card)] p-6 hover-lift hover-glow"
            >
              <div className="text-xs text-muted-foreground">Dec 2025 • 5 min read</div>
              <h3 className="mt-3 text-lg font-semibold">A developer's guide to formatting JSON at scale</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                Best practices and tooling for keeping JSON readable in any project.
              </p>
              <Link to="/blog" className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                Read article <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-16 border-t border-border">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
        />
        <Accordion type="single" collapsible className="rounded-2xl border border-border bg-[var(--gradient-card)] p-2">
          {[
            { q: "Are these tools free?", a: "Yes — every tool on DevForge is free, with no signup required." },
            { q: "Does my data leave my browser?", a: "No. Tools run client-side wherever possible. Your inputs stay on your device." },
            { q: "Can I use these tools on mobile?", a: "Absolutely — the platform is fully responsive and touch optimized." },
            { q: "Can I request a new tool?", a: "Yes! Reach out from the Contact page with your suggestion." },
            { q: "Is there a dark mode?", a: "Dark is the default. Toggle to light mode anytime from the navbar." },
          ].map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 border-t border-border">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-[var(--gradient-card)] p-8 sm:p-12">
          <div className="absolute inset-0 -z-10 opacity-50" style={{ background: "var(--gradient-glow)" }} />
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Get new tools in your inbox</h3>
              <p className="mt-2 text-muted-foreground">
                One short email per month. New tools, tips, and updates. No spam.
              </p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-border bg-background pl-9 pr-3 py-2.5 text-sm outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/20 transition"
                />
              </div>
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
