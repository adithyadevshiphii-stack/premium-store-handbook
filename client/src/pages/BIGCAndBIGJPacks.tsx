import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function BIGCAndBIGJPacks() {
  const jPacks = [
    { name: "BIG J Small", amount: "100 Joint", price: "₹300", icon: "🌿" },
    { name: "BIG J Medium", amount: "250 Joint", price: "₹650", icon: "🌿" },
    { name: "BIG J Large", amount: "400 Joint", price: "₹950", icon: "🌿" },
  ];

  const cPacks = [
    { name: "BIG C Small", amount: "100 Cocaine", price: "₹300", icon: "❄️" },
    { name: "BIG C Medium", amount: "250 Cocaine", price: "₹650", icon: "❄️" },
    { name: "BIG C Large", amount: "400 Cocaine", price: "₹950", icon: "❄️" },
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
          <h1 className="text-lg font-bold text-primary">BIG C and BIG J Packs</h1>
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
            BIG C and BIG J Packs
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Simple and consistent so the logic stays easy to understand.
          </p>
        </motion.div>
      </section>

      {/* BIG J Section */}
      <section className="container py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-primary mb-8">BIG J Packs</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {jPacks.map((pack, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              
              className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{pack.icon}</div>

              <h3 className="text-2xl font-bold text-primary mb-2">{pack.name}</h3>

              <div className="mb-6 pb-6 border-b border-border">
                <div className="price-badge text-primary mb-2">{pack.price}</div>
                <p className="text-sm text-foreground/60">One-time purchase</p>
              </div>

              <div>
                <p className="text-xs font-semibold text-foreground/60 mb-2 uppercase">Includes</p>
                <p className="text-lg font-bold text-primary">{pack.amount}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BIG C Section */}
      <section className="container pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-primary mb-8">BIG C Packs</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cPacks.map((pack, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              
              className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{pack.icon}</div>

              <h3 className="text-2xl font-bold text-primary mb-2">{pack.name}</h3>

              <div className="mb-6 pb-6 border-b border-border">
                <div className="price-badge text-primary mb-2">{pack.price}</div>
                <p className="text-sm text-foreground/60">One-time purchase</p>
              </div>

              <div>
                <p className="text-xs font-semibold text-foreground/60 mb-2 uppercase">Includes</p>
                <p className="text-lg font-bold text-primary">{pack.amount}</p>
              </div>
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
            <h2 className="text-2xl font-bold text-primary mb-4">About BIG C and BIG J</h2>
            <p className="text-foreground/70 mb-6">
              BIG C (Cocaine) and BIG J (Joint) packs provide consumable supplies for criminal operations. Both product
              lines follow identical pricing and tier structure for consistency and ease of understanding.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-primary mb-2">Consistent Pricing</h3>
                <p className="text-foreground/70 text-sm">
                  Both BIG C and BIG J follow the same price points and tier structure. Small, Medium, and Large packs
                  are available for both products at identical pricing.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-2">Combo Advantage</h3>
                <p className="text-foreground/70 text-sm">
                  These packs are most valuable when combined with AR weapons in combo packages, which offer better
                  overall value than purchasing separately.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-2">Responsible Usage</h3>
                <p className="text-foreground/70 text-sm">
                  All consumables must be used responsibly within roleplay scenarios. Misuse may result in revocation
                  of benefits.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-2">Gang Operations</h3>
                <p className="text-foreground/70 text-sm">
                  These supplies are essential for gang operations and are included in gang packages for coordinated
                  group activities.
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
