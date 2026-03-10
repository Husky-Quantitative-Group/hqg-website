import React, { useState } from 'react';

const constellationData = [
  {
    id: 'hqg-dashboard',
    name: 'Hqg-Dashboard',
    description: 'Centralized hub for research backtesting and portfolio management.',
    githubUrl: 'https://github.com/Husky-Quantitative-Group/hqg-dashboard',
    type: 'planet',
    size: 'large',
    position: { x: 0, y: 0, z: 0 },
  },
  {
    id: 'hqg-backtester',
    name: 'Hqg-Backtester',
    description: 'Our event-driven backtesting engine for systematic strategy research.',
    githubUrl: 'https://github.com/Husky-Quantitative-Group/hqg-backtester',
    type: 'planet',
    size: 'medium',
    position: { x: -120, y: -70, z: 30 },
    orbitParent: 'hqg-dashboard',
  },
  {
    id: 'hqg-engine',
    name: 'Hqg-Engine',
    description: 'Execution infrastructure for live trading operations.',
    githubUrl: 'https://github.com/Husky-Quantitative-Group/hqg-engine',
    type: 'planet',
    size: 'medium',
    position: { x: 130, y: -50, z: -20 },
    orbitParent: 'hqg-dashboard',
  },
  {
    id: 'hqg-platform',
    name: 'Hqg-Platform',
    description: 'Infrastructure primitives powering our quantitative systems.',
    githubUrl: 'https://github.com/Husky-Quantitative-Group/hqg-platform',
    type: 'star',
    size: 'medium',
    position: { x: -120, y: 50, z: 10 },
  },
  {
    id: 'hqg-algorithms',
    name: 'Hqg-Algorithms',
    description: 'Core algorithmic trading strategies and signal generation.',
    githubUrl: 'https://github.com/Husky-Quantitative-Group/hqg-algorithms',
    type: 'star',
    size: 'medium',
    position: { x: -40, y: 70, z: -30 },
  },
];

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 0C5.37 0 0 5.5 0 12.29c0 5.43 3.44 10.03 8.2 11.66.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.75-4.04-1.67-4.04-1.67-.55-1.42-1.34-1.8-1.34-1.8-1.09-.77.08-.76.08-.76 1.2.09 1.83 1.27 1.83 1.27 1.07 1.88 2.8 1.34 3.49 1.02.11-.8.42-1.34.76-1.65-2.67-.31-5.47-1.38-5.47-6.14 0-1.36.47-2.47 1.24-3.35-.12-.31-.54-1.58.12-3.3 0 0 1.01-.33 3.3 1.28a11.2 11.2 0 0 1 6 0c2.29-1.61 3.3-1.28 3.3-1.28.66 1.72.24 2.99.12 3.3.77.88 1.23 1.99 1.23 3.35 0 4.78-2.8 5.82-5.48 6.13.43.38.82 1.12.82 2.26 0 1.63-.02 2.95-.02 3.35 0 .32.22.7.83.58 4.76-1.63 8.2-6.23 8.2-11.66C24 5.5 18.63 0 12 0z" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M5 12h14" />
    </svg>
  );
}

function WireframeSphere({ size, active }) {
  const rings = size === 'large' ? 6 : 4;
  const segments = size === 'large' ? 8 : 6;

  return (
    <svg viewBox="-50 -50 100 100" className="engineering-planet-svg">
      {Array.from({ length: rings }).map((_, index) => {
        const lat = ((index + 1) / (rings + 1)) * Math.PI - Math.PI / 2;
        const radius = Math.cos(lat) * 40;
        const y = Math.sin(lat) * 40;

        return (
          <ellipse
            key={`lat-${index}`}
            cx="0"
            cy={y}
            rx={radius}
            ry={radius * 0.3}
            className={active ? 'is-active' : ''}
          />
        );
      })}

      {Array.from({ length: segments }).map((_, index) => (
        <ellipse
          key={`lon-${index}`}
          cx="0"
          cy="0"
          rx={Math.abs(Math.sin((index / segments) * Math.PI) * 40)}
          ry="40"
          transform={`rotate(${(index / segments) * 180})`}
          className={active ? 'is-active' : ''}
        />
      ))}

      <circle cx="0" cy="0" r="40" className={active ? 'is-active' : ''} />
    </svg>
  );
}

function WireframeStar({ active }) {
  return (
    <svg viewBox="-50 -50 100 100" className="engineering-planet-svg">
      <polygon points="0,-35 25,0 0,35 -25,0" className={active ? 'is-active' : ''} />
      <polygon points="0,-20 15,0 0,20 -15,0" className={active ? 'is-active is-secondary' : 'is-secondary'} />
      <line x1="0" y1="-35" x2="0" y2="35" className={active ? 'is-active is-secondary' : 'is-secondary'} />
      <line x1="-25" y1="0" x2="25" y2="0" className={active ? 'is-active is-secondary' : 'is-secondary'} />
    </svg>
  );
}

function PlanetInfoBox({ item, expanded, hovered, onToggle }) {
  if (!expanded && !hovered) {
    return null;
  }

  return (
    <div className={`engineering-planet-info${expanded ? ' is-expanded' : ''}`}>
      <div className="engineering-planet-info__panel">
        <button type="button" className="engineering-planet-info__header" onClick={onToggle}>
          <span>{item.name}</span>
          <span className="engineering-planet-info__toggle">
            {expanded ? <MinusIcon /> : <PlusIcon />}
          </span>
        </button>
        <div className={`engineering-planet-info__body${expanded ? ' is-open' : ''}`}>
          <p>{item.description}</p>
          <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>
            <GithubIcon />
            <span>View Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function PlanetConstellation() {
  const [hoveredId, setHoveredId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  const getSize = (size) => {
    if (size === 'large') return 80;
    if (size === 'medium') return 55;
    return 40;
  };

  const handleToggle = (id) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  const connections = constellationData
    .filter((item) => item.orbitParent)
    .map((item) => ({
      from: constellationData.find((planet) => planet.id === item.orbitParent),
      to: item,
    }))
    .filter((connection) => connection.from);

  return (
    <div className="engineering-constellation">
      <svg className="engineering-constellation__lines" viewBox="0 0 420 280" aria-hidden="true">
        {connections.map((connection) => {
          const active = hoveredId === connection.from.id || hoveredId === connection.to.id;

          return (
            <line
              key={`${connection.from.id}-${connection.to.id}`}
              x1={210 + connection.from.position.x}
              y1={140 + connection.from.position.y}
              x2={210 + connection.to.position.x}
              y2={140 + connection.to.position.y}
              className={active ? 'is-active' : ''}
            />
          );
        })}
      </svg>

      {constellationData.map((item) => {
        const size = getSize(item.size);
        const hovered = hoveredId === item.id;
        const expanded = expandedId === item.id;

        return (
          <div
            key={item.id}
            className="engineering-planet"
            style={{
              left: `calc(50% + ${item.position.x}px - ${size / 2}px)`,
              top: `calc(50% + ${item.position.y}px - ${size / 2}px)`,
              transform: `translateZ(${item.position.z}px) ${hovered ? 'scale(1.1)' : 'scale(1)'}`,
              width: `${size}px`,
              height: `${size}px`,
              zIndex: hovered || expanded ? 10 : 1,
            }}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => {
              if (!expanded) {
                setHoveredId(null);
              }
            }}
            onClick={() => handleToggle(item.id)}
          >
            <div
              className="engineering-planet__body"
              style={{
                animationDirection: item.position.x < 0 ? 'reverse' : 'normal',
              }}
            >
              {item.type === 'planet' ? (
                <WireframeSphere size={item.size} active={hovered || expanded} />
              ) : (
                <WireframeStar active={hovered || expanded} />
              )}
            </div>
            <PlanetInfoBox
              item={item}
              expanded={expanded}
              hovered={hovered && !expanded}
              onToggle={() => handleToggle(item.id)}
            />
          </div>
        );
      })}

      <div className="engineering-constellation__particles" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, index) => (
          <span
            key={index}
            className="engineering-constellation__particle"
            style={{
              left: `${15 + (index * 73) % 80}%`,
              top: `${10 + (index * 47) % 80}%`,
              animationDelay: `${index * 0.3}s`,
              animationDuration: `${2 + (index % 3)}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default PlanetConstellation;
