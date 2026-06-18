import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Syntax Software Solutions — Building the Digital Future of Ethiopia",
  description: "Full-stack software company delivering websites, mobile apps, gaming platforms, enterprise systems, and AI-powered bots. Based in Addis Ababa, Ethiopia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
            <Navbar />
            <main className="flex-1 flex flex-col">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
