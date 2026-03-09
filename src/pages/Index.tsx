import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BlogHighlightsSection from "@/components/BlogHighlightsSection";
import ApplySection from "@/components/ApplySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BlogHighlightsSection />
      <ApplySection />
      <Footer />
    </div>
  );
};

export default Index;
