import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import VisionToImpactSection from "@/components/VisionToImpactSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <WhyChooseUsSection />
      <VisionToImpactSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Index;
