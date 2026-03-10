import React from 'react';
import HomeHeroSection from '../components/home/HomeHeroSection';
import HomeAboutSection from '../components/home/HomeAboutSection';
import HomeBlogHighlightsSection from '../components/home/HomeBlogHighlightsSection';
import HomeApplySection from '../components/home/HomeApplySection';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-page">
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeBlogHighlightsSection />
      <HomeApplySection />
    </div>
  );
}

export default Home;
