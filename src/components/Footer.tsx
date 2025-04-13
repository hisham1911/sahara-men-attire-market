
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/571560cd-180d-4a27-8654-5e65dfdff4c5.png" 
                alt="Magrabi Menswear" 
                className="h-12 w-auto me-2"
              />
              <div>
                <h2 className="text-magrabi-gold text-xl font-bold tracking-wider">MAGRABI</h2>
                <p className="text-white text-xs tracking-wider">MENSWEAR</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              {t("footer_about")}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-magrabi-gold transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-white hover:text-magrabi-gold transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-white hover:text-magrabi-gold transition-colors">
                <Twitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-magrabi-gold">{t("categories")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=formal" className="text-gray-400 hover:text-magrabi-gold transition-colors">
                  {t("formal")}
                </Link>
              </li>
              <li>
                <Link to="/products?category=casual" className="text-gray-400 hover:text-magrabi-gold transition-colors">
                  {t("casual")}
                </Link>
              </li>
              <li>
                <Link to="/products?category=accessories" className="text-gray-400 hover:text-magrabi-gold transition-colors">
                  {t("accessories")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-magrabi-gold">{t("footer_contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="text-magrabi-gold me-2" />
                <span className="text-gray-400">+212 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-magrabi-gold me-2" />
                <span className="text-gray-400">contact@magrabi.com</span>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="text-magrabi-gold me-2" />
                <span className="text-gray-400">Casablanca, Morocco</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>© 2025 MAGRABI MENSWEAR. {t("footer_rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
