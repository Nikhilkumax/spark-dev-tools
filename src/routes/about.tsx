import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DevForge" },
      { name: "description", content: "DevForge is a browser-based developer tools platform built for speed and privacy." },
      { property: "og:title", content: "About — DevForge" },
      { property: "og:description", content: "About the DevForge developer tools platform." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <ContentPage
      crumbs={[{ label: "About" }]}
      title="About DevForge"
      description="A premium browser-based developer tools platform built for speed, privacy, and craft."
    >
      <p>
        DevForge is a growing collection of 100+ developer tools that run entirely in your browser.
        We believe everyday utilities — formatting, encoding, testing — should be fast, free, and respect your data.
      </p>
      <p>
        Every tool is built with reusable components and a consistent design system, so you can move
        from one utility to the next without losing context. No installs. No accounts. No tracking.
      </p>
      <h2 className="text-xl font-semibold text-foreground">Why DevForge</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>100+ tools across 20 categories</li>
        <li>Fully client-side processing wherever possible</li>
        <li>Dark mode by default, with optional light mode</li>
        <li>Keyboard-first with global command palette (⌘K)</li>
        <li>Mobile-optimized for tools on the go</li>
      </ul>
    </ContentPage>
  ),
});
