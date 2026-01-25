import React from 'react';
import '../styles/Software.css';

function Software() {
  const software = [
    {
      id: 1,
      title: 'Backtester',
      description: 'A reproducible backtesting framework for evaluating trading strategies on historical data.',
      features: [
        'GPU-optimized',
        'Monte Carlo robustness score',
        'Slippage/impact models + fee engine',
        'Parameter optimization',
        'Risk attribution and factor exposure reports',
        'Supports walk-forward optimization'
      ],
      deployment: 'Container deployed on UConn SoB servers',
      repo: 'https://github.com/Husky-Quantitative-Group/hqg-backtester',
      status: 'Active'
    },
    {
      id: 2,
      title: 'Execution Engine',
      description: 'An engine that parses streamed data and executes orders from live strategies.',
      features: [
        'Alpaca for paper/live trading',
        'Postgres for DB',
        'Optimized order execution',
        'Live risk limits (position, sector) + kill switch',
        'Real-time telemetry and health checks',
        'Audit trail generation'
      ],
      deployment: 'Container deployed on UConn SoB servers',
      repo: 'https://github.com/Husky-Quantitative-Group/hqg-engine',
      status: 'Active'
    },
    {
      id: 3,
      title: 'HQG Dashboard',
      description: 'A centralized, cloud-based dashboard for managing research, strategies, and live portfolios.',
      features: [
        'React + TypeScript frontend',
        'AWS for backend and server logic',
        'Terraform for IaC',
        'CAS for Auth',
        'In-browser strategy code editor',
        'Portfolio management portal'
      ],
      deployment: 'We plan on making this dashboard + services available to UConn students!',
      repo: 'https://github.com/Husky-Quantitative-Group/hqg-dashboard',
      status: 'Active'
    },
  ];

  const otherProjects = [
    {
      id: 1,
      title: 'HQG-algorithms',
      description: 'Shared interfaces, types, and tools for strategy development..',
      extra: 'Deployed to PyPI: https://pypi.org/project/hqg-algorithms/',
      repo: 'https://github.com/Husky-Quantitative-Group/hqg-algorithms'
    },
    {
      id: 2,
      title: 'HQG Website',
      description: 'A simple site to showcase what we do.',
      extra: 'Built with React + JavaScript.',
      repo: 'https://github.com/Husky-Quantitative-Group/hqg-website'
    },
  ];

  return (
    <div className="software">
      <div className="container">
        <h1>Software</h1>
        <p className="intro">Systems and tools built by our team to increase research velocity and ensure reliability</p>

        <div className="software-grid">
          {software.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-header">
                <h2>{product.title}</h2>
                <span className={`status ${product.status.toLowerCase()}`}>{product.status}</span>
              </div>
              <p className="description">{product.description}</p>
              <div className="features">
                <h3>Features</h3>
                <ul>
                  {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              {product.deployment && (
                <p className="deployment-note">{product.deployment}</p>
              )}
              <a className="learn-more" href={product.repo} target="_blank" rel="noreferrer">
                View Repository
              </a>
            </div>
          ))}
        </div>

        <section className="software-secondary">
          <h2>Other Projects / Repositories</h2>
          <div className="software-grid">
            {otherProjects.map((project) => (
              <div key={project.id} className="product-card secondary">
                <div className="product-header">
                  <h2>{project.title}</h2>
                </div>
                <p className="description">{project.description}</p>
                <p className="deployment-note">{project.extra}</p>
                <a className="learn-more" href={project.repo} target="_blank" rel="noreferrer">
                  View Repository
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Software;
