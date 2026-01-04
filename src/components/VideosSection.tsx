import { Play } from "lucide-react";

const VideosSection = () => {
  // Placeholder for Facebook video embeds - would be dynamic from database
  const videos = [
    {
      id: 1,
      title: "Meet Our Farmers",
      thumbnail: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=600&h=400&fit=crop",
      description: "The heart of Kape Lumad - our Manobo farmer partners",
    },
    {
      id: 2,
      title: "From Farm to Cup",
      thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
      description: "The journey of our specialty coffee beans",
    },
    {
      id: 3,
      title: "Highland Harvest",
      thumbnail: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=400&fit=crop",
      description: "Coffee cherry picking in Bukidnon highlands",
    },
  ];

  return (
    <section id="videos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-forest font-medium tracking-widest uppercase text-sm mb-4 block">
            Our Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6">
            Stories From the <span className="text-coffee-medium">Highlands</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Watch the people and places behind every cup of Kape Lumad.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="aspect-video relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-coffee-dark/40 group-hover:bg-coffee-dark/50 transition-colors" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-strong group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-coffee-dark ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-coffee-dark via-coffee-dark/80 to-transparent">
                <h3 className="font-display text-lg font-semibold text-cream mb-1">
                  {video.title}
                </h3>
                <p className="text-cream/70 text-sm">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Facebook Link */}
        <div className="text-center mt-12">
          <a
            href="https://facebook.com/kapelumad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-forest font-semibold hover:text-forest-light transition-colors"
          >
            <span>Watch more on our Facebook page</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
