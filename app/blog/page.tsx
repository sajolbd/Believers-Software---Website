"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  getAllPosts,
  getCategories,
  getFeaturedPost,
  BlogPost,
} from "lib/blogData";
import BlogSidebar from "components/blog/BlogSidebar";
import { Sparkles, ArrowRight, Calendar, Clock, User } from "lucide-react";

export default function BlogListingPage() {
  const allPosts = getAllPosts();
  const featuredPost = getFeaturedPost();
  const categories = getCategories();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.categorySlug === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-[#FCFDFD] pb-24">
      {/* Blog Listing Hero Banner */}
      <section className="relative overflow-hidden pt-10 pb-12 bg-white border-b border-slate-100">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white shadow-sm mb-4 border border-slate-800">
              <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase">
                Insights &amp; Engineering Blog
              </span>
            </div>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl font-josefin font-bold text-slate-900 leading-[1.15] tracking-tight mb-4">
              Web Development, GEO &amp; Digital Growth Strategies
            </h1>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Expert articles, technical breakdowns, and actionable guides from the Believers Software team on custom React/Next.js development, AI Search optimization, and WordPress security.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-4 py-2 rounded-full text-xs font-josefin font-bold transition-all ${
                    selectedCategory === cat.slug
                      ? "bg-primary text-white shadow-md shadow-primary/25"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout Container */}
      <div className="max-w-[1180px] mx-auto px-6 pt-12">
        {/* Featured Post Card (Shown when on 'All' category and no search) */}
        {selectedCategory === "all" && searchQuery === "" && (
          <div className="mb-12 rounded-3xl bg-white border border-slate-200/80 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 group">
            <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[360px] bg-slate-900 overflow-hidden">
              <Image
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full shadow-md">
                Featured Article
              </div>
            </div>
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="inline-block font-mono text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">
                  {featuredPost.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-josefin font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug mb-3">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <span>{featuredPost.date}</span>
                  <span>&bull;</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:translate-x-1 transition-transform"
                >
                  <span>Read Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 2-Column Grid Layout: Main Feed (8 cols) + Right Sidebar (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Feed Column */}
          <div className="lg:col-span-8 space-y-8">
            {filteredPosts.length === 0 ? (
              <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-500">
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  No articles found
                </h3>
                <p className="text-xs">
                  Try adjusting your search query or selecting a different category filter.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all group grid grid-cols-1 sm:grid-cols-12 gap-6 items-center"
                  >
                    <div className="sm:col-span-5 relative h-48 sm:h-44 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="sm:col-span-7 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-mono text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-josefin font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug mb-2">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500">
                        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                          <span>{post.date}</span>
                          <span>&bull;</span>
                          <span>{post.readTime}</span>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1 font-bold text-xs text-primary hover:translate-x-1 transition-transform"
                        >
                          <span>Full Story</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Right Sidebar Column (Ignite Visibility style) */}
          <div className="lg:col-span-4">
            <BlogSidebar
              onSearchChange={setSearchQuery}
              searchQuery={searchQuery}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
