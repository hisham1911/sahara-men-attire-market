
import { useLanguage } from "@/contexts/LanguageContext";
import { getNewArrivals, getBestSellers } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CollectionSection = () => {
  const { t } = useLanguage();
  const newArrivals = getNewArrivals();
  const bestSellers = getBestSellers();
  
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="new" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-900 border border-gray-800">
              <TabsTrigger 
                value="new" 
                className="data-[state=active]:bg-magrabi-gold data-[state=active]:text-black"
              >
                {t("new_arrivals")}
              </TabsTrigger>
              <TabsTrigger 
                value="best" 
                className="data-[state=active]:bg-magrabi-gold data-[state=active]:text-black"
              >
                {t("best_sellers")}
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="new">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {newArrivals.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="best">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {bestSellers.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CollectionSection;
