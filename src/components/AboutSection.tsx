import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Research",
    description:
      "We develop and rigorously backtest quantitative strategies across asset classes, drawing on academic finance, econometrics, and modern machine learning.",
  },
  {
    number: "02",
    title: "Engineering",
    description:
      "From data pipelines to execution systems, we build production-grade infrastructure in Python, C++, and Rust — the same stack used by top firms.",
  },
  {
    number: "03",
    title: "Deployment",
    description:
      "Our strategies don't live in notebooks. We deploy live systematic strategies with real risk management, position sizing, and performance monitoring.",
  },
];

const stats = [
  { value: "30+", label: "Active Members" },
  { value: "12", label: "Live Strategies" },
  { value: "3", label: "Years Running" },
  { value: "100%", label: "Student-Led" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-ui text-xs font-bold uppercase tracking-[0.12em] text-primary"
            >
              About HQG
            </motion.p>
          </div>
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-semibold tracking-[-0.01em] leading-[1.2] text-foreground mb-6"
            >
              Where academic rigor meets market reality
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg leading-[1.7] text-secondary-foreground max-w-2xl"
            >
              Founded at the University of Connecticut, HQG bridges the gap
              between classroom theory and institutional-grade quantitative
              finance. We don't simulate — we execute.
            </motion.p>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden mb-20">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card p-8 lg:p-10 group hover:bg-secondary/50 transition-colors duration-300"
            >
              <span className="font-mono-hqg text-xs text-muted-foreground">
                {pillar.number}
              </span>
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm leading-[1.7] text-secondary-foreground">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center lg:text-left"
            >
              <p className="text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-foreground">
                {stat.value}
              </p>
              <p className="font-ui text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
