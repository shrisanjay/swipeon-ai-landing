import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section id="contact" className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's Shape Your Future
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
            Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
          </p>
          <Button variant="cta" size="lg" className="px-8 py-6 text-lg bg-white text-primary hover:bg-white/90">
            Contact Us
          </Button>
          
          <div className="mt-8">
            <a 
              href="mailto:contact@swipeon.ai" 
              className="text-xl font-semibold text-white hover:text-blue-200 transition-colors duration-200"
            >
              contact@swipeon.ai
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;