import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function CustomVehicleAccess() {
  const packages = [
    {
      duration: "1 month",
      price: "₹699",
      includes: ["1 custom vehicle", "1 custom number plate"],
      pricePerMonth: "₹699",
    },
    {
      duration: "2 months",
      price: "₹1199",
      includes: ["1 custom vehicle", "1 custom number plate"],
      pricePerMonth: "₹599.50",
      highlight: true,
    },
    {
      duration: "3 months",
      price: "₹1599",
      includes: ["1 custom vehicle", "1 custom number plate"],
      pricePerMonth: "₹533.33",
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
          <h1 className="text-lg font-bold text-primary">Custom Vehicle Access</h1>
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
            Custom Vehicle Access
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            One custom vehicle, divided by time. Longer access is intentionally more efficient.
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
            <h2 className="text-2xl font-bold text-primary mb-4">About Custom Vehicle Access</h2>
            <p className="text-foreground/70 mb-6">
              Custom vehicle access allows players to use one custom vehicle for a specified duration. Each package
              includes a custom number plate to personalize your vehicle. Longer-term purchases offer better value per
              month.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-primary mb-2">Time-Based Efficiency</h3>
                <p className="text-foreground/70 text-sm">
                  The 3-month package offers the lowest cost per month, making it the most efficient choice for players
                  who want long-term vehicle access.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-2">Custom Number Plate</h3>
                <p className="text-foreground/70 text-sm">
                  Each package includes one custom number plate to personalize your vehicle and make it uniquely yours.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-2">Approval Required</h3>
                <p className="text-foreground/70 text-sm">
                  Custom vehicles are subject to staff approval. Ensure your vehicle design complies with server
                  standards.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-2">Renewal Options</h3>
                <p className="text-foreground/70 text-sm">
                  When your access expires, you can renew for another period. Plan ahead to maintain continuous access
                  to your vehicle.
                </p>
              </div>
            </div>
          </motion.div>

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
                  <strong>One Vehicle Per Package:</strong> Each purchase grants access to one custom vehicle. Purchase
                  multiple packages if you need multiple vehicles.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-foreground/70">
                  <strong>Staff Approval:</strong> All custom vehicles must be approved by staff before use. Ensure your
                  vehicle files meet server standards.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-foreground/70">
                  <strong>Expiry & Renewal:</strong> Access expires when the duration ends. Renew before expiry to
                  maintain continuous access.
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
