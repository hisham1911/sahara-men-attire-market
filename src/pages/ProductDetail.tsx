
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  Heart, 
  Minus, 
  Plus, 
  ArrowLeft
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const { addItem } = useCart();
  
  const product = getProductById(id || "");
  const relatedProducts = product ? getRelatedProducts(id || "", product.category) : [];
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-white text-xl">{t("product_not_found")}</p>
          <Link to="/products">
            <Button className="mt-4 bg-magrabi-gold text-black hover:bg-magrabi-gold/80">
              {t("continue_shopping")}
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }
  
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: language === "ar" ? product.nameAr : product.name,
      price: product.price,
      image: product.images[0],
      quantity,
      size: selectedSize,
      color: selectedColor
    });
  };
  
  const handleBuyNow = () => {
    handleAddToCart();
    window.location.href = "/cart";
  };
  
  return (
    <Layout>
      <div className="bg-black py-12">
        <div className="container mx-auto px-4">
          {/* Back to Products */}
          <div className="mb-6">
            <Link 
              to="/products" 
              className="inline-flex items-center text-white hover:text-magrabi-gold transition-colors"
            >
              <ArrowLeft size={18} className="me-2" />
              {t("back")}
            </Link>
          </div>
          
          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="aspect-square overflow-hidden rounded-md bg-gray-900 mb-4">
                <img 
                  src={product.images[selectedImage]} 
                  alt={language === "ar" ? product.nameAr : product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image Gallery */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, index) => (
                    <div 
                      key={index}
                      className={`aspect-square cursor-pointer rounded-md overflow-hidden ${
                        selectedImage === index 
                          ? "ring-2 ring-magrabi-gold" 
                          : "opacity-70"
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} - ${index}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                {language === "ar" ? product.nameAr : product.name}
              </h1>
              
              <p className="text-2xl font-bold text-magrabi-gold mb-6">
                ${product.price.toLocaleString()}
              </p>
              
              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-white font-medium mb-3">{t("color")}</h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color, index) => (
                    <div 
                      key={index}
                      className={`w-10 h-10 rounded-full cursor-pointer ${
                        selectedColor === color 
                          ? "ring-2 ring-offset-2 ring-offset-black ring-magrabi-gold" 
                          : "ring-1 ring-gray-600"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
              </div>
              
              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-white font-medium mb-3">{t("size")}</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size, index) => (
                    <div 
                      key={index}
                      className={`w-12 h-12 flex items-center justify-center rounded-md border cursor-pointer ${
                        selectedSize === size 
                          ? "bg-magrabi-gold text-black border-magrabi-gold" 
                          : "bg-gray-900 text-white border-gray-700 hover:border-gray-500"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-white font-medium mb-3">{t("quantity")}</h3>
                <div className="flex items-center">
                  <Button 
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    className="border-gray-700 text-white hover:bg-gray-800"
                  >
                    <Minus size={18} />
                  </Button>
                  
                  <span className="w-12 text-center text-white mx-3">
                    {quantity}
                  </span>
                  
                  <Button 
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="border-gray-700 text-white hover:bg-gray-800"
                  >
                    <Plus size={18} />
                  </Button>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  className="flex-1 bg-magrabi-gold text-black hover:bg-magrabi-gold/80 py-6"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart size={20} className="me-2" />
                  {t("add_to_cart")}
                </Button>
                
                <Button 
                  variant="outline"
                  className="flex-1 border-magrabi-gold text-magrabi-gold hover:bg-magrabi-gold/10 py-6"
                  onClick={handleBuyNow}
                >
                  {t("buy_now")}
                </Button>
                
                <Button 
                  variant="outline"
                  size="icon"
                  className="border-gray-700 text-white hover:bg-gray-800 h-14 w-14"
                  onClick={() => toast.success("Added to Wishlist")}
                >
                  <Heart size={24} />
                </Button>
              </div>
              
              {/* Product Description */}
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="bg-gray-900 border border-gray-800 w-full">
                  <TabsTrigger 
                    value="description" 
                    className="flex-1 data-[state=active]:bg-magrabi-gold data-[state=active]:text-black"
                  >
                    {t("description")}
                  </TabsTrigger>
                  <TabsTrigger 
                    value="details" 
                    className="flex-1 data-[state=active]:bg-magrabi-gold data-[state=active]:text-black"
                  >
                    {t("details")}
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="description" className="text-gray-300 mt-4">
                  {language === "ar" ? product.descriptionAr : product.description}
                </TabsContent>
                
                <TabsContent value="details" className="text-gray-300 mt-4">
                  <ul className="space-y-2">
                    <li><span className="text-magrabi-gold font-semibold">{t("category")}:</span> {t(product.category as any)}</li>
                    <li><span className="text-magrabi-gold font-semibold">{t("id")}:</span> #{product.id}</li>
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">
              {t("related_products")}
              <span className="block h-1 w-16 bg-magrabi-gold mt-2"></span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
