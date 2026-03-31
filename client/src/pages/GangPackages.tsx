import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function GangPackages() {
  const packages = [
    {
      name: "Gang Starter Package",
      price: "₹2499",
      validity: "3 months",
      renewal: "₹2199 / 3 months",
      description: "Entry gang package for smaller groups that still need visible value.",
      items: [
        "1 x 4 digit phone number for leader",
        "2 x 4 digit phone numbers for co-leaders",
        "1 custom gang vehicle (4x4)",
        "Custom gang jacket",
        "White money - 5 Crore",
        "Black money - 7 Crore",
        "15 AR",
        "150 BIG C",
        "150 BIG J",
      ],
    },
    {
      name: "Gang Dominance Package",
      price: "₹4499",
      validity: "3 months",
      renewal: "₹3999 / 3 months",
      items: [
        "1 x 3 digit phone number for leader",
        "3 x 4 digit phone numbers for co-leaders",
        "1 custom gang vehicle (4x4 or 6x6)",
        "1 custom gang helicopter",
        "1 custom gang house",
        "Custom gang jacket",
        "White money - 10 Crore",
        "Black money - 15 Crore",
        "35 AR",
        "350 BIG C",
        "350 BIG J",
      ],
    },
    {
      name: "Gang Empire Package",
      price: "₹6499",
      validity: "3 months",
      renewal: "₹5799 / 3 months",
      description: "Highest gang bundle. Designed to look clearly stronger than buying assets and supplies separately.",
      featured: true,
      items: [
        "1 x 2 digit phone number for leader",
        "3 x 3 digit phone numbers for co-leaders",
        "1 custom gang vehicle (4x4)",
        "1 custom gang vehicle (6x6)",
        "1 custom gang helicopter",
        "1 custom gang house",
        "Full custom gang outfit / jacket (must be provided by the gang)",
        "White money - 15 Crore",
        "Black money - 25 Crore",
        "50 AR",
        "500 BIG C",
        "500 BIG J",
      ],
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
          <h1 className="text-lg font-bold text-primary">Gang Packages</h1>
          <div className="w-20" />
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663494392763/FtFaQwREi5ZpTonTRx3Xud/hero-gang-packages-Mb3Lpy6negUtiQM5tiyiQQ.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

        <div className="relative container py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Gang Packages</h1>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Gang bundles must always beat separate buying. These packages are positioned as the best-value route for
              serious gang progression.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="container py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              
              className={`premium-card-base ${pkg.featured ? "border-l-4 border-l-destructive" : ""}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-destructive mb-2">{pkg.name}</h3>
                  {pkg.description && (
                    <p className="text-xs text-foreground/60 italic">{pkg.description}</p>
                  )}
                </div>
                {pkg.featured && (
                  <span className="text-xs font-bold text-destructive bg-destructive/10 px-2 py-1 rounded whitespace-nowrap">
                    ULTIMATE
                  </span>
                )}
              </div>

              <div className="mb-6 pb-6 border-b border-border">
                <div className="price-badge mb-2">{pkg.price}</div>
                <p className="text-sm text-foreground/60">{pkg.validity}</p>
                <p className="text-xs text-foreground/50 mt-2">Renewal: {pkg.renewal}</p>
              </div>

              <div>
                <p className="text-xs font-semibold text-foreground/60 mb-3 uppercase">Includes</p>
                <ul className="space-y-2">
                  {pkg.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-2 text-sm">
                      <span className="text-destructive font-bold flex-shrink-0">✓</span>
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
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8">Why Gang Packages?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-primary mb-3">Complete Arsenal</h3>
              <p className="text-foreground/70">
                Each package includes weapons, supplies, vehicles, and money—everything a gang needs for coordinated
                operations.
              </p>
            </div>

            <div className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-primary mb-3">Leadership Hierarchy</h3>
              <p className="text-foreground/70">
                Phone numbers are allocated for leaders and co-leaders, establishing clear organizational structure and
                communication channels.
              </p>
            </div>

            <div className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-primary mb-3">Progression System</h3>
              <p className="text-foreground/70">
                Start with Starter, grow to Dominance, and reach Empire status. Each tier represents stronger gang
                presence and resources.
              </p>
            </div>

            <div className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-primary mb-3">Better Than Separate</h3>
              <p className="text-foreground/70">
                Buying a gang package is always more efficient than purchasing vehicles, weapons, and supplies
                separately.
              </p>
            </div>
          </div>

          {/* Tier Comparison Table */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 overflow-x-auto"
          >
            <h3 className="text-lg font-bold text-primary mb-4">Tier Comparison</h3>
            <table className="premium-table">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-2 text-foreground/60">Feature</th>
                  <th className="text-center py-2 px-2 text-foreground/60">Starter</th>
                  <th className="text-center py-2 px-2 text-foreground/60">Dominance</th>
                  <th className="text-center py-2 px-2 text-foreground/60">Empire</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-2 font-semibold">Leader Phone</td>
                  <td className="text-center py-3 px-2">4 digit</td>
                  <td className="text-center py-3 px-2">3 digit</td>
                  <td className="text-center py-3 px-2">2 digit</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-2 font-semibold">Co-Leader Phones</td>
                  <td className="text-center py-3 px-2">2 x 4 digit</td>
                  <td className="text-center py-3 px-2">3 x 4 digit</td>
                  <td className="text-center py-3 px-2">3 x 3 digit</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-2 font-semibold">Vehicles</td>
                  <td className="text-center py-3 px-2">1 (4x4)</td>
                  <td className="text-center py-3 px-2">1 (4x4/6x6)</td>
                  <td className="text-center py-3 px-2">2 (4x4 + 6x6)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-2 font-semibold">Helicopter</td>
                  <td className="text-center py-3 px-2">—</td>
                  <td className="text-center py-3 px-2">1</td>
                  <td className="text-center py-3 px-2">1</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-2 font-semibold">Gang House</td>
                  <td className="text-center py-3 px-2">—</td>
                  <td className="text-center py-3 px-2">1</td>
                  <td className="text-center py-3 px-2">1</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-2 font-semibold">White Money</td>
                  <td className="text-center py-3 px-2">5 Cr</td>
                  <td className="text-center py-3 px-2">10 Cr</td>
                  <td className="text-center py-3 px-2">15 Cr</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-2 font-semibold">Black Money</td>
                  <td className="text-center py-3 px-2">7 Cr</td>
                  <td className="text-center py-3 px-2">15 Cr</td>
                  <td className="text-center py-3 px-2">25 Cr</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-2 font-semibold">AR Weapons</td>
                  <td className="text-center py-3 px-2">15</td>
                  <td className="text-center py-3 px-2">35</td>
                  <td className="text-center py-3 px-2">50</td>
                </tr>
                <tr>
                  <td className="py-3 px-2 font-semibold">BIG C + BIG J</td>
                  <td className="text-center py-3 px-2">150 ea</td>
                  <td className="text-center py-3 px-2">350 ea</td>
                  <td className="text-center py-3 px-2">500 ea</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="container py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 border-l-4 border-l-accent"
        >
          <h3 className="text-lg font-bold text-accent mb-3">Important Notes</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span className="text-foreground/70">
                <strong>Custom Gang Outfit:</strong> The Empire package requires a custom gang outfit/jacket provided
                by the gang. This must be approved by staff.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span className="text-foreground/70">
                <strong>Staff Approval:</strong> All custom vehicles, helicopters, and houses are subject to staff
                approval before use.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span className="text-foreground/70">
                <strong>Responsible Usage:</strong> All weapons and supplies must be used responsibly within roleplay.
                Misuse may result in revocation of benefits.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span className="text-foreground/70">
                <strong>Renewal:</strong> Packages expire after 3 months. Renew before expiry to maintain gang benefits.
              </span>
            </li>
          </ul>
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
