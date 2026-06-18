import Link from "next/link";
import {
  ArrowRight, Globe, Smartphone, Gamepad2, Building2, Bot, Cloud,
  CheckCircle, Star, Zap, Shield, Users, Award
} from "lucide-react";

const services = [
  { icon: <Globe className="w-5 h-5" />, title: "Web Development", desc: "Next.js & React — responsive, SEO-optimized, CMS-ready.", color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" },
  { icon: <Smartphone className="w-5 h-5" />, title: "Mobile Apps", desc: "Cross-platform iOS & Android with React Native.", color: "bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400" },
  { icon: <Gamepad2 className="w-5 h-5" />, title: "Gaming Platforms", desc: "Real-time multiplayer with payments & admin dashboards.", color: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400" },
  { icon: <Building2 className="w-5 h-5" />, title: "Enterprise Systems", desc: "POS, inventory, rental & debt tracking systems.", color: "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400" },
  { icon: <Bot className="w-5 h-5" />, title: "Bot Development", desc: "Telegram bots, AI chatbots, order & support automation.", color: "bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400" },
  { icon: <Cloud className="w-5 h-5" />, title: "Cloud & DevOps", desc: "AWS, Firebase, Docker, CI/CD pipelines & monitoring.", color: "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400" },
];

const stats = [
  { value: "50+", label: "Projects Delivered", icon: <Award className="w-5 h-5" /> },
  { value: "100+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> },
  { value: "5+", label: "Years of Excellence", icon: <Star className="w-5 h-5" /> },
  { value: "30+", label: "Expert Developers", icon: <Zap className="w-5 h-5" /> },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Java",
  "Laravel", "Spring Boot", "MongoDB", "PostgreSQL", "Docker", "AWS", "Firebase", "Tailwind CSS",
];

const testimonials = [
  { name: "Abebe Kebede", role: "CEO, Ethio Tech Solutions", quote: "Syntax Software delivered a world-class e-commerce platform. We saw 300% growth in online engagement.", stars: 5, initials: "AK" },
  { name: "Kebede Alemu", role: "CTO, Digital Ethiopia", quote: "Our user base grew by 250% after launching the mobile app they built. An exceptional, dedicated team.", stars: 5, initials: "KA" },
  { name: "Solomon Teklu", role: "Director, Ethiopian Finance Corp", quote: "Their professionalism and technical skills are unmatched. The enterprise system transformed our operations.", stars: 5, initials: "ST" },
];

const benefits = [
  "Cybersecurity audit on every project",
  "Agile sprints with regular demos",
  "Full product lifecycle support",
  "24/7 post-launch availability",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-48 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="glass rounded-full inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium mb-7 animate-fade-up">
              🇪🇹 Founded 2019 · Addis Ababa, Ethiopia
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-6 animate-fade-up delay-100">
              Building the
              <span className="block text-blue-200">Digital Future</span>
              <span className="block text-blue-300/70">of Ethiopia.</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100/90 mb-10 max-w-2xl leading-relaxed animate-fade-up delay-200">
              Full-stack software company delivering websites, mobile apps, gaming platforms, enterprise systems, and AI-powered bots — built to last.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <Link href="/contact" className="btn-white text-base px-7 py-3">
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/projects" className="glass btn-ghost text-white hover:bg-white/15 text-base px-7 py-3 rounded-xl font-semibold">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 64L1440 64L1440 24C1200 64 960 4 720 24C480 44 240 4 0 24L0 64Z" className="fill-white dark:fill-gray-950" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={s.label} className={`text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 animate-fade-up delay-${(i + 1) * 100}`}>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 mb-3">
                  {s.icon}
                </div>
                <div className="text-3xl font-black text-gray-900 dark:text-white">{s.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label"><Zap className="w-3.5 h-3.5" /> What We Build</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-4">Full-Stack Services</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">From MVPs to enterprise-grade systems — we cover the complete product lifecycle.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <div key={svc.title} className={`group p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 card-hover animate-fade-up delay-${(i + 1) * 75}`}>
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 ${svc.color}`}>
                  {svc.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{svc.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-outline">All Services <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <p className="section-label"><Shield className="w-3.5 h-3.5" /> Why Choose Us</p>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-5">
                We own every project<br />from start to finish.
              </h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                We're not a body shop. Every project gets our full team's attention — agile planning, sprint delivery, cybersecurity audits, and long-term support. That's the Syntax way.
              </p>
              <ul className="space-y-3 mb-8">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm">
                    <span className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn-primary">About Our Team <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-fade-up">
              {[
                { icon: "⚡", title: "Fast Delivery", desc: "Websites live in days, apps in weeks" },
                { icon: "🔒", title: "Always Secure", desc: "Security audit on every project we ship" },
                { icon: "⭐", title: "Top Quality", desc: "Clean, documented, maintainable code" },
                { icon: "🤝", title: "Full Support", desc: "We stay with you long after launch" },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-md transition-all duration-300">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-8">Our Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {techStack.map((tech) => (
              <span key={tech} className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl text-xs font-semibold border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-sm transition-all duration-200 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label"><Star className="w-3.5 h-3.5" /> Client Stories</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-4">Real Results, Real Businesses</h2>
            <p className="text-gray-500 dark:text-gray-400">What our clients across Ethiopia and beyond say about us.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`relative p-7 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-lg transition-all duration-300 animate-fade-up delay-${(i + 1) * 150}`}>
                <div className="absolute top-5 right-6 text-5xl font-black text-blue-100 dark:text-blue-900/50 leading-none select-none">"</div>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-5">Have a Project in Mind?</h2>
          <p className="text-blue-100/90 mb-10 text-lg">We respond within 24 hours. Let's build something great together.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-white text-base px-8 py-3">Contact Us <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/projects" className="glass text-white font-semibold text-base px-8 py-3 rounded-xl hover:bg-white/15 transition-all active:scale-[0.97]">
              See Our Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
