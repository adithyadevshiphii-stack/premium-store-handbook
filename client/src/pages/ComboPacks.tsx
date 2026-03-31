import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function ComboPacks() {
  const packs = [
    {
      name: "Street Combo",
      price: "₹999",
      items: ["5 AR", "100 BIG C", "100 BIG J"],
      icon: "🎯",
      featured: false,
    },
    {
      name: "Push Combo",
      price: "₹1699",
      items: ["10 AR", "200 BIG C", "200 BIG J"],
      icon: "💪",
      featured: false,
    },
    {
      name: "War Combo",
      price: "₹2799",
      items: ["20 AR", "300 BIG C", "300 BIG J"],
      icon: "⚔️",
      featured: true,
    },
    {
      name: "Domination Combo",
      price: "₹3999",
      items: ["30 AR", "450 BIG C", "450 BIG J"],
      icon: "👑",
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
              <ChevronLeft size={20} />
              <span className="font-semibold">Back</span>
            </div>
          </Link>
          <h1 className="text-lg font-bold text-primary">Combo Packs</h1>
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
            Combo Packs
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            These bundles should always feel better than buying AR, BIG C, and BIG J separately.
          </p>
        </motion.div>
      </section>

      {/* Pricing Grid */}
      <section className="container pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {packs.map((pack, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              
              className={`premium-card-base ${pack.featured ? "border-l-4 border-l-primary" : ""}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-4xl mb-3">{pack.icon}</div>
                  <h3 className="text-2xl font-bold text-primary">{pack.name}</h3>
                </div>
                {pack.featured && (
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded whitespace-nowrap">
                    BEST VALUE
                  </span>
                )}
              </div>

              <div className="mb-6 pb-6 border-b border-border">
                <div className="price-badge text-primary mb-2">{pack.price}</div>
                <p className="text-sm text-foreground/60">One-time purchase</p>
              </div>

              <div>
                <p className="text-xs font-semibold text-foreground/60 mb-3 uppercase">Includes</p>
                <ul className="space-y-2">
                  {pack.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-2 text-sm">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-card/50 border-t border-border py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8">Why Combos Are Better</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-primary mb-3">Complete Supply Bundle</h3>
              <p className="text-foreground/70">
                Combo packs combine weapons, joints, and cocaine into one purchase. This is more efficient than buying
                each item separately.
              </p>
            </div>

            <div className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-primary mb-3">Superior Value</h3>
              <p className="text-foreground/70">
                The combined price of a combo pack is always lower than purchasing AR, BIG C, and BIG J separately at
                the same quantities.
              </p>
            </div>

            <div className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-primary mb-3">Gang Operations Ready</h3>
              <p className="text-foreground/70">
                Combo packs provide everything a gang needs for coordinated operations in one convenient bundle.
              </p>
            </div>

            <div className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-primary mb-3">Progression Path</h3>
              <p className="text-foreground/70">
                Start with Street Combo and progress to Domination Combo as your gang grows and needs more supplies.
              </p>
            </div>
          </div>

          {/* Value Comparison Table */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 overflow-x-auto"
          >
            <h3 className="text-lg font-bold text-primary mb-4">Value Breakdown</h3>
            <table className="premium-table">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-2 text-foreground/60">Pack</th>
                  <th className="text-right py-2 px-2 text-foreground/60">Price</th>
                  <th className="text-right py-2 px-2 text-foreground/60">AR Count</th>
                  <th className="text-right py-2 px-2 text-foreground/60">Consumables</th>
                </tr>
              </thead>
              <tbody>
                {packs.map((pack, idx) => (
                  <tr key={idx} className="border-b border-border/50">
                    <td className="py-3 px-2 font-semibold">{pack.name}</td>
                    <td className="text-right py-3 px-2 text-primary font-bold">{pack.price}</td>
                    <td className="text-right py-3 px-2">{pack.items[0]}</td>
                    <td className="text-right py-3 px-2">{pack.items[1]} + {pack.items[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
