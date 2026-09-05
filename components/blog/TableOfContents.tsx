"use client";

import { TableOfContentsItem } from "lib/blogData";
import { List, ArrowDownRight } from "lucide-react";

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  if (!items || items.length === 0) return null;

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="my-8 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs">
      <div className="flex items-center gap-2 mb-3 text-slate-900 font-josefin font-bold text-base">
        <List className="w-5 h-5 text-primary" />
        <h3>What You’ll Learn in This Article</h3>
      </div>
      <ul className="space-y-2 font-josefin text-xs font-semibold text-slate-700">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleScrollTo(item.id)}
              className="flex items-center gap-2 text-left hover:text-primary hover:translate-x-1 transition-all py-1"
            >
              <ArrowDownRight className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>{item.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
