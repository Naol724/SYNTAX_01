"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight, Layers } from "lucide-react";

const categories = ["All", "Healthcare", "Corporate", "E-Commerce", "EdTech", "Gaming", "Chatbot / Trading"];

const projects = [
  { name: "Saron Orthopedic Center", category: "Healthcare", url: "saronorthopediccenter.com", href: "https://saronorthopediccenter.com", desc: "Healthcare website with appointment booking, service listings, and patient information.", tech: ["Next.js", "TypeScript", "Tailwind CSS"], emoji: "🏥", color: "blue" },
  { name: "Godu General Trading", category: "Chatbot / Trading", url: "godugt.com", href: "https://godugt.com", desc: "Corporate trading platform with AI chatbot for customer queries and automated support.", tech: ["React", "Node.js", "Telegram Bot"], emoji: "📦", color: "green" },
  { name: "VanguardX Import & Export", category: "Corporate", url: "vanguardxie.com", href: "https://vanguardxie.com", desc: "Premium corporate website for an international import & export company.", tech: ["Next.js", "TypeScript", "AWS"], emoji: "🌍", color: "indigo" },
  { name: "Zeban Security Services", category: "Corporate", url: "zebansecurityservices.com", href: "https://zebansecurityservices.com", desc: "Professional security company website — services, contact, and team profiles.", tech: ["React", "Tailwind CSS", "Node.js"], emoji: "🛡️", color: "slate" },
  { name: "Dubai Furniture ET", category: "E-Commerce", url: "dubaifurnitureet.com", href: "https://dubaifurnitureet.com", desc: "Full e-commerce marketplace for premium furniture — catalog, cart, and payment.", tech: ["Next.js", "MongoDB", "Stripe"], emoji: "🛋️", color: "orange" },
  { name: "Pin Trading", category: "Chatbot / Trading", url: "pintrading.et", href: "https://pintrading.et", desc: "Trading platform with Telegram bot for order automation and real-time notifications.", tech: ["React", "Node.js", "Telegram Bot"], emoji: "📈", color: "yellow" },
  { name: "Mela Exam Platform", category: "EdTech", url: "melaexam.com", href: "https://melaexam.com", desc: "Online exam platform — quiz engine, results, leaderboards, and admin dashboard.", tech: ["React", "Node.js", "PostgreSQL"], emoji: "📚", color: "purple" },
  { name: "King Bingo", category: "Gaming", url: "kingbingo.et", href: "#", desc: "Real-time multiplayer online bingo platform with live rooms, payments & admin panel.", tech: ["React", "WebSocket", "Node.js", "PostgreSQL"], emoji: "🎰", color: "red" },
  { name: "Award Bingo", category: "Gaming", url: "awardbingo.et", href: "#", desc: "Online bingo gaming platform with reward system, multiplayer, and payment gateway.", tech: ["React", "WebSocket", "MongoDB"], emoji: "🏆", color: "pink" },
  { name: "Waza Bingo", category: "Gaming", url: "wazabingo.et", href: "#", desc: "Feature-rich bingo platform with social gameplay, leaderboards, and multi-currency.", tech: ["React", "Node.js", "Firebase"], emoji: "🎯", color: "cyan" },
  { name: "Offline Desktop Caller", category: "Gaming", url: "Desktop App", href: "#", desc: "The project that started it all (2020) — standalone bingo caller, works without internet.", tech: ["Electron", "JavaScript"], emoji: "💻", color: "teal" },
];

const colorMap: Record<string, { badge: string; tech: string }> = {
  blue:   { badge: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",   tech: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" },
  green:  { badge: "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300", tech: "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300" },
  indigo: { badge: "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300", tech: "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300" },
  slate:  { badge: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300", tech: "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300" },
  orange: { badge: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300", tech: "bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300" },
  yellow: { badge: "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300", tech: "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300" },
  purple: { badge: "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300", tech: "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300" },
  red:    { badge: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300",   tech: "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300" },
  pink:   { badge: "bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300", tech: "bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300" },
  cyan:   { badge: "bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300", tech: "bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300" },
  teal:   { badge: "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300", tech: "bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300" },
};

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-60" />
        <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up">
          <div className="glass rounded-full inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium mb-7">
            <Layers className="w-3.5 h-3.5 text-blue-300" /> 50+ Projects Delivered
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-6">Our Projects</h1>
          <p className="text-gray-300/90 text-lg max-w-2xl mx-auto">
            Real products, real clients — across healthcare, e-commerce, gaming, enterprise, and more. All live and running.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 48" fill="none"><path d="M0 48L1440 48L1440 16C1200 48 960 0 720 16C480 32 240 0 0 16L0 48Z" className="fill-white dark:fill-gray-950"/></svg>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 sticky top-16 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  active === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900 flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">
            Showing <span className="font-bold text-gray-700 dark:text-gray-300">{filtered.length}</span> project{filtered.length !== 1 ? "s" : ""}
            {active !== "All" && <> in <span className="text-blue-600 dark:text-blue-400 font-bold">{active}</span></>}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => {
              const c = colorMap[p.color] || colorMap.slate;
              return (
                <div key={p.name} className={`group flex flex-col p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-up delay-${Math.min((i + 1) * 75, 600)}`}>
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{p.emoji}</span>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-xl ${c.badge}`}>{p.category}</span>
                  </div>
                  <h3 className="font-black text-gray-900 dark:text-white text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5 flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tech.map((t) => (
                      <span key={t} className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${c.tech}`}>{t}</span>
                    ))}
                  </div>
                  {p.href !== "#" ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-2.5 transition-all duration-200 group/link">
                      <ExternalLink className="w-3.5 h-3.5" />
                      {p.url}
                    </a>
                  ) : (
                    <span className="text-sm text-gray-400 italic">{p.url}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">Want to Be Our Next Success Story?</h2>
          <p className="text-blue-100/90 mb-8">Let's build something great together.</p>
          <Link href="/contact" className="btn-white text-base px-8 py-3">Start Your Project <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
