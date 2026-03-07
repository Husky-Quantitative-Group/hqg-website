import { motion } from "framer-motion";

const roles = [
  { title: "Quantitative Researcher", type: "Research", open: true },
  { title: "Software Engineer", type: "Engineering", open: true },
  { title: "Data Scientist", type: "Research", open: true },
  { title: "Risk Analyst", type: "Operations", open: false },
];

export default function ApplySection() {
  return (
    <section id="apply" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-ui text-xs font-bold uppercase tracking-[0.12em] text-primary mb-4"
            >
              Join the Team
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-semibold tracking-[-0.01em] text-foreground mb-6"
            >
              Build something that matters
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base leading-[1.7] text-secondary-foreground mb-8"
            >
              We're looking for curious, driven students who want to push
              beyond coursework. No prior quant experience required — just
              intellectual hunger and a willingness to learn.
            </motion.p>
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="border-l-2 border-primary pl-5"
            >
              <p className="font-editorial italic text-xl leading-[1.4] text-foreground">
                "The best way to learn quantitative finance is to do it."
              </p>
            </motion.blockquote>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-3">
              {roles.map((role, i) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center justify-between p-5 bg-card border border-border rounded-sm hover:border-primary/30 transition-colors duration-300 group"
                >
                  <div>
                    <h4 className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
                      {role.title}
                    </h4>
                    <span className="font-mono-hqg text-xs text-muted-foreground">
                      {role.type}
                    </span>
                  </div>
                  <span
                    className={`font-ui text-xs font-bold uppercase tracking-[0.08em] px-3 py-1 rounded-sm ${
                      role.open
                        ? "bg-accent/10 text-accent"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {role.open ? "Open" : "Closed"}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <a
                href="mailto:hqg@uconn.edu"
                className="inline-block px-8 py-3 font-ui font-semibold text-sm uppercase tracking-[0.06em] bg-primary text-primary-foreground hover:bg-hqg-terracotta transition-colors duration-200 rounded-sm"
              >
                Apply Now
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
