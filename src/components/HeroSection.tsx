import { motion } from "framer-motion";

const companyLogos = [
  { name: "JPMorgan Chase", src: "/icons/logos/companies/jpmorgan-chase.svg" },
  { name: "Microsoft", src: "/icons/logos/companies/microsoft.svg" },
  { name: "SpaceX", src: "/icons/logos/companies/spacex.svg" },
  { name: "IBM", src: "/icons/logos/companies/ibm.svg" },
  { name: "Capital One", src: "/icons/logos/companies/capital-one.svg" },
  { name: "Epic Systems", src: "/icons/logos/companies/epic-systems.svg" },
  { name: "Pure Storage", src: "/icons/logos/companies/pure-storage.svg" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 pb-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.03]" style={{
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
              className="text-4xl sm:text-5xl lg:text-6xl tracking-[-0.02em] leading-[1.1] text-foreground"
              style={{ filter: "url(#grain)" }}
            >
              <span className="font-display font-semibold">Husky Quant Group</span><span className="font-editorial italic font-bold"></span>
            </motion.h1>

            {/* SVG filter for grain effect */}
            <svg className="absolute w-0 h-0">
              <defs>
                <filter id="grain">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.8"
                    numOctaves="4"
                    stitchTiles="stitch"
                    result="noise"
                  />
                  <feColorMatrix
                    in="noise"
                    type="saturate"
                    values="0"
                    result="monoNoise"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="monoNoise"
                    mode="multiply"
                    result="grainText"
                  />
                  <feComposite
                    in="grainText"
                    in2="SourceGraphic"
                    operator="in"
                  />
                </filter>
              </defs>
            </svg>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg leading-[1.7] text-secondary-foreground max-w-xl"
            >
              HQG is The University of Connecticut's premier student-run systemic fund, focused on researching financial markets 
              and deploying live strategies. Keep up with our work through our blog posts!
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

          {/* Right: Polaroid photo collage */}
          <div className="lg:col-span-5 hidden lg:flex justify-center items-center">
            <div className="relative w-[1080px] h-[450px]">
              {/* First polaroid - rotated left, behind */}
              <motion.div
                initial={{ opacity: 0, x: 60, rotate: 0 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="absolute -left-16 top-12 z-10"
              >
                <div className="bg-black/60 p-2 pb-4 shadow-[0_8px_30px_rgba(0,0,0,0.4)] rotate-[-2deg] hover:rotate-[-4deg] hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src="/icons/groupshots/presentation1.jpg"
                    alt="HQG club presentation"
                    className="w-[420px] h-[360px] object-cover"
                  />
                </div>
              </motion.div>

              {/* Second polaroid - rotated right, in front, overlapping */}
              <motion.div
                initial={{ opacity: 0, x: 80, rotate: 0 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="absolute -right-20 top-4 z-20"
              >
                <div className="bg-black/30 p-2 pb-4  rotate-[2deg] hover:rotate-[4deg] hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src="/icons/groupshots/presentation3.jpg"
                    alt="HQG team meeting"
                    className="w-[420px] h-96 object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>


      {/* Bottom ticker - Company placements */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-background/50 backdrop-blur-sm py-4 overflow-hidden">
        <div className="animate-ticker flex whitespace-nowrap items-center gap-16">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              {companyLogos.map((company) => (
                <img
                  key={company.name}
                  src={company.src}
                  alt={company.name}
                  className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
