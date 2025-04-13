
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { language, t } = useLanguage();
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      id: product.id,
      name: language === "ar" ? product.nameAr : product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
      size: product.sizes[0],
      color: product.colors[0]
    });
  };

  return (
    <Link to={`/products/${product.id}`} className="group">
      <div className="bg-black border border-gray-800 rounded-md overflow-hidden transition-all duration-300 hover:border-magrabi-gold">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={language === "ar" ? product.nameAr : product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {product.newArrival && (
            <div className="absolute top-2 right-2 bg-magrabi-gold text-black px-2 py-1 text-xs font-semibold rounded">
              {language === "ar" ? "جديد" : "NEW"}
            </div>
          )}
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button 
              onClick={handleAddToCart}
              className="bg-magrabi-gold text-black hover:bg-magrabi-gold/80"
            >
              <ShoppingCart size={18} className="me-2" />
              {t("add_to_cart")}
            </Button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-white text-lg font-medium truncate">
            {language === "ar" ? product.nameAr : product.name}
          </h3>
          <div className="flex justify-between items-center mt-2">
            <p className="text-magrabi-gold font-semibold">${product.price.toLocaleString()}</p>
            <div className="flex space-x-1">
              {product.colors.slice(0, 3).map((color, index) => (
                <div 
                  key={index}
                  className="w-3 h-3 rounded-full border border-gray-400"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
