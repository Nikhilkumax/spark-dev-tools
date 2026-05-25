## Goal

Build the full **shell** of a premium browser-based developer tools platform — every route, every layout, every reusable component, with placeholder/empty tool interfaces. No actual tool processing logic yet. Favorites & recently-used persisted in `localStorage`. Content pages (Blog, Docs, About, Contact, Privacy, Terms) ship as styled placeholder routes with proper SEO metadata.

## Stack note

The project is on **TanStack Start** (not Next.js). All requested capabilities map cleanly: file-based routing in `src/routes/`, per-route `head()` for SEO, SSR built-in, Tailwind v4, shadcn/ui, Lucide, Framer Motion.

## Design system

Tokens defined in `src/styles.css` (oklch):

- Background: deep charcoal `oklch(0.16 0.01 250)`
- Surface / card: `oklch(0.20 0.012 250)` with subtle border `oklch(1 0 0 / 8%)`
- Foreground: near-white `oklch(0.97 0.005 250)`
- Muted text: `oklch(0.65 0.02 250)`
- Accent (electric cyan): `oklch(0.78 0.16 210)` + glow variant
- Radius: `--radius: 1rem` (rounded-2xl default)
- Gradients: `--gradient-hero`, `--gradient-glow`, `--shadow-glow`
- Font: Inter via Google Fonts in `__root.tsx`
- Optional light mode via `.light` class + theme toggle (persists in localStorage)

Motion: Framer Motion for hero fade-in, card hover lift/glow, page transitions, command palette enter/exit, mobile menu slide.

## Route map (`src/routes/`)

```
__root.tsx                  → shell, navbar, footer, theme provider, command palette mount
index.tsx                   → Home
tools.index.tsx             → All tools / category grid
tools.$category.tsx         → Category page (lists tools in category)
tools.$category.$tool.tsx   → Individual tool page (generic template w/ split panel)
search.tsx                  → Search results (reads ?q=)
favorites.tsx               → Dashboard / pinned tools (localStorage)
recent.tsx                  → Recently used (localStorage)
docs.index.tsx              → Docs landing
docs.$slug.tsx              → Docs article (placeholder)
blog.index.tsx              → Blog listing
blog.$slug.tsx              → Blog post (placeholder)
about.tsx
contact.tsx
privacy.tsx
terms.tsx
```

Root `notFoundComponent` already exists → styled 404. Each route gets its own `head()` with title, description, og:title, og:description; leaves add canonical.

## Reusable components (`src/components/`)

**Layout:** `SiteNavbar`, `SiteFooter`, `MobileMenu`, `ThemeToggle`, `CommandPalette` (Ctrl/Cmd+K, uses shadcn `command`), `Breadcrumbs`, `PageHeader`.

**Tools UI:** `ToolCard`, `CategoryCard`, `ToolGrid`, `ToolPageLayout` (split input/output template), `ToolInputPanel`, `ToolOutputPanel`, `ToolActionBar` (copy/clear/download/share/favorite), `UploadZone`, `CodeEditorShell` (placeholder textarea styled like an editor), `RelatedToolsSidebar`, `KeyboardShortcutsList`.

**Content blocks:** `HeroSection` (with animated grid background + floating chips), `CategoryShowcase`, `FeatureGrid`, `FAQAccordion`, `NewsletterCTA`, `BlogPreviewGrid`, `SectionHeading`, `EmptyState`, `SkeletonCard`.

**Primitives:** copy-to-clipboard button w/ toast, share button, favorite/star toggle, gradient button variant.

## Data

`src/data/tools.ts` — single source of truth: 20 categories (JSON, Text, Encoding, Image, CSS, HTML, JavaScript, Regex, API, SEO, Security, DevOps, Network, Converter, Formatting, AI Dev, Database, Markdown, Code Beautifiers, Color) with icon, slug, description; each category lists ~5–10 tools with slug, name, description, tags. Drives navbar dropdown, category pages, tool pages, search, and command palette. Total ≈ 80–120 tool entries — every tool route resolves to the generic `ToolPageLayout` placeholder.

`src/hooks/`:
- `useFavorites` — localStorage-backed set of tool slugs
- `useRecentTools` — capped list of recently visited tool slugs
- `useTheme` — dark/light toggle
- `useCommandPalette` — open/close + global hotkey

## Pages — content sketch

- **Home:** hero (heading + sub + search + 2 CTAs + animated grid), trending tools row, all categories grid, AI tools strip, featured collections, blog preview (3 cards), FAQ accordion, newsletter CTA.
- **Category page:** breadcrumb, header w/ description, tool grid, related categories.
- **Tool page (template):** breadcrumb, title + description + action bar (copy URL / favorite / share), split panel placeholder (input left, output right, action buttons in middle on desktop / stacked on mobile), tabs for "How to use / Features / FAQ / Related", related tools sidebar on desktop.
- **Search:** input bound to `?q=`, filtered results from `tools.ts`, category chips for filtering, empty state.
- **Favorites / Recent:** grid of saved/visited tools or empty state with CTA back to all tools.
- **Docs / Blog / About / Contact / Privacy / Terms:** styled shells with realistic typography rhythm and a "Coming soon" / placeholder body, all SEO-tagged.

## Responsiveness

Mobile-first. Navbar collapses to hamburger + slide-in sheet. Tool split panel stacks vertically on mobile with sticky action bar at bottom. Touch targets ≥ 44px. Category grids: 1 col → 2 → 3 → 4 across breakpoints.

## SEO

- Per-route `head()` with unique title/description/og.
- JSON-LD `WebSite` on `__root.tsx`, `BreadcrumbList` on tool/category/blog/docs leaves.
- Semantic HTML (`<header> <nav> <main> <article> <footer>`), single H1 per page, alt text on all images.
- Relative canonicals (no domain set yet).

## Out of scope (explicit)

- No real tool processing logic (JSON formatting, base64, etc.) — pages render the layout shell only.
- No backend, no auth, no DB.
- No blog/docs MDX pipeline — placeholder routes only.
- No real og:image generation.

## Deliverables

A complete, navigable, beautiful shell where every link works, every route renders, theme toggles, command palette opens, favorites persist, and the design system is ready for individual tool logic to be dropped into the existing `ToolPageLayout` in follow-up turns.