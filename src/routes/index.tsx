import { createFileRoute } from "@tanstack/react-router";
import { tools, categories } from "@/data/tools";
import { ToolCard } from "@/components/tool-card";
import { ToolSearch } from "@/components/tool-search";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DevForge — All Developer Tools You Need, Fast & Free" },
      {
        name: "description",
        content:
          "Format, encode, convert, test, and generate — every developer tool you need in one fast, free, browser-based platform.",
      },
      { property: "og:title", content: "DevForge — Developer Tools" },
      { property: "og:description", content: "All developer tools you need, in one place." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="py-12 sm:py-16 text-center">
        <div className="container-page max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            All Developer Tools You Need —{" "}
            <span className="text-primary">Fast, Simple & Free</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Format, encode, convert, test, and generate — every tool runs in your browser.
            No signup. No upload. No friction.
          </p>
          <div className="mt-8">
            <ToolSearch />
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-page">
          {categories.map((category) => (
            <div key={category} className="mb-10 last:mb-0">
              <h2 className="text-xl font-bold text-foreground mb-4">{category}</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5">
                {tools
                  .filter((t) => t.category === category)
                  .map((tool) => (
                    <ToolCard key={tool.slug} tool={tool} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
