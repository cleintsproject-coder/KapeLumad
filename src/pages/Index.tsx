import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AseanRecognition from "@/components/AseanRecognition";
import ProductsSection from "@/components/ProductsSection";
import ImpactSection from "@/components/ImpactSection";
import VideosSection from "@/components/VideosSection";
import MapSection from "@/components/MapSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AseanRecognition />
        <ProductsSection />
        <ImpactSection />
        <VideosSection />
        <MapSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
