import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import presentation1 from '../assets/groupshots/presentation1.jpg';
import presentation2 from '../assets/groupshots/presentation2.jpg';
import presentation3 from '../assets/groupshots/presentation3.jpg';
import presentation4 from '../assets/groupshots/presentation4.png';

// TODO: make better; + community
function Home() {
  // TODO: add logos
  const placements = [
    { company: 'SpaceX', role: 'Software Engineer' },
    { company: 'Pure Storage', role: 'Software Engineer' },
    { company: 'Microsoft', role: 'Data Scientist' },
    { company: 'Wells Fargo', role: 'Quantitative Analyst' },
    { company: 'Palantir', role: 'Software Engineer' },
    { company: 'Epic Systems', role: 'Software Engineer' },
    { company: 'Capital One', role: 'Software Engineer' },
    { company: 'JPMorgan Chase', role: 'Software Engineer' },
    { company: 'IBM', role: 'Quantum Software Engineer' },
    { company: 'Coherent Semiconductors', role: 'AI Engineer' },
    { company: 'Cornell', role: 'Reinforcement Learning Researcher' },
    { company: 'UCF', role: 'Aerospace PhD' },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Husky Quantitative Group</h1>
          <p className="hero-tagline">UConn's systematic quant fund</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <p className="mission-oneliner">
            Becoming the largest student-run systematic fund in the U.S. by AUM
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
                <li>Give students the experience, ownership, skills, and connections needed to get top-tier jobs.</li>
                <li>Build a community of the most amibitous students at UConn so we can inspire each other.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="outcomes-section">
        <div className="container">
          <h2 className="section-title">Our Outcomes</h2>
          <div className="placements-grid">
            {placements.map((placement, index) => (
              <div key={index} className="placement-card">
                <div className="placement-company">{placement.company}</div>
                <div className="placement-role">{placement.role}</div>
              </div>
            ))}
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
                <li>Identify patterns and inefficiencies in financial markets</li>
                <li>Combine statistical rigor with computational power</li>
                <li>Generate actionable trading insights</li>
              </ul>
              <Link to="/research" className="division-link">
                Explore Research →
              </Link>
            </div>
            <div className="division-card">
              <h3>Software Engineering</h3>
              <ul className="division-list">
                <li>Build robust trading infrastructure and systems</li>
                <li>Develop high-performance data processing pipelines</li>
                <li>Create innovative tools for quantitative analysis</li>
                <li>Design scalable architecture for real-time trading</li>
              </ul>
              <Link to="/products" className="division-link">
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
