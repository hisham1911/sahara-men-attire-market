
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const CategoryShowcase = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-white">{t("categories")}</span>
          <span className="block h-1 w-24 bg-magrabi-gold mx-auto mt-3"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Formal Wear */}
          <Link 
            to="/products?category=formal" 
            className="relative h-96 overflow-hidden group"
          >
            <img 
              src="https://images.unsplash.com/photo-1590765759804-0b2b91a8306d?q=80&w=1972&auto=format&fit=crop" 
              alt="Formal Wear"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-semibold mb-2">{t("formal")}</h3>
              <div className="w-10 h-1 bg-magrabi-gold mb-4 transition-all duration-300 group-hover:w-16"></div>
              <p className="text-white/80">
                {/* Description text */}
              </p>
            </div>
          </Link>
          
          {/* Casual Wear */}
          <Link 
            to="/products?category=casual" 
            className="relative h-96 overflow-hidden group"
          >
            <img 
              src="https://images.unsplash.com/photo-1617196701537-7329482cc9fe?q=80&w=1974&auto=format&fit=crop" 
              alt="Casual Wear"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-semibold mb-2">{t("casual")}</h3>
              <div className="w-10 h-1 bg-magrabi-gold mb-4 transition-all duration-300 group-hover:w-16"></div>
              <p className="text-white/80">
                {/* Description text */}
              </p>
            </div>
          </Link>
          
          {/* Accessories */}
          <Link 
            to="/products?category=accessories" 
            className="relative h-96 overflow-hidden group"
          >
            <img 
              src="https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=1908&auto=format&fit=crop" 
              alt="Accessories"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-semibold mb-2">{t("accessories")}</h3>
              <div className="w-10 h-1 bg-magrabi-gold mb-4 transition-all duration-300 group-hover:w-16"></div>
              <p className="text-white/80">
                {/* Description text */}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
