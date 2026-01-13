import React from 'react';
import '../styles/Products.css';

function Products() {
  const products = [
    {
      id: 1,
      title: 'QuantFlow',
      description: 'An automated portfolio backtesting framework with advanced analytics and performance attribution',
      features: ['Real-time backtesting', 'Risk analytics', 'Performance attribution', 'Multi-asset support'],
      status: 'Production'
    },
    {
      id: 2,
      title: 'MarketPulse',
      description: 'Real-time market data aggregation and analysis platform for equities, options, and futures',
      features: ['Live market data', 'Custom indicators', 'Alert system', 'API integration'],
      status: 'Production'
    },
    {
      id: 3,
      title: 'AlgoLab',
      description: 'Collaborative development environment for designing and testing quantitative trading strategies',
      features: ['Visual strategy builder', 'Live paper trading', 'Backtesting', 'Team collaboration'],
      status: 'Beta'
    },
    {
      id: 4,
      title: 'DataVault',
      description: 'High-performance financial data warehouse with comprehensive historical datasets',
      features: ['100+ years of data', 'Sub-millisecond queries', 'Custom data feeds', 'REST API'],
      status: 'Production'
    },
  ];

  return (
    <div className="products">
      <div className="container">
        <h1>Software Products</h1>
        <p className="intro">Innovative tools built by our team for the quantitative finance community</p>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-header">
                <h2>{product.title}</h2>
                <span className={`status ${product.status.toLowerCase()}`}>{product.status}</span>
              </div>
              <p className="description">{product.description}</p>
              <div className="features">
                <h3>Features</h3>
                <ul>
                  {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <button className="learn-more">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
