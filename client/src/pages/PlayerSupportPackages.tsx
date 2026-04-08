import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

export default function PlayerSupportPackages() {
  const [selectedDuration, setSelectedDuration] = useState<"1month" | "3months">("1month");

  const packages = [
    {
      name: "Basic Package",
      price1Month: "₹499",
      price3Months: "₹1299",
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
      price1Month: "₹999",
      price3Months: "₹2599",
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
      price1Month: "₹1499",
      price3Months: "₹3899",
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
      price1Month: "₹2299",
      price3Months: "₹5999",
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
      price1Month: "₹3499",
      price3Months: "₹8999",
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

  const currentPrice = (pkg: typeof packages[0]) => {
    return selectedDuration === "1month" ? pkg.price1Month : pkg.price3Months;
  };

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
          <h1 className="text-lg font-bold text-primary">Player Support Packages</h1>
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
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Player Support Packages
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Memberships tuned to feel stronger than buying small items one by one, while stepping up cleanly tier by
            tier.
          </p>
        </motion.div>
      </section>

      {/* Duration Toggle */}
      <section className="container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-4"
        >
          <button
            onClick={() => setSelectedDuration("1month")}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              selectedDuration === "1month"
                ? "bg-primary text-primary-foreground shadow-lg glow-primary"
                : "bg-card border border-border text-foreground hover:border-primary/50"
            }`}
          >
            1 Month
          </button>
          <button
            onClick={() => setSelectedDuration("3months")}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              selectedDuration === "3months"
                ? "bg-primary text-primary-foreground shadow-lg glow-primary"
                : "bg-card border border-border text-foreground hover:border-primary/50"
            }`}
          >
            3 Months
          </button>
        </motion.div>
      </section>

      {/* Packages Grid */}
      <section className="container pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              
              className={`bg-card/50 backdrop-blur-sm rounded-xl border-2 border-border p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 ${
                pkg.featured ? "ring-2 ring-primary/30" : ""
              } border-l-4 ${pkg.borderColor}`}
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

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-border">
                <p className="text-xs font-semibold text-foreground/60 mb-2 uppercase">Price</p>
                <motion.p
                  key={currentPrice(pkg)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl font-black text-primary"
                >
                  {currentPrice(pkg)}
                </motion.p>
                <p className="text-xs text-foreground/60 mt-2">
                  {selectedDuration === "1month" ? "per month" : "for 3 months"}
                </p>
              </div>

              {/* Inclusions */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-foreground/60 mb-4 uppercase">Includes</p>
                <ul className="space-y-3">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">✓</span>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
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
