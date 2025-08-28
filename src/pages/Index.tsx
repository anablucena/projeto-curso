import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
