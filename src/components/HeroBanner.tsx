
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  const { t } = useLanguage();
  
  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" 
          alt="Elegant man in a suit"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto h-full flex items-center px-4">
        <div className="max-w-md relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="block">{t("elegant_style")}</span>
            <span className="text-magrabi-gold">{t("quality_fabrics")}</span>
          </h1>
          <p className="text-white text-lg mb-8">
            MAGRABI MENSWEAR - {t("magrabi_menswear")}
          </p>
          <Link to="/products">
            <Button className="bg-magrabi-gold text-black hover:bg-magrabi-gold/80 px-8 py-6 text-lg">
              {t("explore_collection")}
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Logo Watermark */}
      <div className="absolute bottom-8 right-8 opacity-30">
        <img 
          src="/lovable-uploads/571560cd-180d-4a27-8654-5e65dfdff4c5.png" 
          alt="Magrabi Logo" 
          className="w-32"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
