import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function CustomHouseAccess() {
  const packages = [
    {
      duration: "1 month",
      price: "₹799",
      includes: ["1 custom house"],
      pricePerMonth: "₹799",
    },
    {
      duration: "2 months",
      price: "₹1399",
      includes: ["1 custom house"],
      pricePerMonth: "₹699.50",
      highlight: true,
    },
    {
      duration: "3 months",
      price: "₹1899",
      includes: ["1 custom house"],
      pricePerMonth: "₹633.33",
      highlight: true,
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
          <h1 className="text-lg font-bold text-primary">Custom House Access</h1>
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
            Custom House Access
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Small custom homes only. Mansions and oversized luxury homes are not allowed.
          </p>
        </motion.div>
      </section>

      {/* Pricing Grid */}
      <section className="container pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 ${pkg.highlight ? "border-l-4 border-l-primary" : ""}`}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">{pkg.duration}</h3>
                <p className="text-sm text-foreground/60">Continuous access</p>
              </div>

              <div className="mb-6 pb-6 border-b border-border">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{pkg.price}</div>
                <p className="text-sm text-foreground/60">One-time purchase</p>
              </div>

              <div className="mb-6 pb-6 border-b border-border">
                <p className="text-xs font-semibold text-foreground/60 mb-2 uppercase">Includes</p>
                <ul className="space-y-1">
                  {pkg.includes.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-2 text-sm">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold text-foreground/60 mb-2 uppercase">Effective Rate</p>
                <p className="text-lg font-bold text-accent">{pkg.pricePerMonth}</p>
              </div>

              {pkg.highlight && (
                <div className="mt-6 pt-6 border-t border-border">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded">
                    BEST VALUE
                  </span>
                </div>
              )}
            </motion.div>
          ))}
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
            className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 mb-8"
          >
            <h2 className="text-2xl font-bold text-primary mb-4">About Custom House Access</h2>
            <p className="text-foreground/70 mb-6">
              Custom house access allows players to use one custom residential property for a specified duration. Only
              small houses are permitted—no mansions, villas, or oversized luxury properties. All house files and
              interiors remain subject to staff approval.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-primary mb-2">Time-Based Efficiency</h3>
                <p className="text-foreground/70 text-sm">
                  The 3-month package offers the lowest cost per month, making it ideal for players seeking long-term
                  residential access.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-2">Small Houses Only</h3>
                <p className="text-foreground/70 text-sm">
                  Only small residential properties are permitted. Mansions, villas, and oversized luxury homes are
                  explicitly not allowed.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-2">Staff Approval</h3>
                <p className="text-foreground/70 text-sm">
                  All house files and interiors must be approved by staff before use. Ensure your property meets server
                  standards.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-2">Renewal Options</h3>
                <p className="text-foreground/70 text-sm">
                  When your access expires, you can renew for another period. Plan ahead to maintain continuous
                  residence.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 border-l-4 border-l-destructive"
          >
            <h3 className="text-lg font-bold text-destructive mb-3">Important Restrictions</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-destructive font-bold">⚠️</span>
                <span className="text-foreground/70">
                  <strong>Small Houses Only:</strong> Custom houses must be small residential properties. Large villas,
                  mansions, and oversized luxury properties are not permitted.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-destructive font-bold">⚠️</span>
                <span className="text-foreground/70">
                  <strong>Staff Approval Required:</strong> All house files and interiors must be approved by staff
                  before use. Unapproved properties will not be granted access.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-destructive font-bold">⚠️</span>
                <span className="text-foreground/70">
                  <strong>One House Per Package:</strong> Each purchase grants access to one custom house. Purchase
                  multiple packages if you need multiple properties.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-destructive font-bold">⚠️</span>
                <span className="text-foreground/70">
                  <strong>Expiry & Renewal:</strong> Access expires when the duration ends. Renew before expiry to
                  maintain continuous residence.
                </span>
              </li>
            </ul>
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
