import Link from "next/link";
import { Globe, Smartphone, Gamepad2, Building2, Bot, Palette, Cloud, Headset, ArrowRight, CheckCircle, Zap } from "lucide-react";

const services = [
  { icon: <Globe className="w-6 h-6" />, title: "Website Development", desc: "Modern, responsive websites and web apps built with Next.js and React. SEO-optimized, CMS-integrated, and ready to scale.", features: ["Next.js & React", "Responsive Design", "SEO Optimized", "CMS Integration"], iconBg: "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400", border: "hover:border-blue-300 dark:hover:border-blue-600" },
  { icon: <Smartphone className="w-6 h-6" />, title: "Mobile Applications", desc: "Cross-platform iOS & Android apps with React Native — push notifications, offline support, and app store deployment.", features: ["React Native", "iOS & Android", "Push Notifications", "Offline Support"], iconBg: "bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400", border: "hover:border-violet-300 dark:hover:border-violet-600" },
  { icon: <Gamepad2 className="w-6 h-6" />, title: "Gaming Platforms", desc: "Real-time multiplayer gaming systems with admin dashboards, payment integration, and scalable backends.", features: ["Real-Time Systems", "Admin Dashboards", "Payment Integration", "Multi-Player"], iconBg: "bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400", border: "hover:border-green-300 dark:hover:border-green-600" },
  { icon: <Building2 className="w-6 h-6" />, title: "Enterprise Systems", desc: "Custom business software: restaurant POS, inventory control, rental management, and debt tracking.", features: ["Restaurant POS", "Inventory Control", "Rental Management", "Debt Tracking"], iconBg: "bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400", border: "hover:border-orange-300 dark:hover:border-orange-600" },
  { icon: <Bot className="w-6 h-6" />, title: "Bot Development", desc: "Intelligent Telegram bots and AI chatbots for order automation, customer support, and business workflows.", features: ["Telegram Bots", "AI Chatbots", "Order Automation", "Customer Support"], iconBg: "bg-cyan-100 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-400", border: "hover:border-cyan-300 dark:hover:border-cyan-600" },
  { icon: <Palette className="w-6 h-6" />, title: "UI/UX Design", desc: "User-centered design from research to high-fidelity prototypes and scalable design systems.", features: ["User Research", "Wireframing", "Prototyping", "Design Systems"], iconBg: "bg-pink-100 dark:bg-pink-900/40 text-pink-600 dark:text-pink-400", border: "hover:border-pink-300 dark:hover:border-pink-600" },
  { icon: <Cloud className="w-6 h-6" />, title: "Cloud & DevOps", desc: "AWS & Firebase infrastructure, Docker, CI/CD pipelines, and 24/7 monitoring for zero-downtime deployments.", features: ["AWS & Firebase", "Docker", "CI/CD Pipelines", "24/7 Monitoring"], iconBg: "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400", border: "hover:border-indigo-300 dark:hover:border-indigo-600" },
  { icon: <Headset className="w-6 h-6" />, title: "Support & Maintenance", desc: "24/7 ongoing support, security audits, performance tuning, and feature updates — we don't disappear after launch.", features: ["24/7 Support", "Security Audits", "Performance Tuning", "Feature Updates"], iconBg: "bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400", border: "hover:border-red-300 dark:hover:border-red-600" },
];

const process = [
  { step: "01", title: "Discovery", desc: "We learn your business goals, users, and requirements in a focused kickoff session." },
  { step: "02", title: "Design", desc: "Wireframes and high-fidelity mockups reviewed and approved before any code is written." },
  { step: "03", title: "Build", desc: "Agile sprint development with regular demos, clean code, and security reviews." },
  { step: "04", title: "Launch & Support", desc: "Full deployment, handover, and ongoing 24/7 support after go-live." },
];

const commitments = [
  "Cybersecurity audit on every project",
  "Full product lifecycle ownership",
  "Clean, documented, maintainable code",
  "24/7 post-launch support available",
  "Agile sprints with regular demos",
  "Not a body shop — full team attention",
];

export const metadata = {
  title: "Services — Syntax Software Solutions",
  description: "8 core services: web development, mobile apps, gaming platforms, enterprise systems, bot development, UI/UX design, cloud & DevOps, and support.",
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-blue-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-60" />
        <div className="absolute right-0 bottom-0 w-96 h-64 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up">
          <div className="glass rounded-full inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium mb-7">
            <Zap className="w-3.5 h-3.5 text-yellow-300" /> 8 Core Services
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-6">Our Services</h1>
          <p className="text-indigo-200/90 text-lg max-w-2xl mx-auto leading-relaxed">
            Full product lifecycle — from discovery and design through development, deployment, and long-term support.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 48" fill="none"><path d="M0 48L1440 48L1440 16C1200 48 960 0 720 16C480 32 240 0 0 16L0 48Z" className="fill-white dark:fill-gray-950"/></svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <div key={svc.title} className={`group p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 ${svc.border} animate-fade-up delay-${(i + 1) * 75}`}>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 ${svc.iconBg}`}>
                  {svc.icon}
                </div>
                <h3 className="font-black text-gray-900 dark:text-white mb-2">{svc.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">{svc.desc}</p>
                <ul className="space-y-2">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label">🔄 Process</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-4">How We Work</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Agile, transparent, and delivery-focused. Every project gets full team attention.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, i) => (
              <div key={item.step} className={`text-center animate-fade-up delay-${(i + 1) * 100}`}>
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-black text-xl flex items-center justify-center mx-auto mb-5 shadow-xl shadow-blue-500/25 animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                  {item.step}
                </div>
                <h4 className="font-black text-gray-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/10 rounded-3xl p-8 sm:p-10 border border-blue-100 dark:border-blue-800/50">
            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6 text-center">Our Commitment to Every Project</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {commitments.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">Ready to Start?</h2>
          <p className="text-blue-100/90 mb-8">Tell us what you need — we'll respond within 24 hours with a plan.</p>
          <Link href="/contact" className="btn-white text-base px-8 py-3">Start a Conversation <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
