import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-black text-sm">S</span>
              </div>
              <div className="leading-tight">
                <div className="font-bold text-white text-sm">Syntax Software</div>
                <div className="text-xs text-blue-400 font-medium -mt-0.5">Solutions</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Building the Digital Future of Ethiopia. Founded 2019, Addis Ababa.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://github.com/SYTAXSOFTWARESOLUTIONS" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-md bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/company/syntax-software-solutions" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-md bg-gray-800 hover:bg-blue-700 flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/syntax.software.solution" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-md bg-gray-800 hover:bg-pink-700 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Web Development", "Mobile Applications", "Gaming Platforms", "Enterprise Systems", "Bot Development", "Cloud & DevOps"].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Bole Dembel, Amir Commercial Complex, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">+251 945 455 141</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">+251 940 023 840</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">syntaxsoftwaresolution@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Mon–Fri: 8AM–6PM<br />Sat: 9AM–4PM<br />Support: 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <span>© {new Date().getFullYear()} Syntax Software Solutions. All rights reserved.</span>
          <span className="text-gray-600">syntaxsoftwaresolution.com</span>
        </div>
      </div>
    </footer>
  );
}
