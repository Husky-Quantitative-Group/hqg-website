import React from 'react';
import '../styles/Research.css';

function Research() {
  const articles = [
    {
      id: 1,
      title: 'Machine Learning in Algorithmic Trading',
      excerpt: 'Exploring how neural networks and ensemble methods can improve trading strategy performance...',
      date: 'January 10, 2026',
      category: 'AI/ML',
      author: 'HQG Research Team'
    },
    {
      id: 2,
      title: 'Market Microstructure and Order Flow Analysis',
      excerpt: 'An analysis of high-frequency trading patterns and their impact on market liquidity...',
      date: 'January 5, 2026',
      category: 'Market Analysis',
      author: 'HQG Research Team'
    },
    {
      id: 3,
      title: 'Statistical Arbitrage Strategies in Crypto Markets',
      excerpt: 'Identifying and exploiting inefficiencies in cryptocurrency markets using statistical methods...',
      date: 'December 28, 2025',
      category: 'Cryptocurrencies',
      author: 'HQG Research Team'
    },
    {
      id: 4,
      title: 'Portfolio Optimization with Modern Risk Models',
      excerpt: 'Advanced techniques for constructing optimal portfolios under realistic market constraints...',
      date: 'December 20, 2025',
      category: 'Portfolio Theory',
      author: 'HQG Research Team'
    },
  ];

  return (
    <div className="research">
      <div className="container">
        <h1>Research</h1>
        <p className="intro">Latest insights and analysis from the Husky Quantitative Group research team</p>

        <div className="articles-grid">
          {articles.map((article) => (
            <article key={article.id} className="article-card">
              <div className="article-header">
                <span className="category">{article.category}</span>
                <span className="date">{article.date}</span>
              </div>
              <h2>{article.title}</h2>
              <p className="excerpt">{article.excerpt}</p>
              <footer className="article-footer">
                <span className="author">By {article.author}</span>
                <button className="read-more">Read More →</button>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Research;
