import React from 'react';
import { motion } from 'framer-motion';
import presentation1 from '../../assets/groupshots/presentation1.jpg';
import presentation3 from '../../assets/groupshots/presentation3.jpg';
import PlacementTicker from './PlacementTicker';

const discordInviteUrl = 'https://discord.gg/3KcdBwdyAm';
const dashboardUrl = 'https://dashboard.uconnquant.com/';

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M19.54 5.36A16.55 16.55 0 0 0 15.42 4l-.2.36c1.45.36 2.13.88 2.13.88a13.65 13.65 0 0 0-4.28-1.32 14.25 14.25 0 0 0-2.88.02 13.9 13.9 0 0 0-4.14 1.3s.7-.55 2.23-.91L8.13 4a16.55 16.55 0 0 0-4.12 1.36C1.4 9.29.7 13.11 1.05 16.88A16.78 16.78 0 0 0 6.1 19.4s.61-.73 1.11-1.36a7.3 7.3 0 0 1-1.75-.84l.42-.32c3.38 1.57 7.05 1.57 10.38 0l.43.32a7.3 7.3 0 0 1-1.75.84c.5.63 1.1 1.36 1.1 1.36a16.73 16.73 0 0 0 5.06-2.52c.42-4.37-.7-8.16-1.56-11.52ZM8.52 14.56c-.99 0-1.8-.91-1.8-2.03s.8-2.03 1.8-2.03c1 0 1.82.92 1.8 2.03 0 1.12-.8 2.03-1.8 2.03Zm6.45 0c-.99 0-1.8-.91-1.8-2.03s.8-2.03 1.8-2.03c1 0 1.82.92 1.8 2.03 0 1.12-.8 2.03-1.8 2.03Z" />
  </svg>
);

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
              HQG is the University of Connecticut&apos;s first student-run systematic fund,
              focused on researching financial markets and deploying live strategies. Keep up
              with our work through our blog posts.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="home-hero__actions"
            >
              <a
                href={discordInviteUrl}
                className="site-button home-hero__discord-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiscordIcon />
                Join our Community
              </a>
              <a
                href={dashboardUrl}
                className="site-button home-hero__dashboard-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/logo_no_bg.png" alt="" aria-hidden="true" />
                Open our Dashboard
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
