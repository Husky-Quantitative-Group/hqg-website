import React, { useState } from 'react';
import heroFig1 from '../../../website-v2/src/assets/hero-fig-1.jpg';
import heroFig2 from '../../../website-v2/src/assets/hero-fig-2.jpg';
import PlanetConstellation from './PlanetConstellation';

function TerminalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 5h16v14H4z" />
      <path d="m8 10 3 2-3 2M13 16h3" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 0C5.37 0 0 5.5 0 12.29c0 5.43 3.44 10.03 8.2 11.66.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.75-4.04-1.67-4.04-1.67-.55-1.42-1.34-1.8-1.34-1.8-1.09-.77.08-.76.08-.76 1.2.09 1.83 1.27 1.83 1.27 1.07 1.88 2.8 1.34 3.49 1.02.11-.8.42-1.34.76-1.65-2.67-.31-5.47-1.38-5.47-6.14 0-1.36.47-2.47 1.24-3.35-.12-.31-.54-1.58.12-3.3 0 0 1.01-.33 3.3 1.28a11.2 11.2 0 0 1 6 0c2.29-1.61 3.3-1.28 3.3-1.28.66 1.72.24 2.99.12 3.3.77.88 1.23 1.99 1.23 3.35 0 4.78-2.8 5.82-5.48 6.13.43.38.82 1.12.82 2.26 0 1.63-.02 2.95-.02 3.35 0 .32.22.7.83.58 4.76-1.63 8.2-6.23 8.2-11.66C24 5.5 18.63 0 12 0z" />
    </svg>
  );
}

function ConstellationBackground() {
  const stars = [
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
    { x: 35, y: 15, opacity: 0.45 },
    { x: 42, y: 35, opacity: 0.4 },
    { x: 38, y: 52, opacity: 0.35 },
    { x: 45, y: 25, opacity: 0.4 },
    { x: 32, y: 42, opacity: 0.5 },
    { x: 48, y: 58, opacity: 0.35 },
    { x: 55, y: 18, opacity: 0.35 },
    { x: 68, y: 30, opacity: 0.3 },
    { x: 75, y: 45, opacity: 0.25 },
    { x: 62, y: 55, opacity: 0.3 },
    { x: 85, y: 22, opacity: 0.25 },
  ];

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
    <div className="engineering-hero__background">
      <svg preserveAspectRatio="xMidYMid slice" className="engineering-hero__background-svg">
        {lines.map((line, index) => (
          <line
            key={index}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            className="engineering-hero__background-line"
          />
        ))}
        {stars.map((star, index) => (
          <text
            key={index}
            x={`${star.x}%`}
            y={`${star.y}%`}
            style={{ opacity: star.opacity }}
            className="engineering-hero__background-star"
          >
            +
          </text>
        ))}
      </svg>
    </div>
  );
}

function FeaturedCard({ figure, figNum, title, description, tags, githubHref }) {
  return (
    <article className="engineering-feature-card">
      <div className="engineering-feature-card__image-wrap">
        <img src={figure} alt={title} className="engineering-feature-card__image" />
        <div className="engineering-feature-card__corners">
          <span />
          <span className="engineering-feature-card__figure">[ Fig. {figNum} ]</span>
          <span />
        </div>
      </div>

      <div className="engineering-feature-card__body">
        <div>
          <h3>
            <span>{title}</span>
            <ArrowUpRightIcon />
          </h3>
          <p>{description}</p>
          <div className="engineering-feature-card__tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="engineering-feature-card__actions">
          <a href="/blog">Read the docs</a>
          <a href={githubHref} target="_blank" rel="noopener noreferrer" aria-label={`${title} GitHub`}>
            <GithubIcon />
          </a>
        </div>
      </div>
    </article>
  );
}

function EngineeringHeroSection() {
  const [showConstellation, setShowConstellation] = useState(false);

  return (
    <section className="engineering-hero">
      <div className="engineering-hero__header">
        <ConstellationBackground />
        <div className="engineering-shell">
          <div className="engineering-hero__topbar">
            <div className="engineering-hero__terminal-label">
              <TerminalIcon />
              <span>hqg/engineering</span>
            </div>

            <div className="engineering-hero__controls">
              <button
                type="button"
                className={`engineering-hero__toggle${showConstellation ? ' is-active' : ''}`}
                onClick={() => setShowConstellation((value) => !value)}
                aria-label={showConstellation ? 'Hide constellation' : 'Show constellation'}
                title={showConstellation ? 'Hide constellation' : 'Show constellation'}
              >
                <GlobeIcon />
              </button>
              <div className="engineering-hero__badge">ENG</div>
            </div>
          </div>

          <div className="engineering-hero__headline">
            <div className="engineering-hero__copy">
              <h1 className="engineering-fade-up">
                Welcome to
                <br />
                HQG <span>Engineering</span>
              </h1>
              <p className="engineering-fade-up engineering-fade-up--delay-1">
                Open-source tools, systems deep dives, and research from a student-run
                quantitative trading firm. We build infrastructure for systematic markets.
              </p>
            </div>

            {showConstellation ? (
              <div className="engineering-hero__constellation engineering-fade-up engineering-fade-up--delay-2">
                <PlanetConstellation />
              </div>
            ) : null}
          </div>

          <div className="engineering-section-header">
            <div>
              <span>/ Featured Projects</span>
              <span className="engineering-section-header__cursor">▌</span>
            </div>
          </div>
        </div>
      </div>

      <div className="engineering-hero__projects">
        <div className="engineering-shell">
          <div className="engineering-feature-grid engineering-fade-up engineering-fade-up--delay-2">
            <FeaturedCard
              figure={heroFig1}
              figNum={1}
              title="Backtesting Engine"
              description="Our open-source, event-driven backtesting framework for systematic strategy research. Supports multi-asset workflows, fractional fills, and custom fee models."
              tags={['Python', 'FastAPI', 'Docker']}
              githubHref="https://github.com/Husky-Quantitative-Group/hqg-backtester"
            />
            <FeaturedCard
              figure={heroFig2}
              figNum={2}
              title="Research Dashboard"
              description="An internal platform for creating trading strategies, running backtests, and managing live portfolios. Open to UConn students."
              tags={['TypeScript', 'Python', 'FastAPI', 'AWS']}
              githubHref="https://github.com/Husky-Quantitative-Group/hqg-dashboard"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EngineeringHeroSection;
