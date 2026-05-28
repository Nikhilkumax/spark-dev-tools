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
  { name: "Color Blindness Simulator", slug: "color-blindness-simulator", description: "Preview colors for color vision types.", icon: Eye, category: "Accessibility" },
  { name: "ARIA Attribute Reference", slug: "aria-reference", description: "Browse ARIA roles and attributes.", icon: BookOpen, category: "Accessibility" },
  { name: "Tab Order Tester", slug: "tab-order-tester", description: "Visualize keyboard tab order.", icon: Keyboard, category: "Accessibility" },

  // === Extra browser-only additions ===

  // JSON & Data
  { name: "JSON Sort Keys", slug: "json-sort-keys", description: "Alphabetically sort JSON keys.", icon: ArrowDownAZ, category: "JSON & Data" },
  { name: "JSON Flattener", slug: "json-flattener", description: "Flatten nested JSON to dot paths.", icon: ListTree, category: "JSON & Data" },
  { name: "JSON Unflattener", slug: "json-unflattener", description: "Expand dot paths into nested JSON.", icon: ListTree, category: "JSON & Data" },
  { name: "JSON Schema Generator", slug: "json-schema-generator", description: "Infer JSON Schema from samples.", icon: FileJson, category: "JSON & Data" },
  { name: "JSON Path Finder", slug: "json-path-finder", description: "Find JSONPath for any value.", icon: Search, category: "JSON & Data" },
  { name: "JSON to TypeScript", slug: "json-to-typescript", description: "Generate TS interfaces from JSON.", icon: Code2, category: "JSON & Data" },
  { name: "JSON to Go Struct", slug: "json-to-go", description: "Generate Go structs from JSON.", icon: Code2, category: "JSON & Data" },
  { name: "JSON to XML", slug: "json-to-xml", description: "Convert JSON into XML markup.", icon: ArrowLeftRight, category: "JSON & Data" },
  { name: "TOML to JSON", slug: "toml-to-json", description: "Convert TOML into JSON.", icon: ArrowLeftRight, category: "JSON & Data" },
  { name: "TSV to JSON", slug: "tsv-to-json", description: "Convert tab-separated values to JSON.", icon: Table2, category: "JSON & Data" },

  // Text
  { name: "UPPER / lower Case", slug: "upper-lower-case", description: "Switch text to upper or lower case.", icon: CaseUpper, category: "Text" },
  { name: "Title Case Converter", slug: "title-case", description: "Apply title case to text.", icon: CaseSensitive, category: "Text" },
  { name: "Sentence Case Converter", slug: "sentence-case", description: "Apply sentence case rules.", icon: CaseLower, category: "Text" },
  { name: "Whitespace Remover", slug: "whitespace-remover", description: "Trim and collapse whitespace.", icon: Scissors, category: "Text" },
  { name: "Line Break Remover", slug: "line-break-remover", description: "Remove line breaks from text.", icon: Eraser, category: "Text" },
  { name: "Text Repeater", slug: "text-repeater", description: "Repeat a string N times.", icon: Copy, category: "Text" },
  { name: "Random String Generator", slug: "random-string", description: "Generate random strings.", icon: Shuffle, category: "Text" },
  { name: "List Shuffler", slug: "list-shuffler", description: "Randomize list order.", icon: Shuffle, category: "Text" },
  { name: "List Randomizer", slug: "list-randomizer", description: "Pick random items from a list.", icon: Dices, category: "Text" },
  { name: "Text Statistics", slug: "text-statistics", description: "Detailed text metrics and stats.", icon: BarChart3, category: "Text" },
  { name: "Character Counter", slug: "character-counter", description: "Count characters with limits.", icon: Hash, category: "Text" },
  { name: "Smart Quote Converter", slug: "smart-quote-converter", description: "Convert quotes to or from smart quotes.", icon: Quote, category: "Text" },
  { name: "Text Sorter", slug: "text-sorter", description: "Sort lines with custom rules.", icon: ArrowDownAZ, category: "Text" },
  { name: "Anagram Checker", slug: "anagram-checker", description: "Detect anagrams between strings.", icon: Shuffle, category: "Text" },
  { name: "Palindrome Checker", slug: "palindrome-checker", description: "Test if text is a palindrome.", icon: ScanText, category: "Text" },

  // Encoding
  { name: "Base32 Encoder / Decoder", slug: "base32", description: "Encode and decode Base32.", icon: Binary, category: "Encoding" },
  { name: "Base58 Encoder / Decoder", slug: "base58", description: "Encode and decode Base58.", icon: Binary, category: "Encoding" },
  { name: "ROT13 Encoder / Decoder", slug: "rot13", description: "Apply ROT13 transform.", icon: Shuffle, category: "Encoding" },
  { name: "Morse Code Translator", slug: "morse-code", description: "Convert text to and from Morse.", icon: Volume2, category: "Encoding" },
  { name: "ASCII Table", slug: "ascii-table", description: "Browse ASCII reference table.", icon: Table2, category: "Encoding" },
  { name: "Unicode Code Point Lookup", slug: "unicode-lookup", description: "Inspect Unicode code points.", icon: Search, category: "Encoding" },
  { name: "Punycode Converter", slug: "punycode", description: "Convert IDN domains to Punycode.", icon: Globe, category: "Encoding" },
  { name: "Backslash Escape", slug: "backslash-escape", description: "Escape and unescape backslash strings.", icon: Code, category: "Encoding" },
  { name: "CSV Escape", slug: "csv-escape", description: "Escape strings for safe CSV.", icon: Code, category: "Encoding" },
  { name: "Quoted Printable Encoder", slug: "quoted-printable", description: "Encode and decode quoted-printable.", icon: Mail, category: "Encoding" },

  // Security
  { name: "MD5 Generator", slug: "md5-generator", description: "Generate MD5 hashes.", icon: Fingerprint, category: "Security" },
  { name: "SHA-1 Generator", slug: "sha1-generator", description: "Generate SHA-1 hashes.", icon: Fingerprint, category: "Security" },
  { name: "SHA-256 Generator", slug: "sha256-generator", description: "Generate SHA-256 hashes.", icon: Fingerprint, category: "Security" },
  { name: "HMAC Generator", slug: "hmac-generator", description: "Generate HMAC signatures.", icon: ShieldCheck, category: "Security" },
  { name: "CRC32 Calculator", slug: "crc32", description: "Calculate CRC32 checksum.", icon: Fingerprint, category: "Security" },
  { name: "PIN Generator", slug: "pin-generator", description: "Generate secure numeric PINs.", icon: KeyRound, category: "Security" },
  { name: "Passphrase Generator", slug: "passphrase-generator", description: "Generate memorable passphrases.", icon: KeyRound, category: "Security" },
  { name: "Htpasswd Generator", slug: "htpasswd-generator", description: "Generate .htpasswd entries.", icon: Lock, category: "Security" },
  { name: "Token Strength Analyzer", slug: "token-strength", description: "Analyze token entropy.", icon: Gauge, category: "Security" },

  // CSS
  { name: "Text Shadow Generator", slug: "text-shadow-generator", description: "Design text shadows visually.", icon: Type, category: "CSS" },
  { name: "CSS Triangle Generator", slug: "css-triangle", description: "Generate CSS triangles.", icon: Box, category: "CSS" },
  { name: "CSS Filter Generator", slug: "css-filter", description: "Preview CSS filter effects.", icon: Sparkles, category: "CSS" },
  { name: "CSS Transform Playground", slug: "css-transform", description: "Experiment with CSS transforms.", icon: RotateCw, category: "CSS" },
  { name: "CSS Variables Generator", slug: "css-variables", description: "Generate CSS custom property sets.", icon: Variable, category: "CSS" },
  { name: "CSS Specificity Calculator", slug: "css-specificity", description: "Compute CSS selector specificity.", icon: Calculator, category: "CSS" },
  { name: "CSS Unit Converter", slug: "css-unit-converter", description: "Convert between px, rem, em, %.", icon: Ruler, category: "CSS" },
  { name: "Cubic Bezier Generator", slug: "cubic-bezier", description: "Design easing curves.", icon: Activity, category: "CSS" },
  { name: "Scrollbar Generator", slug: "scrollbar-generator", description: "Style custom scrollbars.", icon: Paintbrush, category: "CSS" },

  // HTML
  { name: "HTML Entity Reference", slug: "html-entity-reference", description: "Browse HTML entity codes.", icon: BookOpen, category: "HTML" },
  { name: "HTML to PUG", slug: "html-to-pug", description: "Convert HTML into Pug templates.", icon: ArrowLeftRight, category: "HTML" },
  { name: "HTML Char Counter", slug: "html-char-counter", description: "Count characters in HTML.", icon: Hash, category: "HTML" },
  { name: "HTML Linter", slug: "html-linter", description: "Lint HTML for issues.", icon: ShieldCheck, category: "HTML" },

  // JavaScript
  { name: "JSON to JS Object", slug: "json-to-js-object", description: "Convert JSON into JS object syntax.", icon: Braces, category: "JavaScript" },
  { name: "JS Object to JSON", slug: "js-object-to-json", description: "Convert JS object literal to JSON.", icon: Braces, category: "JavaScript" },
  { name: "JS Regex Builder", slug: "js-regex-builder", description: "Compose JS regex flags and patterns.", icon: Regex, category: "JavaScript" },
  { name: "Lodash to Native", slug: "lodash-to-native", description: "Find native ES alternatives.", icon: Code, category: "JavaScript" },
  { name: "Promise Visualizer", slug: "promise-visualizer", description: "Step through Promise states.", icon: Activity, category: "JavaScript" },

  // Regex
  { name: "Regex Library", slug: "regex-library", description: "Common regex patterns ready to use.", icon: BookOpen, category: "Regex" },
  { name: "Cron to Regex", slug: "cron-to-regex", description: "Convert cron patterns to regex hints.", icon: Clock, category: "Regex" },

  // Network
  { name: "Subnet Calculator", slug: "subnet-calculator", description: "Calculate IPv4 subnets.", icon: Network, category: "Network" },
  { name: "IPv6 Validator", slug: "ipv6-validator", description: "Validate IPv6 addresses.", icon: ShieldCheck, category: "Network" },
  { name: "MAC Address Lookup", slug: "mac-address-lookup", description: "Identify MAC address vendors.", icon: Network, category: "Network" },
  { name: "URL Shortener Preview", slug: "url-shortener-preview", description: "Expand and preview short URLs.", icon: Link2, category: "Network" },
  { name: "Slug to URL", slug: "slug-to-url", description: "Build URLs from slugs and base.", icon: Link2, category: "Network" },

  // Converters
  { name: "Roman Numeral Converter", slug: "roman-numerals", description: "Convert numbers and Roman numerals.", icon: Hash, category: "Converters" },
  { name: "Temperature Converter", slug: "temperature-converter", description: "Convert °C, °F, and K.", icon: Thermometer, category: "Converters" },
  { name: "Currency Format", slug: "currency-format", description: "Format numbers as currency.", icon: Coins, category: "Converters" },
  { name: "Number Format", slug: "number-format", description: "Format numbers with separators.", icon: Calculator, category: "Converters" },
  { name: "Percentage Calculator", slug: "percentage-calculator", description: "Compute percentages quickly.", icon: Percent, category: "Converters" },
  { name: "Tip Calculator", slug: "tip-calculator", description: "Split bills and tips.", icon: Banknote, category: "Converters" },
  { name: "Age Calculator", slug: "age-calculator", description: "Compute precise age from birth date.", icon: Calendar, category: "Converters" },
  { name: "Date Difference", slug: "date-difference", description: "Compute time between dates.", icon: CalendarClock, category: "Converters" },
  { name: "Stopwatch / Countdown", slug: "stopwatch", description: "Browser stopwatch and timer.", icon: Timer, category: "Converters" },
  { name: "Pomodoro Timer", slug: "pomodoro-timer", description: "Focus sessions in the browser.", icon: Hourglass, category: "Converters" },

  // Markdown
  { name: "Markdown Cheatsheet", slug: "markdown-cheatsheet", description: "Markdown syntax reference.", icon: BookOpen, category: "Markdown" },
  { name: "Markdown Word Counter", slug: "markdown-word-counter", description: "Count words in markdown.", icon: AlignLeft, category: "Markdown" },
  { name: "Markdown Link Checker", slug: "markdown-link-checker", description: "List links in markdown.", icon: Link2, category: "Markdown" },
  { name: "Markdown Image Embedder", slug: "markdown-image-embedder", description: "Build markdown image syntax.", icon: ImageIcon, category: "Markdown" },

  // Color
  { name: "Color Name Lookup", slug: "color-name-lookup", description: "Find CSS color names.", icon: Palette, category: "Color" },
  { name: "Color Shades Generator", slug: "color-shades", description: "Generate tints and shades.", icon: Droplets, category: "Color" },
  { name: "Color Mixer", slug: "color-mixer", description: "Mix colors visually.", icon: PaintBucket, category: "Color" },
  { name: "Tailwind Color Reference", slug: "tailwind-colors", description: "Browse Tailwind palette.", icon: BookOpen, category: "Color" },
  { name: "Material Color Reference", slug: "material-colors", description: "Browse Material palette.", icon: BookOpen, category: "Color" },
  { name: "Image Color Extractor", slug: "image-color-extractor", description: "Extract dominant image colors.", icon: Pipette, category: "Color" },

  // Database
  { name: "SQL to JSON", slug: "sql-to-json", description: "Parse SQL inserts into JSON.", icon: ArrowLeftRight, category: "Database" },
  { name: "SQL Beautifier (Dialects)", slug: "sql-beautifier", description: "Format MySQL, Postgres, MSSQL.", icon: Database, category: "Database" },
  { name: "MongoDB Query Builder", slug: "mongo-query-builder", description: "Build MongoDB filter queries.", icon: Database, category: "Database" },

  // Web Utilities
  { name: "JSON-LD Generator", slug: "json-ld-generator", description: "Generate schema.org JSON-LD.", icon: FileJson, category: "Web Utilities" },
  { name: "Schema.org Reference", slug: "schema-org-reference", description: "Browse schema.org types.", icon: BookOpen, category: "Web Utilities" },
  { name: "HTTP Status Reference", slug: "http-status-reference", description: "All HTTP status codes.", icon: BookOpen, category: "Web Utilities" },
  { name: "MIME Type Reference", slug: "mime-type-reference", description: "Browse MIME type list.", icon: BookOpen, category: "Web Utilities" },
  { name: "Email Validator", slug: "email-validator", description: "Validate email syntax.", icon: AtSign, category: "Web Utilities" },
  { name: "Phone Number Validator", slug: "phone-validator", description: "Validate phone formats.", icon: Phone, category: "Web Utilities" },
  { name: "Credit Card Validator", slug: "credit-card-validator", description: "Luhn check card numbers.", icon: CreditCard, category: "Web Utilities" },
  { name: "IBAN Validator", slug: "iban-validator", description: "Validate IBAN format.", icon: Banknote, category: "Web Utilities" },
  { name: "Barcode Generator", slug: "barcode-generator", description: "Generate barcodes (CODE128).", icon: Barcode, category: "Web Utilities" },
  { name: "Invoice Number Generator", slug: "invoice-number", description: "Generate sequential invoice IDs.", icon: Receipt, category: "Web Utilities" },

  // Git & Dev
  { name: "Branch Name Generator", slug: "branch-name-generator", description: "Generate Git branch names.", icon: GitBranch, category: "Git & Dev" },
  { name: "Conventional Commit Builder", slug: "conventional-commit", description: "Build Conventional Commits.", icon: GitBranch, category: "Git & Dev" },
  { name: "Changelog Generator", slug: "changelog-generator", description: "Build changelog entries.", icon: FileText, category: "Git & Dev" },
  { name: "License Picker", slug: "license-picker", description: "Pick an open source license.", icon: ShieldCheck, category: "Git & Dev" },
  { name: "README Generator", slug: "readme-generator", description: "Scaffold README files.", icon: FileText, category: "Git & Dev" },
  { name: "Badge Generator", slug: "badge-generator", description: "Generate shields.io badges.", icon: Bookmark, category: "Git & Dev" },
  { name: "Package Name Checker", slug: "package-name-checker", description: "Check npm name availability.", icon: Search, category: "Git & Dev" },

  // Math
  { name: "Basic Calculator", slug: "basic-calculator", description: "Quick arithmetic calculator.", icon: Calculator, category: "Math" },
  { name: "Scientific Calculator", slug: "scientific-calculator", description: "Trig, log, and exp functions.", icon: Sigma, category: "Math" },
  { name: "Expression Evaluator", slug: "expression-evaluator", description: "Evaluate math expressions.", icon: Equal, category: "Math" },
  { name: "Prime Number Checker", slug: "prime-checker", description: "Check if a number is prime.", icon: Pi, category: "Math" },
  { name: "GCD / LCM Calculator", slug: "gcd-lcm", description: "Compute GCD and LCM.", icon: Calculator, category: "Math" },
  { name: "Matrix Calculator", slug: "matrix-calculator", description: "Add and multiply matrices.", icon: Table2, category: "Math" },
  { name: "Statistics Calculator", slug: "statistics-calculator", description: "Mean, median, mode, stdev.", icon: BarChart3, category: "Math" },
  { name: "Random Number Generator", slug: "random-number", description: "Generate random integers.", icon: Dices, category: "Math" },

  // Productivity
  { name: "Diff Checker", slug: "diff-checker", description: "Side-by-side diff viewer.", icon: Diff, category: "Productivity" },
  { name: "Notepad", slug: "notepad", description: "Quick autosaved scratchpad.", icon: FileText, category: "Productivity" },
  { name: "Checklist Builder", slug: "checklist-builder", description: "Build shareable checklists.", icon: ListChecks, category: "Productivity" },
  { name: "Markdown Notes", slug: "markdown-notes", description: "Quick markdown note taking.", icon: FileText, category: "Productivity" },
  { name: "Bookmark Manager", slug: "bookmark-manager", description: "Local bookmark organizer.", icon: Bookmark, category: "Productivity" },
  { name: "Clipboard History", slug: "clipboard-history", description: "Track recent clipboard items.", icon: Copy, category: "Productivity" },
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
