import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Ideas to Intelligence",
    description: "Empowering Chennova Software with AI-first solutions",
    link: "https://share.google/Kqq7QnNsc4Msio2Tm"
  },
  {
    title: "Farms to Future",
    description: "Digital transformation for Vivasai's agricultural intelligence",
    link: "https://share.google/5dWlWAc3tRDSsBCfd"
  },
  {
    title: "From Belts to Bots",
    description: "Automating conveyor solutions for Integrated Pacline",
    link: "https://share.google/PL6Kozpdo0uqFu5mR"
  },
  {
    title: "Fueling Smart Fleets",
    description: "IoT-based GPS and fuel tracking system development",
    link: "https://share.google/EakYFbZaXtysRlHQk"
  },
  {
    title: "Healing, Streamlined",
    description: "Hospital Management System for efficient patient care",
    link: "https://share.google/64F2RdLXCby4U4jq6"
  }
];

const VisionToImpactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-emerald-600/5"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-blue-700 to-emerald-600 bg-clip-text text-transparent">
            From Vision to Impact
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
            Real-world transformations we've shaped
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/50 hover:border-blue-300/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-emerald-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                <div className="relative z-10 text-left">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-slate-700 group-hover:text-blue-700 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-all duration-300 flex-shrink-0 mt-1 group-hover:scale-110" />
                  </div>
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  {/* Subtle accent line */}
                  <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-500 mt-4"></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionToImpactSection; 