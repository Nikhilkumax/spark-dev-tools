import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { Button } from "@/components/ui/button";
import { Mail, Github, Twitter } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DevForge" },
      { name: "description", content: "Get in touch with the DevForge team — feedback, requests, partnerships." },
      { property: "og:title", content: "Contact — DevForge" },
      { property: "og:description", content: "Get in touch with DevForge." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <ContentPage
      crumbs={[{ label: "Contact" }]}
      title="Contact us"
      description="Have a tool request, found a bug, or want to partner? We'd love to hear from you."
    >
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4 rounded-2xl border border-border bg-[var(--gradient-card)] p-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground">Name</label>
            <input className="mt-1.5 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/20" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Email</label>
            <input type="email" className="mt-1.5 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/20" />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Message</label>
          <textarea rows={5} className="mt-1.5 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/20" />
        </div>
        <Button type="submit">Send message</Button>
      </form>

      <div className="grid sm:grid-cols-3 gap-3">
        <a href="mailto:hello@devforge.dev" className="flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm hover:bg-surface-elevated transition-colors">
          <Mail className="h-4 w-4 text-primary" /> hello@devforge.dev
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm hover:bg-surface-elevated transition-colors">
          <Github className="h-4 w-4 text-primary" /> GitHub
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm hover:bg-surface-elevated transition-colors">
          <Twitter className="h-4 w-4 text-primary" /> Twitter
        </a>
      </div>
    </ContentPage>
  ),
});
