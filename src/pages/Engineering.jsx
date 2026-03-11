import React from 'react';
import EngineeringHeroSection from '../components/engineering/EngineeringHeroSection';
import EngineeringBlogList from '../components/engineering/EngineeringBlogList';
import '../styles/Engineering.css';

function Engineering() {
  return (
    <div className="engineering-page">
      <EngineeringHeroSection />
      <EngineeringBlogList />
    </div>
  );
}

export default Engineering;
