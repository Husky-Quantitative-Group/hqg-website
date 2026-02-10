import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import presentation1 from '../assets/groupshots/presentation1.jpg';
import presentation2 from '../assets/groupshots/presentation2.jpg';
import presentation3 from '../assets/groupshots/presentation3.jpg';
import presentation4 from '../assets/groupshots/presentation4.png';
import usMap from '../assets/misc/us.svg';
import outcomesData from '../data/outcomes.json';

const logoAssets = {
  ...import.meta.glob('../assets/logos/*', { eager: true, import: 'default' }),
  ...import.meta.glob('../assets/logos/companies/*', { eager: true, import: 'default' }),
};

const logoAssetMap = Object.entries(logoAssets).reduce((acc, [path, src]) => {
  const filename = path.split('/').pop();
  if (filename) {
    acc[filename] = src;
  }
  return acc;
}, {});

function LogoCard({ placement }) {
  const [imageError, setImageError] = React.useState(false);
  const showLogo = Boolean(placement.logoSrc) && !imageError;
  const content = (
    <>
      {showLogo ? (
        <img
          className="logo-image"
          src={placement.logoSrc}
          alt={`${placement.company} logo`}
          loading="lazy"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="logo-placeholder" aria-hidden="true" />
      )}
      <span className="logo-tooltip">{placement.company}</span>
    </>
  );

  if (placement.href) {
    return (
      <a
        className="logo-card"
        href={placement.href}
        aria-label={placement.company}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="logo-card" tabIndex="0" aria-label={placement.company}>
      {content}
    </div>
  );
}

// TODO: make better; + community
function Home() {
  const logoPlacements = outcomesData.logos ?? [];
  const resolvedLogoPlacements = logoPlacements.map((placement) => ({
    ...placement,
    logoSrc: placement.logo ? logoAssetMap[placement.logo] : '',
  }));
  const baseColumns =
    resolvedLogoPlacements.length % 2 === 1
      ? [...resolvedLogoPlacements, ...resolvedLogoPlacements]
      : resolvedLogoPlacements;
  const mapPlacements = outcomesData.mapPlacements ?? [];
  const mapViewBox = { width: 835.44, height: 523.48 };
  const marqueeLogos = [...baseColumns, ...baseColumns];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Husky Quantitative Group</h1>
          <p className="hero-tagline">The systematic fund at UConn</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <p className="mission-oneliner">
            We're building the largest student-run systematic fund in the U.S.
            </p>
          
          <div className="what-we-do-section">
            <div className="images-collage">
              <img src={presentation1} alt="HQG Group Presentation" />
              <img src={presentation2} alt="HQG Group Presentation" />
              <img src={presentation3} alt="HQG Group Presentation" />
              <img src={presentation4} alt="HQG Group Presentation" />
            </div>
            <div className="what-we-do-content">
              {/* TODO: consider making this more like MIG; "who we are" + paragraph form -- community focused */}
              <h2 className="what-we-do-title">What We Do</h2>
              <ul className="what-we-do-list">
                <li>We train ambitious students in quantitative research and engineering through impactful projects, mentorship, and continuous collaboration.</li>
                <li>Students ship novel research, build large-scale software, and join a community that's competitive, supportive, and serious about growth.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="outcomes-section">
        <div className="container">
          <div className="outcomes-header">
            <h2 className="section-title">Our Outcomes</h2>
            <p className="section-subtitle">
              Where HQG members land after shipping real research and engineering.
            </p>
          </div>

          <div className="outcomes-surface">
            <div className="outcomes-carousel" aria-label="Placement logos">
              <div className="marquee-track">
                {marqueeLogos.map((placement, index) => {
                  return (
                    <div
                      key={`col-${placement.company}-${index}`}
                      className={`logo-column${index % 2 === 1 ? ' logo-column--bottom' : ''}`}
                    >
                      <LogoCard placement={placement} />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="outcomes-map">
              <div className="map-card">
                <div className="map-canvas">
                  <svg
                    className="us-map"
                    viewBox="0 0 835.44 523.48"
                    preserveAspectRatio="xMidYMid meet"
                    role="group"
                    aria-label="Map of U.S. placements"
                  >
                    <image
                      className="us-map-image"
                      href={usMap}
                      x="0"
                      y="0"
                      width="835.44"
                      height="523.48"
                      aria-hidden="true"
                    />

                    {mapPlacements.map((placement, index) => {
                      const pinX = (placement.x / 100) * mapViewBox.width;
                      const pinY = (placement.y / 100) * mapViewBox.height;
                      const tooltipDirection = placement.tooltipDirection || 'up';
                      const tooltipBox = (() => {
                        const width = 240;
                        const height = 130;
                        const offset = 20;
                        switch (tooltipDirection) {
                          case 'down':
                            return { x: -width / 2, y: offset, width, height };
                          case 'left':
                            return { x: -width - offset, y: -height / 2, width, height };
                          case 'right':
                            return { x: offset, y: -height / 2, width, height };
                          default:
                            return { x: -width / 2, y: -height - offset, width, height };
                        }
                      })();
                      return (
                      <g
                        key={`${placement.location}-${index}`}
                        className="map-pin"
                        transform={`translate(${pinX} ${pinY})`}
                        data-tooltip={tooltipDirection}
                        role="button"
                        tabIndex="0"
                        aria-label={`${placement.location} placements`}
                      >
                        <circle className="pin-pulse" cx="0" cy="0" r="14" />
                        <circle className="pin-core" cx="0" cy="0" r="6" />
                        <foreignObject
                          x={tooltipBox.x}
                          y={tooltipBox.y}
                          width={tooltipBox.width}
                          height={tooltipBox.height}
                          className="pin-fo"
                        >
                          <div className="pin-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml">
                            <div className="pin-tooltip">
                              <span className="pin-location">{placement.location}</span>
                              {(placement.placements ?? []).map((entry, entryIndex) => (
                                <span key={`${entry.company}-${entryIndex}`} className="pin-entry">
                                  <span className="pin-company">{entry.company}</span>
                                  <span className="pin-role">{entry.role}</span>
                                </span>
                              ))}
                            </div>
                          </div>
                        </foreignObject>
                      </g>
                    );
                    })}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="divisions-section">
        <div className="container">
          <h2 className="section-title">Our Verticals</h2>
          <div className="divisions-grid">
            <div className="division-card">
              <h3>Quant Research</h3>
              <ul className="division-list">
                <li>Research and develop mathematical models and algorithms</li>
                <li>Work with real datasets, backtests, and risk constraints</li>
                <li>Learn how to validate signals and communicate results</li>
              </ul>
              <Link to="/research" className="division-link">
                Explore Research →
              </Link>
            </div>
            <div className="division-card">
              <h3>Software Engineering</h3>
              <ul className="division-list">
                <li>Build robust, sustainable trading infrastructure and systems</li>
                <li>Ship data pipelines, backtesting infra, and tooling to increase research velocity</li>
                <li>Learn engineering practices used by top dev teams</li>
              </ul>
              <Link to="/software" className="division-link">
                Explore Software →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
