import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingBag, Heart } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { toast } from "sonner";
import { useState, useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-24 overflow-hidden rounded-lg bg-muted transition-all ${
                      selectedImage === index ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - View ${index + 1}`}
                      className="h-full w-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}
            
            {/* Main Image - Compact size */}
            <div className="flex-1 order-1 md:order-2">
              <div className="aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-lg bg-muted shadow-elegant">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="h-full w-full object-contain"
                />
              </div>
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
