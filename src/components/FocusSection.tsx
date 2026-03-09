import { motion } from "framer-motion";

const focusAreas = [
  {
    category: "Research",
    items: [
      { title: "Statistical Arbitrage", desc: "Cross-sectional mean reversion and momentum factor strategies" },
      { title: "Alternative Data", desc: "NLP sentiment, satellite imagery, and web-scraped signals" },
      { title: "Market Microstructure", desc: "Order book dynamics, optimal execution, and market impact modeling" },
    ],
  },
  {
    category: "Engineering",
    items: [
      { title: "Execution Engine", desc: "Low-latency order routing with smart routing algorithms" },
      { title: "Data Pipeline", desc: "Real-time and historical data ingestion across multiple vendors" },
      { title: "Backtesting Framework", desc: "Event-driven simulation with realistic transaction costs" },
    ],
  },
];

export default function FocusSection() {
  return (
    <section id="research" className="py-16 lg:py-20 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-ui text-xs font-bold uppercase tracking-[0.12em] text-primary mb-4">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.01em] text-foreground">
            Our focus areas
          </h2>
        </motion.div>

        <div className="space-y-16" id="engineering">
          {focusAreas.map((area, areaIdx) => (
            <div key={area.category}>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-mono-hqg text-xs uppercase tracking-[0.1em] text-muted-foreground mb-6 pb-3 border-b border-border"
              >
                {area.category}
              </motion.h3>
              <div className="grid md:grid-cols-3 gap-6">
                {area.items.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group p-6 rounded-sm border border-transparent hover:border-border hover:bg-background transition-all duration-300"
                  >
                    <h4 className="text-base font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-[1.7] text-muted-foreground">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
