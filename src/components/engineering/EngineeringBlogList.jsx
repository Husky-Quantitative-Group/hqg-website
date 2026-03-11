import React from 'react';
import engineeringPosts from '../../data/engineeringPosts';

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4ZM4 20a8 8 0 0 1 16 0" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" />
    </svg>
  );
}

function EngineeringBlogList() {
  return (
    <section className="engineering-blog">
      <div className="engineering-shell">
        <div className="engineering-section-header">
          <div>
            <span>/ Engineering Blog</span>
            <span className="engineering-section-header__cursor">▌</span>
          </div>
          <span className="engineering-blog__count">{engineeringPosts.length} posts</span>
        </div>

        <div className="engineering-filter-bar">
          <span className="engineering-filter-bar__prompt">$</span>
          <span>hqg blog --filter</span>
          <span className="engineering-filter-bar__tag">tag:engineering</span>
          <span className="engineering-filter-bar__muted">--sort date:desc</span>
        </div>

        <div className="engineering-post-list">
          {engineeringPosts.map((post, index) => (
            <a key={post.id} href="/blog" className="engineering-post-row">
              <div className="engineering-post-row__index">{String(index + 1).padStart(2, '0')}</div>
              <div className="engineering-post-row__body">
                <h3>
                  <span>{post.title}</span>
                  <ArrowUpRightIcon />
                </h3>
                <p>{post.excerpt}</p>
                <div className="engineering-post-row__meta">
                  <span>
                    <UserIcon />
                    {post.author}
                  </span>
                  <span className="engineering-post-row__separator">|</span>
                  <span>
                    <CalendarIcon />
                    {post.date}
                  </span>
                  <span className="engineering-post-row__separator">|</span>
                  <span>
                    <ClockIcon />
                    {post.readTime}
                  </span>
                </div>
              </div>

              <div className="engineering-post-row__tags">
                {post.tags
                  .filter((tag) => tag !== 'Engineering')
                  .map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EngineeringBlogList;
