
export interface Product {
  id: string;
  name: string;
  nameAr: string;
  category: 'formal' | 'casual' | 'accessories';
  price: number;
  images: string[];
  description: string;
  descriptionAr: string;
  colors: string[];
  sizes: string[];
  featured: boolean;
  newArrival: boolean;
  bestSeller: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Black Tuxedo",
    nameAr: "بدلة سوداء كلاسيكية",
    category: "formal",
    price: 1200,
    images: [
      "/lovable-uploads/571560cd-180d-4a27-8654-5e65dfdff4c5.png",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593032465175-481ac7f401f0?q=80&w=2080&auto=format&fit=crop"
    ],
    description: "A sophisticated black tuxedo with silk lapels. Perfect for formal events and celebrations.",
    descriptionAr: "بدلة سوداء أنيقة مع طية من الحرير. مثالية للمناسبات الرسمية والاحتفالات.",
    colors: ["#000000", "#0F0F0F", "#1A1A1A"],
    sizes: ["48", "50", "52", "54", "56"],
    featured: true,
    newArrival: false,
    bestSeller: true
  },
  {
    id: "2",
    name: "Navy Blue Suit",
    nameAr: "بدلة زرقاء كحلية",
    category: "formal",
    price: 950,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593032465175-481ac7f401f0?q=80&w=2080&auto=format&fit=crop"
    ],
    description: "An elegant navy blue suit made from premium Italian wool. A versatile addition to any wardrobe.",
    descriptionAr: "بدلة زرقاء كحلية أنيقة مصنوعة من الصوف الإيطالي الممتاز. إضافة متعددة الاستخدامات لأي خزانة ملابس.",
    colors: ["#000080", "#0F0F5F", "#191970"],
    sizes: ["48", "50", "52", "54", "56"],
    featured: true,
    newArrival: false,
    bestSeller: false
  },
  {
    id: "3",
    name: "Premium White Shirt",
    nameAr: "قميص أبيض فاخر",
    category: "formal",
    price: 120,
    images: [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=1965&auto=format&fit=crop"
    ],
    description: "A crisp white shirt made from Egyptian cotton. Features mother-of-pearl buttons and a tailored fit.",
    descriptionAr: "قميص أبيض ناصع مصنوع من القطن المصري. يتميز بأزرار من اللؤلؤ وقصة مخصصة.",
    colors: ["#FFFFFF", "#F8F8F8", "#F5F5F5"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: false,
    newArrival: true,
    bestSeller: true
  },
  {
    id: "4",
    name: "Slim Fit Chinos",
    nameAr: "بنطلون شينو ضيق",
    category: "casual",
    price: 85,
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1997&auto=format&fit=crop"
    ],
    description: "Comfortable slim fit chinos perfect for casual occasions. Made from stretch cotton for ease of movement.",
    descriptionAr: "بنطلون شينو بقصة ضيقة مريحة مثالية للمناسبات غير الرسمية. مصنوع من القطن المرن لسهولة الحركة.",
    colors: ["#A0522D", "#D2B48C", "#555555"],
    sizes: ["30", "32", "34", "36", "38"],
    featured: false,
    newArrival: true,
    bestSeller: false
  },
  {
    id: "5",
    name: "Cashmere Sweater",
    nameAr: "سترة كشمير",
    category: "casual",
    price: 250,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580331451062-99ff207948ad?q=80&w=1887&auto=format&fit=crop"
    ],
    description: "Luxurious cashmere sweater for unparalleled comfort and warmth. Available in multiple colors.",
    descriptionAr: "سترة كشمير فاخرة لراحة ودفء لا مثيل لهما. متوفرة بعدة ألوان.",
    colors: ["#800000", "#000080", "#2F4F4F"],
    sizes: ["S", "M", "L", "XL"],
    featured: true,
    newArrival: false,
    bestSeller: false
  },
  {
    id: "6",
    name: "Leather Belt",
    nameAr: "حزام جلدي",
    category: "accessories",
    price: 75,
    images: [
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603954781090-4cef99fbc7d3?q=80&w=1885&auto=format&fit=crop"
    ],
    description: "Premium full-grain leather belt with a classic gold buckle. A timeless accessory for any outfit.",
    descriptionAr: "حزام من الجلد الكامل الفاخر مع إبزيم ذهبي كلاسيكي. إكسسوار خالد لأي زي.",
    colors: ["#8B4513", "#000000"],
    sizes: ["90cm", "100cm", "110cm"],
    featured: false,
    newArrival: true,
    bestSeller: true
  },
  {
    id: "7",
    name: "Silk Tie",
    nameAr: "ربطة عنق حريرية",
    category: "accessories",
    price: 45,
    images: [
      "https://images.unsplash.com/photo-1589756823695-278bc923f47a?q=80&w=1964&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591093337348-af04a5f2350f?q=80&w=1964&auto=format&fit=crop"
    ],
    description: "Elegant silk tie hand-crafted in Italy. Perfect for adding a touch of sophistication to your formal wear.",
    descriptionAr: "ربطة عنق حريرية أنيقة مصنوعة يدويًا في إيطاليا. مثالية لإضافة لمسة من الرقي إلى ملابسك الرسمية.",
    colors: ["#B22222", "#00008B", "#2F4F4F", "#000000"],
    sizes: ["Standard"],
    featured: false,
    newArrival: false,
    bestSeller: true
  },
  {
    id: "8",
    name: "Luxury Watch",
    nameAr: "ساعة فاخرة",
    category: "accessories",
    price: 1500,
    images: [
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=1908&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1994&auto=format&fit=crop"
    ],
    description: "Swiss-made luxury timepiece with a stainless steel case and premium leather strap. Water-resistant up to 100m.",
    descriptionAr: "ساعة فاخرة صناعة سويسرية مع علبة من الفولاذ المقاوم للصدأ وحزام جلدي فاخر. مقاومة للماء حتى 100 متر.",
    colors: ["#000000", "#8B4513"],
    sizes: ["Standard"],
    featured: true,
    newArrival: true,
    bestSeller: false
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (id: string, category: string, limit: number = 4): Product[] => {
  return products
    .filter(product => product.id !== id && product.category === category)
    .slice(0, limit);
};

export const getFeaturedProducts = (limit: number = 4): Product[] => {
  return products
    .filter(product => product.featured)
    .slice(0, limit);
};

export const getNewArrivals = (limit: number = 4): Product[] => {
  return products
    .filter(product => product.newArrival)
    .slice(0, limit);
};

export const getBestSellers = (limit: number = 4): Product[] => {
  return products
    .filter(product => product.bestSeller)
    .slice(0, limit);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
