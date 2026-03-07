import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FocusSection from "@/components/FocusSection";
import ApplySection from "@/components/ApplySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FocusSection />
      <ApplySection />
      <Footer />
    </div>
  );
};

export default Index;
