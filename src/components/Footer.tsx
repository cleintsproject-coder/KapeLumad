import { Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-coffee-dark border-t border-cream/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center">
                <span className="font-display text-coffee-dark font-bold text-xl">KL</span>
              </div>
              <div>
                <h3 className="font-display text-cream text-xl font-semibold">
                  Kape Lumad
                </h3>
                <p className="text-cream/60 text-sm">Philippines</p>
              </div>
            </div>
            <p className="text-cream/70 leading-relaxed mb-6 max-w-md">
              A social enterprise specialty coffee producer from Bukidnon, empowering 
              Manobo farmers through sustainable coffee farming. Every cup preserves 
              culture and builds community.
            </p>
            <div className="flex items-center gap-2 text-gold text-sm">
              <span>🏆</span>
              <span>ASEAN SOAR Together 2025 Awardee</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-cream font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "Our Story" },
                { href: "#products", label: "Products" },
                { href: "#impact", label: "Our Impact" },
                { href: "#videos", label: "Stories" },
                { href: "#contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-cream font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-cream/70 text-sm">
                  Purok 2A Tamarin Street,<br />
                  Maramag, Bukidnon 8714
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="tel:+639671698475"
                  className="text-cream/70 hover:text-cream transition-colors text-sm"
                >
                  0967 169 8475
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="mailto:kapelumad@gmail.com"
                  className="text-cream/70 hover:text-cream transition-colors text-sm"
                >
                  kapelumad@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Facebook className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="https://facebook.com/kapelumad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 hover:text-cream transition-colors text-sm"
                >
                  Kape Lumad
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/50 text-sm">
            © {currentYear} Kape Lumad. All rights reserved.
          </p>
          <p className="text-cream/50 text-sm italic">
            "Embrace our culture, to preserve the old ways"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
