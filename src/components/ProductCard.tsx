import { Button } from "@/components/ui/button";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  tag: string;
  price?: string;
  isComingSoon?: boolean;
  onInquire?: () => void;
  onNotify?: () => void;
}

const ProductCard = ({
  image,
  name,
  description,
  tag,
  price,
  isComingSoon = false,
  onInquire,
  onNotify,
}: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Tag */}
        <div className="absolute top-4 left-4">
          <span className="bg-forest text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
            {tag}
          </span>
        </div>
        {isComingSoon && (
          <div className="absolute inset-0 bg-coffee-dark/60 flex items-center justify-center">
            <span className="bg-gold text-coffee-dark font-bold px-4 py-2 rounded-lg">
              Coming Soon
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          {price && (
            <span className="font-display text-lg font-bold text-coffee-medium">
              {price}
            </span>
          )}
          <Button
            variant={isComingSoon ? "secondary" : "coffee"}
            size="sm"
            onClick={isComingSoon ? onNotify : onInquire}
            className="ml-auto"
          >
            {isComingSoon ? "Notify Me" : "Inquire"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
