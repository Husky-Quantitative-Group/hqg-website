import React from 'react';
import '../styles/Placeholder.css';

function Blog() {
  return (
    <div className="placeholder-page">
      <div className="container placeholder-page__inner">
        <p className="placeholder-page__eyebrow">Blog</p>
        <h1>HQG blog is coming soon.</h1>
        <p>
          The homepage now includes the v2 blog preview. This route is a placeholder until the
          full blog system is refactored into the current app.
        </p>
      </div>
    </div>
  );
}

export default Blog;
