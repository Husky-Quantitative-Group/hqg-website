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
              const Wrapper = member.linkedin ? 'a' : 'div';
              const wrapperProps = member.linkedin
                ? {
                    href: member.linkedin,
                    target: '_blank',
                    rel: 'noreferrer',
                  }
                : {};

              return (
                <Wrapper
                  key={idx}
                  className={`team-card${member.linkedin ? ' team-card-link' : ''}`}
                  {...wrapperProps}
                >
                  <div className="team-avatar">
                    {headshotSrc && <img src={headshotSrc} alt={member.name} />}
                  </div>
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  {member.bio && <p className="bio">{member.bio}</p>}
                </Wrapper>
              );
            })}
          </div>
        </section>

        <section className="team-section">
          <h2>Current Members</h2>
          <div className="team-grid">
            {members.map((member, idx) => {
              const headshotSrc = resolveHeadshot(member.headshot);
              const Wrapper = member.linkedin ? 'a' : 'div';
              const wrapperProps = member.linkedin
                ? {
                    href: member.linkedin,
                    target: '_blank',
                    rel: 'noreferrer',
                  }
                : {};

              return (
                <Wrapper
                  key={idx}
                  className={`team-card${member.linkedin ? ' team-card-link' : ''}`}
                  {...wrapperProps}
                >
                  <div className="team-avatar">
                    {headshotSrc && <img src={headshotSrc} alt={member.name} />}
                  </div>
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                </Wrapper>
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
