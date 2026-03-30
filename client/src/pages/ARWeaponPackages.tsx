import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function ARWeaponPackages() {
  const packs = [
    { name: "Street Pack", count: "5 AR", price: "₹500", icon: "🔫" },
    { name: "Push Pack", count: "10 AR", price: "₹900", icon: "🔫" },
    { name: "War Pack", count: "20 AR", price: "₹1600", icon: "🔫" },
    { name: "Control Pack", count: "35 AR", price: "₹2500", icon: "🔫" },
    { name: "Domination Pack", count: "50 AR", price: "₹3400", icon: "🔫" },
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
          <h1 className="text-lg font-bold text-primary">AR Weapon Packages</h1>
          <div className="w-20" />
        </div>
      </nav>

      {/* Header */}
      <section className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            AR Weapon Packages
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Small quantities stay available, but bigger bundles are clearly better value.
          </p>
        </motion.div>
      </section>

      {/* Pricing Grid */}
      <section className="container pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packs.map((pack, idx) => {
            const pricePerAr = (parseInt(pack.price.replace("₹", "")) / parseInt(pack.count)).toFixed(2);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className={`premium-card ${idx === packs.length - 1 ? "featured-card" : ""}`}
              >
                <div className="text-4xl mb-4">{pack.icon}</div>

                <h3 className="text-2xl font-bold text-primary mb-2">{pack.name}</h3>

                <div className="mb-6 pb-6 border-b border-border">
                  <div className="price-display text-primary mb-2">{pack.price}</div>
                  <p className="text-sm text-foreground/60">One-time purchase</p>
                </div>

                <div className="mb-6 pb-6 border-b border-border">
                  <p className="text-xs font-semibold text-foreground/60 mb-2 uppercase">Includes</p>
                  <p className="text-lg font-bold text-primary">{pack.count}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-foreground/60 mb-2 uppercase">Price Per AR</p>
                  <p className="text-sm font-semibold text-accent">₹{pricePerAr}</p>
                </div>

                {idx === packs.length - 1 && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded">
                      BEST VALUE
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-card/50 border-t border-border py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="premium-card"
          >
            <h2 className="text-2xl font-bold text-primary mb-4">About AR Weapon Packages</h2>
            <p className="text-foreground/70 mb-6">
              AR weapon packages provide assault rifles for combat operations and gang activities. The pricing is
              structured so that larger bundles offer significantly better value per weapon, encouraging players to
              purchase bigger packs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-primary mb-2">Value Ladder</h3>
                <p className="text-foreground/70 text-sm">
                  Each tier offers progressively better pricing. The Domination Pack provides the lowest cost per AR,
                  making it the most efficient choice for serious players.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-2">Responsible Usage</h3>
                <p className="text-foreground/70 text-sm">
                  All weapons must be used responsibly within roleplay scenarios. Misuse or excessive violence may
                  result in revocation of benefits.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-2">Gang Operations</h3>
                <p className="text-foreground/70 text-sm">
                  These packages are popular among gang members for coordinated operations. Combine with gang packages
                  for maximum efficiency.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-2">Combo Integration</h3>
                <p className="text-foreground/70 text-sm">
                  AR weapons are included in combo packs alongside BIG C and BIG J for comprehensive criminal supply
                  bundles.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
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
