import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogHeroSection from "@/components/BlogHeroSection";
import BlogListSection from "@/components/BlogListSection";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <BlogHeroSection
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <BlogListSection activeCategory={activeCategory} />
      <Footer />
    </div>
  );
};

export default Blog;
