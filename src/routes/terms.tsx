import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — DevForge" },
      { name: "description", content: "DevForge's terms of service." },
      { property: "og:title", content: "Terms of Service — DevForge" },
      { property: "og:description", content: "Terms governing the use of DevForge." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <ContentPage crumbs={[{ label: "Terms" }]} title="Terms of Service" description="Last updated: today.">
      <p>These terms are a placeholder. Replace with your own legal copy.</p>
      <h2 className="text-xl font-semibold text-foreground">Use of service</h2>
      <p>DevForge is provided as-is for personal and commercial use.</p>
      <h2 className="text-xl font-semibold text-foreground">No warranty</h2>
      <p>Results are provided without warranty. Verify critical outputs independently.</p>
    </ContentPage>
  ),
});
