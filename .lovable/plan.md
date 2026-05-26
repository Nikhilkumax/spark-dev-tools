## Goal

Rebuild DevForge as a **tools-only** site that visually and structurally mirrors **Racira PDF** and **Racira Image Studio**: minimal, light-first SaaS look, red primary accent, a single tool-first homepage grouping cards by category, and a simple tool page template. Delete every non-tool route, section, and feature.

## What gets removed

Routes deleted entirely:
- `blog.index.tsx`, `blog.$slug.tsx`
- `docs.index.tsx`, `docs.$slug.tsx`
- `about.tsx`, `contact.tsx`, `privacy.tsx`, `terms.tsx`
- `favorites.tsx`, `recent.tsx`
- `search.tsx`
- `tools.index.tsx`, `tools.$category.tsx` (home already lists everything by category)

Components/hooks deleted:
- `command-palette.tsx`, `use-command-palette.tsx`
- `use-favorites.tsx`, `use-recent-tools.tsx`
- `hero-section.tsx` (replaced by simple Racira hero), `content-page.tsx`, `empty-state.tsx`, `section-heading.tsx` (no longer needed), `category-card.tsx`

Homepage sections removed: hero search box + CTAs, trending tools, AI strip, JSON featured collection, blog preview, FAQ, newsletter.

## What's left

Routes:
```
__root.tsx                  shell: Header + <Outlet /> + Footer + theme provider
index.tsx                   tool-first homepage (hero + categorized grid)
tools.$category.$tool.tsx   simple tool page (kept, simplified)
```

Components:
```
site-navbar.tsx  → Header  (logo + Tools dropdown + theme toggle)
site-footer.tsx  → Footer  (simple links row)
tool-card.tsx    → ToolCard (Racira shape: icon tile + name + description)
tool-page-layout.tsx → simplified tool page shell
breadcrumbs.tsx  → kept for tool pages
```

Hooks: only `use-theme.tsx`.

## Design system rewrite (`src/styles.css`)

Switch from dark-by-default cyan to Racira's **light-first, red-primary** palette, keeping oklch:

- Light (default):
  - `--background: oklch(0.985 0 0)`
  - `--foreground: oklch(0.21 0.03 260)`
  - `--card: oklch(1 0 0)`, white
  - `--primary: oklch(0.58 0.21 25)` (red)
  - `--primary-foreground: oklch(1 0 0)`
  - `--muted: oklch(0.97 0.005 260)`, `--muted-foreground: oklch(0.5 0.02 260)`
  - `--border: oklch(0.92 0.005 260)`
  - `--radius: 0.75rem`
  - `--card-shadow`, `--card-shadow-hover`, `--header-shadow` matching Racira
- Dark mode (`.dark` class):
  - `--background: oklch(0.16 0.02 260)`
  - `--card: oklch(0.22 0.02 260)`
  - `--primary: oklch(0.62 0.22 25)` (red, slightly brighter)
  - Borders/muted shifted accordingly
- Font: Inter only.
- Remove cyan gradients, glow, grid backgrounds, `text-gradient`, `bg-grid`, `hover-glow` utility (keep `card-hover` lift).

`useTheme` default flips to `light`; root element class toggled accordingly.

## Tool data (`src/data/tools.ts`)

Rewrite into Racira shape — flat `tools: Tool[]` plus derived `categories: string[]`:

```ts
export interface Tool {
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  category: string;
}
```

Keep current tool inventory but flatten (drop the nested category object structure), with categories like: Basic, JSON & Data, Text, Encoding, Image, CSS, HTML, JavaScript, Regex, Security, Network, Converters, Markdown, Color. ~60–80 tools total. Each tool gets a Lucide icon, short one-line description, and slug used as both URL and ID.

Tool URL becomes `/tools/$category/$tool` (kept) — `category` derived from the tool's category, slugified.

## Pages

**Header** (`site-navbar.tsx` simplified to match Racira):
- Sticky, blurred, `--header-shadow`.
- Left: logo "DevForge" with red brand word.
- Right: "Tools" dropdown (categorized 2-col grid of every tool, max-h scroll), theme toggle. No search, no command palette, no mobile mega-menu — dropdown closes on outside click and on link click; on mobile, dropdown opens full-width below the header.

**Home** (`index.tsx`):
- Hero: centered `<h1>` "All Developer Tools You Need — Fast, Simple & Free", muted subhead, no CTAs, no search.
- For each category: `<h2>` + 4-col responsive grid of `ToolCard`s (1 / 2 / 4 cols at sm / lg).
- No other sections.

**ToolCard**: Racira shape — `Link` to the tool URL, rounded-2xl bordered card, `bg-card`, `--card-shadow` baseline with `card-hover` lift on hover; left a red-tinted square icon tile (`bg-primary/10 text-primary`), right name + description. Optional "Coming Soon" pill (we'll keep the badge mechanism but mark all tools available by default).

**Tool page** (`tools.$category.$tool.tsx` + `tool-page-layout.tsx` simplified):
- Breadcrumbs (Home › Category › Tool).
- Header block: icon tile + h1 + description.
- Single placeholder workspace card: upload/textarea zone + result area + action buttons (Copy, Clear, Download) — kept as a non-functional shell.
- "Related tools" row below: 4 cards from the same category.
- No favorites toggle, no shortcuts list, no tabs.

**Footer**: one row, copyright + plain text links (kept lightweight, no newsletter/social columns).

**SEO**: every kept route keeps its `head()` with route-specific title/description and canonical. JSON-LD `BreadcrumbList` stays on tool pages. Root `head()` keeps site-wide title/og defaults but no `og:image`.

## Responsiveness

- Container `max-w-[1200px]` to match Racira.
- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` with `gap-4 / gap-5`.
- Header height `h-14`, dropdown becomes a full-width sheet under header on `sm` and below.
- Tool page workspace stacks vertically below `md`.

## Routing cleanup

After deleting route files, `src/routeTree.gen.ts` regenerates automatically on dev/build. Any remaining `<Link to="...">` to deleted routes is removed in the same pass (the only callers are inside the deleted homepage sections and navbar, both being rewritten).

## Out of scope

- No actual tool processing logic — tool pages stay as polished UI shells.
- No backend, auth, persistence, analytics.
- No search page; the header dropdown is the only navigation aid.
- No new copy for marketing pages (because there are none).

## Deliverable

A focused, Racira-matched tools site: one homepage that lists every tool grouped by category, a dropdown to jump straight to any tool, a clean tool page template, light/dark toggle — and nothing else.
