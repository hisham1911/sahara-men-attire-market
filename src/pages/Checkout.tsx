
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { ArrowLeft, Check, CreditCard, Truck, DollarSign } from "lucide-react";

const CheckoutPage = () => {
  const { t } = useLanguage();
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [step, setStep] = useState<"shipping" | "payment">("shipping");
  const [paymentMethod, setPaymentMethod] = useState<"credit_card" | "cash_on_delivery">("credit_card");
  
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    notes: ""
  });
  
  const handleShippingInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
  };
  
  const handleContinueToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
    window.scrollTo(0, 0);
  };
  
  const handlePlaceOrder = () => {
    // Here you would normally process the payment and create an order
    toast.success(t("order_placed_successfully"));
    
    // Clear cart and redirect to homepage
    setTimeout(() => {
      clearCart();
      navigate("/");
    }, 2000);
  };
  
  if (items.length === 0) {
    navigate("/cart");
    return null;
  }
  
  return (
    <Layout>
      <div className="bg-black py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-8 text-center">
            {t("checkout")}
            <span className="block h-1 w-16 bg-magrabi-gold mx-auto mt-3"></span>
          </h1>
          
          {/* Checkout Steps */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="flex justify-between">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step === "shipping" || step === "payment" 
                    ? "bg-magrabi-gold text-black" 
                    : "bg-gray-700 text-white"
                }`}>
                  {step === "shipping" || step === "payment" ? <Check size={20} /> : "1"}
                </div>
                <span className="mt-2 text-sm text-white">{t("shipping_information")}</span>
              </div>
              
              <div className="flex-1 flex items-center justify-center">
                <div className={`h-1 w-full ${
                  step === "payment" ? "bg-magrabi-gold" : "bg-gray-700"
                }`}></div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step === "payment" 
                    ? "bg-magrabi-gold text-black" 
                    : "bg-gray-700 text-white"
                }`}>
                  {step === "payment" ? <Check size={20} /> : "2"}
                </div>
                <span className="mt-2 text-sm text-white">{t("payment_method")}</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Shipping Information */}
              {step === "shipping" && (
                <form onSubmit={handleContinueToPayment} className="bg-gray-900 rounded-md p-6">
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                    <Truck size={20} className="me-2 text-magrabi-gold" />
                    {t("shipping_information")}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="firstName" className="text-white">{t("first_name")}</Label>
                      <Input 
                        id="firstName"
                        name="firstName"
                        value={shippingInfo.firstName}
                        onChange={handleShippingInfoChange}
                        required
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="lastName" className="text-white">{t("last_name")}</Label>
                      <Input 
                        id="lastName"
                        name="lastName"
                        value={shippingInfo.lastName}
                        onChange={handleShippingInfoChange}
                        required
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-white">{t("email")}</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={shippingInfo.email}
                        onChange={handleShippingInfoChange}
                        required
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-white">{t("phone")}</Label>
                      <Input 
                        id="phone"
                        name="phone"
                        value={shippingInfo.phone}
                        onChange={handleShippingInfoChange}
                        required
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="address" className="text-white">{t("address")}</Label>
                    <Input 
                      id="address"
                      name="address"
                      value={shippingInfo.address}
                      onChange={handleShippingInfoChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <Label htmlFor="city" className="text-white">{t("city")}</Label>
                      <Input 
                        id="city"
                        name="city"
                        value={shippingInfo.city}
                        onChange={handleShippingInfoChange}
                        required
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="zipCode" className="text-white">{t("zip_code")}</Label>
                      <Input 
                        id="zipCode"
                        name="zipCode"
                        value={shippingInfo.zipCode}
                        onChange={handleShippingInfoChange}
                        required
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="country" className="text-white">{t("country")}</Label>
                      <Input 
                        id="country"
                        name="country"
                        value={shippingInfo.country}
                        onChange={handleShippingInfoChange}
                        required
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="notes" className="text-white">{t("order_notes")}</Label>
                    <Textarea 
                      id="notes"
                      name="notes"
                      value={shippingInfo.notes}
                      onChange={handleShippingInfoChange}
                      placeholder={t("order_notes_placeholder")}
                      className="bg-gray-800 border-gray-700 text-white h-24"
                    />
                  </div>
                  
                  <div className="flex justify-between">
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => navigate("/cart")}
                      className="border-gray-700 text-white hover:bg-gray-800"
                    >
                      <ArrowLeft size={18} className="me-2" />
                      {t("back_to_cart")}
                    </Button>
                    
                    <Button type="submit" className="bg-magrabi-gold text-black hover:bg-magrabi-gold/80">
                      {t("continue")}
                    </Button>
                  </div>
                </form>
              )}
              
              {/* Payment Method */}
              {step === "payment" && (
                <div className="bg-gray-900 rounded-md p-6">
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                    <CreditCard size={20} className="me-2 text-magrabi-gold" />
                    {t("payment_method")}
                  </h2>
                  
                  <RadioGroup 
                    value={paymentMethod} 
                    onValueChange={(value) => setPaymentMethod(value as any)}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-2 border border-gray-700 rounded-md p-4">
                      <RadioGroupItem 
                        value="credit_card" 
                        id="credit_card"
                        className="border-gray-600 text-magrabi-gold"
                      />
                      <Label htmlFor="credit_card" className="text-white flex items-center">
                        <CreditCard size={20} className="me-2" />
                        {t("credit_card")}
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2 border border-gray-700 rounded-md p-4">
                      <RadioGroupItem 
                        value="cash_on_delivery" 
                        id="cash_on_delivery"
                        className="border-gray-600 text-magrabi-gold"
                      />
                      <Label htmlFor="cash_on_delivery" className="text-white flex items-center">
                        <DollarSign size={20} className="me-2" />
                        {t("cash_on_delivery")}
                      </Label>
                    </div>
                  </RadioGroup>
                  
                  {paymentMethod === "credit_card" && (
                    <div className="mt-6 space-y-4">
                      <div>
                        <Label htmlFor="card_number" className="text-white">{t("card_number")}</Label>
                        <Input 
                          id="card_number"
                          placeholder="1234 5678 9012 3456"
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry" className="text-white">{t("expiry_date")}</Label>
                          <Input 
                            id="expiry"
                            placeholder="MM/YY"
                            className="bg-gray-800 border-gray-700 text-white"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="cvv" className="text-white">{t("cvv")}</Label>
                          <Input 
                            id="cvv"
                            placeholder="123"
                            className="bg-gray-800 border-gray-700 text-white"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="card_name" className="text-white">{t("name_on_card")}</Label>
                        <Input 
                          id="card_name"
                          placeholder="John Doe"
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-between mt-6">
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => setStep("shipping")}
                      className="border-gray-700 text-white hover:bg-gray-800"
                    >
                      <ArrowLeft size={18} className="me-2" />
                      {t("back")}
                    </Button>
                    
                    <Button 
                      onClick={handlePlaceOrder}
                      className="bg-magrabi-gold text-black hover:bg-magrabi-gold/80"
                    >
                      {t("place_order")}
                    </Button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="bg-gray-900 rounded-md p-6 sticky top-24">
                <h2 className="text-xl font-bold text-white mb-4">{t("order_summary")}</h2>
                <Separator className="bg-gray-800 mb-4" />
                
                <div className="max-h-80 overflow-y-auto space-y-4 mb-4">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.size}-${item.color}`} className="flex items-center">
                      <div className="w-16 h-16 bg-gray-800 rounded-md overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ms-3 flex-1">
                        <h4 className="text-white text-sm">{item.name}</h4>
                        <div className="text-gray-400 text-xs">
                          {item.size && <span className="me-2">{t("size")}: {item.size}</span>}
                          <span>x{item.quantity}</span>
                        </div>
                      </div>
                      <div className="text-white text-sm">
                        ${(item.price * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
                
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
