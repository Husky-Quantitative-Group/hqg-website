import React from 'react';
import { motion } from 'framer-motion';
import presentation2 from '../../assets/groupshots/presentation2.jpg';

const pillars = [
  {
    number: '01',
    title: 'Research',
    description:
      'We develop and rigorously backtest quantitative strategies across asset classes, drawing on academic finance, econometrics, and machine learning.',
  },
  {
    number: '02',
    title: 'Engineering',
    description:
      'From research tools to execution systems, we build production-grade infrastructure to accelerate the development and deployment of strategies.',
  },
  {
    number: '03',
    title: 'Deployment',
    description:
      'Our strategies do not live in notebooks. We deploy live systematic strategies with real risk management, position sizing, and performance monitoring.',
  },
];

const stats = [
  { value: '$1,000', label: 'AUM' },
  { value: '19', label: 'Members + Alumni' },
  { value: '100%', label: 'Placement Rate' },
  { value: '$140,000', label: 'Median Starting Salary' },
];

function HomeAboutSection() {
  return (
    <section id="about" className="home-about section-spacing">
      <div className="container">
        <div className="home-about__header">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="home-section-label"
          >
            About HQG
          </motion.p>

          <div className="home-about__intro">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="home-about__image-wrap"
            >
              <img
                src={presentation2}
                alt="HQG members presenting quantitative strategies"
                className="home-about__image"
              />
            </motion.div>

            <div className="home-about__copy">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                We&apos;re building the largest student-run systematic fund in the U.S.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                At HQG, we&apos;re on a mission to compete at the national level. By uniting
                some of the brightest minds in Mathematics, Engineering, and Finance, we hope
                to foster an inclusive, educational, and collaborative community while making
                novel contributions to the field of quantitative finance.
              </motion.p>
            </div>
          </div>
        </div>

        <div className="home-pillars">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="home-pillars__card"
            >
              <span className="home-pillars__number">{pillar.number}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="home-stats">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="home-stats__item"
            >
              <p className="home-stats__value">{stat.value}</p>
              <p className="home-stats__label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeAboutSection;
