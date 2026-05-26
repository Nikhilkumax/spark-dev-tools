import {
  Braces, Code2, FileCode2, FileJson, FileText, Type, Hash, AlignLeft,
  ArrowDownAZ, Eraser, Copy, ListOrdered, ScanText, Pilcrow,
  Lock, Unlock, KeyRound, ShieldCheck, Fingerprint, Binary,
  Image as ImageIcon, ImageDown, ImageUp, Crop, Palette, Pipette, Droplets,
  Regex, Wrench, Network, Globe, ServerCog, Database, Table2,
  ArrowLeftRight, Calendar, Clock, Ruler, Calculator,
  Paintbrush, Box, Layers, Sparkles, FormInput, FileSearch, FileDown,
  Wand2, FileCog, Brackets, Code, Diff, Search, ShieldHalf, Cookie,
  type LucideIcon,
} from "lucide-react";

export interface Tool {
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  category: string;
}

export const tools: Tool[] = [
  // JSON & Data
  { name: "JSON Formatter", slug: "json-formatter", description: "Pretty print and beautify JSON.", icon: Braces, category: "JSON & Data" },
  { name: "JSON Validator", slug: "json-validator", description: "Validate JSON syntax instantly.", icon: FileJson, category: "JSON & Data" },
  { name: "JSON Minifier", slug: "json-minifier", description: "Strip whitespace from JSON.", icon: Eraser, category: "JSON & Data" },
  { name: "JSON to YAML", slug: "json-to-yaml", description: "Convert JSON documents into YAML.", icon: ArrowLeftRight, category: "JSON & Data" },
  { name: "JSON to CSV", slug: "json-to-csv", description: "Flatten JSON arrays into CSV.", icon: Table2, category: "JSON & Data" },
  { name: "JSON Diff", slug: "json-diff", description: "Compare two JSON payloads.", icon: Diff, category: "JSON & Data" },
  { name: "YAML to JSON", slug: "yaml-to-json", description: "Convert YAML files into JSON.", icon: ArrowLeftRight, category: "JSON & Data" },
  { name: "CSV to JSON", slug: "csv-to-json", description: "Convert CSV rows into JSON.", icon: Table2, category: "JSON & Data" },
  { name: "XML to JSON", slug: "xml-to-json", description: "Convert XML markup into JSON.", icon: Brackets, category: "JSON & Data" },

  // Text
  { name: "Case Converter", slug: "case-converter", description: "Switch between camel, snake, kebab.", icon: Type, category: "Text" },
  { name: "Word Counter", slug: "word-counter", description: "Count words, characters, sentences.", icon: AlignLeft, category: "Text" },
  { name: "Lorem Ipsum Generator", slug: "lorem-ipsum", description: "Generate placeholder paragraphs.", icon: Pilcrow, category: "Text" },
  { name: "Text Diff Checker", slug: "text-diff", description: "Compare two text blocks side by side.", icon: Diff, category: "Text" },
  { name: "Remove Duplicate Lines", slug: "remove-duplicates", description: "Deduplicate lines fast.", icon: Copy, category: "Text" },
  { name: "Sort Lines", slug: "sort-lines", description: "Sort text alphabetically or numerically.", icon: ArrowDownAZ, category: "Text" },
  { name: "Line Counter", slug: "line-counter", description: "Count lines in any text block.", icon: ListOrdered, category: "Text" },
  { name: "Text Reverser", slug: "text-reverser", description: "Reverse characters, words, or lines.", icon: ScanText, category: "Text" },

  // Encoding
  { name: "Base64 Encoder / Decoder", slug: "base64", description: "Encode and decode Base64.", icon: Binary, category: "Encoding" },
  { name: "URL Encoder / Decoder", slug: "url-encoder", description: "Percent encode URL strings.", icon: Globe, category: "Encoding" },
  { name: "HTML Entity Encoder", slug: "html-encoder", description: "Convert special characters.", icon: Code, category: "Encoding" },
  { name: "JWT Decoder", slug: "jwt-decoder", description: "Inspect JWT header and payload.", icon: KeyRound, category: "Encoding" },
  { name: "Hex Encoder / Decoder", slug: "hex-encoder", description: "Convert text to and from hex.", icon: Hash, category: "Encoding" },
  { name: "Binary Encoder / Decoder", slug: "binary-encoder", description: "Convert text to binary.", icon: Binary, category: "Encoding" },

  // Security
  { name: "Hash Generator", slug: "hash-generator", description: "Generate MD5, SHA-1, SHA-256.", icon: Fingerprint, category: "Security" },
  { name: "Password Generator", slug: "password-generator", description: "Generate strong random passwords.", icon: KeyRound, category: "Security" },
  { name: "Bcrypt Generator", slug: "bcrypt-generator", description: "Hash strings with bcrypt.", icon: Lock, category: "Security" },
  { name: "UUID Generator", slug: "uuid-generator", description: "Generate UUIDs (v4, v7).", icon: ShieldCheck, category: "Security" },
  { name: "SSL Checker", slug: "ssl-checker", description: "Inspect SSL certificates.", icon: ShieldHalf, category: "Security" },
  { name: "Unlock Token", slug: "decrypt-token", description: "Decode and verify common tokens.", icon: Unlock, category: "Security" },

  // Image
  { name: "Image Compressor", slug: "image-compressor", description: "Reduce image file size.", icon: ImageDown, category: "Image" },
  { name: "Image Converter", slug: "image-converter", description: "Convert between PNG, JPG, WebP.", icon: ArrowLeftRight, category: "Image" },
  { name: "Image Resizer", slug: "image-resizer", description: "Resize images to any dimensions.", icon: Crop, category: "Image" },
  { name: "Image to Base64", slug: "image-to-base64", description: "Encode images as Base64.", icon: ImageUp, category: "Image" },
  { name: "Favicon Generator", slug: "favicon-generator", description: "Generate favicons for any site.", icon: ImageIcon, category: "Image" },

  // CSS
  { name: "CSS Formatter", slug: "css-formatter", description: "Beautify and indent CSS.", icon: Paintbrush, category: "CSS" },
  { name: "CSS Minifier", slug: "css-minifier", description: "Compress CSS for production.", icon: Eraser, category: "CSS" },
  { name: "Box Shadow Generator", slug: "box-shadow-generator", description: "Design box shadows visually.", icon: Box, category: "CSS" },
  { name: "Gradient Generator", slug: "gradient-generator", description: "Create CSS gradients.", icon: Layers, category: "CSS" },
  { name: "Flexbox Playground", slug: "flexbox-playground", description: "Visualize flexbox layouts.", icon: Layers, category: "CSS" },

  // HTML
  { name: "HTML Formatter", slug: "html-formatter", description: "Beautify HTML markup.", icon: FileCode2, category: "HTML" },
  { name: "HTML Minifier", slug: "html-minifier", description: "Minify HTML for production.", icon: Eraser, category: "HTML" },
  { name: "HTML Preview", slug: "html-preview", description: "Preview rendered HTML live.", icon: FileSearch, category: "HTML" },
  { name: "HTML to JSX", slug: "html-to-jsx", description: "Convert HTML to React JSX.", icon: Code, category: "HTML" },

  // JavaScript
  { name: "JavaScript Beautifier", slug: "js-beautifier", description: "Format and indent JS.", icon: Code2, category: "JavaScript" },
  { name: "JavaScript Minifier", slug: "js-minifier", description: "Minify JS for production.", icon: Eraser, category: "JavaScript" },
  { name: "JS Obfuscator", slug: "js-obfuscator", description: "Obfuscate JavaScript code.", icon: FileCog, category: "JavaScript" },
  { name: "ES6 to ES5", slug: "es6-to-es5", description: "Transpile modern JavaScript.", icon: ArrowLeftRight, category: "JavaScript" },

  // Regex
  { name: "Regex Tester", slug: "regex-tester", description: "Test regular expressions live.", icon: Regex, category: "Regex" },
  { name: "Regex Generator", slug: "regex-generator", description: "Generate regex from examples.", icon: Wand2, category: "Regex" },
  { name: "Regex Cheatsheet", slug: "regex-cheatsheet", description: "Quick reference for regex syntax.", icon: FileText, category: "Regex" },

  // Network
  { name: "IP Lookup", slug: "ip-lookup", description: "Get IP geolocation data.", icon: Globe, category: "Network" },
  { name: "DNS Lookup", slug: "dns-lookup", description: "Query DNS records.", icon: Network, category: "Network" },
  { name: "HTTP Status Checker", slug: "http-status-checker", description: "Check status codes for any URL.", icon: ServerCog, category: "Network" },
  { name: "Webhook Tester", slug: "webhook-tester", description: "Inspect webhook payloads.", icon: ServerCog, category: "Network" },
  { name: "Port Checker", slug: "port-checker", description: "Check if a port is open.", icon: Network, category: "Network" },
  { name: "User Agent Parser", slug: "user-agent-parser", description: "Parse browser user agents.", icon: Search, category: "Network" },

  // Converters
  { name: "Timestamp Converter", slug: "timestamp-converter", description: "Convert Unix timestamps.", icon: Clock, category: "Converters" },
  { name: "Unit Converter", slug: "unit-converter", description: "Convert units of measurement.", icon: Ruler, category: "Converters" },
  { name: "Number Base Converter", slug: "number-base", description: "Convert between binary, hex, decimal.", icon: Calculator, category: "Converters" },
  { name: "Date Format Converter", slug: "date-converter", description: "Reformat dates between standards.", icon: Calendar, category: "Converters" },
  { name: "Cron Expression Builder", slug: "cron-builder", description: "Build and explain cron expressions.", icon: Clock, category: "Converters" },

  // Markdown
  { name: "Markdown Previewer", slug: "markdown-preview", description: "Live preview markdown.", icon: FileText, category: "Markdown" },
  { name: "Markdown to HTML", slug: "markdown-to-html", description: "Convert markdown to HTML.", icon: ArrowLeftRight, category: "Markdown" },
  { name: "Markdown Table Generator", slug: "markdown-table", description: "Build markdown tables.", icon: Table2, category: "Markdown" },

  // Color
  { name: "Color Picker", slug: "color-picker", description: "Pick colors visually.", icon: Pipette, category: "Color" },
  { name: "HEX to RGB", slug: "hex-to-rgb", description: "Convert between color formats.", icon: ArrowLeftRight, category: "Color" },
  { name: "Palette Generator", slug: "palette-generator", description: "Generate harmonious palettes.", icon: Palette, category: "Color" },
  { name: "Contrast Checker", slug: "contrast-checker", description: "Check WCAG contrast ratios.", icon: Droplets, category: "Color" },

  // AI Utilities
  { name: "AI Code Explainer", slug: "ai-code-explainer", description: "Explain any snippet in plain English.", icon: Sparkles, category: "AI Utilities" },
  { name: "AI Regex Generator", slug: "ai-regex-generator", description: "Describe a pattern, get a regex.", icon: Sparkles, category: "AI Utilities" },
  { name: "AI SQL Generator", slug: "ai-sql-generator", description: "Describe a query, get SQL.", icon: Sparkles, category: "AI Utilities" },
  { name: "AI Commit Message", slug: "ai-commit-message", description: "Generate commit messages from diffs.", icon: Sparkles, category: "AI Utilities" },

  // Database
  { name: "SQL Formatter", slug: "sql-formatter", description: "Beautify SQL queries.", icon: Database, category: "Database" },
  { name: "Mock Data Generator", slug: "mock-data", description: "Generate fake JSON / SQL data.", icon: Database, category: "Database" },
  { name: "Schema Visualizer", slug: "schema-visualizer", description: "Visualize SQL schemas.", icon: Database, category: "Database" },

  // Web Utilities
  { name: "Meta Tag Generator", slug: "meta-tag-generator", description: "Generate OG and meta tags.", icon: FileText, category: "Web Utilities" },
  { name: "Sitemap Generator", slug: "sitemap-generator", description: "Build XML sitemaps.", icon: FileDown, category: "Web Utilities" },
  { name: "Robots.txt Generator", slug: "robots-txt-generator", description: "Configure crawler rules.", icon: FileText, category: "Web Utilities" },
  { name: "Cookie Inspector", slug: "cookie-inspector", description: "Inspect and decode cookies.", icon: Cookie, category: "Web Utilities" },
  { name: "Form Schema Builder", slug: "form-schema-builder", description: "Generate form JSON schemas.", icon: FormInput, category: "Web Utilities" },
];

export const categories: string[] = Array.from(new Set(tools.map((t) => t.category)));

export function categorySlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function categoryFromSlug(slug: string): string | undefined {
  return categories.find((c) => categorySlug(c) === slug);
}

export function findTool(catSlug: string, toolSlug: string) {
  const categoryName = categoryFromSlug(catSlug);
  if (!categoryName) return null;
  const tool = tools.find((t) => t.category === categoryName && t.slug === toolSlug);
  if (!tool) return null;
  return { tool, categoryName };
}
