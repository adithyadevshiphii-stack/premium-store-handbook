import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const sections = [
  { title: "Premium Guidelines", href: "/premium-guidelines", icon: "📋" },
  { title: "Vanity Phone Numbers", href: "/vanity-phone-numbers", icon: "📱" },
  { title: "Player Support Packages", href: "/player-support-packages", icon: "⭐", highlight: true },
  { title: "Black Money Packs", href: "/black-money-packs", icon: "💰" },
  { title: "AR Weapon Packages", href: "/ar-weapon-packages", icon: "🔫" },
  { title: "BIG C and BIG J Packs", href: "/big-c-and-big-j-packs", icon: "🌿" },
  { title: "Combo Packs", href: "/combo-packs", icon: "📦", highlight: true },
  { title: "Custom Vehicle Access", href: "/custom-vehicle-access", icon: "🚗" },
  { title: "Custom House Access", href: "/custom-house-access", icon: "🏠" },
  { title: "Business Ownership Packages", href: "/business-ownership-packages", icon: "💼", highlight: true },
  { title: "Gang Packages", href: "/gang-packages", icon: "👥", highlight: true },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-lg">PSH</span>
            </div>
            <h1 className="text-xl font-bold text-primary">Premium Store</h1>
          </div>
          <Button variant="outline" size="sm">
            Contact Support
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663494392763/FtFaQwREi5ZpTonTRx3Xud/hero-dark-premium-TAxTfmjjizDHe3xim2Nptj.webp')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        <div className="relative container py-24 md:py-32 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6">
              Premium Store Handbook
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl">
              Official pricing portal for premium packages, bundles, and exclusive access. Designed to make upgrades feel smarter and bundles feel stronger.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Explore Packages
              </Button>
              <Button size="lg" variant="outline">
                Read Guidelines
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="container py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Browse All Sections</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, idx) => (
            <motion.div
              key={section.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <Link href={section.href}>
                <div
                  className={`bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 group block h-full cursor-pointer ${
                    section.highlight ? "border-l-4 border-l-primary" : ""
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{section.icon}</span>
                    {section.highlight && (
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-4">
                    Explore this section to view all available packages and pricing.
                  </p>
                  <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold">View</span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-card/50 border-t border-border py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Why Choose Premium?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Value-Balanced Pricing",
                description:
                  "Small purchases remain available, but larger packs are intentionally priced to feel smarter.",
              },
              {
                title: "Bundles Feel Stronger",
                description:
                  "Gang bundles and premium bundles are positioned as the best-value options for serious players.",
              },
              {
                title: "Official & Secure",
                description:
                  "All purchases are official, non-transferable, and subject to server rules and staff approval.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1"
              >
                <h3 className="text-lg font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background/50 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold text-primary mb-4">Premium Store</h4>
              <p className="text-sm text-foreground/60">
                Official pricing portal for roleplay server premium packages.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/premium-guidelines">
                    <a className="text-foreground/60 hover:text-primary transition-colors">Guidelines</a>
                  </Link>
                </li>
                <li>
                  <Link href="/player-support-packages">
                    <a className="text-foreground/60 hover:text-primary transition-colors">Support Packages</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/gang-packages">
                    <a className="text-foreground/60 hover:text-primary transition-colors">Gang Packages</a>
                  </Link>
                </li>
                <li>
                  <Link href="/combo-packs">
                    <a className="text-foreground/60 hover:text-primary transition-colors">Combo Packs</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Support</h4>
              <p className="text-sm text-foreground/60">
                Questions? Contact our support team for assistance with purchases.
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
            <p>&copy; 2026 Premium Store Handbook. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
