import React from 'react';
import { motion } from 'framer-motion';
import carbonArcLogo from '../../assets/misc/carbonarc_no_bg.png';
import dataBentoLogo from '../../assets/misc/databento_no_bg.png';

const sponsors = [
  {
    name: 'Carbon Arc',
    logo: carbonArcLogo,
    logoTone: 'dark',
    logoShape: 'carbonarc',
    description:
      'Carbon Arc gives HQG access to alternative datasets like credit card activity, foot traffic, TikTok Shop metrics, and other real-world behavior signals so our research can validate ideas against cleaner evidence.',
  },
  {
    name: 'DataBento',
    logo: dataBentoLogo,
    logoTone: 'light',
    logoShape: 'databento',
    description:
      'DataBento provides direct exchange feeds and L3 order book data across equities, futures, and options, giving our engineers and researchers the market structure detail needed for liquidity and higher-frequency work.',
  },
];

function HomeSponsorsSection() {
  return (
    <section className="home-sponsors section-spacing" aria-label="HQG sponsors">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="home-sponsors__header"
        >
          <p className="home-section-label">Sponsors</p>
          <h2 className="home-section-heading">Partners powering HQG research.</h2>
        </motion.div>

        <div className="home-sponsors__stack">
          {sponsors.map((sponsor, index) => (
            <motion.article
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="home-sponsor-row"
            >
              <div className={`home-sponsor-row__logo home-sponsor-row__logo--${sponsor.logoTone}`}>
                <img
                  className={`home-sponsor-row__logo-img home-sponsor-row__logo-img--${sponsor.logoShape}`}
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                />
              </div>

              <p className="home-sponsor-row__description">{sponsor.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeSponsorsSection;
