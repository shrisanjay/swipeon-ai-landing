import { Check } from "lucide-react";

const reasons = [
  "Tailored Solutions",
  "End-to-End Support", 
  "Expertise in AI",
  "Seamless Integration"
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-foreground">
            Why Choose Swepio?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            We combine cutting-edge technology with personalized service to deliver exceptional results
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 rounded-lg bg-accent/50 hover:bg-accent transition-colors duration-300">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-medium text-foreground">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;