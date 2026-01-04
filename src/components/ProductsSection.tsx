import ProductCard from "@/components/ProductCard";
import coffeeBeans from "@/assets/coffee-beans.jpg";
import dripCoffee from "@/assets/drip-coffee.jpg";
import coffeeCapsules from "@/assets/coffee-capsules.jpg";

const ProductsSection = () => {
  const products = [
    {
      image: dripCoffee,
      name: "Lumad Drip Coffee",
      description: "Single-serve pour-over bags featuring our signature highland Arabica. Perfect for on-the-go brewing.",
      tag: "Drip",
      price: "₱150",
    },
    {
      image: coffeeBeans,
      name: "Whole Bean Specialty",
      description: "Premium single-origin beans from Bukidnon highlands. Notes of chocolate, citrus, and native honey.",
      tag: "Whole Beans",
      price: "₱450",
    },
    {
      image: coffeeCapsules,
      name: "Bukidnon Capsules",
      description: "Eco-friendly coffee pods compatible with popular machines. Convenient without compromise.",
      tag: "Capsules",
      isComingSoon: true,
    },
  ];

  return (
    <section id="products" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-forest font-medium tracking-widest uppercase text-sm mb-4 block">
            Our Products
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6">
            Taste the <span className="text-coffee-medium">Highlands</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every product is crafted with care, from farm to cup. Ethically sourced, 
            sustainably grown, and roasted to perfection.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Interested in wholesale or custom orders?
          </p>
          <a
            href="#contact"
            className="text-forest font-semibold hover:text-forest-light transition-colors underline underline-offset-4"
          >
            Contact us for partnerships →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
