import {
  Braces, Code2, FileCode2, FileJson, FileText, Type, Hash, AlignLeft,
  ArrowDownAZ, Eraser, Copy, ListOrdered, ScanText, Pilcrow,
  Lock, Unlock, KeyRound, ShieldCheck, Fingerprint, Binary,
  Image as ImageIcon, ImageDown, ImageUp, Crop, Palette, Pipette, Droplets,
  Regex, Wrench, Network, Globe, ServerCog, Database, Table2,
  ArrowLeftRight, Calendar, Clock, Ruler, Calculator,
  Paintbrush, Box, Layers, Sparkles, FormInput, FileSearch, FileDown,
  Wand2, FileCog, Brackets, Code, Diff, Search, ShieldHalf, Cookie,
  ListTree, Replace, Indent, Link2, QrCode, GitBranch, Tag, Eye,
  Gauge, Accessibility, FileSliders, Terminal, Move3d, Shuffle,
  Percent, Dices, CaseSensitive, CaseLower, CaseUpper, Quote, Scissors,
  Keyboard, Mic, Volume2, Music, Coins, Banknote, Hourglass, Timer,
  AlarmClock, CalendarClock, MapPin, Compass, Languages, BookOpen,
  ListChecks, CheckSquare, Equal, Sigma, Pi, Variable, Asterisk,
  AtSign, Mail, Phone, CreditCard, Barcode, Receipt, Percent as PercentIcon,
  Smartphone, Monitor, Maximize, Minimize, RotateCw, FlipHorizontal,
  Sun, Moon, Contrast, Thermometer, Zap, Activity, BarChart3, PieChart,
  Hash as HashIcon, Bookmark, Highlighter, PaintBucket, Brush,
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

  // === New additions ===

  // JSON & Data
  { name: "JSON Tree Viewer", slug: "json-tree-viewer", description: "Expandable JSON inspector.", icon: ListTree, category: "JSON & Data" },
  { name: "XML Formatter", slug: "xml-formatter", description: "Beautify and structure XML documents.", icon: FileCode2, category: "JSON & Data" },
  { name: "XML Validator", slug: "xml-validator", description: "Validate XML syntax and structure.", icon: ShieldCheck, category: "JSON & Data" },
  { name: "YAML Validator", slug: "yaml-validator", description: "Validate YAML files instantly.", icon: ShieldCheck, category: "JSON & Data" },
  { name: "CSV Viewer", slug: "csv-viewer", description: "View CSV files in table format.", icon: Table2, category: "JSON & Data" },
  { name: "CSV Formatter", slug: "csv-formatter", description: "Clean and format CSV data.", icon: Table2, category: "JSON & Data" },
  { name: "JSON Escape / Unescape", slug: "json-escape", description: "Escape and unescape JSON strings.", icon: Code, category: "JSON & Data" },

  // Text
  { name: "Slug Generator", slug: "slug-generator", description: "Generate SEO-friendly URL slugs.", icon: Link2, category: "Text" },
  { name: "Reading Time Calculator", slug: "reading-time", description: "Estimate reading time for content.", icon: Clock, category: "Text" },
  { name: "Find & Replace", slug: "find-replace", description: "Large-scale text replacement.", icon: Replace, category: "Text" },
  { name: "Remove HTML Tags", slug: "remove-html-tags", description: "Strip HTML tags from text.", icon: Eraser, category: "Text" },
  { name: "Tab / Space Converter", slug: "tab-space-converter", description: "Convert between tabs and spaces.", icon: Indent, category: "Text" },

  // Encoding
  { name: "Unicode Converter", slug: "unicode-converter", description: "Convert Unicode characters and escapes.", icon: Type, category: "Encoding" },
  { name: "UTF-8 Encoder / Decoder", slug: "utf8-encoder", description: "Encode and decode UTF-8.", icon: Binary, category: "Encoding" },
  { name: "URL Parser", slug: "url-parser", description: "Break URLs into structured parts.", icon: Link2, category: "Encoding" },
  { name: "HTML Escape / Unescape", slug: "html-escape", description: "Escape and unescape HTML entities.", icon: Code, category: "Encoding" },

  // Security
  { name: "Password Strength Checker", slug: "password-strength", description: "Validate password strength.", icon: ShieldCheck, category: "Security" },
  { name: "JWT Expiry Checker", slug: "jwt-expiry", description: "Inspect JWT expiration instantly.", icon: Clock, category: "Security" },
  { name: "Random API Key Generator", slug: "api-key-generator", description: "Generate development keys and tokens.", icon: KeyRound, category: "Security" },
  { name: "SHA-512 Generator", slug: "sha512-generator", description: "Generate SHA-512 hashes.", icon: Fingerprint, category: "Security" },

  // Image
  { name: "SVG Viewer", slug: "svg-viewer", description: "Preview SVG files directly.", icon: Eye, category: "Image" },
  { name: "SVG Minifier", slug: "svg-minifier", description: "Optimize SVG code size.", icon: Eraser, category: "Image" },
  { name: "SVG to JSX", slug: "svg-to-jsx", description: "Convert SVG markup into React JSX.", icon: Code, category: "Image" },
  { name: "SVG Previewer", slug: "svg-previewer", description: "Live SVG rendering playground.", icon: FileSearch, category: "Image" },
  { name: "EXIF Viewer", slug: "exif-viewer", description: "Inspect image metadata.", icon: FileSearch, category: "Image" },
  { name: "Image Metadata Remover", slug: "image-metadata-remover", description: "Strip metadata for privacy.", icon: Eraser, category: "Image" },

  // CSS
  { name: "CSS Grid Generator", slug: "css-grid-generator", description: "Build CSS grid layouts visually.", icon: Layers, category: "CSS" },
  { name: "CSS Animation Generator", slug: "css-animation-generator", description: "Create CSS animations visually.", icon: Sparkles, category: "CSS" },
  { name: "CSS Clamp Generator", slug: "css-clamp-generator", description: "Generate responsive clamp() values.", icon: Ruler, category: "CSS" },
  { name: "CSS Loader Generator", slug: "css-loader-generator", description: "Generate loading spinners.", icon: Sparkles, category: "CSS" },
  { name: "Tailwind Class Sorter", slug: "tailwind-class-sorter", description: "Sort Tailwind classes consistently.", icon: ArrowDownAZ, category: "CSS" },
  { name: "Border Radius Generator", slug: "border-radius-generator", description: "Visual border radius designer.", icon: Box, category: "CSS" },

  // HTML
  { name: "Open Graph Preview", slug: "open-graph-preview", description: "Preview social sharing metadata.", icon: Eye, category: "HTML" },
  { name: "Twitter Card Preview", slug: "twitter-card-preview", description: "Validate Twitter/X preview cards.", icon: Eye, category: "HTML" },
  { name: "HTML Table Generator", slug: "html-table-generator", description: "Generate HTML tables visually.", icon: Table2, category: "HTML" },

  // JavaScript
  { name: "TypeScript to JavaScript", slug: "ts-to-js", description: "Transpile TypeScript to JS.", icon: ArrowLeftRight, category: "JavaScript" },
  { name: "JS Console Playground", slug: "js-playground", description: "Run quick JavaScript snippets.", icon: Terminal, category: "JavaScript" },
  { name: "JS Array Formatter", slug: "js-array-formatter", description: "Format JS arrays and objects cleanly.", icon: Code2, category: "JavaScript" },

  // Regex
  { name: "Regex Explainer", slug: "regex-explainer", description: "Explain regex in plain English.", icon: Regex, category: "Regex" },
  { name: "Regex Replace Tester", slug: "regex-replace", description: "Test regex replacements live.", icon: Replace, category: "Regex" },

  // Network
  { name: "Query String Parser", slug: "query-string-parser", description: "Parse URL query parameters.", icon: Link2, category: "Network" },
  { name: "Query String Builder", slug: "query-string-builder", description: "Generate URL query strings.", icon: Link2, category: "Network" },
  { name: "HTTP Header Viewer", slug: "http-header-viewer", description: "Inspect request and response headers.", icon: ServerCog, category: "Network" },
  { name: "Redirect Checker", slug: "redirect-checker", description: "Analyze redirect chains.", icon: ArrowLeftRight, category: "Network" },
  { name: "MIME Type Checker", slug: "mime-type-checker", description: "Look up MIME content types.", icon: FileSearch, category: "Network" },

  // Converters
  { name: "Byte Converter", slug: "byte-converter", description: "Convert between KB, MB, GB, TB.", icon: Calculator, category: "Converters" },
  { name: "File Size Converter", slug: "file-size-converter", description: "Convert file sizes across units.", icon: Calculator, category: "Converters" },
  { name: "Aspect Ratio Calculator", slug: "aspect-ratio-calculator", description: "Compute aspect ratios for media.", icon: Move3d, category: "Converters" },
  { name: "Timezone Converter", slug: "timezone-converter", description: "Convert times across timezones.", icon: Clock, category: "Converters" },

  // Markdown
  { name: "Markdown Editor", slug: "markdown-editor", description: "Professional markdown workspace.", icon: FileText, category: "Markdown" },
  { name: "Markdown Formatter", slug: "markdown-formatter", description: "Clean markdown structure.", icon: Wand2, category: "Markdown" },
  { name: "Markdown TOC Generator", slug: "markdown-toc", description: "Generate table of contents.", icon: ListOrdered, category: "Markdown" },
  { name: "HTML to Markdown", slug: "html-to-markdown", description: "Convert HTML into markdown.", icon: ArrowLeftRight, category: "Markdown" },

  // Color
  { name: "RGBA to HEX Converter", slug: "rgba-to-hex", description: "Convert RGBA color values to HEX.", icon: ArrowLeftRight, category: "Color" },
  { name: "HSL Converter", slug: "hsl-converter", description: "Convert to and from HSL.", icon: Palette, category: "Color" },
  { name: "Gradient Previewer", slug: "gradient-previewer", description: "Preview and edit gradients visually.", icon: Layers, category: "Color" },
  { name: "Glassmorphism Generator", slug: "glassmorphism-generator", description: "Design glassmorphism effects.", icon: Sparkles, category: "Color" },
  { name: "Neumorphism Generator", slug: "neumorphism-generator", description: "Design neumorphic UI surfaces.", icon: Box, category: "Color" },

  // Database
  { name: "SQL Validator", slug: "sql-validator", description: "Validate SQL syntax.", icon: ShieldCheck, category: "Database" },
  { name: "SQL Minifier", slug: "sql-minifier", description: "Compress SQL queries.", icon: Eraser, category: "Database" },
  { name: "CSV to SQL", slug: "csv-to-sql", description: "Convert CSV rows into INSERT statements.", icon: Database, category: "Database" },
  { name: "JSON to SQL", slug: "json-to-sql", description: "Convert JSON into SQL structures.", icon: Database, category: "Database" },

  // Web Utilities
  { name: "Canonical URL Generator", slug: "canonical-url-generator", description: "Generate canonical URL tags.", icon: Link2, category: "Web Utilities" },
  { name: "Meta Tag Preview", slug: "meta-tag-preview", description: "Preview SEO metadata.", icon: Eye, category: "Web Utilities" },
  { name: "Sitemap Validator", slug: "sitemap-validator", description: "Validate sitemap structure.", icon: ShieldCheck, category: "Web Utilities" },
  { name: "Robots.txt Tester", slug: "robots-txt-tester", description: "Validate crawler rules.", icon: ShieldCheck, category: "Web Utilities" },
  { name: "QR Code Generator", slug: "qr-code-generator", description: "Generate QR codes for any text.", icon: QrCode, category: "Web Utilities" },

  // Git & Dev Utilities
  { name: ".gitignore Generator", slug: "gitignore-generator", description: "Build .gitignore files quickly.", icon: GitBranch, category: "Git & Dev" },
  { name: "Commit Message Formatter", slug: "commit-message-formatter", description: "Generate standardized commit messages.", icon: GitBranch, category: "Git & Dev" },
  { name: "Semantic Version Generator", slug: "semver-generator", description: "Bump and validate semver versions.", icon: Tag, category: "Git & Dev" },
  { name: "ENV Formatter", slug: "env-formatter", description: "Clean and format .env files.", icon: FileSliders, category: "Git & Dev" },

  // Accessibility
  { name: "Readability Checker", slug: "readability-checker", description: "Analyze content readability.", icon: Gauge, category: "Accessibility" },
  { name: "Font Accessibility Tester", slug: "font-accessibility-tester", description: "Check font readability and a11y.", icon: Accessibility, category: "Accessibility" },
  { name: "Alt Text Generator", slug: "alt-text-generator", description: "Draft accessible alt text.", icon: Accessibility, category: "Accessibility" },
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
