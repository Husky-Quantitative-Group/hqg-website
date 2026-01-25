import React from 'react';
import '../styles/Apply.css';

function Apply() {
  return (
    <div className="apply">
      <div className="container">
        <h1>Apply</h1>
        <p className="apply-status">Applications for Fall 2026 will open early February!</p>

        <section className="apply-section">
          <h2>What we look for in an applicant</h2>
          <p>
            We welcome all students at the University of Connecticut to apply. Our strongest applicants are
            highly self-motivated, eager to learn, and willing to take on hard problems amid ambiguity. This
            is an entrepreneurial space where you move fast, dive technically deep, and communicate clearly.
            Above all, we value genuine curiosity and a desire to help build a lasting institution at UConn
            that changes career trajectories.
          </p>
          <p>
            You do not need prior quant experience to apply. We care more about evidence of ambition, ownership, critical
            thinking, and the ability to learn quickly than a perfect resume.
          </p>
        </section>

        <section className="apply-section">
          <h2>Interview Process</h2>
          <p>
            Applicants complete two rounds of interviews. The first interview is behavioral, while the second
            round is more technical. Applicants can expect questions about statistics, markets, and problem
            solving with code.
          </p>
          <p>
            We look for how you think, not just the final answer. Clear communication, curiosity, creativity, and the
            ability to break down unfamiliar problems go a long way.
          </p>
        </section>

        <section className="apply-section">
          <h2>Pathway to the Fund</h2>
          <p>
            Interested in learning more about quantitative finance? Join our open-to-all Quant Club at UConn,
            which we operate and use as a pathway into the fund. It's a great way to learn the basics, get project inspiration/mentorship, and meet our members + other students interested in quant!
          </p>
          <p>
            Learn more at <a href="https://uconntact.uconn.edu/organization/quant" target="_blank" rel="noreferrer">uconntact.uconn.edu/organization/quant</a>.
          </p>
        </section>

        <section className="apply-section">
          <h2>Application Links</h2>
          <p className="apply-muted">
            Application links will be posted here when the Fall 2026 cycle opens in early February. In the meantime, reach
            out at <a href="mailto:connect@uconnquant.com">connect@uconnquant.com</a> with any questions.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Apply;
