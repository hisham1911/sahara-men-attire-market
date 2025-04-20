
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import FeaturedSection from "@/components/FeaturedSection";
import CategoryShowcase from "@/components/CategoryShowcase";
import CollectionSection from "@/components/CollectionSection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // تأكد من تمرير النظام إلى الأعلى عند تحميل الصفحة
    window.scrollTo(0, 0);
  }, []);

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
