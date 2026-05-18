import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import blogs from '../data/blogs.json';
import '../styles/Research.css';

function ResearchPost() {
  const { slug } = useParams();
  const post = blogs.find(
    (entry) =>
      entry.slug === slug &&
      entry.published &&
      entry.tags.some((tag) => tag.toLowerCase() === 'research')
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="research">
        <div className="container research-post">
          <Link className="post-back" to="/research">
            Back to Research
          </Link>
          <h1>Post Not Found</h1>
          <p className="intro">We could not find that HQG Insights post.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="research">
      <div className="container research-post">
        <Link className="post-back" to="/research">
          Back to Research
        </Link>
        <div className="post-header">
          <span className="category">Research</span>
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span className="date">{post.date}</span>
            <span className="author">By {post.author}</span>
          </div>
        </div>
        <div className="post-body">
          <p>This research post now lives in the unified HQG blog.</p>
          <Link className="read-more" to={`/blog/${post.slug}`}>
            Open the canonical blog post
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResearchPost;
