import React from 'react';
import HomeHeroSection from '../components/home/HomeHeroSection';
import HomeAboutSection from '../components/home/HomeAboutSection';
import HomeBlogHighlightsSection from '../components/home/HomeBlogHighlightsSection';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-page">
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeBlogHighlightsSection />
    </div>
  );
}

export default Home;
