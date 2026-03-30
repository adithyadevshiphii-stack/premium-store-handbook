/**
 * Reusable Tailwind class names for premium components
 * These are used instead of custom @layer components to ensure proper Tailwind scanning
 */

export const premiumCard = "bg-card text-card-foreground rounded-lg border border-border p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1";

export const featuredCard = `${premiumCard} border-l-4 border-l-primary`;

export const sectionTitle = "text-3xl md:text-4xl font-bold text-primary mb-8";

export const priceDisplay = "text-4xl md:text-5xl font-bold";

export const inclusionBadge = "inline-block px-3 py-1 rounded text-xs font-semibold text-white";
