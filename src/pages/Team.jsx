import React from 'react';
import '../styles/Team.css';

function Team() {
  const leadership = [
    { name: 'Your Name', role: 'President', bio: 'Add your bio here' },
    { name: 'Your Name', role: 'VP Research', bio: 'Add your bio here' },
    { name: 'Your Name', role: 'VP Engineering', bio: 'Add your bio here' },
  ];

  const members = [
    { name: 'Member Name', role: 'Analyst' },
    { name: 'Member Name', role: 'Developer' },
    { name: 'Member Name', role: 'Researcher' },
  ];

  const alumni = [
    { name: 'Alumnus Name', graduationYear: 2024, currentRole: 'Quant at Goldman Sachs' },
    { name: 'Alumnus Name', graduationYear: 2023, currentRole: 'Software Engineer at Citadel' },
  ];

  return (
    <div className="team">
      <div className="container">
        <h1>Our Team</h1>

        <section className="team-section">
          <h2>Leadership</h2>
          <div className="team-grid">
            {leadership.map((member, idx) => (
              <div key={idx} className="team-card">
                <div className="team-avatar"></div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="team-section">
          <h2>Active Members</h2>
          <div className="team-grid">
            {members.map((member, idx) => (
              <div key={idx} className="team-card">
                <div className="team-avatar"></div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="team-section">
          <h2>Alumni</h2>
          <div className="alumni-list">
            {alumni.map((alum, idx) => (
              <div key={idx} className="alumni-card">
                <h3>{alum.name}</h3>
                <p>Class of {alum.graduationYear}</p>
                <p className="current-role">{alum.currentRole}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="team-section jobs">
          <h2>Join Us</h2>
          <p>We're always looking for talented individuals interested in quantitative finance, software engineering, and research.</p>
          <button className="cta-button">View Open Positions</button>
        </section>
      </div>
    </div>
  );
}

export default Team;
