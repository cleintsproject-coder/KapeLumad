import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "Our Story" },
    { href: "#products", label: "Products" },
    { href: "#impact", label: "Impact" },
    { href: "#videos", label: "Stories" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-coffee-dark/95 backdrop-blur-md border-b border-cream/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cream flex items-center justify-center">
              <span className="font-display text-coffee-dark font-bold text-lg md:text-xl">KL</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-cream text-lg md:text-xl font-semibold tracking-wide">
                Kape Lumad
              </h1>
              <p className="text-cream/60 text-xs tracking-widest uppercase">Philippines</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream/80 hover:text-cream transition-colors text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="hero" size="sm" asChild>
              <Link to="/shop">Shop Coffee</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-cream p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-cream/10 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-cream/80 hover:text-cream transition-colors text-base font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" size="default" className="mt-2" asChild>
                <Link to="/shop">Shop Coffee</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
