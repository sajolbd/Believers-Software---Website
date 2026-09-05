import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getPostBySlug,
  getRelatedPosts,
  getAllPosts,
} from "lib/blogData";
import BlogSidebar from "components/blog/BlogSidebar";
import TableOfContents from "components/blog/TableOfContents";
import {
  Calendar,
  Clock,
  ChevronRight,
  ArrowRight,
  Share2,
  Linkedin,
  Twitter,
  Facebook,
  Sparkles,
  User,
  Tag,
} from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Article Not Found | Believers Software",
    };
  }

  return {
    title: `${post.title} | Believers Software Blog`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [post.coverImage],
    },
  };
}

export default function BlogDetailPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.categorySlug);

  return (
    <div className="min-h-screen bg-[#FCFDFD] pb-24">
      {/* Breadcrumbs Navigation Bar */}
      <div className="bg-slate-50 border-b border-slate-200/60 py-3">
        <div className="max-w-[1180px] mx-auto px-6 flex items-center gap-2 text-xs font-josefin text-slate-500 overflow-x-auto">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-400">{post.category}</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-900 font-bold truncate max-w-[240px] sm:max-w-none">
            {post.title}
          </span>
        </div>
      </div>

      {/* Main Article Container */}
      <div className="max-w-[1180px] mx-auto px-6 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Article Content Area (8 Cols) */}
          <main className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs">
            {/* Article Header */}
            <header className="mb-8 border-b border-slate-100 pb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </span>
                <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {post.date}
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-josefin font-bold text-slate-900 leading-[1.18] tracking-tight mb-6">
                {post.title}
              </h1>

              {/* Author Meta Header Bar */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-slate-100 border border-slate-200 overflow-hidden relative">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-josefin font-bold text-slate-900">
                      {post.author.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {post.author.role}
                    </p>
                  </div>
                </div>

                {/* Social Share Buttons */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
                    Share:
                  </span>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-all"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&title=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </header>

            {/* Featured Image Cover */}
            <div className="relative h-[280px] sm:h-[420px] rounded-2xl overflow-hidden mb-8 border border-slate-200 bg-slate-900">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Table of Contents ("What You'll Learn" - Ignite style) */}
            {post.tableOfContents && (
              <TableOfContents items={post.tableOfContents} />
            )}

            {/* Article Content Render */}
            <div
              className="prose prose-slate max-w-none prose-headings:font-josefin prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags Bar */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mr-2 flex items-center gap-1">
                <Tag className="w-3.5 h-3.5" /> Tags:
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author Bio Card (Ignite Visibility detail style) */}
            <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row gap-5 items-start">
              <div className="w-16 h-16 rounded-full bg-white border border-slate-200 overflow-hidden relative shrink-0">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-contain p-1.5"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary">
                  Written By
                </span>
                <h4 className="text-base font-josefin font-bold text-slate-900 mb-1">
                  {post.author.name}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {post.author.bio}
                </p>
                <div className="flex items-center gap-3 text-xs font-bold text-primary">
                  <Link href="/about" className="hover:underline">
                    About Believers Software
                  </Link>
                  <span>&bull;</span>
                  <Link href="/get-a-proposal" className="hover:underline">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </main>

          {/* Sticky Right Sidebar (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <BlogSidebar />
            </div>
          </div>
        </div>

        {/* Bottom Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-12 border-t border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest">
                  Continue Reading
                </span>
                <h3 className="text-2xl font-josefin font-bold text-slate-900">
                  Related Growth Insights
                </h3>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-[#ff5d47] transition-colors"
              >
                <span>View All Articles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rPost) => (
                <div
                  key={rPost.slug}
                  className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-40 rounded-xl overflow-hidden bg-slate-100 mb-4 border border-slate-100">
                      <Image
                        src={rPost.coverImage}
                        alt={rPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <span className="font-mono text-[9px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2 inline-block">
                      {rPost.category}
                    </span>
                    <h4 className="text-sm font-josefin font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2 leading-snug mb-2">
                      <Link href={`/blog/${rPost.slug}`}>{rPost.title}</Link>
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                      {rPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>{rPost.date}</span>
                    <Link
                      href={`/blog/${rPost.slug}`}
                      className="font-bold text-primary hover:translate-x-1 transition-transform inline-flex items-center gap-0.5"
                    >
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
