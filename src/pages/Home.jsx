import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Husky Quantitative Group</h1>
          <p>A student-run quantitative investment fund at the University of Connecticut</p>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2>What We Do</h2>
          <p>
            Husky Quantitative Group is dedicated to developing and deploying quantitative trading strategies,
            conducting cutting-edge financial research, and building innovative software solutions for the
            quantitative finance industry.
          </p>
          <div className="values">
            <div className="value-card">
              <h3>Research</h3>
              <p>Rigorous analysis of market data and development of data-driven insights</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>Building tools and strategies that push the boundaries of quantitative finance</p>
            </div>
            <div className="value-card">
              <h3>Education</h3>
              <p>Mentoring the next generation of quants and financial engineers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
