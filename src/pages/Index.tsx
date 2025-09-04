import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Index = () => {
  return (
    <AuroraBackground className="min-h-screen">
      <div className="min-h-screen">
        <Header />
        <Hero />
        
        <Features />
        <CTA />
        <Footer />
      </div>
    </AuroraBackground>
  );
};

export default Index;
