import { useState } from "react";
import heroFig1 from "@/assets/hero-fig-1.jpg";
import heroFig2 from "@/assets/hero-fig-2.jpg";
import { ArrowUpRight, Github, Terminal } from "lucide-react";
import PlanetConstellation from "./PlanetConstellation";

// Constellation background with '+' stars
const ConstellationBackground = () => {
  // Pre-defined constellation points - concentrated more on the left side
  const stars = [
    // Left region cluster (x: 0-30)
    { x: 5, y: 12, opacity: 0.55 },
    { x: 12, y: 28, opacity: 0.5 },
    { x: 8, y: 45, opacity: 0.45 },
    { x: 18, y: 18, opacity: 0.4 },
    { x: 22, y: 55, opacity: 0.5 },
    { x: 15, y: 38, opacity: 0.35 },
    { x: 25, y: 32, opacity: 0.45 },
    { x: 10, y: 62, opacity: 0.4 },
    { x: 28, y: 22, opacity: 0.5 },
    { x: 20, y: 48, opacity: 0.35 },
    { x: 6, y: 72, opacity: 0.4 },
    { x: 24, y: 68, opacity: 0.45 },
    // Center-left region (x: 30-50)
    { x: 35, y: 15, opacity: 0.45 },
    { x: 42, y: 35, opacity: 0.4 },
    { x: 38, y: 52, opacity: 0.35 },
    { x: 45, y: 25, opacity: 0.4 },
    { x: 32, y: 42, opacity: 0.5 },
    { x: 48, y: 58, opacity: 0.35 },
    // Sparse right region (x: 50+)
    { x: 55, y: 18, opacity: 0.35 },
    { x: 68, y: 30, opacity: 0.3 },
    { x: 75, y: 45, opacity: 0.25 },
    { x: 62, y: 55, opacity: 0.3 },
    { x: 85, y: 22, opacity: 0.25 },
  ];

  // Constellation lines connecting stars in left region (subtle)
  const lines = [
    { x1: 5, y1: 12, x2: 18, y2: 18 },
    { x1: 18, y1: 18, x2: 28, y2: 22 },
    { x1: 12, y1: 28, x2: 25, y2: 32 },
    { x1: 25, y1: 32, x2: 35, y2: 15 },
    { x1: 8, y1: 45, x2: 22, y2: 55 },
    { x1: 22, y1: 55, x2: 38, y2: 52 },
    { x1: 10, y1: 62, x2: 24, y2: 68 },
    { x1: 32, y1: 42, x2: 45, y2: 25 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center">
      <svg
        className="w-full max-w-[1400px] h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Constellation lines */}
        {lines.map((line, i) => (
          <line
            key={`line-${i}`}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-muted-foreground/10"
          />
        ))}
        {/* Star points as '+' symbols */}
        {stars.map((star, i) => (
          <text
            key={`star-${i}`}
            x={`${star.x}%`}
            y={`${star.y}%`}
            fill="currentColor"
            fontSize="12"
            fontFamily="monospace"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-muted-foreground"
            style={{ opacity: star.opacity }}
          >
            +
          </text>
        ))}
      </svg>
    </div>
  );
};

const FeaturedCard = ({
  figure,
  figNum,
  title,
  description,
  tags,
  ctaLabel,
  ctaHref,
  githubHref,
}: {
  figure: string;
  figNum: number;
  title: string;
  description: string;
  tags: string[];
  ctaLabel: string;
  ctaHref: string;
  githubHref: string;
}) => (
  <div className="flex flex-col sm:flex-row gap-0 border border-border rounded-sm overflow-hidden bg-card">
    <div className="relative sm:w-[280px] h-[200px] sm:h-auto shrink-0 overflow-hidden">
      <img src={figure} alt={title} className="w-full h-full object-cover" />
      <div className="absolute top-3 left-3 flex items-center gap-1.5">
        <span className="w-3 h-3 border border-hqg-stone rounded-sm flex items-center justify-center">
          <span className="block w-1.5 h-1.5 bg-hqg-stone/40 rounded-[1px]" />
        </span>
      </div>
      <div className="absolute top-3 left-1/2 -translate-x-1/2">
        <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-hqg-stone border border-hqg-stone/50 px-2 py-0.5 bg-background/60 backdrop-blur-sm">
          [ Fig. {figNum} ]
        </span>
      </div>
      <div className="absolute top-3 right-3">
        <span className="w-3 h-3 border border-hqg-stone rounded-sm flex items-center justify-center">
          <span className="block w-1 h-1 bg-hqg-stone/40" />
        </span>
      </div>
    </div>
    <div className="flex flex-col justify-between p-5 sm:p-6 flex-1 min-w-0">
      <div>
        <h3 className="font-base text-lg sm:text-xl font-semibold text-foreground leading-tight mb-3 flex items-start gap-1.5">
          {title}
          <ArrowUpRight className="w-4 h-4 mt-0.5 shrink-0 text-muted-foreground" />
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-ui text-[10px] font-bold tracking-[0.06em] uppercase px-2.5 py-1 rounded-sm border border-border text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <a
          href={ctaHref}
          className="flex-1 text-center font-ui text-sm font-semibold py-2.5 border border-border rounded-sm text-foreground hover:bg-secondary transition-colors"
        >
          {ctaLabel}
        </a>
        <a
          href={githubHref}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border border-border rounded-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
        >
          <Github className="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
);

const EngineeringHeroSection = () => {
  const [showConstellation, setShowConstellation] = useState(false);

  return (
    <section className="relative border-border">
      {/* Hero header with darker background and constellation */}
      <div className="relative bg-[hsl(60,3%,11%)] pt-16">
        <ConstellationBackground />
        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10">
          {/* Top nav area */}
          <div className="flex items-center justify-between pt-6 pb-6 sm:pb-6">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-hqg-terminal-green" />
              <span className="font-mono text-xs tracking-[0.1em] uppercase text-muted-foreground">
                hqg/engineering
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowConstellation(!showConstellation)}
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                  showConstellation
                    ? "border-hqg-signal-amber bg-hqg-signal-amber/10"
                    : "border-border hover:border-muted-foreground"
                }`}
                title={showConstellation ? "Hide constellation" : "Show constellation"}
              >
                <svg
                  viewBox="0 0 24 24"
                  className={`w-4 h-4 transition-colors ${
                    showConstellation ? "text-hqg-signal-amber" : "text-muted-foreground"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </button>
              <div className="w-9 h-9 rounded-full border-2 border-hqg-signal-amber flex items-center justify-center">
                <span className="font-ui text-xs font-bold text-hqg-signal-amber">ENG</span>
              </div>
            </div>
          </div>

          {/* Hero headline with constellation */}
          <div className="relative pt-4 pb-8 sm:pb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
            <div className="flex-1 min-w-0">
              <h1 className="font-base text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-foreground leading-[1.1] tracking-[-0.02em] max-w-4xl animate-fade-up">
                Welcome to
                <br />
                HQG{" "}
                <span className="font-display text-hqg-signal-amber font-light italic">
                  Engineering
                </span>
              </h1>
              <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Open-source tools, systems deep dives, and research from a
                student-run quantitative trading firm. We build infrastructure
                for systematic markets.
              </p>
            </div>

            {/* 3D Planet Constellation - absolutely positioned to not affect layout */}
            {showConstellation && (
              <div
                className="hidden lg:block absolute right-0 top-0 bottom-0 animate-fade-up pointer-events-auto overflow-visible"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="relative h-full flex items-center" style={{ transform: "scale(0.75)", transformOrigin: "right center" }}>
                  <PlanetConstellation />
                </div>
              </div>
            )}
          </div>

          {/* Featured section labels */}
          <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted-foreground">
                / Featured Projects
              </span>
              <span className="font-mono text-[11px] text-hqg-terminal-green cursor-blink">
                ▌
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured cards section - regular background */}
      <div className="relative bg-background pb-8 sm:pb-8">
        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10">
          {/* Featured cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <FeaturedCard
            figure={heroFig1}
            figNum={1}
            title="Backtesting Engine"
            description="Our open-source, event-driven backtesting framework for systematic strategy research. Supports multi-asset, fractional fills, and custom fee models."
            tags={["Python", "FastAPI", "Docker"]}
            ctaLabel="Read the docs"
            ctaHref="#"
            githubHref="https://github.com/Husky-Quantitative-Group/hqg-backtester"
          />
          <FeaturedCard
            figure={heroFig2}
            figNum={2}
            title="Research Dashboard"
            description="An internal platform for creating trading strategies, running backtests, and managing live portfolios. Open to UConn students."
            tags={["TypeScript", "Python", "FastAPI", "AWS"]}
            ctaLabel="Read the docs"
            ctaHref="#"
            githubHref="https://github.com/Husky-Quantitative-Group/hqg-dashboard"
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringHeroSection;
