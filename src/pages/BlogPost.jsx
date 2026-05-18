import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogMdxComponents } from '../components/blog/BlogBlocks.jsx';
import blogs from '../data/blogs.json';
import '../styles/Blog.css';

const blogMdxFiles = import.meta.glob('../assets/blogs/**/*.mdx', {
  eager: true,
  import: 'default',
});

function BlogPost() {
  const { slug } = useParams();

  const post = useMemo(
    () => blogs.find((entry) => entry.slug === slug && entry.published),
    [slug]
  );

  const PostContent = post
    ? blogMdxFiles[`../assets/blogs/${post.markdownFile}`]
    : null;

  if (!post || !PostContent) {
    return (
      <div className="blog-page">
        <div className="container blog-post">
          <Link className="blog-post__back" to="/blog" aria-label="View all blog posts">
            <span aria-hidden="true">←</span>
            All blog posts
          </Link>
          <h1>Post Not Found</h1>
          <p className="blog-page__intro">
            We could not find that blog post or its MDX file.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <div className="container blog-post">
        <Link className="blog-post__back" to="/blog" aria-label="View all blog posts">
          <span aria-hidden="true">←</span>
          All blog posts
        </Link>

        <div className="blog-post__header">
          <div className="blog-card__meta">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <h1>{post.title}</h1>
          <p className="blog-post__author">By {post.author}</p>
        </div>

        <article className="blog-post__content">
          <PostContent components={blogMdxComponents} />
        </article>
      </div>
    </div>
  );
}

export default BlogPost;
