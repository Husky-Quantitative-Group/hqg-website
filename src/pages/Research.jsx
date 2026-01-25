import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Research.css';
import insights from '../data/researchPosts.json';
import carbonArcLogo from '../assets/misc/CarbonArc.png';

function Research() {
  return (
    <div className="research">
      <div className="container">
        <h1>Research</h1>
        <p className="intro">
          We research, validate, and deploy sophisticated trading algorithms.
        </p>

        <section className="research-block">
          <h2>Our Philosophy</h2>
          <h3>What We Build</h3>
          <p>
            We turn diverse inputs into systematic trades. Every signal is coded, tested, and monitored
            like a production system.
          </p>
          <p>
            Our target is consistent, low-beta performance with controlled drawdowns. That discipline
            lets us use leverage intelligently and scale what works.
          </p>
          <h3>Our Edge</h3>
          <p>
            As a student-run fund, we simply can't outspend large funds on hardware or latency, so we compete with creativity and rigor.
            </p>
          <p>
            We search in areas others overlook, with a strong focus on deriving and accurately quantifying insights from alternative data.  
          </p>
          <h3>The Skills Required</h3>
          <p>
            The work spans machine learning, data engineering, statistics, applied math, macro analysis,
            and portfolio construction. Our onboarding and mentorship make the breadth approachable
            from day one.
          </p>
        </section>

        <section className="partner-section">
          <div className="partner-header">
            <div>
              <h2>HQG x Carbon Arc</h2>
              <p className="partner-subtitle">
                A collaboration that strengthens our alternative data pipeline and research throughput.
              </p>
            </div>
            <img
              className="partner-logo"
              src={carbonArcLogo}
              alt="Carbon Arc"
            />
          </div>
          <p>
            We partner with Carbon Arc to access alternative datasets, including credit card activity, foot traffic, TikTok Shop metrics, and much more. This improves our ability to measure real-world behavior and validate signals with greater precision.
          </p>
          <a className="partner-cta" href="mailto:connect@uconnquant.com">
            Partner with HQG
          </a>
        </section>

      {/* uncomment when we have motion*/}
      {/*
        <section className="insights-section">
          <div className="insights-header">
            <div>
              <h2>HQG Insights</h2>
              <p className="insights-subtitle">
                A biweekly research blog covering ideas we find interesting.
              </p>
            </div>
            <span className="insights cadence">Every 2 weeks</span>
          </div>

          <div className="articles-grid">
            {insights.map((article) => (
              <article key={article.id} className="article-card">
                <div className="article-header">
                  <span className="category">{article.category}</span>
                  <span className="date">{article.date}</span>
                </div>
                <h3>{article.title}</h3>
                <p className="excerpt">{article.excerpt}</p>
                <footer className="article-footer">
                  <span className="author">By {article.author}</span>
                  <Link className="read-more" to={`/research/${article.slug}`}>
                    Read More
                  </Link>
                </footer>
              </article>
            ))}
          </div>
        </section>
        */}
      </div>
    </div>
  );
}

export default Research;
