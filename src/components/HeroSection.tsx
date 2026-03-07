import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 40px,
          hsl(var(--foreground)) 40px,
          hsl(var(--foreground)) 41px
        ),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 40px,
          hsl(var(--foreground)) 40px,
          hsl(var(--foreground)) 41px
        )`
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="font-ui text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
                University of Connecticut
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.02em] leading-[1.1] text-foreground"
            >
              Systematic Alpha,{" "}
              <span className="font-display font-light italic text-primary">
                Built by Students
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg leading-[1.7] text-secondary-foreground max-w-xl"
            >
              HQG is a quantitative trading group at UConn focused on deploying
              live systematic strategies, generating alpha, and building a
              pipeline to the industry's top quant firms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#about"
                className="px-6 py-3 font-ui font-semibold text-sm uppercase tracking-[0.06em] bg-primary text-primary-foreground hover:bg-hqg-terracotta transition-colors duration-200 rounded-sm"
              >
                Learn More
              </a>
              <a
                href="#apply"
                className="px-6 py-3 font-ui font-semibold text-sm uppercase tracking-[0.06em] border border-border text-foreground hover:bg-secondary transition-colors duration-200 rounded-sm"
              >
                Join Us →
              </a>
            </motion.div>
          </div>

          {/* Right: Decorative data viz */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative">
              {/* Terminal-style card */}
              <div className="bg-card border border-border rounded-sm p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-hqg-terracotta/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-accent/40" />
                  <span className="ml-2 font-mono-hqg text-xs text-muted-foreground">
                    hqg_strategy_v3.py
                  </span>
                </div>
                <pre className="font-mono-hqg text-[13px] leading-relaxed text-foreground/80 overflow-hidden">
                  <code>{`import numpy as np
from hqg.core import Strategy

class MomentumAlpha(Strategy):
    """Mean-reversion overlay on
    cross-sectional momentum."""

    lookback = 63  # trading days
    universe = "SP500"

    def generate_signals(self, data):
        returns = data.pct_change(
            self.lookback
        )
        z_scores = (
            returns - returns.mean()
        ) / returns.std()
        return -z_scores.clip(-3, 3)`}</code>
                </pre>
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-sm p-4 shadow-md">
                <p className="font-mono-hqg text-xs text-muted-foreground uppercase tracking-wider">Sharpe Ratio</p>
                <p className="text-2xl font-bold text-accent mt-1">2.34</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom ticker */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-background/50 backdrop-blur-sm py-3 overflow-hidden">
        <div className="animate-ticker flex whitespace-nowrap gap-12">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 text-xs font-mono-hqg text-muted-foreground">
              <span>SYSTEMATIC TRADING</span>
              <span className="text-primary">●</span>
              <span>STATISTICAL ARBITRAGE</span>
              <span className="text-primary">●</span>
              <span>MACHINE LEARNING</span>
              <span className="text-primary">●</span>
              <span>RISK MANAGEMENT</span>
              <span className="text-primary">●</span>
              <span>QUANTITATIVE RESEARCH</span>
              <span className="text-primary">●</span>
              <span>ALPHA GENERATION</span>
              <span className="text-primary">●</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
