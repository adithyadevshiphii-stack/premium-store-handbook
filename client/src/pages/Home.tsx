import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = [
  { title: "Premium Guidelines", href: "/premium-guidelines", icon: "📋", desc: "Server rules and approval process" },
  { title: "Phone Numbers", href: "/vanity-phone-numbers", icon: "📱", desc: "Custom phone numbers" },
  { title: "Player Support Packages", href: "/player-support-packages", icon: "⭐", desc: "Support tier packages", highlight: true },
  { title: "Black Money Packs", href: "/black-money-packs", icon: "💰", desc: "Illicit currency bundles" },
  { title: "AR Weapon Packages", href: "/ar-weapon-packages", icon: "🔫", desc: "Assault rifle collections" },
  { title: "BIG C and BIG J Packs", href: "/big-c-and-big-j-packs", icon: "🌿", desc: "Consumable supplies" },
  { title: "Combo Packs", href: "/combo-packs", icon: "📦", desc: "Complete bundles", highlight: true },
  { title: "Custom Vehicle Access", href: "/custom-vehicle-access", icon: "🚗", desc: "Exclusive vehicles" },
  { title: "Custom House Access", href: "/custom-house-access", icon: "🏠", desc: "Residential properties" },
  { title: "Business Ownership Packages", href: "/business-ownership-packages", icon: "💼", desc: "Business ventures", highlight: true },
  { title: "Gang Packages", href: "/gang-packages", icon: "👥", desc: "Gang organization bundles", highlight: true },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-primary via-primary/80 to-accent rounded-xl flex items-center justify-center shadow-lg glow-primary">
              <span className="text-background font-black text-lg tracking-wider">PSH</span>
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">Premium Store</h1>
              <p className="text-xs text-foreground/60">Official Handbook</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <Button variant="outline" size="sm" className="border-primary/50 hover:border-primary">
              Contact Support
            </Button>
          </motion.div>
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
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
          <div className="absolute inset-0 bg-radial-gradient from-primary/5 via-transparent to-transparent opacity-40" />
        </div>

        <div className="relative container py-24 md:py-40 lg:py-56">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <Sparkles size={20} className="text-primary" />
              <span className="text-sm font-semibold text-primary tracking-widest uppercase">
                Official Premium Portal
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              Premium Store Handbook
            </h1>

            <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl leading-relaxed font-light">
              Official pricing portal for premium packages, bundles, and exclusive access. Designed to make upgrades feel smarter and bundles feel stronger.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="premium-btn text-lg px-8 py-6 h-auto"
              >
                Explore Packages
                <ChevronRight size={20} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:border-primary text-lg px-8 py-6 h-auto"
              >
                Read Guidelines
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Sections Grid */}
      <section className="container py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Browse All Sections</h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Explore our comprehensive collection of premium packages, each carefully designed to provide exceptional value and exclusive benefits.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {sections.map((section, idx) => (
            <motion.div key={section.href} variants={itemVariants}>
              <Link href={section.href}>
                <div
                  className={`premium-card-base group cursor-pointer h-full flex flex-col ${
                    section.highlight ? "featured-card-base lg:col-span-1" : ""
                  }`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {section.icon}
                    </span>
                    {section.highlight && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-xs font-black text-primary bg-primary/20 px-3 py-1 rounded-full uppercase tracking-widest"
                      >
                        Featured
                      </motion.span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {section.title}
                  </h3>

                  <p className="text-sm text-foreground/60 mb-6 flex-grow">
                    {section.desc}
                  </p>

                  <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                    <span className="text-sm font-semibold">Explore</span>
                    <ChevronRight size={18} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* CTA Section */}
      <section className="container py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          
          className="premium-card-base featured-card-base text-center py-16 px-8"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Upgrade?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Choose your perfect package and unlock exclusive benefits. All purchases come with staff approval and full support.
          </p>
          <Button size="lg" className="premium-btn text-lg px-8 py-6 h-auto">
            View All Packages
            <ChevronRight size={20} className="ml-2" />
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background/50 py-12 mt-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-sm text-foreground/60"
          >
            <p className="mb-2">&copy; 2026 Premium Store Handbook. All rights reserved.</p>
            <p className="text-xs">Official pricing portal for premium packages and exclusive access.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
