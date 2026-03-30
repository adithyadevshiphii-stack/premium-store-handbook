import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function PhoneNumbers() {
  const packages = [
    { digits: "4 digit", price: "₹100", validity: "4 months" },
    { digits: "3 digit", price: "₹200", validity: "4 months" },
    { digits: "2 digit", price: "₹300", validity: "4 months" },
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
          <h1 className="text-lg font-bold text-primary">Phone Numbers</h1>
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
            Phone Numbers
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Short numbers are simple add-on purchases. Keep the value ladder clear with premium digit counts.
          </p>
        </motion.div>
      </section>

      {/* Pricing Grid */}
      <section className="container pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              
              className={`premium-card-base ${idx === 2 ? "border-l-4 border-l-primary" : ""}`}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">{pkg.digits}</h3>
                <p className="text-sm text-foreground/60">Phone Number</p>
              </div>

              <div className="mb-6">
                <div className="price-badge text-primary mb-2">{pkg.price}</div>
                <p className="text-sm text-foreground/60">One-time purchase</p>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm font-semibold text-foreground/80">Validity</p>
                <p className="text-lg font-bold text-primary">{pkg.validity}</p>
              </div>

              {idx === 2 && (
                <div className="mt-6 pt-6 border-t border-border">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded">
                    MOST POPULAR
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
            className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1"
          >
            <h2 className="text-2xl font-bold text-primary mb-4">About Vanity Numbers</h2>
            <p className="text-foreground/70 mb-4">
              Vanity phone numbers are simple, add-on purchases designed to keep the pricing value ladder clear and
              straightforward. Each tier offers progressively shorter numbers with the same validity period.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground/70">
                  <strong>4-digit numbers</strong> are the most affordable entry point for players who want a custom
                  number.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground/70">
                  <strong>3-digit numbers</strong> are more prestigious and command a higher price.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-foreground/70">
                  <strong>2-digit numbers</strong> are the most exclusive and expensive, reserved for the most dedicated
                  players.
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
