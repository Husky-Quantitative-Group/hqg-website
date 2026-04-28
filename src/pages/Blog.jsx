import React from 'react';
import { Link } from 'react-router-dom';
import blogs from '../data/blogs.json';
import '../styles/Blog.css';

function Blog() {
  const publishedBlogs = blogs.filter((blog) => blog.published);

  return (
    <div className="blog-page">
      <div className="container">
        <div className="blog-page__hero">
          <p className="blog-page__eyebrow">Blog</p>
          <h1>Ideas, systems, and notes from HQG.</h1>
          <p className="blog-page__intro">
            Research write-ups, engineering deep dives, and practical lessons from the group.
          </p>
        </div>

        <div className="blog-page__toolbar">
          <span>{publishedBlogs.length} published post{publishedBlogs.length === 1 ? '' : 's'}</span>
        </div>

        <div className="blog-page__grid">
          {publishedBlogs.map((blog) => (
            <article key={blog.slug} className="blog-card">
              <div className="blog-card__meta">
                <span>{blog.date}</span>
                <span>{blog.readTime}</span>
              </div>
              <h2>{blog.title}</h2>
              <p className="blog-card__excerpt">{blog.excerpt}</p>
              <div className="blog-card__footer">
                <div className="blog-card__tags" aria-label="Blog tags">
                  {blog.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <p className="blog-card__author">By {blog.author}</p>
              </div>
              <Link className="blog-card__link" to={`/blog/${blog.slug}`}>
                Read post
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
