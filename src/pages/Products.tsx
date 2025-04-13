
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProductsByCategory, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Filter, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const Products = () => {
  const { t, language } = useLanguage();
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [filteredProducts, setFilteredProducts] = useState(
    categoryParam ? getProductsByCategory(categoryParam) : products
  );
  
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  
  // Get all unique colors and sizes
  const allColors = Array.from(new Set(products.flatMap(p => p.colors)));
  const allSizes = Array.from(new Set(products.flatMap(p => p.sizes)));
  
  useEffect(() => {
    // Filter products based on category, price, colors, and sizes
    let filtered = categoryParam 
      ? getProductsByCategory(categoryParam) 
      : products;
    
    // Apply price filter
    filtered = filtered.filter(
      p => p.price >= priceRange[0] && p.price <= priceRange[1]
    );
    
    // Apply color filter
    if (selectedColors.length > 0) {
      filtered = filtered.filter(p => 
        p.colors.some(color => selectedColors.includes(color))
      );
    }
    
    // Apply size filter
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(p => 
        p.sizes.some(size => selectedSizes.includes(size))
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case "price_asc":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filtered = [...filtered].sort((a, b) => (a.newArrival === b.newArrival ? 0 : a.newArrival ? -1 : 1));
        break;
      default:
        filtered = [...filtered].sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1));
    }
    
    setFilteredProducts(filtered);
  }, [categoryParam, sortBy, priceRange, selectedColors, selectedSizes]);
  
  const handleColorToggle = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };
  
  const handleSizeToggle = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };
  
  return (
    <Layout>
      <div className="bg-black py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-white">
              {categoryParam ? t(categoryParam as any) : t("products")}
            </h1>
            <span className="block h-1 w-24 bg-magrabi-gold mx-auto mt-3"></span>
          </div>
          
          {/* Filters and Sorting */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
            {/* Mobile Filter Button */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" className="border-magrabi-gold text-white">
                  <Filter size={18} className="me-2" />
                  {t("filter")}
                </Button>
              </SheetTrigger>
              <SheetContent side={language === "ar" ? "right" : "left"} className="bg-gray-900 text-white border-magrabi-gold">
                <SheetHeader>
                  <SheetTitle className="text-magrabi-gold">{t("filter")}</SheetTitle>
                </SheetHeader>
                <div className="py-4 space-y-6">
                  {/* Price Range */}
                  <div>
                    <h3 className="font-medium mb-3">{t("price")}</h3>
                    <Slider
                      defaultValue={[0, 2000]}
                      max={2000}
                      step={10}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="my-6"
                    />
                    <div className="flex justify-between">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                  
                  {/* Colors */}
                  <div>
                    <h3 className="font-medium mb-3">{t("color")}</h3>
                    <div className="grid grid-cols-4 gap-2">
                      {allColors.map((color, idx) => (
                        <div 
                          key={idx}
                          className={`w-8 h-8 rounded-full border cursor-pointer ${
                            selectedColors.includes(color) 
                              ? "border-magrabi-gold ring-2 ring-magrabi-gold" 
                              : "border-gray-600"
                          }`}
                          style={{ backgroundColor: color }}
                          onClick={() => handleColorToggle(color)}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Sizes */}
                  <div>
                    <h3 className="font-medium mb-3">{t("size")}</h3>
                    <div className="space-y-2">
                      {allSizes.map((size, idx) => (
                        <div key={idx} className="flex items-center">
                          <Checkbox 
                            id={`size-${size}`}
                            checked={selectedSizes.includes(size)}
                            onCheckedChange={() => handleSizeToggle(size)}
                            className="border-gray-600 data-[state=checked]:bg-magrabi-gold data-[state=checked]:text-black"
                          />
                          <Label 
                            htmlFor={`size-${size}`}
                            className="ms-2 text-white"
                          >
                            {size}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            
            {/* Desktop Filters */}
            <div className="hidden md:flex space-x-6">
              {/* Category Filter */}
              <Select 
                value={categoryParam || "all"}
                onValueChange={(value) => {
                  const url = new URL(window.location.href);
                  if (value === "all") {
                    url.searchParams.delete("category");
                  } else {
                    url.searchParams.set("category", value);
                  }
                  window.history.pushState({}, "", url);
                  window.location.reload();
                }}
              >
                <SelectTrigger className="w-[180px] bg-gray-900 border-gray-700 text-white">
                  <SelectValue placeholder={t("categories")} />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700 text-white">
                  <SelectItem value="all">{t("all")}</SelectItem>
                  <SelectItem value="formal">{t("formal")}</SelectItem>
                  <SelectItem value="casual">{t("casual")}</SelectItem>
                  <SelectItem value="accessories">{t("accessories")}</SelectItem>
                </SelectContent>
              </Select>
              
              {/* Price Filter */}
              <div className="relative group">
                <Button 
                  variant="outline" 
                  className="border-gray-700 text-white flex items-center"
                >
                  {t("price")}
                  <ChevronDown size={16} className="ms-2" />
                </Button>
                <div className="absolute start-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-md shadow-lg p-4 hidden group-hover:block z-10">
                  <Slider
                    defaultValue={[0, 2000]}
                    max={2000}
                    step={10}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="my-6"
                  />
                  <div className="flex justify-between">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
              
              {/* Color Filter */}
              <div className="relative group">
                <Button 
                  variant="outline" 
                  className="border-gray-700 text-white flex items-center"
                >
                  {t("color")}
                  <ChevronDown size={16} className="ms-2" />
                </Button>
                <div className="absolute start-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-md shadow-lg p-4 hidden group-hover:block z-10">
                  <div className="grid grid-cols-4 gap-2">
                    {allColors.map((color, idx) => (
                      <div 
                        key={idx}
                        className={`w-8 h-8 rounded-full border cursor-pointer ${
                          selectedColors.includes(color) 
                            ? "border-magrabi-gold ring-2 ring-magrabi-gold" 
                            : "border-gray-600"
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorToggle(color)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Size Filter */}
              <div className="relative group">
                <Button 
                  variant="outline" 
                  className="border-gray-700 text-white flex items-center"
                >
                  {t("size")}
                  <ChevronDown size={16} className="ms-2" />
                </Button>
                <div className="absolute start-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-md shadow-lg p-4 hidden group-hover:block z-10">
                  <div className="space-y-2">
                    {allSizes.map((size, idx) => (
                      <div key={idx} className="flex items-center">
                        <Checkbox 
                          id={`size-${size}-desktop`}
                          checked={selectedSizes.includes(size)}
                          onCheckedChange={() => handleSizeToggle(size)}
                          className="border-gray-600 data-[state=checked]:bg-magrabi-gold data-[state=checked]:text-black"
                        />
                        <Label 
                          htmlFor={`size-${size}-desktop`}
                          className="ms-2 text-white"
                        >
                          {size}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sorting */}
            <Select 
              value={sortBy}
              onValueChange={setSortBy}
            >
              <SelectTrigger className="w-[180px] bg-gray-900 border-gray-700 text-white">
                <SelectValue placeholder={t("sort_by")} />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700 text-white">
                <SelectItem value="featured">{t("featured")}</SelectItem>
                <SelectItem value="newest">{t("newest")}</SelectItem>
                <SelectItem value="price_asc">{t("price_low_to_high")}</SelectItem>
                <SelectItem value="price_desc">{t("price_high_to_low")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-white text-lg">{t("no_products_found")}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
