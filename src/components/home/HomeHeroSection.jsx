import React from 'react';
import { motion } from 'framer-motion';
import presentation1 from '../../assets/groupshots/presentation1.jpg';
import presentation3 from '../../assets/groupshots/presentation3.jpg';
import PlacementTicker from './PlacementTicker';

function HomeHeroSection() {
  return (
    <section className="home-hero">
      <div
        className="home-hero__pattern"
        aria-hidden="true"
      />

      <div className="container home-hero__inner">
        <div className="home-hero__grid">
          <div className="home-hero__content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="home-eyebrow">University of Connecticut</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="home-hero__title"
            >
              <span className="font-display">Husky Quant Group</span>
            </motion.h1>

            <svg className="home-hero__grain-defs" aria-hidden="true">
              <defs>
                <filter id="home-grain">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.8"
                    numOctaves="4"
                    stitchTiles="stitch"
                    result="noise"
                  />
                  <feColorMatrix in="noise" type="saturate" values="0" result="monoNoise" />
                  <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" result="grainText" />
                  <feComposite in="grainText" in2="SourceGraphic" operator="in" />
                </filter>
              </defs>
            </svg>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="home-hero__description"
            >
              HQG is the University of Connecticut&apos;s premier student-run systemic fund,
              focused on researching financial markets and deploying live strategies. Keep up
              with our work through our blog posts.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="home-hero__actions"
            >
              <a href="#about" className="site-button site-button--primary">
                Learn More
              </a>
              <a href="#apply" className="site-button site-button--secondary">
                Join Us -
              </a>
            </motion.div>
          </div>

          <div className="home-hero__media" aria-hidden="true">
            <div className="home-hero__polaroids">
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="home-hero__polaroid home-hero__polaroid--left"
              >
                <div className="home-hero__polaroid-frame">
                  <img src={presentation1} alt="" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="home-hero__polaroid home-hero__polaroid--right"
              >
                <div className="home-hero__polaroid-frame home-hero__polaroid-frame--front">
                  <img src={presentation3} alt="" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <PlacementTicker />
    </section>
  );
}

export default HomeHeroSection;
