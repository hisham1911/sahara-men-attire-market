
import { useLanguage } from "@/contexts/LanguageContext";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const FeaturedSection = () => {
  const { t } = useLanguage();
  const featuredProducts = getFeaturedProducts();
  
  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-white">{t("featured_products")}</span>
          <span className="block h-1 w-24 bg-magrabi-gold mx-auto mt-3"></span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
