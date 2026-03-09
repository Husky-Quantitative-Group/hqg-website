import { useState } from "react";
import { Github, Plus, Minus } from "lucide-react";

// ============================================================================
// PLANET DATA - Edit this to customize planets, stars, and their information
// ============================================================================
export interface PlanetData {
  id: string;
  name: string;
  description: string;
  githubUrl: string;
  type: "planet" | "star";
  size: "large" | "medium" | "small";
  // Position relative to center (in pixels, will be scaled)
  position: { x: number; y: number; z: number };
  // Optional orbit connection to another planet id
  orbitParent?: string;
}

export const CONSTELLATION_DATA: PlanetData[] = [
  {
    id: "hqg-dashboard",
    name: "Hqg-Dashboard",
    description: "Centralized hub for research backtesting & portfolio management",
    githubUrl: "https://github.com/Husky-Quantitative-Group/hqg-dashboard",
    type: "planet",
    size: "large",
    position: { x: 0, y: 0, z: 0 },
  },
  {
    id: "hqg-backtester",
    name: "Hqg-Backtester",
    description: "Our event-driven backtesting engine for systematic strategy research",
    githubUrl: "https://github.com/Husky-Quantitative-Group/hqg-backtester",
    type: "planet",
    size: "medium",
    position: { x: -120, y: -70, z: 30 },
    orbitParent: "hqg-dashboard",
  },
  {
    id: "hqg-engine",
    name: "Hqg-Engine",
    description: "High-performance execution engine for live trading operations",
    githubUrl: "https://github.com/Husky-Quantitative-Group/hqg-engine",
    type: "planet",
    size: "medium",
    position: { x: 130, y: -50, z: -20 },
    orbitParent: "hqg-dashboard",
  },
  {
    id: "hqg-platform",
    name: "Hqg-Platform",
    description: "Infrastructure platform powering our quantitative systems",
    githubUrl: "https://github.com/Husky-Quantitative-Group/hqg-platform",
    type: "star",
    size: "medium",
    position: { x: -120, y: 50, z: 10 },
  },
  {
    id: "hqg-algorithms",
    name: "Hqg-Algorithms",
    description: "Core algorithmic trading strategies and signal generation",
    githubUrl: "https://github.com/Husky-Quantitative-Group/hqg-algorithms",
    type: "star",
    size: "medium",
    position: { x: -40, y: 70, z: -30 },
  },
];

// ============================================================================
// WIREFRAME SPHERE COMPONENT
// ============================================================================
const WireframeSphere = ({
  size,
  isHovered,
  isPlanet,
}: {
  size: number;
  isHovered: boolean;
  isPlanet: boolean;
}) => {
  const segments = isPlanet ? 8 : 6;
  const rings = isPlanet ? 6 : 4;

  return (
    <svg
      width={size}
      height={size}
      viewBox="-50 -50 100 100"
      className="transition-all duration-300"
      style={{
        filter: isHovered
          ? "drop-shadow(0 0 8px rgba(217, 171, 99, 0.5))"
          : "none",
      }}
    >
      {/* Latitude rings */}
      {Array.from({ length: rings }).map((_, i) => {
        const lat = ((i + 1) / (rings + 1)) * Math.PI - Math.PI / 2;
        const r = Math.cos(lat) * 40;
        const y = Math.sin(lat) * 40;
        return (
          <ellipse
            key={`lat-${i}`}
            cx="0"
            cy={y}
            rx={r}
            ry={r * 0.3}
            fill="none"
            stroke={isHovered ? "hsl(var(--hqg-signal-amber))" : "hsl(var(--muted-foreground))"}
            strokeWidth={isHovered ? "1.2" : "0.8"}
            opacity={isHovered ? 0.8 : 0.4}
            className="transition-all duration-300"
          />
        );
      })}

      {/* Longitude lines */}
      {Array.from({ length: segments }).map((_, i) => {
        const angle = (i / segments) * Math.PI;
        const x1 = Math.sin(angle) * 40;
        const x2 = -x1;
        return (
          <ellipse
            key={`lon-${i}`}
            cx="0"
            cy="0"
            rx={Math.abs(x1)}
            ry="40"
            fill="none"
            stroke={isHovered ? "hsl(var(--hqg-signal-amber))" : "hsl(var(--muted-foreground))"}
            strokeWidth={isHovered ? "1.2" : "0.8"}
            opacity={isHovered ? 0.8 : 0.4}
            className="transition-all duration-300"
            transform={`rotate(${(i / segments) * 180})`}
          />
        );
      })}

      {/* Outer circle */}
      <circle
        cx="0"
        cy="0"
        r="40"
        fill="none"
        stroke={isHovered ? "hsl(var(--hqg-signal-amber))" : "hsl(var(--muted-foreground))"}
        strokeWidth={isHovered ? "1.5" : "1"}
        opacity={isHovered ? 1 : 0.5}
        className="transition-all duration-300"
      />
    </svg>
  );
};

// ============================================================================
// STAR COMPONENT (smaller, simpler wireframe)
// ============================================================================
const WireframeStar = ({
  size,
  isHovered,
}: {
  size: number;
  isHovered: boolean;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-50 -50 100 100"
      className="transition-all duration-300"
      style={{
        filter: isHovered
          ? "drop-shadow(0 0 6px rgba(217, 171, 99, 0.6))"
          : "none",
      }}
    >
      {/* Diamond/star shape wireframe */}
      <polygon
        points="0,-35 25,0 0,35 -25,0"
        fill="none"
        stroke={isHovered ? "hsl(var(--hqg-signal-amber))" : "hsl(var(--muted-foreground))"}
        strokeWidth={isHovered ? "1.5" : "1"}
        opacity={isHovered ? 1 : 0.5}
        className="transition-all duration-300"
      />
      <polygon
        points="0,-20 15,0 0,20 -15,0"
        fill="none"
        stroke={isHovered ? "hsl(var(--hqg-signal-amber))" : "hsl(var(--muted-foreground))"}
        strokeWidth={isHovered ? "1" : "0.6"}
        opacity={isHovered ? 0.8 : 0.3}
        className="transition-all duration-300"
      />
      {/* Cross lines */}
      <line
        x1="0"
        y1="-35"
        x2="0"
        y2="35"
        stroke={isHovered ? "hsl(var(--hqg-signal-amber))" : "hsl(var(--muted-foreground))"}
        strokeWidth={isHovered ? "1" : "0.5"}
        opacity={isHovered ? 0.6 : 0.25}
        className="transition-all duration-300"
      />
      <line
        x1="-25"
        y1="0"
        x2="25"
        y2="0"
        stroke={isHovered ? "hsl(var(--hqg-signal-amber))" : "hsl(var(--muted-foreground))"}
        strokeWidth={isHovered ? "1" : "0.5"}
        opacity={isHovered ? 0.6 : 0.25}
        className="transition-all duration-300"
      />
    </svg>
  );
};

// ============================================================================
// PLANET INFO BOX
// ============================================================================
const PlanetInfoBox = ({
  planet,
  isExpanded,
  isHovered,
  onToggle,
}: {
  planet: PlanetData;
  isExpanded: boolean;
  isHovered: boolean;
  onToggle: () => void;
}) => {
  if (!isHovered && !isExpanded) return null;

  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 z-20 transition-all duration-300 ease-out ${
        isExpanded ? "top-full mt-3" : "top-full mt-2"
      }`}
      style={{
        opacity: isHovered || isExpanded ? 1 : 0,
        transform: `translateX(-50%) translateY(${isHovered || isExpanded ? 0 : -8}px)`,
      }}
    >
      <div
        className={`bg-background/95 backdrop-blur-sm border border-border rounded-sm overflow-hidden transition-all duration-300 ease-out ${
          isExpanded ? "min-w-[220px]" : "min-w-[140px]"
        }`}
        style={{
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Header with name and toggle */}
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-2 px-3 py-2 hover:bg-secondary/50 transition-colors cursor-pointer"
        >
          <span className="font-mono text-xs tracking-wide text-foreground whitespace-nowrap">
            {planet.name}
          </span>
          <span className="w-5 h-5 flex items-center justify-center rounded-sm border border-border text-muted-foreground hover:text-hqg-signal-amber hover:border-hqg-signal-amber transition-colors">
            {isExpanded ? (
              <Minus className="w-3 h-3" />
            ) : (
              <Plus className="w-3 h-3" />
            )}
          </span>
        </button>

        {/* Expanded content */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${
            isExpanded ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-3 pb-3 pt-1 border-t border-border/50">
            <p className="text-[11px] text-muted-foreground leading-relaxed mb-3">
              {planet.description}
            </p>
            <a
              href={planet.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[10px] font-mono text-hqg-signal-amber hover:text-hqg-signal-amber/80 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-3 h-3" />
              <span>View Repository</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// ORBIT LINES (connecting planets)
// ============================================================================
const OrbitLines = ({
  planets,
  hoveredId,
}: {
  planets: PlanetData[];
  hoveredId: string | null;
}) => {
  const connections = planets
    .filter((p) => p.orbitParent)
    .map((p) => {
      const parent = planets.find((planet) => planet.id === p.orbitParent);
      if (!parent) return null;
      return {
        from: parent.position,
        to: p.position,
        isHovered: hoveredId === p.id || hoveredId === parent.id,
      };
    })
    .filter(Boolean);

  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    >
      <defs>
        <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.1" />
          <stop offset="50%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="orbitGradientHover" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--hqg-signal-amber))" stopOpacity="0.2" />
          <stop offset="50%" stopColor="hsl(var(--hqg-signal-amber))" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(var(--hqg-signal-amber))" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      {connections.map((conn, i) => {
        if (!conn) return null;
        // Center offset (container is centered)
        const centerX = 210;
        const centerY = 140;
        return (
          <line
            key={i}
            x1={centerX + conn.from.x}
            y1={centerY + conn.from.y}
            x2={centerX + conn.to.x}
            y2={centerY + conn.to.y}
            stroke={conn.isHovered ? "url(#orbitGradientHover)" : "url(#orbitGradient)"}
            strokeWidth={conn.isHovered ? "1.5" : "1"}
            strokeDasharray="4 4"
            className="transition-all duration-300"
          />
        );
      })}
    </svg>
  );
};

// ============================================================================
// MAIN CONSTELLATION COMPONENT
// ============================================================================
const PlanetConstellation = ({
  planets = CONSTELLATION_DATA,
}: {
  planets?: PlanetData[];
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getSizeInPixels = (size: "large" | "medium" | "small") => {
    switch (size) {
      case "large":
        return 80;
      case "medium":
        return 55;
      case "small":
        return 40;
    }
  };

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div
      className="relative"
      style={{
        width: "420px",
        height: "280px",
        perspective: "800px",
      }}
    >
      {/* Orbit connection lines */}
      <OrbitLines planets={planets} hoveredId={hoveredId} />

      {/* Render each planet/star */}
      {planets.map((planet) => {
        const size = getSizeInPixels(planet.size);
        const isHovered = hoveredId === planet.id;
        const isExpanded = expandedId === planet.id;

        return (
          <div
            key={planet.id}
            className="absolute transition-transform duration-500 ease-out cursor-pointer"
            style={{
              // Center in container, then offset by position
              left: `calc(50% + ${planet.position.x}px - ${size / 2}px)`,
              top: `calc(50% + ${planet.position.y}px - ${size / 2}px)`,
              transform: `translateZ(${planet.position.z}px) ${isHovered ? "scale(1.1)" : "scale(1)"}`,
              zIndex: isHovered || isExpanded ? 10 : 1,
            }}
            onMouseEnter={() => setHoveredId(planet.id)}
            onMouseLeave={() => {
              if (!isExpanded) {
                setHoveredId(null);
              }
            }}
            onClick={() => handleToggle(planet.id)}
          >
            {/* Rotating animation wrapper */}
            <div
              className="animate-spin-slow"
              style={{
                animationDuration: planet.type === "planet" ? "20s" : "15s",
                animationDirection: planet.position.x < 0 ? "reverse" : "normal",
              }}
            >
              {planet.type === "planet" ? (
                <WireframeSphere
                  size={size}
                  isHovered={isHovered}
                  isPlanet={planet.size === "large"}
                />
              ) : (
                <WireframeStar size={size} isHovered={isHovered} />
              )}
            </div>

            {/* Info box */}
            <PlanetInfoBox
              planet={planet}
              isExpanded={isExpanded}
              isHovered={isHovered && !isExpanded}
              onToggle={() => handleToggle(planet.id)}
            />
          </div>
        );
      })}

      {/* Ambient particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-muted-foreground/20 animate-pulse"
            style={{
              left: `${15 + (i * 73) % 80}%`,
              top: `${10 + (i * 47) % 80}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + (i % 3)}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PlanetConstellation;
