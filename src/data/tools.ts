import {
  Braces, Type, Lock, Image as ImageIcon, Palette, Code2, FileCode2,
  Regex, Network, Search, Shield, Wrench, Globe, ArrowLeftRight,
  AlignLeft, Sparkles, Database, FileText, Wand2, Pipette,
  type LucideIcon,
} from "lucide-react";

export type Tool = {
  slug: string;
  name: string;
  description: string;
  tags?: string[];
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  accent: string; // tailwind text color class for accent dot
  tools: Tool[];
};

export const categories: Category[] = [
  {
    slug: "json",
    name: "JSON Tools",
    description: "Format, validate, convert, and inspect JSON payloads.",
    icon: Braces,
    accent: "text-cyan-400",
    tools: [
      { slug: "json-formatter", name: "JSON Formatter", description: "Pretty print and beautify JSON." },
      { slug: "json-validator", name: "JSON Validator", description: "Validate JSON syntax instantly." },
      { slug: "json-to-yaml", name: "JSON to YAML", description: "Convert JSON documents into YAML." },
      { slug: "json-to-csv", name: "JSON to CSV", description: "Flatten JSON arrays into CSV." },
      { slug: "json-diff", name: "JSON Diff", description: "Compare two JSON payloads." },
      { slug: "json-minifier", name: "JSON Minifier", description: "Strip whitespace from JSON." },
    ],
  },
  {
    slug: "text",
    name: "Text Tools",
    description: "Manipulate, transform, and analyze plain text.",
    icon: Type,
    accent: "text-violet-400",
    tools: [
      { slug: "case-converter", name: "Case Converter", description: "Switch between camelCase, snake_case, kebab-case." },
      { slug: "word-counter", name: "Word Counter", description: "Count words, characters, sentences." },
      { slug: "lorem-ipsum", name: "Lorem Ipsum Generator", description: "Generate placeholder text." },
      { slug: "text-diff", name: "Text Diff Checker", description: "Compare two text blocks side by side." },
      { slug: "remove-duplicates", name: "Remove Duplicate Lines", description: "Deduplicate lines fast." },
      { slug: "sort-lines", name: "Sort Lines", description: "Sort text alphabetically or numerically." },
    ],
  },
  {
    slug: "encoding",
    name: "Encoding Tools",
    description: "Encode and decode data across common formats.",
    icon: Lock,
    accent: "text-emerald-400",
    tools: [
      { slug: "base64", name: "Base64 Encoder / Decoder", description: "Encode and decode Base64." },
      { slug: "url-encoder", name: "URL Encoder / Decoder", description: "Percent encode URL strings." },
      { slug: "html-encoder", name: "HTML Entity Encoder", description: "Convert special characters." },
      { slug: "jwt-decoder", name: "JWT Decoder", description: "Inspect JWT header and payload." },
      { slug: "hex-encoder", name: "Hex Encoder / Decoder", description: "Convert text to and from hex." },
      { slug: "binary-encoder", name: "Binary Encoder / Decoder", description: "Convert text to binary." },
    ],
  },
  {
    slug: "image",
    name: "Image Tools",
    description: "Compress, convert, and edit images in your browser.",
    icon: ImageIcon,
    accent: "text-amber-400",
    tools: [
      { slug: "image-compressor", name: "Image Compressor", description: "Reduce image file size." },
      { slug: "image-converter", name: "Image Converter", description: "Convert between PNG, JPG, WebP." },
      { slug: "image-resizer", name: "Image Resizer", description: "Resize images to any dimensions." },
      { slug: "image-to-base64", name: "Image to Base64", description: "Encode images as Base64." },
      { slug: "favicon-generator", name: "Favicon Generator", description: "Generate favicons for any site." },
    ],
  },
  {
    slug: "css",
    name: "CSS Tools",
    description: "Format, minify, and craft CSS visually.",
    icon: Palette,
    accent: "text-pink-400",
    tools: [
      { slug: "css-formatter", name: "CSS Formatter", description: "Beautify and indent CSS." },
      { slug: "css-minifier", name: "CSS Minifier", description: "Compress CSS for production." },
      { slug: "box-shadow-generator", name: "Box Shadow Generator", description: "Design box shadows visually." },
      { slug: "gradient-generator", name: "Gradient Generator", description: "Create CSS gradients." },
      { slug: "flexbox-playground", name: "Flexbox Playground", description: "Visualize flexbox layouts." },
    ],
  },
  {
    slug: "html",
    name: "HTML Tools",
    description: "Format, preview, and clean up HTML markup.",
    icon: FileCode2,
    accent: "text-orange-400",
    tools: [
      { slug: "html-formatter", name: "HTML Formatter", description: "Beautify HTML markup." },
      { slug: "html-minifier", name: "HTML Minifier", description: "Minify HTML for production." },
      { slug: "html-preview", name: "HTML Preview", description: "Preview rendered HTML live." },
      { slug: "html-to-jsx", name: "HTML to JSX", description: "Convert HTML to React JSX." },
    ],
  },
  {
    slug: "javascript",
    name: "JavaScript Tools",
    description: "Format, beautify, and inspect JavaScript.",
    icon: Code2,
    accent: "text-yellow-400",
    tools: [
      { slug: "js-beautifier", name: "JavaScript Beautifier", description: "Format and indent JS." },
      { slug: "js-minifier", name: "JavaScript Minifier", description: "Minify JS for production." },
      { slug: "js-obfuscator", name: "JS Obfuscator", description: "Obfuscate JavaScript code." },
      { slug: "es6-to-es5", name: "ES6 to ES5 Converter", description: "Transpile modern JavaScript." },
    ],
  },
  {
    slug: "regex",
    name: "Regex Tools",
    description: "Build, test, and explain regular expressions.",
    icon: Regex,
    accent: "text-fuchsia-400",
    tools: [
      { slug: "regex-tester", name: "Regex Tester", description: "Test regular expressions live." },
      { slug: "regex-generator", name: "Regex Generator", description: "Generate regex from examples." },
      { slug: "regex-cheatsheet", name: "Regex Cheatsheet", description: "Quick reference for regex syntax." },
    ],
  },
  {
    slug: "api",
    name: "API Tools",
    description: "Test, mock, and inspect HTTP APIs.",
    icon: Network,
    accent: "text-sky-400",
    tools: [
      { slug: "api-tester", name: "API Request Tester", description: "Send HTTP requests in browser." },
      { slug: "http-status-checker", name: "HTTP Status Checker", description: "Check status codes for any URL." },
      { slug: "webhook-tester", name: "Webhook Tester", description: "Inspect webhook payloads." },
      { slug: "graphql-playground", name: "GraphQL Playground", description: "Explore GraphQL schemas." },
    ],
  },
  {
    slug: "seo",
    name: "SEO Tools",
    description: "Audit and optimize sites for search engines.",
    icon: Search,
    accent: "text-lime-400",
    tools: [
      { slug: "meta-tag-generator", name: "Meta Tag Generator", description: "Generate OG and meta tags." },
      { slug: "sitemap-generator", name: "Sitemap Generator", description: "Build XML sitemaps." },
      { slug: "robots-txt-generator", name: "Robots.txt Generator", description: "Configure crawler rules." },
      { slug: "serp-preview", name: "SERP Preview", description: "Preview Google search snippets." },
    ],
  },
  {
    slug: "security",
    name: "Security Tools",
    description: "Hashing, encryption, and security checks.",
    icon: Shield,
    accent: "text-red-400",
    tools: [
      { slug: "hash-generator", name: "Hash Generator", description: "Generate MD5, SHA-1, SHA-256." },
      { slug: "password-generator", name: "Password Generator", description: "Generate strong passwords." },
      { slug: "bcrypt-generator", name: "Bcrypt Generator", description: "Hash strings with bcrypt." },
      { slug: "ssl-checker", name: "SSL Checker", description: "Inspect SSL certificates." },
    ],
  },
  {
    slug: "devops",
    name: "DevOps Tools",
    description: "Generators and helpers for infrastructure.",
    icon: Wrench,
    accent: "text-teal-400",
    tools: [
      { slug: "dockerfile-generator", name: "Dockerfile Generator", description: "Scaffold Dockerfiles." },
      { slug: "yaml-validator", name: "YAML Validator", description: "Validate YAML syntax." },
      { slug: "env-formatter", name: "ENV Formatter", description: "Format .env files." },
      { slug: "cron-builder", name: "Cron Builder", description: "Build and explain cron expressions." },
    ],
  },
  {
    slug: "network",
    name: "Network Tools",
    description: "DNS, IP, and network utilities.",
    icon: Globe,
    accent: "text-indigo-400",
    tools: [
      { slug: "ip-lookup", name: "IP Lookup", description: "Get IP geolocation data." },
      { slug: "dns-lookup", name: "DNS Lookup", description: "Query DNS records." },
      { slug: "ping-tool", name: "Ping Tool", description: "Ping any URL or host." },
      { slug: "port-checker", name: "Port Checker", description: "Check if a port is open." },
    ],
  },
  {
    slug: "converter",
    name: "Converter Tools",
    description: "Convert between data formats and units.",
    icon: ArrowLeftRight,
    accent: "text-rose-400",
    tools: [
      { slug: "csv-to-json", name: "CSV to JSON", description: "Convert CSV to JSON." },
      { slug: "yaml-to-json", name: "YAML to JSON", description: "Convert YAML to JSON." },
      { slug: "xml-to-json", name: "XML to JSON", description: "Convert XML to JSON." },
      { slug: "timestamp-converter", name: "Timestamp Converter", description: "Convert Unix timestamps." },
      { slug: "unit-converter", name: "Unit Converter", description: "Convert units of measurement." },
    ],
  },
  {
    slug: "formatting",
    name: "Formatting Tools",
    description: "Beautify code and documents.",
    icon: AlignLeft,
    accent: "text-blue-400",
    tools: [
      { slug: "sql-formatter", name: "SQL Formatter", description: "Beautify SQL queries." },
      { slug: "xml-formatter", name: "XML Formatter", description: "Format XML documents." },
      { slug: "graphql-formatter", name: "GraphQL Formatter", description: "Format GraphQL queries." },
    ],
  },
  {
    slug: "ai",
    name: "AI Developer Utilities",
    description: "AI-powered helpers for everyday dev tasks.",
    icon: Sparkles,
    accent: "text-purple-400",
    tools: [
      { slug: "code-explainer", name: "AI Code Explainer", description: "Explain any snippet in plain English." },
      { slug: "regex-from-text", name: "AI Regex Generator", description: "Describe a pattern, get a regex." },
      { slug: "sql-from-text", name: "AI SQL Generator", description: "Describe a query, get SQL." },
      { slug: "commit-message", name: "AI Commit Message", description: "Generate commit messages from diffs." },
    ],
  },
  {
    slug: "database",
    name: "Database Tools",
    description: "SQL helpers, schema design, and more.",
    icon: Database,
    accent: "text-emerald-300",
    tools: [
      { slug: "sql-beautifier", name: "SQL Beautifier", description: "Format SQL queries." },
      { slug: "mock-data", name: "Mock Data Generator", description: "Generate fake JSON / SQL data." },
      { slug: "uuid-generator", name: "UUID Generator", description: "Generate UUIDs (v4, v7)." },
      { slug: "schema-visualizer", name: "Schema Visualizer", description: "Visualize SQL schemas." },
    ],
  },
  {
    slug: "markdown",
    name: "Markdown Tools",
    description: "Write, preview, and convert markdown.",
    icon: FileText,
    accent: "text-stone-300",
    tools: [
      { slug: "markdown-preview", name: "Markdown Previewer", description: "Live preview markdown." },
      { slug: "markdown-to-html", name: "Markdown to HTML", description: "Convert markdown to HTML." },
      { slug: "table-generator", name: "Markdown Table Generator", description: "Build markdown tables." },
    ],
  },
  {
    slug: "beautifiers",
    name: "Code Beautifiers",
    description: "Reusable beautifiers for any language.",
    icon: Wand2,
    accent: "text-cyan-300",
    tools: [
      { slug: "code-formatter", name: "Universal Code Formatter", description: "Beautify any code snippet." },
      { slug: "code-minifier", name: "Universal Code Minifier", description: "Minify code in any language." },
    ],
  },
  {
    slug: "color",
    name: "Color Tools",
    description: "Pickers, converters, and palette generators.",
    icon: Pipette,
    accent: "text-fuchsia-300",
    tools: [
      { slug: "color-picker", name: "Color Picker", description: "Pick colors visually." },
      { slug: "hex-to-rgb", name: "HEX to RGB", description: "Convert between color formats." },
      { slug: "palette-generator", name: "Palette Generator", description: "Generate harmonious palettes." },
      { slug: "contrast-checker", name: "Contrast Checker", description: "Check WCAG contrast ratios." },
    ],
  },
];

export const allTools = categories.flatMap((c) =>
  c.tools.map((t) => ({ ...t, category: c.slug, categoryName: c.name }))
);

export type ToolWithCategory = (typeof allTools)[number];

export function findCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function findTool(categorySlug: string, toolSlug: string) {
  const cat = findCategory(categorySlug);
  if (!cat) return null;
  const tool = cat.tools.find((t) => t.slug === toolSlug);
  if (!tool) return null;
  return { tool, category: cat };
}

export function searchTools(query: string): ToolWithCategory[] {
  const q = query.trim().toLowerCase();
  if (!q) return allTools;
  return allTools.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.categoryName.toLowerCase().includes(q) ||
      t.slug.includes(q)
  );
}

// Curated trending picks
export const trendingSlugs = [
  "json/json-formatter",
  "encoding/jwt-decoder",
  "encoding/base64",
  "regex/regex-tester",
  "security/hash-generator",
  "database/uuid-generator",
  "text/text-diff",
  "image/image-compressor",
];

export const trendingTools = trendingSlugs
  .map((s) => {
    const [c, t] = s.split("/");
    return allTools.find((tool) => tool.category === c && tool.slug === t);
  })
  .filter(Boolean) as ToolWithCategory[];
