import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function BusinessOwnershipPackages() {
  const packages = [
    {
      name: "Business Starter Package",
      price: "₹1500",
      validity: "1 month",
      renewal: "₹1200 / 1 month",
      color: "text-blue-400",
      borderColor: "border-l-blue-400",
      items: [
        "1 business ownership slot",
        "White money - 2 Crore",
        "1 standard house with blip access",
        "1 custom car (blip access)",
        "1 business phone number (5 digits)",
      ],
    },
    {
      name: "Business Growth Package",
      price: "₹2500",
      validity: "2 months",
      renewal: "₹2200 / 2 months",
      color: "text-cyan-400",
      borderColor: "border-l-cyan-400",
      items: [
        "1 business ownership slot",
        "White money - 4 Crore",
        "1 standard house with blip access",
        "1 custom car (blip access)",
        "1 business phone number (4 digits)",
      ],
    },
    {
      name: "Business Elite Package",
      price: "₹4000",
      validity: "3 months",
      renewal: "₹3500 / 3 months",
      color: "text-primary",
      borderColor: "border-l-primary",
      featured: true,
      items: [
        "1 business ownership slot",
        "White money - 6 Crore",
        "1 open MLO",
        "1 custom car (blip access)",
        "1 business phone number (3 digits)",
      ],
      note: "Open MLO is only included in the top business package. Lower tiers receive house access with blip only.",
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
          <h1 className="text-lg font-bold text-primary">Business Ownership Packages</h1>
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
            Business Ownership Packages
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Structured like the gang section, but lighter and cheaper. Every tier includes a custom car with blip
            access; only the top tier includes an open MLO.
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
                  {pkg.note && <p className="text-xs text-foreground/60 italic">{pkg.note}</p>}
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
                <p className="text-xs text-foreground/50 mt-2">Renewal: {pkg.renewal}</p>
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

      {/* Info Section */}
      <section className="bg-card/50 border-t border-border py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Why Business Packages?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-primary mb-3">Ownership Slots</h3>
              <p className="text-foreground/70">
                Each package grants one business ownership slot, allowing you to establish and manage a legitimate
                business operation on the server.
              </p>
            </div>

            <div className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-primary mb-3">Progression Path</h3>
              <p className="text-foreground/70">
                Start with Starter, grow to Growth, and reach Elite status. Each tier unlocks better assets and
                resources for your business.
              </p>
            </div>

            <div className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-primary mb-3">MLO Access</h3>
              <p className="text-foreground/70">
                Only the Elite package includes an open MLO (Map Location Object) for a fully customized business
                interior. Lower tiers use standard houses.
              </p>
            </div>

            <div className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-primary mb-3">Blip Access</h3>
              <p className="text-foreground/70">
                All tiers include a custom car with blip access, making your business location easily identifiable on
                the map for customers and employees.
              </p>
            </div>
          </div>

          {/* Tier Comparison */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1"
          >
            <h3 className="text-lg font-bold text-primary mb-4">Tier Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-2 text-foreground/60">Feature</th>
                    <th className="text-center py-2 px-2 text-foreground/60">Starter</th>
                    <th className="text-center py-2 px-2 text-foreground/60">Growth</th>
                    <th className="text-center py-2 px-2 text-foreground/60">Elite</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-2 font-semibold">Business Slots</td>
                    <td className="text-center py-3 px-2">1</td>
                    <td className="text-center py-3 px-2">1</td>
                    <td className="text-center py-3 px-2">1</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-2 font-semibold">White Money</td>
                    <td className="text-center py-3 px-2">2 Cr</td>
                    <td className="text-center py-3 px-2">4 Cr</td>
                    <td className="text-center py-3 px-2">6 Cr</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-2 font-semibold">Property Type</td>
                    <td className="text-center py-3 px-2">House</td>
                    <td className="text-center py-3 px-2">House</td>
                    <td className="text-center py-3 px-2">MLO</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-2 font-semibold">Phone Digits</td>
                    <td className="text-center py-3 px-2">5</td>
                    <td className="text-center py-3 px-2">4</td>
                    <td className="text-center py-3 px-2">3</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 font-semibold">Duration</td>
                    <td className="text-center py-3 px-2">1 mo</td>
                    <td className="text-center py-3 px-2">2 mo</td>
                    <td className="text-center py-3 px-2">3 mo</td>
                  </tr>
                </tbody>
              </table>
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
