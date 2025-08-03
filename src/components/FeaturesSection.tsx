import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, Bot, Settings } from "lucide-react";

const features = [
  {
    icon: ArrowUpRight,
    title: "Effortless Platform Migration",
    description: "Smooth transition to AI-driven platforms with minimal downtime and maximum efficiency."
  },
  {
    icon: Bot,
    title: "Customized AI Solutions",
    description: "Tailored AI implementations designed specifically for your business productivity and growth."
  },
  {
    icon: Settings,
    title: "Bespoke CRM Modules",
    description: "Customer relationship management systems adapted to your unique business processes."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-feature-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Transform Your Business
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how our AI-powered solutions can revolutionize your operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;