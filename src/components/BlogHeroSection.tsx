import { motion } from "framer-motion";
import { Library, Feather, Compass, Sparkles } from "lucide-react";

interface BlogHeroSectionProps {
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const categories = [
  { id: null, label: "All Posts", icon: Library },
  { id: "Research", label: "Research", icon: Compass },
  { id: "Engineering", label: "Engineering", icon: Sparkles },
  { id: "Career", label: "Career", icon: Feather },
];

export default function BlogHeroSection({
  activeCategory,
  onCategoryChange,
}: BlogHeroSectionProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-24 pb-12">
      {/* Layered background with warm gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-hqg-parchment via-background to-card dark:from-background dark:via-background dark:to-card" />

      {/* Decorative bookshelf pattern - subtle academic feel */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.025] dark:opacity-[0.015]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="shelf-pattern"
              width="20"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="8"
                width="20"
                height="2"
                fill="currentColor"
                className="text-hqg-umber"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#shelf-pattern)" />
        </svg>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-32 left-[10%] w-24 h-24 opacity-5 dark:opacity-[0.03]"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" className="text-hqg-umber">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle
            cx="50"
            cy="50"
            r="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-24 right-[15%] w-32 h-32 opacity-5 dark:opacity-[0.03]"
        animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <svg viewBox="0 0 100 100" className="text-hqg-verdigris">
          <polygon
            points="50,5 95,95 5,95"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <polygon
            points="50,25 80,85 20,85"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-hqg-umber/40" />
            <Library className="w-4 h-4 text-hqg-umber" />
            <span className="font-ui text-xs font-bold uppercase tracking-[0.15em] text-hqg-umber">
              The Archive
            </span>
            <div className="h-px w-8 bg-hqg-umber/40" />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl tracking-[-0.02em] leading-[1.1] text-foreground mb-6"
          >
            <span className="font-display font-semibold">Insights from </span>
            <span className="font-editorial italic text-hqg-umber">
              the lab
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl leading-[1.7] text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Research notes, engineering deep-dives, and lessons learned from
            building systematic trading strategies at scale.
          </motion.p>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category.id;
              const Icon = category.icon;

              return (
                <button
                  key={category.label}
                  onClick={() => onCategoryChange(category.id)}
                  className={`
                    group flex items-center gap-2 px-4 py-2.5 rounded-sm font-ui text-sm font-semibold uppercase tracking-[0.04em]
                    transition-all duration-200 border
                    ${
                      isActive
                        ? "bg-hqg-umber text-white border-hqg-umber shadow-sm"
                        : "bg-card/50 text-muted-foreground border-border hover:border-hqg-umber/40 hover:text-foreground"
                    }
                  `}
                >
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive
                        ? "text-white/80"
                        : "text-muted-foreground/60 group-hover:text-hqg-umber"
                    }`}
                  />
                  {category.label}
                </button>
              );
            })}
          </motion.div>

          {/* Decorative divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex items-center justify-center gap-4"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-border" />
            <div className="w-1.5 h-1.5 rounded-full bg-hqg-umber/40" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-border" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
