import { Heart, Leaf, Users } from "lucide-react";
import bannerImage from "@/assets/kape-lumad-banner.png";

const AboutSection = () => {
  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "Empowering Manobo and Lumad farmers with fair wages and sustainable livelihoods.",
    },
    {
      icon: Leaf,
      title: "Sustainably Grown",
      description: "Organic farming practices that protect the highlands of Bukidnon for generations.",
    },
    {
      icon: Heart,
      title: "Cultural Heritage",
      description: "Preserving indigenous traditions while sharing premium Filipino coffee with the world.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-warm pattern-indigenous">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={bannerImage}
                alt="Kape Lumad - Embrace our culture, to preserve the old ways"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-forest/20 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-forest font-medium tracking-widest uppercase text-sm mb-4 block">
              Our Story
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6 leading-tight">
              More Than Coffee — <br />
              <span className="text-coffee-medium">A Movement for Change</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Kape Lumad is a social enterprise specialty coffee producer based in Bukidnon, 
              Philippines. We partner directly with Manobo farmers, ensuring fair trade practices 
              and sustainable farming methods that honor their ancestral lands.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Every cup you enjoy helps preserve indigenous culture, provides education 
              opportunities, and builds stronger communities in the Philippine highlands.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-forest/10 text-forest mb-3">
                    <value.icon size={24} />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
