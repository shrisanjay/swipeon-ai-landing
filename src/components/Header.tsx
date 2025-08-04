import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex flex-col">
          <div className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
            Swepio
          </div>
          <div className="text-sm font-medium bg-hero-gradient bg-clip-text text-transparent">
            Ideas in. Intelligence out.
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#why-us" className="text-foreground hover:text-primary transition-colors">
            Why Us
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
        <Button variant="default" size="sm">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;