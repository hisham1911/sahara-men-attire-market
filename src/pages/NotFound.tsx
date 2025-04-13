
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-magrabi-gold mb-6">404</h1>
        <p className="text-2xl text-white mb-8">{t("page_not_found")}</p>
        <Link to="/">
          <Button className="bg-magrabi-gold text-black hover:bg-magrabi-gold/80 px-8 py-6 text-lg">
            {t("return_to_home")}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
