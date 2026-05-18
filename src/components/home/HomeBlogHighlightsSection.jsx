import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import blogs from '../../data/blogs.json';

const categoryClasses = {
  Research: 'home-category-pill home-category-pill--research',
  Engineering: 'home-category-pill home-category-pill--engineering',
  Announcement: 'home-category-pill home-category-pill--announcement',
};

const welcomeBlogSlug = 'welcome-to-hqg';

function getCategoryLabel(post) {
  if (post.tags.some((tag) => tag.toLowerCase() === 'research')) {
    return 'Research';
  }

  if (post.tags.some((tag) => tag.toLowerCase() === 'engineering')) {
    return 'Engineering';
  }

  return 'General';
}

function getCategoryClass(category) {
  return categoryClasses[category] || 'home-category-pill';
}

function getHomePost() {
  const publishedPosts = blogs.filter((post) => post.published);
  const welcomePost = publishedPosts.find((post) => post.slug === welcomeBlogSlug);
  const firstPost = welcomePost || publishedPosts[0];

  if (firstPost) {
    return {
      id: firstPost.slug,
      category: getCategoryLabel(firstPost),
      date: firstPost.date,
      title: firstPost.title,
      excerpt: firstPost.excerpt,
      author: firstPost.author,
      readTime: firstPost.readTime,
      href: `/blog/${firstPost.slug}`,
    };
  }

  return {
    id: 'featured-placeholder',
    category: 'Announcement',
    date: 'Coming Soon',
    title: 'Posts are coming soon',
    excerpt: 'We are building a publishing flow for research, engineering, and recruiting updates.',
    author: 'HQG',
    readTime: 'Soon',
    href: '/blog',
  };
}

function HomeBlogHighlightsSection() {
  const homePost = getHomePost();

  return (
    <section className="home-blog section-spacing">
      <div className="container">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="home-blog__featured"
        >
          <div className="home-blog__featured-layout">
            <div className="home-blog__featured-body">
              <p className="home-section-label">From the Blog</p>
              <div className="home-blog__meta">
                <span className={getCategoryClass(homePost.category)}>{homePost.category}</span>
                <span className="home-blog__date">{homePost.date}</span>
              </div>
              <h3>{homePost.title}</h3>
              <p>{homePost.excerpt}</p>
              <div className="home-blog__author-row">
                <span className="home-blog__author-dot" aria-hidden="true" />
                <span>{homePost.author}</span>
                <span className="home-blog__divider">.</span>
                <span>{homePost.readTime}</span>
              </div>
            </div>

            <div className="home-blog__actions" aria-label="Blog actions">
              <Link to={homePost.href} className="site-button site-button--primary">
                Read welcome post
              </Link>
              <Link to="/blog" className="site-button site-button--secondary">
                View all blogs
              </Link>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export default HomeBlogHighlightsSection;
