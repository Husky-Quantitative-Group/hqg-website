import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Team.css';
import quantGroupS26 from '../assets/groupshots/quant-group-s26.png';
import leadership from '../data/leadership.json';
import members from '../data/members.json';
import alumni from '../data/alumni.json';

const headshots = import.meta.glob('../assets/headshots/*', {
  eager: true,
  import: 'default',
});

const resolveHeadshot = (filename) => {
  if (!filename) {
    return null;
  }

  const match = Object.entries(headshots).find(([path]) =>
    path.endsWith(`/${filename}`)
  );

  return match ? match[1] : null;
};

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.5h5V24H0V8.5zM8.5 8.5h4.8v2.11h.07c.67-1.27 2.32-2.61 4.77-2.61 5.1 0 6.04 3.36 6.04 7.73V24h-5v-7.08c0-1.69-.03-3.87-2.36-3.87-2.36 0-2.72 1.85-2.72 3.75V24h-5V8.5z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 0C5.37 0 0 5.5 0 12.29c0 5.43 3.44 10.03 8.2 11.66.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.75-4.04-1.67-4.04-1.67-.55-1.42-1.34-1.8-1.34-1.8-1.09-.77.08-.76.08-.76 1.2.09 1.83 1.27 1.83 1.27 1.07 1.88 2.8 1.34 3.49 1.02.11-.8.42-1.34.76-1.65-2.67-.31-5.47-1.38-5.47-6.14 0-1.36.47-2.47 1.24-3.35-.12-.31-.54-1.58.12-3.3 0 0 1.01-.33 3.3 1.28a11.2 11.2 0 0 1 6 0c2.29-1.61 3.3-1.28 3.3-1.28.66 1.72.24 2.99.12 3.3.77.88 1.23 1.99 1.23 3.35 0 4.78-2.8 5.82-5.48 6.13.43.38.82 1.12.82 2.26 0 1.63-.02 2.95-.02 3.35 0 .32.22.7.83.58 4.76-1.63 8.2-6.23 8.2-11.66C24 5.5 18.63 0 12 0z" />
  </svg>
);

const buildSocialLinks = (member) => ([
  { href: member.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
  { href: member.github, label: 'GitHub', Icon: GitHubIcon },
].filter((link) => link.href));

function Team() {
  return (
    <div className="team">
      <div className="container">
        <h1>Our Team</h1>
        <div className="team-photo">
          <img src={quantGroupS26} alt="Husky Quantitative Group, Spring 2026" />
        </div>

        <section className="team-section">
          <h2>Leadership</h2>
          <div className="team-grid">
            {leadership.map((member, idx) => {
              const headshotSrc = resolveHeadshot(member.headshot);
              const socialLinks = buildSocialLinks(member);

              return (
                <div
                  key={idx}
                  className="team-card"
                >
                  <div className="team-avatar">
                    {headshotSrc && <img src={headshotSrc} alt={member.name} />}
                  </div>
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  {member.bio && <p className="bio">{member.bio}</p>}
                  {socialLinks.length > 0 && (
                    <div className="team-card-links">
                      {socialLinks.map(({ href, label, Icon }) => (
                        <a
                          key={label}
                          className="team-card-link"
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on ${label}`}
                          title={label}
                        >
                          <Icon />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="team-section">
          <h2>Current Members</h2>
          <div className="team-grid">
            {members.map((member, idx) => {
              const headshotSrc = resolveHeadshot(member.headshot);
              const socialLinks = buildSocialLinks(member);

              return (
                <div
                  key={idx}
                  className="team-card"
                >
                  <div className="team-avatar">
                    {headshotSrc && <img src={headshotSrc} alt={member.name} />}
                  </div>
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  {socialLinks.length > 0 && (
                    <div className="team-card-links">
                      {socialLinks.map(({ href, label, Icon }) => (
                        <a
                          key={label}
                          className="team-card-link"
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on ${label}`}
                          title={label}
                        >
                          <Icon />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/*uncomment below in May 2026*/}
        {/*<section className="team-section">
          <h2>Alumni</h2>
          <div className="alumni-list">
            {alumni.map((alum, idx) => {
              const Wrapper = alum.linkedin ? 'a' : 'div';
              const wrapperProps = alum.linkedin
                ? {
                    href: alum.linkedin,
                    target: '_blank',
                    rel: 'noreferrer',
                  }
                : {};

              return (
                <Wrapper
                  key={idx}
                  className={`alumni-card${alum.linkedin ? ' team-card-link' : ''}`}
                  {...wrapperProps}
                >
                <h3>{alum.name}</h3>
                <p>Class of {alum.graduationYear}</p>
                <p className="current-role">{alum.currentRole}</p>
                </Wrapper>
              );
            })}
          </div>
        </section>
      */}

        <section className="team-section jobs">
          <h2>Join Our Team</h2>
          <p>We're always looking for ambitious students interested in quantitative finance, software engineering, and research.</p>
          <Link className="cta-button" to="/apply">Apply Now!</Link>
        </section>
      </div>
    </div>
  );
}

export default Team;
