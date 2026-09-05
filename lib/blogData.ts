export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
}

export interface TableOfContentsItem {
  id: string;
  title: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML format
  category: string;
  categorySlug: string;
  date: string;
  readTime: string;
  coverImage: string;
  author: Author;
  tableOfContents?: TableOfContentsItem[];
  tags: string[];
  featured?: boolean;
  popular?: boolean;
}

export const AUTHORS: Record<string, Author> = {
  sajol: {
    name: "Sajol Hossain",
    role: "Founder & Lead Architect",
    avatar: "/images/logo.png",
    bio: "Sajol Hossain is the Founder and Lead Architect at Believers Software. With over 8 years of hands-on experience in full-stack JavaScript, custom WordPress engineering, and SEO architecture, he helps growth-driven brands scale their digital footprint.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  devTeam: {
    name: "Believers Engineering Team",
    role: "Full-Stack & Security Team",
    avatar: "/images/logo.png",
    bio: "The Believers Software Engineering Team specializes in custom web application development, high-performance API integrations, Generative Engine Optimization (GEO), and enterprise WordPress hardening.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "generative-engine-optimization-geo-guide",
    title: "Generative Engine Optimization (GEO): The Marketer’s Complete Guide for 2026",
    excerpt: "Search is changing rapidly as AI search engines like ChatGPT, Perplexity, and Google AI Overviews replace traditional blue links. Learn how to optimize your content for Generative Engine Optimization (GEO).",
    category: "SEO & AI Search",
    categorySlug: "seo-ai-search",
    date: "September 4, 2026",
    readTime: "8 min read",
    coverImage: "/images/blog/blog_geo_ai_search.jpg",
    featured: true,
    popular: true,
    tags: ["GEO", "AI Search", "Technical SEO", "ChatGPT SEO", "Google AI Overviews"],
    author: AUTHORS.sajol,
    tableOfContents: [
      { id: "what-is-geo", title: "What is Generative Engine Optimization (GEO)?" },
      { id: "geo-vs-traditional-seo", title: "GEO vs Traditional SEO: Key Differences" },
      { id: "how-ai-engines-cite", title: "How AI Engines Choose Content to Cite" },
      { id: "actionable-geo-strategies", title: "5 Actionable GEO Strategies for Higher Citation" },
      { id: "measuring-geo-success", title: "Measuring GEO Success & Performance" },
    ],
    content: `
      <p class="text-lg text-slate-700 leading-relaxed font-medium mb-6">
        Search engine optimization is undergoing its biggest transformation since the introduction of Google's mobile-first indexing. With over 60% of search queries now interacting with AI summaries, <strong>Generative Engine Optimization (GEO)</strong> has become the single most critical growth lever for modern businesses.
      </p>

      <div class="my-8 p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl">
        <h4 class="text-xs font-mono font-bold text-[#3FC7B0] uppercase tracking-widest mb-2">Key Takeaway</h4>
        <p class="text-sm text-slate-200 leading-relaxed">
          Traditional SEO focused on ranking for blue links. GEO focuses on becoming the <em>source of truth</em> cited inside AI-generated answers across OpenAI ChatGPT, Perplexity AI, Claude, and Google AI Overviews.
        </p>
      </div>

      <h2 id="what-is-geo" class="text-2xl sm:text-3xl font-josefin font-bold text-slate-900 mt-10 mb-4">What is Generative Engine Optimization (GEO)?</h2>
      <p class="text-slate-700 leading-relaxed mb-6">
        Generative Engine Optimization (GEO) is the discipline of structuring, verifying, and distributing content so that Large Language Models (LLMs) and Answer Engines easily parse, cite, and reference your brand as an authoritative source when answering user prompts.
      </p>
      <p class="text-slate-700 leading-relaxed mb-6">
        Unlike traditional search engine crawlers that rely purely on keywords and backlinks, LLM-based search engines prioritize:
      </p>
      <ul class="list-disc pl-6 space-y-2 text-slate-700 mb-6">
        <li><strong>Direct Facts & Empirical Data:</strong> Statistics, benchmarks, and original research.</li>
        <li><strong>Clear Entity Structures:</strong> Explicit definitions and structured schema markup.</li>
        <li><strong>Brand Authority & Citations:</strong> Mentions across trusted industry platforms and multi-channel content.</li>
        <li><strong>Authoritative Expert Insights:</strong> First-hand insights from credentialed experts.</li>
      </ul>

      <h2 id="geo-vs-traditional-seo" class="text-2xl sm:text-3xl font-josefin font-bold text-slate-900 mt-10 mb-4">GEO vs Traditional SEO: Key Differences</h2>
      <p class="text-slate-700 leading-relaxed mb-6">
        Understanding the difference between traditional search ranking factors and AI citation engines is essential for adapting your marketing strategy:
      </p>
      
      <div class="overflow-x-auto my-6">
        <table class="w-full text-left border-collapse border border-slate-200 rounded-xl overflow-hidden text-sm">
          <thead>
            <tr class="bg-slate-100 text-slate-900 font-bold">
              <th class="p-3 border border-slate-200">Factor</th>
              <th class="p-3 border border-slate-200">Traditional SEO</th>
              <th class="p-3 border border-slate-200">Generative Engine Optimization (GEO)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 text-slate-700">
            <tr>
              <td class="p-3 border border-slate-200 font-semibold">Primary Goal</td>
              <td class="p-3 border border-slate-200">Rank #1-#3 on Google SERP</td>
              <td class="p-3 border border-slate-200">Get cited as direct source in AI answers</td>
            </tr>
            <tr>
              <td class="p-3 border border-slate-200 font-semibold">User Intent</td>
              <td class="p-3 border border-slate-200">Click links to visit website</td>
              <td class="p-3 border border-slate-200">Get synthesized answer with source links</td>
            </tr>
            <tr>
              <td class="p-3 border border-slate-200 font-semibold">Content Format</td>
              <td class="p-3 border border-slate-200">Long-form keyword rich text</td>
              <td class="p-3 border border-slate-200">Structured tables, bullet lists, & clear quotes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="how-ai-engines-cite" class="text-2xl sm:text-3xl font-josefin font-bold text-slate-900 mt-10 mb-4">How AI Engines Choose Content to Cite</h2>
      <p class="text-slate-700 leading-relaxed mb-6">
        Recent research into generative search behavior shows that LLMs run a retrieval-augmented generation (RAG) pipeline when responding to a prompt. They search real-time web indexes for high-density information modules.
      </p>
      
      <blockquote class="p-5 my-6 border-l-4 border-primary bg-orange-50/60 rounded-r-2xl italic text-slate-800 text-base">
        "Content containing clear quantitative statistics, structured tables, and expert quotations experiences up to 40% higher citation frequency in AI Overview summaries."
      </blockquote>

      <h2 id="actionable-geo-strategies" class="text-2xl sm:text-3xl font-josefin font-bold text-slate-900 mt-10 mb-4">5 Actionable GEO Strategies for Higher Citation</h2>
      <ol class="list-decimal pl-6 space-y-4 text-slate-700 mb-8">
        <li><strong>Add Authoritative Quotes & Statistics:</strong> Back up every claim with verifiable numbers and statistics.</li>
        <li><strong>Include Structured Comparison Tables:</strong> AI models love parsing markdown and HTML tables.</li>
        <li><strong>Use Clear Subheadings & Direct Definitions:</strong> Answer questions directly in the first sentence after a heading.</li>
        <li><strong>Implement Schema Markup (JSON-LD):</strong> Use Organization, Article, FAQ, and TechArticle schema.</li>
        <li><strong>Maintain Consistent Multi-Channel Citations:</strong> Ensure your brand details match across directories, Wikipedia, and press releases.</li>
      </ol>

      <h2 id="measuring-geo-success" class="text-2xl sm:text-3xl font-josefin font-bold text-slate-900 mt-10 mb-4">Measuring GEO Success & Performance</h2>
      <p class="text-slate-700 leading-relaxed mb-6">
        Track your brand's AI search visibility by monitoring referral traffic from AI platforms (chatgpt.com, perplexity.ai), auditing AI answer prompts for target keywords, and tracking direct brand mention sentiment.
      </p>
    `,
  },
  {
    slug: "nextjs-vs-wordpress-choosing-the-right-stack",
    title: "Next.js 15 vs. WordPress in 2026: Which Stack is Right for Your Business?",
    excerpt: "Choosing between a headless Next.js custom web application and a WordPress site impacts your site performance, security, SEO, and long-term scalability. Here is an honest breakdown.",
    category: "Custom Web Development",
    categorySlug: "web-development",
    date: "September 2, 2026",
    readTime: "7 min read",
    coverImage: "/images/blog/blog_nextjs_vs_wordpress.jpg",
    featured: false,
    popular: true,
    tags: ["Next.js", "WordPress", "Web Architecture", "Frontend", "React"],
    author: AUTHORS.sajol,
    tableOfContents: [
      { id: "the-dilemma", title: "The Next.js vs WordPress Dilemma" },
      { id: "when-to-choose-nextjs", title: "When to Choose Next.js 15" },
      { id: "when-to-choose-wordpress", title: "When to Choose WordPress" },
      { id: "hybrid-approach", title: "The Hybrid Headless Approach" },
    ],
    content: `
      <p class="text-lg text-slate-700 leading-relaxed font-medium mb-6">
        One of the most frequent questions business leaders ask us at Believers Software is: <em>"Should we build our new website on Next.js or WordPress?"</em> Both options have evolved significantly, but they serve fundamentally different architectural needs.
      </p>

      <h2 id="the-dilemma" class="text-2xl sm:text-3xl font-josefin font-bold text-slate-900 mt-10 mb-4">The Next.js vs WordPress Dilemma</h2>
      <p class="text-slate-700 leading-relaxed mb-6">
        WordPress powers over 40% of the web due to its ease of content publishing and huge plugin ecosystem. Meanwhile, Next.js (built on React) has become the gold standard for high-performance enterprise applications, SaaS portals, and hyper-fast e-commerce platforms.
      </p>

      <h2 id="when-to-choose-nextjs" class="text-2xl sm:text-3xl font-josefin font-bold text-slate-900 mt-10 mb-4">When to Choose Next.js 15</h2>
      <p class="text-slate-700 leading-relaxed mb-4">Next.js is the ideal stack when:</p>
      <ul class="list-disc pl-6 space-y-2 text-slate-700 mb-6">
        <li>You need sub-second page load speeds and perfect 100/100 Core Web Vitals scores.</li>
        <li>You are building dynamic web apps, dashboards, or complex web calculators.</li>
        <li>Maximum security is required (no direct SQL database exposed to the public frontend).</li>
        <li>You want full custom UI/UX design freedom without theme limitations.</li>
      </ul>

      <h2 id="when-to-choose-wordpress" class="text-2xl sm:text-3xl font-josefin font-bold text-slate-900 mt-10 mb-4">When to Choose WordPress</h2>
      <p class="text-slate-700 leading-relaxed mb-4">WordPress remains the smart choice when:</p>
      <ul class="list-disc pl-6 space-y-2 text-slate-700 mb-6">
        <li>Your primary goal is marketing blog management and content publishing.</li>
        <li>Non-technical team members need complete control over page layouts without writing code.</li>
        <li>You want a fast time-to-market with proven plugins for SEO and forms.</li>
      </ul>

      <h2 id="hybrid-approach" class="text-2xl sm:text-3xl font-josefin font-bold text-slate-900 mt-10 mb-4">The Hybrid Headless Approach</h2>
      <p class="text-slate-700 leading-relaxed mb-6">
        You don't always have to choose! With <strong>Headless WordPress</strong>, WordPress acts purely as a back-end content CMS while Next.js powers the high-speed frontend via GraphQL or REST API. At Believers Software, we help clients choose the exact stack that balances budget, speed, and long-term business goals.
      </p>
    `,
  },
  {
    slug: "wordpress-security-malware-removal-hardening-guide",
    title: "WordPress Security Guide: How to Clean Malware & Protect Your Site from Hacks",
    excerpt: "Over 13,000 WordPress sites are hacked every day. Learn the exact steps our security team uses to clean infected files, remove Google blacklist warnings, and lock down your site.",
    category: "WordPress Security",
    categorySlug: "security",
    date: "August 28, 2026",
    readTime: "10 min read",
    coverImage: "/images/blog/blog_wordpress_security.jpg",
    featured: false,
    popular: true,
    tags: ["WordPress Security", "Malware Cleanup", "Cybersecurity", "Google Blacklist"],
    author: AUTHORS.devTeam,
    tableOfContents: [
      { id: "signs-of-infection", title: "Signs Your WordPress Site Has Malware" },
      { id: "step-by-step-cleanup", title: "Step-by-Step Malware Removal Process" },
      { id: "hardening-steps", title: "Essential Steps to Lock Down WordPress" },
    ],
    content: `
      <p class="text-lg text-slate-700 leading-relaxed font-medium mb-6">
        Waking up to a red Google warning screen reading <em>"Deceptive site ahead"</em> or finding unknown redirects on your WordPress site is every website owner's nightmare.
      </p>

      <h2 id="signs-of-infection" class="text-2xl sm:text-3xl font-josefin font-bold text-slate-900 mt-10 mb-4">Signs Your WordPress Site Has Malware</h2>
      <ul class="list-disc pl-6 space-y-2 text-slate-700 mb-6">
        <li>Redirects sending mobile users to malicious spam pages.</li>
        <li>Unidentified admin users created in your database.</li>
        <li>Spam keywords appearing in Google search snippet titles.</li>
        <li>Host account suspended due to high CPU usage or outgoing spam emails.</li>
      </ul>

      <h2 id="step-by-step-cleanup" class="text-2xl sm:text-3xl font-josefin font-bold text-slate-900 mt-10 mb-4">Step-by-Step Malware Removal Process</h2>
      <p class="text-slate-700 leading-relaxed mb-6">
        Our security engineering team at Believers Software follows a strict 4-stage malware remediation protocol:
      </p>
      <ol class="list-decimal pl-6 space-y-3 text-slate-700 mb-6">
        <li><strong>Complete File & Database Backup:</strong> Always take a full snapshot before touching code.</li>
        <li><strong>Core & Plugin Replacement:</strong> Replace WordPress core files, plugins, and themes with clean official downloads.</li>
        <li><strong>Database Deep Clean:</strong> Scan wp_options, wp_users, and posts tables for malicious eval scripts.</li>
        <li><strong>Google Search Console Review:</strong> Submit a clean review request to remove warning flags within 24 hours.</li>
      </ol>

      <h2 id="hardening-steps" class="text-2xl sm:text-3xl font-josefin font-bold text-slate-900 mt-10 mb-4">Essential Steps to Lock Down WordPress</h2>
      <p class="text-slate-700 leading-relaxed mb-6">
        Once clean, prevent future attacks by enabling 2FA, enforcing strong passwords, restricting file execution in /wp-content/uploads/, and setting up real-time web application firewalls (WAF).
      </p>
    `,
  },
  {
    slug: "building-scalable-saas-web-application-architecture",
    title: "Building Scalable SaaS Architecture: Lessons From High-Growth App Engineering",
    excerpt: "Discover the architectural principles required to scale a multi-tenant SaaS application to thousands of concurrent active users without sacrificing reliability.",
    category: "Software & SaaS",
    categorySlug: "software-development",
    date: "August 20, 2026",
    readTime: "9 min read",
    coverImage: "/images/blog/blog_geo_ai_search.jpg",
    featured: false,
    popular: false,
    tags: ["SaaS", "Architecture", "Node.js", "React", "Cloud"],
    author: AUTHORS.sajol,
    tableOfContents: [
      { id: "multi-tenant-models", title: "Multi-Tenant Database Models" },
      { id: "api-performance", title: "API Performance & Caching" },
      { id: "security-compliance", title: "Security & Role-Based Access (RBAC)" },
    ],
    content: `
      <p class="text-lg text-slate-700 leading-relaxed font-medium mb-6">
        Building a successful SaaS product requires more than just modern UI design — it demands a resilient backend infrastructure that scales cost-effectively.
      </p>

      <h2 id="multi-tenant-models" class="text-2xl sm:text-3xl font-josefin font-bold text-slate-900 mt-10 mb-4">Multi-Tenant Database Models</h2>
      <p class="text-slate-700 leading-relaxed mb-6">
        Choosing between shared database schemas with tenant IDs vs separate database instances depends on data compliance requirements and target user volume.
      </p>

      <h2 id="api-performance" class="text-2xl sm:text-3xl font-josefin font-bold text-slate-900 mt-10 mb-4">API Performance & Caching</h2>
      <p class="text-slate-700 leading-relaxed mb-6">
        Implement Redis caching for frequent database queries and deploy API rate limiters to prevent resource exhaustion.
      </p>
    `,
  },
  {
    slug: "flutter-vs-react-native-cross-platform-mobile-development",
    title: "Flutter vs React Native in 2026: Mobile App Development Comparison",
    excerpt: "Which cross-platform framework delivers better UI performance, faster development cycles, and smoother mobile app experiences? Let's analyze the data.",
    category: "Mobile Apps",
    categorySlug: "mobile-apps",
    date: "August 14, 2026",
    readTime: "6 min read",
    coverImage: "/images/blog/blog_nextjs_vs_wordpress.jpg",
    featured: false,
    popular: false,
    tags: ["Mobile Development", "Flutter", "React Native", "iOS", "Android"],
    author: AUTHORS.devTeam,
    tableOfContents: [
      { id: "framework-overview", title: "Framework Overview" },
      { id: "performance-comparison", title: "UI Performance Benchmark" },
      { id: "developer-ecosystem", title: "Ecosystem & Long Term Viability" },
    ],
    content: `
      <p class="text-lg text-slate-700 leading-relaxed font-medium mb-6">
        Cross-platform mobile app development enables businesses to deploy iOS and Android apps simultaneously with a single shared codebase.
      </p>

      <h2 id="framework-overview" class="text-2xl sm:text-3xl font-josefin font-bold text-slate-900 mt-10 mb-4">Framework Overview</h2>
      <p class="text-slate-700 leading-relaxed mb-6">
        Both Flutter (backed by Google) and React Native (backed by Meta) offer native UI rendering, hot reload, and rich component libraries.
      </p>
    `,
  },
];

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getFeaturedPost(): BlogPost {
  return BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
}

export function getPopularPosts(): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.popular);
}

export function getRelatedPosts(currentSlug: string, categorySlug: string): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== currentSlug && (p.categorySlug === categorySlug || p.popular)).slice(0, 3);
}

export function getCategories() {
  return [
    { name: "All Articles", slug: "all" },
    { name: "SEO & AI Search", slug: "seo-ai-search" },
    { name: "Custom Web Development", slug: "web-development" },
    { name: "WordPress Security", slug: "security" },
    { name: "Software & SaaS", slug: "software-development" },
    { name: "Mobile Apps", slug: "mobile-apps" },
  ];
}
