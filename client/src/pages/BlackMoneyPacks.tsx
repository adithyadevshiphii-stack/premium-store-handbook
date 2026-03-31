import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function BlackMoneyPacks() {
  const packs = [
    {
      name: "Small Drop",
      amount: "2 Crore",
      price: "₹299",
      limit: "Max 3 per player / month",
      icon: "💰",
    },
    {
      name: "Medium Drop",
      amount: "5 Crore",
      price: "₹599",
      limit: "Max 3 per player / month",
      icon: "💵",
    },
    {
      name: "Large Drop",
      amount: "8 Crore",
      price: "₹899",
      limit: "Max 3 per player / month",
      icon: "💸",
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
          <h1 className="text-lg font-bold text-primary">Black Money Packs</h1>
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
            Black Money Packs
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Priced high enough that memberships and gang bundles continue to feel premium.
          </p>
        </motion.div>
      </section>

      {/* Pricing Grid */}
      <section className="container pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packs.map((pack, idx) => (
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

              <div className="mb-6 pb-6 border-b border-border">
                <p className="text-xs font-semibold text-foreground/60 mb-2 uppercase">Includes</p>
                <p className="text-lg font-bold text-primary">{pack.amount} Black Money</p>
              </div>

              <div>
                <p className="text-xs font-semibold text-foreground/60 mb-2 uppercase">Purchase Limit</p>
                <p className="text-sm font-semibold text-foreground/80">{pack.limit}</p>
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
            <h2 className="text-2xl font-bold text-primary mb-4">About Black Money Packs</h2>
            <p className="text-foreground/70 mb-6">
              Black money packs are designed as standalone purchases for players who need additional illicit funds for
              criminal operations. These packs are priced to maintain the value of larger membership bundles and gang
              packages.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-primary mb-2">Purchase Limits</h3>
                <p className="text-foreground/70 text-sm">
                  Each player can purchase a maximum of 3 packs per month across all tiers. This prevents inflation and
                  maintains game balance.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-2">Pricing Strategy</h3>
                <p className="text-foreground/70 text-sm">
                  Black money packs are intentionally priced higher than individual items to encourage players to
                  purchase bundled packages instead.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-2">Value Progression</h3>
                <p className="text-foreground/70 text-sm">
                  The price-per-crore decreases as you buy larger packs, incentivizing players to purchase the Large
                  Drop when possible.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-2">Usage Notes</h3>
                <p className="text-foreground/70 text-sm">
                  Black money must be used responsibly within roleplay scenarios. Misuse may result in revocation of
                  benefits.
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
