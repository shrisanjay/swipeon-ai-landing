import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-hero-gradient opacity-85"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Transforming your vision into Ai Powered reality
          <br />
          <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Transform Your Business.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
          At Swipeon, we make your digital journey seamless by migrating and supporting your business from any existing platform to customized Artificial Intelligence (AI) solutions.
        </p>
        
        <Button variant="hero" size="lg" className="px-8 py-6 text-lg">
          Get Started
        </Button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full opacity-75">
          <div className="w-1 h-3 bg-white rounded-full mx-auto mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;