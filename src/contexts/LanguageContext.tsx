
import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    "home": "الرئيسية",
    "products": "المنتجات",
    "cart": "سلة التسوق",
    "checkout": "الدفع",
    "search": "البحث",
    "categories": "الفئات",
    "formal": "ملابس رسمية",
    "casual": "ملابس كاجوال",
    "accessories": "إكسسوارات",
    "featured_products": "منتجات مميزة",
    "new_arrivals": "وصل حديثاً",
    "best_sellers": "الأكثر مبيعاً",
    "add_to_cart": "أضف إلى السلة",
    "buy_now": "اشتري الآن",
    "size": "المقاس",
    "color": "اللون",
    "price": "السعر",
    "description": "الوصف",
    "related_products": "منتجات ذات صلة",
    "quantity": "الكمية",
    "subtotal": "المجموع الفرعي",
    "total": "المجموع الكلي",
    "continue_shopping": "مواصلة التسوق",
    "proceed_to_checkout": "المتابعة للدفع",
    "shipping_information": "معلومات الشحن",
    "payment_method": "طريقة الدفع",
    "order_summary": "ملخص الطلب",
    "place_order": "تأكيد الطلب",
    "name": "الاسم",
    "email": "البريد الإلكتروني",
    "phone": "رقم الهاتف",
    "address": "العنوان",
    "city": "المدينة",
    "zip_code": "الرمز البريدي",
    "country": "الدولة",
    "continue": "متابعة",
    "back": "رجوع",
    "credit_card": "بطاقة ائتمان",
    "cash_on_delivery": "الدفع عند الاستلام",
    "magrabi_menswear": "المغربي للملابس الرجالية",
    "footer_about": "المغربي هي علامة تجارية رائدة في مجال الأزياء الرجالية الفاخرة، متخصصة في البدلات الرسمية والملابس العصرية.",
    "footer_contact": "تواصل معنا",
    "footer_rights": "جميع الحقوق محفوظة",
    "elegant_style": "أناقة بلا حدود",
    "quality_fabrics": "أقمشة فاخرة",
    "explore_collection": "استكشف المجموعة",
    "select_language": "اختر اللغة",
  },
  en: {
    "home": "Home",
    "products": "Products",
    "cart": "Cart",
    "checkout": "Checkout",
    "search": "Search",
    "categories": "Categories",
    "formal": "Formal Wear",
    "casual": "Casual Wear",
    "accessories": "Accessories",
    "featured_products": "Featured Products",
    "new_arrivals": "New Arrivals",
    "best_sellers": "Best Sellers",
    "add_to_cart": "Add to Cart",
    "buy_now": "Buy Now",
    "size": "Size",
    "color": "Color",
    "price": "Price",
    "description": "Description",
    "related_products": "Related Products",
    "quantity": "Quantity",
    "subtotal": "Subtotal",
    "total": "Total",
    "continue_shopping": "Continue Shopping",
    "proceed_to_checkout": "Proceed to Checkout",
    "shipping_information": "Shipping Information",
    "payment_method": "Payment Method",
    "order_summary": "Order Summary",
    "place_order": "Place Order",
    "name": "Name",
    "email": "Email",
    "phone": "Phone",
    "address": "Address",
    "city": "City",
    "zip_code": "Zip Code",
    "country": "Country",
    "continue": "Continue",
    "back": "Back",
    "credit_card": "Credit Card",
    "cash_on_delivery": "Cash on Delivery",
    "magrabi_menswear": "MAGRABI MENSWEAR",
    "footer_about": "MAGRABI is a premium men's fashion brand specializing in luxury suits and contemporary clothing.",
    "footer_contact": "Contact Us",
    "footer_rights": "All Rights Reserved",
    "elegant_style": "Elegant Style",
    "quality_fabrics": "Quality Fabrics",
    "explore_collection": "Explore Collection",
    "select_language": "Select Language",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ar");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === "ar" ? "rtl" : "ltr"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
