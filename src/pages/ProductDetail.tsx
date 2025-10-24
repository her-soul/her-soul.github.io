import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingBag, Heart } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const isMobile = useIsMobile();
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  
  // Set initial image based on product
  const getInitialImage = () => {
    if (!product) return 0;
    // Product 1 (Elegant Casual Ensemble) - start with second image
    if (product.id === 1) return 1;
    // Product 5 (Versatile Style Set) - no initial selection (will show first but indicate none selected)
    return 0;
  };
  
  const [selectedImage, setSelectedImage] = useState(getInitialImage());

  // Sync carousel with selected image on mobile
  useEffect(() => {
    if (!carouselApi) return;

    carouselApi.on("select", () => {
      setSelectedImage(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedImage(getInitialImage());
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/shop">
            <Button>Return to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    toast.success("Added to cart!", {
      description: `${product.name} has been added to your cart.`
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to="/shop">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Button>
        </Link>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Product Images */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Thumbnails - Left side on desktop, horizontal scroll on mobile */}
            {product.images.length > 1 && (
              <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible order-2 md:order-1">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedImage(index);
                      if (isMobile && carouselApi) {
                        carouselApi.scrollTo(index);
                      }
                    }}
                    className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-24 overflow-hidden rounded-lg bg-muted transition-all duration-300 ${
                      selectedImage === index 
                        ? "ring-2 ring-primary scale-105 shadow-[0_0_20px_rgba(var(--primary),0.3)]" 
                        : "opacity-60 hover:opacity-100 hover:scale-110"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - View ${index + 1}`}
                      className="h-full w-full object-contain transition-transform duration-300"
                    />
                  </button>
                ))}
              </div>
            )}
            
            {/* Main Image - Swipeable on mobile, static on desktop */}
            <div className="flex-1 order-1 md:order-2">
              {isMobile ? (
                <Carousel 
                  className="w-full" 
                  opts={{ startIndex: selectedImage }}
                  setApi={setCarouselApi}
                >
                  <CarouselContent>
                    {product.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="w-full rounded-lg bg-muted shadow-elegant h-[60vh] flex items-center justify-center overflow-hidden">
                          <img
                            src={image}
                            alt={`${product.name} - View ${index + 1}`}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              ) : (
                <div className="max-w-md w-full mx-auto rounded-lg bg-muted shadow-elegant h-auto aspect-[3/4] flex items-center justify-center overflow-hidden group cursor-zoom-in">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-3xl font-bold text-primary mb-6">£{product.price}</p>
            <p className="text-lg text-muted-foreground mb-8">{product.description}</p>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full shadow-elegant"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                <Heart className="mr-2 h-5 w-5" />
                Add to Wishlist
              </Button>
            </div>

            {/* Product Details */}
            <div className="mt-12 space-y-4">
              <h3 className="font-semibold text-lg">Product Details</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Premium quality fabrics</p>
                <p>• Comfortable fit</p>
                <p>• Easy care and maintenance</p>
                <p>• Available in multiple sizes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
