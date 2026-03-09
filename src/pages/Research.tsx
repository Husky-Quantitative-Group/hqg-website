import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResearchHeroSection from "@/components/ResearchHeroSection";
import ResearchBlogSection from "@/components/ResearchBlogSection";

const Research = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ResearchHeroSection />
      <ResearchBlogSection />
      <Footer />
    </div>
  );
};

export default Research;
