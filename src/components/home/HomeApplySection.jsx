import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const roles = [
  {
    title: 'Software Engineer',
    accentClass: 'home-role-card__bullet--verdigris',
    description:
      'Build the infrastructure that powers our trading systems. You will work on low-latency data pipelines, execution engines, and tools that empower our researchers.',
    projects: [
      'High-frequency market making infrastructure',
      'Backtesting framework with event-driven simulation',
      'Strategy R and D dashboard and analytics',
      'Performance optimization of core systems',
    ],
  },
  {
    title: 'Quantitative Researcher',
    accentClass: 'home-role-card__bullet--umber',
    description:
      'Develop and validate systematic trading strategies. You will dive deep into market data, build factor models, and turn hypotheses into live alpha.',
    projects: [
      'Cross-sectional momentum and mean reversion models',
      'Alternative data signals, NLP, and sentiment analysis',
      'Risk modeling and portfolio optimization',
      'Prediction market arbitrage',
    ],
  },
];

function HomeApplySection() {
  return (
    <section id="apply" className="home-apply section-spacing">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="home-apply__header"
        >
          <p className="home-section-label">Join the Team</p>
          <h2>Build something that matters</h2>
          <p className="home-apply__intro">
            We welcome all students at the University of Connecticut to apply. Our strongest
            applicants are highly self-motivated, eager to learn, and willing to take on hard
            problems amid ambiguity. You do not need prior quant or finance experience to apply.
          </p>
        </motion.div>

        <div className="home-role-grid">
          {roles.map((role, index) => (
            <motion.article
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="home-role-card"
            >
              <h3>{role.title}</h3>
              <p className="home-role-card__description">{role.description}</p>
              <div className="home-role-card__projects">
                <p className="home-role-card__label">Projects you will work on</p>
                <ul>
                  {role.projects.map((project) => (
                    <li key={project}>
                      <span className={`home-role-card__bullet ${role.accentClass}`} aria-hidden="true">
                        &gt;
                      </span>
                      <span>{project}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="home-apply__cta"
        >
          <Link to="/apply" className="site-button site-button--primary">
            Join Our Team
          </Link>
          <p>
            Questions?{' '}
            <a href="mailto:connect@uconnquant.com">
              Reach out to us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default HomeApplySection;
