import { Handshake, Shield, Sparkles, TreePine } from "lucide-react";

const ImpactSection = () => {
  const impacts = [
    {
      icon: Handshake,
      stat: "50+",
      label: "Farmer Partners",
      description: "Indigenous Manobo farmers receiving fair wages and sustainable income.",
    },
    {
      icon: Shield,
      stat: "100%",
      label: "Ethically Sourced",
      description: "Full traceability from highland farms to your cup.",
    },
    {
      icon: TreePine,
      stat: "500+",
      label: "Hectares Protected",
      description: "Ancestral lands preserved through sustainable farming.",
    },
    {
      icon: Sparkles,
      stat: "Premium",
      label: "Quality Beans",
      description: "Specialty-grade Arabica grown at 1,200+ meters elevation.",
    },
  ];

  return (
    <section id="impact" className="py-20 md:py-32 bg-secondary pattern-indigenous">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-forest font-medium tracking-widest uppercase text-sm mb-4 block">
            Our Impact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6">
            Every Cup <span className="text-coffee-medium">Makes a Difference</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            When you choose Kape Lumad, you're supporting indigenous communities, 
            preserving cultural heritage, and protecting the environment.
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {impacts.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-forest/10 text-forest mb-6">
                <item.icon size={32} />
              </div>
              <p className="font-display text-4xl font-bold text-coffee-dark mb-2">
                {item.stat}
              </p>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {item.label}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
