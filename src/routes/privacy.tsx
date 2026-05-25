import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — DevForge" },
      { name: "description", content: "DevForge's privacy policy. We don't track you." },
      { property: "og:title", content: "Privacy Policy — DevForge" },
      { property: "og:description", content: "How DevForge handles your data." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <ContentPage crumbs={[{ label: "Privacy" }]} title="Privacy Policy" description="Last updated: today.">
      <p>This privacy policy is a placeholder. Replace with your own legal copy.</p>
      <h2 className="text-xl font-semibold text-foreground">Data we collect</h2>
      <p>DevForge runs tools client-side wherever possible. Your inputs stay in your browser.</p>
      <h2 className="text-xl font-semibold text-foreground">Cookies</h2>
      <p>We use localStorage to remember preferences like theme, favorites, and recently used tools.</p>
    </ContentPage>
  ),
});
