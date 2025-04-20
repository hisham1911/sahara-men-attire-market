
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  Menu, 
  Search, 
  X, 
  User,
  Globe
} from "lucide-react";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetClose 
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const { totalItems } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black bg-opacity-95 shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side={language === "ar" ? "right" : "left"} className="bg-black text-white border-magrabi-gold">
              <div className="flex flex-col space-y-6 mt-10">
                <SheetClose asChild>
                  <Link to="/" className="text-xl hover:text-magrabi-gold transition-colors">
                    {t("home")}
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/products" className="text-xl hover:text-magrabi-gold transition-colors">
                    {t("products")}
                  </Link>
                </SheetClose>
                <div className="space-y-3">
                  <h3 className="text-magrabi-gold text-lg">{t("categories")}</h3>
                  <SheetClose asChild>
                    <Link to="/products?category=formal" className="block text-white hover:text-magrabi-gold">
                      {t("formal")}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/products?category=casual" className="block text-white hover:text-magrabi-gold">
                      {t("casual")}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/products?category=accessories" className="block text-white hover:text-magrabi-gold">
                      {t("accessories")}
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <div className="flex-1 lg:flex-none text-center lg:text-start">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/571560cd-180d-4a27-8654-5e65dfdff4c5.png" 
                alt="Magrabi Menswear" 
                className="h-12 w-auto"
              />
              <div className="ms-2">
                <h1 className="text-magrabi-gold text-lg font-bold tracking-wider">MAGRABI</h1>
                <p className="text-white text-xs tracking-wider">MENSWEAR</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-0 rtl:space-x-0 lg:space-x-8 rtl:lg:space-x-reverse flex-1 justify-center">
            <Link to="/" className="text-white hover:text-magrabi-gold transition-colors px-3">
              {t("home")}
            </Link>
            <Link to="/products" className="text-white hover:text-magrabi-gold transition-colors px-3">
              {t("products")}
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-white hover:text-magrabi-gold transition-colors px-3">
                {t("categories")}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black border-magrabi-gold">
                <DropdownMenuItem asChild>
                  <Link to="/products?category=formal" className="text-white hover:text-magrabi-gold cursor-pointer focus:text-magrabi-gold">
                    {t("formal")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/products?category=casual" className="text-white hover:text-magrabi-gold cursor-pointer focus:text-magrabi-gold">
                    {t("casual")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/products?category=accessories" className="text-white hover:text-magrabi-gold cursor-pointer focus:text-magrabi-gold">
                    {t("accessories")}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Icons */}
          <div className="flex items-center">
            <div className="flex items-center space-x-1 rtl:space-x-reverse lg:space-x-4 rtl:lg:space-x-reverse">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:text-magrabi-gold"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                {isSearchOpen ? <X size={20} /> : <Search size={20} />}
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:text-magrabi-gold">
                    <Globe size={20} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black border-magrabi-gold">
                  <DropdownMenuItem 
                    onClick={() => setLanguage("ar")} 
                    className={`cursor-pointer ${language === "ar" ? "text-magrabi-gold" : "text-white"}`}
                  >
                    العربية
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setLanguage("en")} 
                    className={`cursor-pointer ${language === "en" ? "text-magrabi-gold" : "text-white"}`}
                  >
                    English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="ghost" size="icon" className="text-white hover:text-magrabi-gold">
                <User size={20} />
              </Button>

              <Link to="/cart" className="relative">
                <Button variant="ghost" size="icon" className="text-white hover:text-magrabi-gold">
                  <ShoppingCart size={20} />
                </Button>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-magrabi-gold text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 animate-fade-in">
            <div className="relative">
              <input
                type="text"
                placeholder={t("search")}
                className="w-full bg-gray-900 text-white border border-magrabi-gold rounded-md py-2 px-4 focus:outline-none"
              />
              <Button 
                className="absolute top-0 end-0 h-full bg-magrabi-gold text-black hover:bg-magrabi-gold/80 rounded-s-none"
              >
                {t("search")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
