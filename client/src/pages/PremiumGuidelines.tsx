import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function PremiumGuidelines() {
  const guidelines = [
    {
      rule: "Non-transferable",
      details:
        "Premium benefits are for the buyer only and cannot be shared, sold, or gifted.",
      icon: "🔒",
    },
    {
      rule: "Server Rules Apply",
      details: "All city rules and RP expectations remain active for premium players.",
      icon: "📜",
    },
    {
      rule: "Approval-based Assets",
      details:
        "Custom assets such as houses, MLOs, outfits, jackets, and vehicles may require staff approval.",
      icon: "✅",
    },
    {
      rule: "Usage Standards",
      details:
        "Aircraft, boats, special vehicles, weapons, and consumables must be used responsibly within RP.",
      icon: "⚖️",
    },
    {
      rule: "Expiry",
      details: "Time-based perks expire when the duration ends unless renewed.",
      icon: "⏰",
    },
    {
      rule: "No Refunds",
      details: "No refunds are issued after premium benefits have been granted.",
      icon: "💳",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ChevronLeft size={20} />
              <span className="font-semibold">Back</span>
            </a>
          </Link>
          <h1 className="text-lg font-bold text-primary">Premium Guidelines</h1>
          <div className="w-20" />
        </div>
      </nav>

      {/* Header */}
      <section className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Premium Guidelines
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            These rules apply across all premium purchases unless a section states otherwise.
          </p>
        </motion.div>
      </section>

      {/* Guidelines Grid */}
      <section className="container pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guidelines.map((guideline, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              
              className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl flex-shrink-0">{guideline.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">{guideline.rule}</h3>
                  <p className="text-foreground/70">{guideline.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Important Notes */}
      <section className="bg-card/50 border-t border-border py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8">Important Notes</h2>
          </motion.div>

          <div className="space-y-6">
            <div className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 border-l-4 border-l-accent">
              <h3 className="text-lg font-bold text-accent mb-2">Custom Assets Approval</h3>
              <p className="text-foreground/70">
                All custom houses, MLOs, outfits, jackets, and vehicles are subject to staff approval. Ensure your custom
                assets comply with server standards before use.
              </p>
            </div>

            <div className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 border-l-4 border-l-destructive">
              <h3 className="text-lg font-bold text-destructive mb-2">Responsible Usage</h3>
              <p className="text-foreground/70">
                Aircraft, boats, special vehicles, weapons, and consumables must be used responsibly within roleplay
                scenarios. Misuse may result in revocation of premium benefits.
              </p>
            </div>

            <div className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 border-l-4 border-l-primary">
              <h3 className="text-lg font-bold text-primary mb-2">Renewal & Expiry</h3>
              <p className="text-foreground/70">
                Premium benefits expire when the duration ends. Renew your package before expiry to maintain continuous
                access. No automatic renewals—manual renewal required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Upgrade?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Explore our premium packages and find the perfect bundle for your playstyle.
          </p>
          <Link href="/player-support-packages">
            <a>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Browse Support Packages
              </Button>
            </a>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background/50 py-12">
        <div className="container text-center text-sm text-foreground/60">
          <p>&copy; 2026 Premium Store Handbook. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
