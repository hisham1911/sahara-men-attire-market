
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart, CartItem } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Trash, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const CartPage = () => {
  const { t } = useLanguage();
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  
  if (items.length === 0) {
    return (
      <Layout>
        <div className="bg-black py-20">
          <div className="container mx-auto px-4 text-center">
            <ShoppingBag size={64} className="text-magrabi-gold mx-auto mb-6 opacity-50" />
            <h1 className="text-3xl font-bold text-white mb-4">{t("empty_cart")}</h1>
            <p className="text-gray-400 mb-8">{t("empty_cart_message")}</p>
            <Link to="/products">
              <Button className="bg-magrabi-gold text-black hover:bg-magrabi-gold/80 px-8 py-6 text-lg">
                {t("continue_shopping")}
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="bg-black py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-8 text-center">
            {t("cart")}
            <span className="block h-1 w-16 bg-magrabi-gold mx-auto mt-3"></span>
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {/* Cart Header - Desktop */}
              <div className="hidden lg:grid grid-cols-12 text-gray-400 pb-3 border-b border-gray-800">
                <div className="col-span-6">{t("product")}</div>
                <div className="col-span-2 text-center">{t("price")}</div>
                <div className="col-span-2 text-center">{t("quantity")}</div>
                <div className="col-span-2 text-center">{t("subtotal")}</div>
              </div>
              
              {/* Cart Items */}
              {items.map((item) => (
                <CartItemRow 
                  key={`${item.id}-${item.size}-${item.color}`} 
                  item={item} 
                  removeItem={removeItem}
                  updateQuantity={updateQuantity}
                />
              ))}
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="bg-gray-900 rounded-md p-6">
                <h2 className="text-xl font-bold text-white mb-4">{t("order_summary")}</h2>
                <Separator className="bg-gray-800 mb-4" />
                
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>{t("subtotal")}</span>
                    <span>${totalPrice.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>{t("shipping")}</span>
                    <span>{t("calculated_at_checkout")}</span>
                  </div>
                </div>
                
                <Separator className="bg-gray-800 my-4" />
                
                <div className="flex justify-between text-lg font-bold text-white">
                  <span>{t("total")}</span>
                  <span>${totalPrice.toLocaleString()}</span>
                </div>
                
                <Link to="/checkout">
                  <Button className="w-full mt-6 bg-magrabi-gold text-black hover:bg-magrabi-gold/80 py-6 text-lg">
                    {t("proceed_to_checkout")}
                    <ArrowRight size={18} className="ms-2" />
                  </Button>
                </Link>
                
                <Link to="/products">
                  <Button variant="outline" className="w-full mt-3 border-gray-700 text-white hover:bg-gray-800">
                    {t("continue_shopping")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

interface CartItemRowProps {
  item: CartItem;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
}

const CartItemRow = ({ item, removeItem, updateQuantity }: CartItemRowProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="grid grid-cols-12 items-center gap-4 py-4 border-b border-gray-800">
      {/* Product Image & Info */}
      <div className="col-span-12 lg:col-span-6 flex items-center">
        <div className="w-20 h-20 bg-gray-900 rounded-md overflow-hidden flex-shrink-0">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ms-4">
          <h3 className="text-white font-medium">{item.name}</h3>
          <div className="text-gray-400 text-sm">
            {item.size && <span className="me-3">{t("size")}: {item.size}</span>}
            {item.color && (
              <span className="flex items-center">
                {t("color")}: 
                <span 
                  className="w-3 h-3 rounded-full ms-1"
                  style={{ backgroundColor: item.color }}
                />
              </span>
            )}
          </div>
          <button 
            onClick={() => removeItem(item.id)}
            className="text-red-500 text-sm flex items-center mt-2 hover:text-red-400 lg:hidden"
          >
            <Trash size={14} className="me-1" />
            {t("remove")}
          </button>
        </div>
      </div>
      
      {/* Price - Desktop */}
      <div className="hidden lg:block lg:col-span-2 text-center text-white">
        ${item.price.toLocaleString()}
      </div>
      
      {/* Quantity */}
      <div className="col-span-8 lg:col-span-2 flex items-center justify-center">
        <div className="flex items-center">
          <Button 
            variant="outline"
            size="icon"
            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
            disabled={item.quantity <= 1}
            className="h-8 w-8 border-gray-700 text-white hover:bg-gray-800"
          >
            <Minus size={14} />
          </Button>
          
          <span className="w-10 text-center text-white mx-2">
            {item.quantity}
          </span>
          
          <Button 
            variant="outline"
            size="icon"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="h-8 w-8 border-gray-700 text-white hover:bg-gray-800"
          >
            <Plus size={14} />
          </Button>
        </div>
      </div>
      
      {/* Mobile Price/Remove */}
      <div className="col-span-4 lg:hidden flex justify-end">
        <span className="text-white">${(item.price * item.quantity).toLocaleString()}</span>
      </div>
      
      {/* Subtotal - Desktop */}
      <div className="hidden lg:block lg:col-span-2 text-center text-white">
        ${(item.price * item.quantity).toLocaleString()}
      </div>
      
      {/* Remove - Desktop */}
      <button 
        onClick={() => removeItem(item.id)}
        className="hidden lg:flex col-span-0 lg:col-span-1 justify-center text-red-500 hover:text-red-400"
      >
        <Trash size={18} />
      </button>
    </div>
  );
};

export default CartPage;
