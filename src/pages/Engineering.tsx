import EngineeringHeroSection from "@/components/EngineeringHeroSection";
import BlogList from "@/components/EngineeringBlogList";
import EngineeringFooter from "@/components/EngineeringFooter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <EngineeringHeroSection />
      <BlogList /> 
      <Footer />
    </div>
  );
};

export default Index;