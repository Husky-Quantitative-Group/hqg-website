import { motion } from "framer-motion";

const roles = [
  {
    title: "Software Engineer",
    icon: "{ }",
    iconBg: "bg-hqg-verdigris/15",
    iconText: "text-hqg-verdigris",
    accent: "text-hqg-verdigris",
    description:
      "Build the infrastructure that powers our trading systems. You'll work on low-latency data pipelines, execution engines, and tools to empower our researchers.",
    projects: [
      "High-frequency market making infrastructure",
      "Backtesting framework with event-driven simulation",
      "Strategy R&D dashboard and analytics",
      "Performance optimization of core systems",
    ],
  },
  {
    title: "Quantitative Researcher",
    icon: "∑",
    iconBg: "bg-hqg-umber/15",
    iconText: "text-hqg-umber",
    accent: "text-hqg-umber",
    description:
      "Develop and validate systematic trading strategies. You'll dive deep into market data, build factor models, and turn hypotheses into live alpha.",
    projects: [
      "Cross-sectional momentum and mean reversion models",
      "Alternative data signals (NLP, sentiment analysis)",
      "Risk modeling and portfolio optimization",
      "Prediction market arbitrage",
    ],
  },
];

export default function ApplySection() {
  return (
    <section id="apply" className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-ui text-xs font-bold uppercase tracking-[0.12em] text-primary mb-4">
            Join the Team
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.01em] text-foreground mb-6">
            Build something that matters
          </h2>
          <p className="text-base leading-[1.7] text-secondary-foreground max-w-2xl mx-auto">
            We welcome all students at the University of Connecticut to apply. 
            Our strongest applicants are highly self-motivated, eager to learn, and willing to take on hard problems amid ambiguity. 
            This is an entrepreneurial space where you move fast, dive technically deep, and work collaboratively. You do not need prior quant/finance experience to apply. 
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card border border-border rounded-sm p-8 flex flex-col"
            >

              <h3 className="text-3xl font-ui font-normal text-foreground mb-3">
                {role.title}
              </h3>
              <p className="text-sm leading-[1.7] text-muted-foreground mb-6">
                {role.description}
              </p>

              <div className="mb-8 flex-grow">
                <p className="font-mono-hqg text-xs uppercase tracking-[0.1em] text-muted-foreground mb-3">
                  Projects you'll work on
                </p>
                <ul className="space-y-2">
                  {role.projects.map((project) => (
                    <li
                      key={project}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <span className={`${role.accent} mt-1`}>›</span>
                      {project}
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="/apply"
            className="inline-block px-8 py-3 font-ui font-semibold text-sm uppercase tracking-[0.06em] bg-primary text-primary-foreground hover:bg-hqg-terracotta transition-colors duration-200 rounded-sm"
          >
            JOIN OUR TEAM
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            Questions?{" "}
            <a
              href="mailto:hqg@uconn.edu"
              className="text-primary hover:underline"
            >
              Reach out to us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
