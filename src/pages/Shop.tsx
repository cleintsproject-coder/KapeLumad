import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import InquiryModal from "@/components/InquiryModal";
import coffeeBeans from "@/assets/coffee-beans.jpg";
import dripCoffee from "@/assets/drip-coffee.jpg";
import coffeeCapsules from "@/assets/coffee-capsules.jpg";

export interface Product {
  id: string;
  image: string;
  name: string;
  description: string;
  tag: string;
  price?: string;
  isComingSoon?: boolean;
}

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isNotifyOpen, setIsNotifyOpen] = useState(false);

  const products: Product[] = [
    {
      id: "drip-coffee",
      image: dripCoffee,
      name: "Lumad Drip Coffee",
      description: "Single-serve pour-over bags featuring our signature highland Arabica. Perfect for on-the-go brewing with rich, balanced flavors.",
      tag: "Drip",
      price: "₱150",
    },
    {
      id: "whole-beans",
      image: coffeeBeans,
      name: "Whole Bean Specialty",
      description: "Premium single-origin beans from Bukidnon highlands. Notes of chocolate, citrus, and native honey. Perfect for pour-over or espresso.",
      tag: "Whole Beans",
      price: "₱450",
    },
    {
      id: "capsules",
      image: coffeeCapsules,
      name: "Bukidnon Capsules",
      description: "Eco-friendly coffee pods compatible with popular machines. Convenient without compromise on taste or sustainability.",
      tag: "Capsules",
      isComingSoon: true,
    },
    {
      id: "drip-variety",
      image: dripCoffee,
      name: "Variety Drip Pack",
      description: "A curated selection of our best drip coffee flavors. Perfect gift set featuring light, medium, and dark roasts.",
      tag: "Gift Set",
      price: "₱420",
    },
    {
      id: "beans-dark",
      image: coffeeBeans,
      name: "Dark Roast Beans",
      description: "Bold and intense dark roasted beans for those who prefer a stronger cup. Notes of dark chocolate and toasted nuts.",
      tag: "Whole Beans",
      price: "₱480",
    },
    {
      id: "sampler",
      image: dripCoffee,
      name: "Sampler Collection",
      description: "Try all our signature blends with this sampler pack. Includes 6 different single-serve drip bags.",
      tag: "Sampler",
      price: "₱280",
    },
  ];

  const handleInquire = (product: Product) => {
    setSelectedProduct(product);
    setIsInquiryOpen(true);
  };

  const handleNotify = (product: Product) => {
    setSelectedProduct(product);
    setIsNotifyOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-coffee-dark to-coffee-medium">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream font-bold mb-4">
            Shop Kape Lumad
          </h1>
          <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto">
            Premium coffee from the Bukidnon highlands, ethically sourced from Manobo farmers
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onInquire={() => handleInquire(product)}
                onNotify={() => handleNotify(product)}
              />
            ))}
          </div>

          {/* Bottom Info */}
          <div className="text-center mt-16 p-8 bg-muted rounded-2xl max-w-2xl mx-auto">
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Wholesale & Custom Orders
            </h3>
            <p className="text-muted-foreground mb-4">
              Looking for bulk orders or custom packaging? We offer wholesale pricing for cafés, restaurants, and corporate gifts.
            </p>
            <a
              href="/#contact"
              className="text-forest font-semibold hover:text-forest-light transition-colors underline underline-offset-4"
            >
              Contact us for partnerships →
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        product={selectedProduct}
        type="inquiry"
      />

      {/* Notify Modal */}
      <InquiryModal
        isOpen={isNotifyOpen}
        onClose={() => setIsNotifyOpen(false)}
        product={selectedProduct}
        type="notify"
      />
    </div>
  );
};

export default Shop;
