import { MapPin, Phone, Mail, Clock } from "lucide-react";

const MapSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-strong h-[400px] lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.8!2d125.0!3d7.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDUnMDAuMCJOIDEyNcKwMDAnMDAuMCJF!5e0!3m2!1sen!2sph!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kape Lumad Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Info */}
            <div>
              <span className="text-forest font-medium tracking-widest uppercase text-sm mb-4 block">
                Visit Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-bold mb-8">
                Find Us in <span className="text-coffee-medium">Bukidnon</span>
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center text-forest">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Purok 2A Tamarin Street<br />
                      Maramag, Bukidnon<br />
                      Philippines, 8714
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Plus Code: Q242+GG Maramag
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center text-forest">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a
                      href="tel:+639671698475"
                      className="text-coffee-medium hover:text-coffee-dark transition-colors"
                    >
                      0967 169 8475
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center text-forest">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:kapelumad@gmail.com"
                      className="text-coffee-medium hover:text-coffee-dark transition-colors"
                    >
                      kapelumad@gmail.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center text-forest">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 8:00 AM - 5:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
