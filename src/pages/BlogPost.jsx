import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import blogs from '../data/blogs.json';
import '../styles/Blog.css';

const blogMarkdownFiles = import.meta.glob('../assets/blogs/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

function BlogPost() {
  const { slug } = useParams();

  const post = useMemo(
    () => blogs.find((entry) => entry.slug === slug && entry.published),
    [slug]
  );

  const markdown = post
    ? blogMarkdownFiles[`../assets/blogs/${post.markdownFile}`]
    : null;

  if (!post || !markdown) {
    return (
      <div className="blog-page">
        <div className="container blog-post">
          <Link className="blog-post__back" to="/blog">
            Back to Blog
          </Link>
          <h1>Post Not Found</h1>
          <p className="blog-page__intro">
            We could not find that blog post or its markdown file.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <div className="container blog-post">
        <Link className="blog-post__back" to="/blog">
          Back to Blog
        </Link>

        <div className="blog-post__header">
          <div className="blog-card__meta">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <h1>{post.title}</h1>
          <p className="blog-post__author">By {post.author}</p>
        </div>

        <pre className="blog-post__raw-markdown">
          <code>{markdown}</code>
        </pre>
      </div>
    </div>
  );
}

export default BlogPost;
