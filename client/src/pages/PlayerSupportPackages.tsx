import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function PlayerSupportPackages() {
  const packages = [
    {
      name: "Basic Package",
      price: "₹499",
      validity: "1 month",
      color: "text-blue-400",
      borderColor: "border-l-blue-400",
      items: [
        "4 digit phone number",
        "White money - 1 Crore",
        "1 premium car",
        "1 custom number plate",
      ],
    },
    {
      name: "Advanced Package",
      price: "₹999",
      validity: "1 month",
      color: "text-cyan-400",
      borderColor: "border-l-cyan-400",
      items: [
        "3 digit phone number",
        "White money - 2 Crore",
        "2 premium cars",
        "2 premium bikes",
        "4 custom number plates",
      ],
    },
    {
      name: "Elite Package",
      price: "₹1499",
      validity: "1 month",
      color: "text-primary",
      borderColor: "border-l-primary",
      featured: true,
      items: [
        "3 digit phone number",
        "White money - 4 Crore",
        "Black money - 1 Crore",
        "3 premium cars",
        "3 premium bikes",
        "1 helicopter",
        "6 custom number plates",
      ],
    },
    {
      name: "Ultimate Package",
      price: "₹2299",
      validity: "1 month",
      color: "text-amber-400",
      borderColor: "border-l-amber-400",
      items: [
        "2 digit phone number",
        "White money - 5 Crore",
        "Black money - 2 Crore",
        "4 premium cars",
        "4 premium bikes",
        "1 helicopter",
        "1 plane",
        "1 boat",
        "1 house",
        "8 custom number plates",
      ],
    },
    {
      name: "Supreme Package",
      price: "₹3499",
      validity: "1 month",
      color: "text-primary",
      borderColor: "border-l-primary",
      featured: true,
      items: [
        "2 digit phone number",
        "White money - 8 Crore",
        "Black money - 3 Crore",
        "5 premium cars",
        "5 premium bikes",
        "1 custom helicopter",
        "1 boat",
        "1 plane",
        "1 custom house",
        "10 custom number plates",
      ],
      description: "Top-tier package designed to feel smarter than stacking multiple medium purchases.",
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
          <h1 className="text-lg font-bold text-primary">Player Support Packages</h1>
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
            Player Support Packages
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Memberships tuned to feel stronger than buying small items one by one, while stepping up cleanly tier by
            tier.
          </p>
        </motion.div>
      </section>

      {/* Packages Grid */}
      <section className="container pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className={`bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 ${pkg.featured ? "border-l-4 border-l-primary" : ""} border-l-4 ${pkg.borderColor}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className={`text-2xl font-bold ${pkg.color} mb-2`}>{pkg.name}</h3>
                  {pkg.description && (
                    <p className="text-xs text-foreground/60 italic">{pkg.description}</p>
                  )}
                </div>
                {pkg.featured && (
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded whitespace-nowrap">
                    BEST VALUE
                  </span>
                )}
              </div>

              <div className="mb-6 pb-6 border-b border-border">
                <div className="text-4xl md:text-5xl font-bold mb-2">{pkg.price}</div>
                <p className="text-sm text-foreground/60">{pkg.validity}</p>
              </div>

              <div>
                <p className="text-xs font-semibold text-foreground/60 mb-3 uppercase">Includes</p>
                <ul className="space-y-2">
                  {pkg.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-2 text-sm">
                      <span className={`${pkg.color} font-bold flex-shrink-0`}>✓</span>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison Info */}
      <section className="bg-card/50 border-t border-border py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Why These Packages?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-primary mb-3">Value Progression</h3>
              <p className="text-foreground/70">
                Each tier builds on the previous one, offering more assets, higher money amounts, and better phone
                numbers. The progression is designed to feel natural and rewarding.
              </p>
            </div>

            <div className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-primary mb-3">Bundle Advantage</h3>
              <p className="text-foreground/70">
                Buying a full package is always more efficient than purchasing items separately. The Elite and Supreme
                packages offer exceptional value for serious players.
              </p>
            </div>

            <div className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-primary mb-3">Asset Variety</h3>
              <p className="text-foreground/70">
                From basic cars and bikes to helicopters, planes, and custom houses, these packages provide diverse
                assets for different playstyles and RP scenarios.
              </p>
            </div>

            <div className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-primary mb-3">Money Management</h3>
              <p className="text-foreground/70">
                Both white money and black money are included in higher tiers, giving players flexibility in their
                financial operations within the game.
              </p>
            </div>
          </div>
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
