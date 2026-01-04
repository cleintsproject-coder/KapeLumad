import { Award, Globe, TrendingUp } from "lucide-react";
import aseanAwardImage from "@/assets/asean-soar-award.jpg";

const AseanRecognition = () => {
  const highlights = [
    {
      icon: Award,
      label: "Notable Awardee",
      value: "USD $1,000",
    },
    {
      icon: Globe,
      label: "ASEAN Showcase",
      value: "Regional Recognition",
    },
    {
      icon: TrendingUp,
      label: "Digital Growth",
      value: "E-commerce Training",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-coffee relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-forest/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-2 mb-6">
                <Award className="w-4 h-4 text-gold" />
                <span className="text-gold text-sm font-semibold tracking-wide">
                  2025 Recognition
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream font-bold mb-6 leading-tight">
                Selected for{" "}
                <span className="text-gradient-gold">ASEAN SOAR Together</span>
              </h2>

              <p className="text-cream/80 text-lg leading-relaxed mb-8">
                Kape Lumad has been recognized as a Notable Awardee in the ASEAN SOAR Together 
                2025 program — a prestigious initiative supported by TikTok Shop, ASEAN Foundation, 
                and the Malaysian government to empower Southeast Asian social enterprises.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-xl bg-cream/5 border border-cream/10"
                  >
                    <item.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                    <p className="text-cream font-semibold text-sm mb-1">{item.value}</p>
                    <p className="text-cream/60 text-xs">{item.label}</p>
                  </div>
                ))}
              </div>

              <p className="text-cream/70 text-sm leading-relaxed">
                This recognition validates our mission to create meaningful impact through 
                ethical coffee production and community empowerment across the Philippines.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-strong border border-cream/10">
                <img
                  src={aseanAwardImage}
                  alt="ASEAN SOAR Together 2025 - Kape Lumad Notable Awardee"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-gold text-coffee-dark px-6 py-3 rounded-xl shadow-strong">
                <p className="font-display font-bold text-lg">⭐ 5.0</p>
                <p className="text-xs font-medium">Rated Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AseanRecognition;
