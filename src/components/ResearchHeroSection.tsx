import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Shield, Lightbulb } from "lucide-react";

const philosophyPillars = [
  {
    icon: TrendingUp,
    title: "Systematic Edge",
    description: "Consistent, low-beta performance with controlled drawdowns.",
  },
  {
    icon: Shield,
    title: "Risk-First",
    description: "Discipline enables intelligent leverage and scalable strategies.",
  },
  {
    icon: Lightbulb,
    title: "Creative Rigor",
    description: "Competing through creativity in overlooked market areas.",
  },
];

export default function ResearchHeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-24 pb-16">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-hqg-parchment via-background to-hqg-ivory dark:from-background dark:via-background dark:to-background" />

      {/* Subtle pastoral pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--hqg-umber)) 1px, transparent 1px),
                           radial-gradient(circle at 80% 30%, hsl(var(--hqg-umber)) 1px, transparent 1px),
                           radial-gradient(circle at 40% 70%, hsl(var(--hqg-umber)) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {/* Centered hero content */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <BookOpen className="w-4 h-4 text-hqg-umber" />
            <span className="font-ui text-xs font-bold uppercase tracking-[0.12em] text-hqg-umber">
              Research Philosophy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl tracking-[-0.02em] leading-[1.1] text-foreground mb-8"
          >
            <span className="font-display font-semibold">Turning insights into </span>
            <span className="font-editorial italic text-hqg-umber">systematic alpha</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl leading-[1.7] text-secondary-foreground max-w-3xl mx-auto mb-12"
          >
            We turn diverse inputs into systematic trades. Every signal is coded, tested,
            and monitored like a production system. Our focus on alternative data and
            creative approaches allows us to compete where others overlook.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#research-posts"
              className="px-6 py-3 font-ui font-semibold text-sm uppercase tracking-[0.06em] bg-hqg-umber text-white hover:bg-hqg-terracotta transition-colors duration-200 rounded-sm"
            >
              Explore Research
            </a>
            <a
              href="#apply"
              className="px-6 py-3 font-ui font-semibold text-sm uppercase tracking-[0.06em] border border-hqg-umber/30 text-hqg-umber hover:bg-hqg-umber/5 transition-colors duration-200 rounded-sm"
            >
              Join Our Team →
            </a>
          </motion.div>
        </div>

        {/* Philosophy pillars */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 grid sm:grid-cols-3 gap-6 lg:gap-8"
        >
          {philosophyPillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="relative p-6 bg-card/50 backdrop-blur-sm border border-hqg-umber/10 rounded-sm group hover:border-hqg-umber/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-sm bg-hqg-umber/10 flex items-center justify-center">
                  <pillar.icon className="w-5 h-5 text-hqg-umber" />
                </div>
                <h3 className="font-ui text-sm font-bold uppercase tracking-[0.06em] text-foreground">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
              {/* Corner accent */}
              <div className="absolute top-3 right-3 font-mono text-[10px] text-hqg-umber/40">
                0{index + 1}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Disciplines banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <p className="text-center font-mono text-xs text-muted-foreground tracking-[0.08em] uppercase mb-4">
            Our Disciplines
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Machine Learning",
              "Data Engineering",
              "Statistics",
              "Applied Math",
              "Macro Analysis",
              "Portfolio Construction",
            ].map((discipline) => (
              <span
                key={discipline}
                className="px-3 py-1.5 font-ui text-xs font-medium text-hqg-umber/80 bg-hqg-umber/5 border border-hqg-umber/10 rounded-sm"
              >
                {discipline}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
