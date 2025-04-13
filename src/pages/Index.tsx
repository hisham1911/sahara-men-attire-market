
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import FeaturedSection from "@/components/FeaturedSection";
import CategoryShowcase from "@/components/CategoryShowcase";
import CollectionSection from "@/components/CollectionSection";

const Index = () => {
  return (
    <Layout>
      <HeroBanner />
      <CategoryShowcase />
      <FeaturedSection />
      <CollectionSection />
    </Layout>
  );
};

export default Index;
