import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import researchPosts from '../../data/researchPosts.json';

const categoryClasses = {
  Research: 'home-category-pill home-category-pill--research',
  Engineering: 'home-category-pill home-category-pill--engineering',
  Career: 'home-category-pill home-category-pill--career',
  Markets: 'home-category-pill home-category-pill--markets',
  Announcement: 'home-category-pill home-category-pill--announcement',
};

const fallbackRecentPosts = [
  {
    id: 'blog-fallback-1',
    category: 'Engineering',
    date: 'Coming Soon',
    title: 'Infrastructure write-ups are on the way',
    excerpt: 'We are building out a dedicated home for engineering posts, systems deep dives, and project retrospectives.',
    author: 'HQG Engineering',
    readTime: 'Soon',
  },
  {
    id: 'blog-fallback-2',
    category: 'Career',
    date: 'Coming Soon',
    title: 'Member recruiting and career notes',
    excerpt: 'Expect practical posts on recruiting prep, project work, and how we train new members across research and engineering.',
    author: 'HQG',
    readTime: 'Soon',
  },
];

function getCategoryClass(category) {
  return categoryClasses[category] || 'home-category-pill';
}

function getFeaturedPost() {
  const firstPost = researchPosts[0];

  if (firstPost) {
    return {
      id: firstPost.slug || firstPost.id,
      category: firstPost.category,
      date: firstPost.date,
      title: firstPost.title,
      excerpt: firstPost.excerpt,
      author: firstPost.author,
      readTime: '5 min read',
      href: firstPost.slug ? `/research/${firstPost.slug}` : '/research',
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
  const featuredPost = getFeaturedPost();
  const recentPosts = researchPosts.slice(1, 4).map((post) => ({
    id: post.slug || post.id,
    category: post.category,
    date: post.date,
    title: post.title,
    excerpt: post.excerpt,
    author: post.author,
    readTime: '5 min read',
    href: post.slug ? `/research/${post.slug}` : '/research',
  }));
  const sidebarPosts = recentPosts.length > 0 ? recentPosts : fallbackRecentPosts.map((post) => ({
    ...post,
    href: '/blog',
  }));

  return (
    <section className="home-blog section-spacing">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="home-blog__header"
        >
          <p className="home-section-label">From the Blog</p>
          <div className="home-blog__header-row">
            <h2>Latest insights</h2>
            <Link to="/blog" className="home-inline-link">
              View all posts -
            </Link>
          </div>
        </motion.div>

        <div className="home-blog__grid">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="home-blog__featured"
          >
            <Link to={featuredPost.href} className="home-blog__featured-link">
              <div className="home-blog__featured-visual">
                <div className="home-blog__featured-gradient" />
                <div className="home-blog__featured-code">{'{ }'}</div>
              </div>
              <div className="home-blog__featured-body">
                <div className="home-blog__meta">
                  <span className={getCategoryClass(featuredPost.category)}>{featuredPost.category}</span>
                  <span className="home-blog__date">{featuredPost.date}</span>
                </div>
                <h3>{featuredPost.title}</h3>
                <p>{featuredPost.excerpt}</p>
                <div className="home-blog__author-row">
                  <span className="home-blog__author-dot" aria-hidden="true" />
                  <span>{featuredPost.author}</span>
                  <span className="home-blog__divider">.</span>
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            </Link>
          </motion.article>

          <div className="home-blog__sidebar">
            <h4>Recent Posts</h4>
            {sidebarPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="home-blog__sidebar-card"
              >
                <Link to={post.href}>
                  <div className="home-blog__meta">
                    <span className={getCategoryClass(post.category)}>{post.category}</span>
                    <span className="home-blog__date">{post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="home-blog__sidebar-footer">
                    <span>{post.author}</span>
                    <span className="home-blog__divider">.</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBlogHighlightsSection;
