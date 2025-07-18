
// cap
import cap from "../assets/Shree graphics mockup/27/cap/Cap black.png";
import cap1 from "../assets/Shree graphics mockup/27/cap/cap red.png";
import cap3 from "../assets/Shree graphics mockup/27/cap/Cap white.png";
import cap4 from "../assets/Shree graphics mockup/Chitronauts/Cap/cap black.png";
import cap5 from "../assets/Shree graphics mockup/Chitronauts/Cap/cap blue.png";

// tshirt
import tshirt from "../assets/Shree graphics mockup/27/t shirt/t shirt black.png";
import tshirt1 from "../assets/Shree graphics mockup/27/t shirt/t shirt red.png";
import tshirt2 from "../assets/Shree graphics mockup/27/t shirt/t shirt white.png";
import tshirt3 from "../assets/Shree graphics mockup/Chitronauts/t shirt/t shirt black.png";
import tshirt4 from "../assets/Shree graphics mockup/Chitronauts/t shirt/t shirt blue.png";

// bag
import bag from "../assets/Shree graphics mockup/27/bag.png";
import bag4 from "../assets/Shree graphics mockup/brand box/bag/bag black.png";
import bag1 from "../assets/Shree graphics mockup/Chitronauts/bag/bag black.png";
import bag2 from "../assets/Shree graphics mockup/Chitronauts/bag/bag blue.png";
import bag3 from "../assets/Shree graphics mockup/Chitronauts/bag/bag white.png";

// hoodie
import hoodie from "../assets/Shree graphics mockup/27/hoodie/hoodie black.png";
import hoodie1 from "../assets/Shree graphics mockup/27/hoodie/hoodie red.png";
import hoodie2 from "../assets/Shree graphics mockup/Chitronauts/hoodie/hoodie black.png";
import hoodie3 from "../assets/Shree graphics mockup/Chitronauts/hoodie/hoodie blue.png";


const products = [
  // --- Tshirts ---
  {
    id: 1,
    name: "Round Neck T-Shirt",
    category: "Tshirts",
    categoryKey: "round_neck",
    price: 499,
    inStock: true,
    rating: 4.4,
    reviews: 32,
    colors: ["Black"],
    sizes: ["S", "M", "L", "XL"],
    popularity: 85,
    brand: "Shree Graphics",
    tags: ["round neck", "cotton", "casual"],
    image: tshirt,
    images: [tshirt, tshirt1, tshirt2],
    description: "Soft cotton round neck t-shirt ideal for daily wear and customization. Features double stitching and a regular fit for all-day comfort."
  },
  {
    id: 2,
    name: "V-Neck T-Shirt",
    category: "Tshirts",
    categoryKey: "v_neck",
    price: 549,
    inStock: true,
    rating: 4.3,
    reviews: 21,
    colors: ["Red"],
    sizes: ["M", "L", "XL"],
    popularity: 78,
    brand: "Shree Graphics",
    tags: ["v-neck", "combed cotton", "soft"],
    image: tshirt1,
    images: [tshirt1, tshirt2],
    description: "Breathable V-neck tee made with premium combed cotton for superior softness and a modern look."
  },
  {
    id: 3,
    name: "Pool T-Shirt",
    category: "Tshirts",
    categoryKey: "pool_tshirt",
    price: 599,
    inStock: true,
    rating: 4.5,
    reviews: 18,
    colors: ["White"],
    sizes: ["S", "M", "L"],
    popularity: 82,
    brand: "Shree Graphics",
    tags: ["quick-dry", "polyester", "sports"],
    image: tshirt2,
    images: [tshirt2, tshirt],
    description: "Quick-dry polyester t-shirt perfect for outdoor and water activities. Lightweight and UV-resistant."
  },
  {
    id: 4,
    name: "Cut & Sew Tee",
    category: "Tshirts",
    categoryKey: "cut_sew",
    price: 699,
    inStock: true,
    rating: 4.6,
    reviews: 25,
    colors: ["Black"],
    sizes: ["M", "L", "XL"],
    popularity: 88,
    brand: "Shree Graphics",
    tags: ["cut sew", "contrast", "sporty"],
    image: tshirt3,
    images: [tshirt3, tshirt4],
    description: "Stylish cut-and-sew pattern with contrast stitching and a modern sporty vibe for youth and adults."
  },
  {
    id: 5,
    name: "Basic Sports Tee",
    category: "Tshirts",
    categoryKey: "basic_pool",
    price: 499,
    inStock: true,
    rating: 4.1,
    reviews: 14,
    colors: ["Blue"],
    sizes: ["S", "M", "L"],
    popularity: 74,
    brand: "Shree Graphics",
    tags: ["basic", "sports", "lightweight"],
    image: tshirt4,
    images: [tshirt4, tshirt1],
    description: "Lightweight moisture-wicking t-shirt for workouts and casual wear. Soft and breathable for all climates."
  },

  // --- Apparels ---
  {
    id: 6,
    name: "Classic Black Cap",
    category: "Apparels",
    categoryKey: "cap",
    price: 299,
    inStock: true,
    rating: 4.5,
    reviews: 28,
    colors: ["Black"],
    sizes: ["Free"],
    popularity: 90,
    brand: "Shree Graphics",
    tags: ["casual", "cotton", "unisex"],
    image: cap,
    images: [cap, cap1],
    description: "Black cotton twill cap with adjustable strap and embroidered logo. Ideal for branding and sunny days."
  },
  {
    id: 7,
    name: "Red Cotton Cap",
    category: "Apparels",
    categoryKey: "cap_red",
    price: 299,
    inStock: true,
    rating: 4.3,
    reviews: 17,
    colors: ["Red"],
    sizes: ["Free"],
    popularity: 84,
    brand: "Shree Graphics",
    tags: ["casual", "breathable"],
    image: cap1,
    images: [cap1, cap3],
    description: "Bold red cap with breathable eyelets and soft inner lining."
  },
  {
    id: 8,
    name: "White Casual Cap",
    category: "Apparels",
    categoryKey: "cap_white",
    price: 299,
    inStock: true,
    rating: 4.2,
    reviews: 12,
    colors: ["White"],
    sizes: ["Free"],
    popularity: 77,
    brand: "Shree Graphics",
    tags: ["casual", "white"],
    image: cap3,
    images: [cap3],
    description: "Minimal white cap great for casual outings and events."
  },
  {
    id: 9,
    name: "Chitronauts Cap Black",
    category: "Apparels",
    categoryKey: "cap_chitro_black",
    price: 349,
    inStock: true,
    rating: 4.6,
    reviews: 19,
    colors: ["Black"],
    sizes: ["Free"],
    popularity: 86,
    brand: "Chitronauts",
    tags: ["branding", "embroidered"],
    image: cap4,
    images: [cap4, cap5],
    description: "Stylish cap with custom Chitronauts branding and high quality stitching."
  },
  {
    id: 10,
    name: "Chitronauts Cap Blue",
    category: "Apparels",
    categoryKey: "cap_chitro_blue",
    price: 349,
    inStock: true,
    rating: 4.4,
    reviews: 15,
    colors: ["Blue"],
    sizes: ["Free"],
    popularity: 80,
    brand: "Chitronauts",
    tags: ["sunny", "stylish"],
    image: cap5,
    images: [cap5, cap4],
    description: "Sporty navy blue cap ideal for branding and sunny days."
  },
  {
    id: 20,
    name: "Chitronauts Winter Jacket",
    category: "Apparels",
    categoryKey: "jackets",
    price: 1299,
    inStock: true,
    rating: 4.7,
    reviews: 28,
    colors: ["Black", "Grey"],
    sizes: ["S", "M", "L", "XL"],
    popularity: 92,
    brand: "Chitronauts",
    tags: ["winter", "warm", "trendy"],
    image: bag, // main display image
    images: [bag1, bag2, bag3], // gallery
    description: "Stylish and warm black winter jacket with a sleek design, perfect for chilly days and casual outings."
  },
  
  // Continue same format for Travel, Leather, Uniforms, etc.

    // --- Travel Bags ---
    {
      id: 11,
      name: "Shree Travel Bag",
      category: "Travel",
      categoryKey: "travel_shree",
      price: 999,
      inStock: true,
      rating: 4.5,
      reviews: 30,
      colors: ["Black"],
      sizes: ["Large"],
      popularity: 87,
      brand: "Shree Graphics",
      tags: ["travel", "utility", "spacious"],
      image: bag,
      images: [bag, bag1, bag4],
      description: "Spacious and durable travel bag designed for everyday use. Multiple compartments and strong zippers."
    },
    {
      id: 12,
      name: "Chitronauts Travel Bag - Black",
      category: "Travel",
      categoryKey: "travel_chitro_black",
      price: 1099,
      inStock: true,
      rating: 4.6,
      reviews: 22,
      colors: ["Black"],
      sizes: ["Large"],
      popularity: 88,
      brand: "Chitronauts",
      tags: ["durable", "modern", "travel"],
      image: bag1,
      images: [bag1, bag2],
      description: "Premium black travel bag with Chitronauts branding. Perfect for daily and business trips."
    },
    {
      id: 13,
      name: "Chitronauts Travel Bag - Blue",
      category: "Travel",
      categoryKey: "travel_chitro_blue",
      price: 1099,
      inStock: true,
      rating: 4.4,
      reviews: 19,
      colors: ["Blue"],
      sizes: ["Large"],
      popularity: 81,
      brand: "Chitronauts",
      tags: ["blue", "branding", "lightweight"],
      image: bag2,
      images: [bag2, bag3],
      description: "Sleek blue edition of the Chitronauts bag line. Lightweight and functional."
    },
    {
      id: 14,
      name: "Chitronauts Travel Bag - White",
      category: "Travel",
      categoryKey: "travel_chitro_white",
      price: 1099,
      inStock: true,
      rating: 4.2,
      reviews: 16,
      colors: ["White"],
      sizes: ["Large"],
      popularity: 76,
      brand: "Chitronauts",
      tags: ["white", "minimal", "utility"],
      image: bag3,
      images: [bag3, bag1],
      description: "Elegant white travel bag with minimalist styling. Durable for daily use."
    },
    {
      id: 15,
      name: "BrandBox Bag - Black",
      category: "Travel",
      categoryKey: "travel_brandbox",
      price: 1199,
      inStock: true,
      rating: 4.3,
      reviews: 20,
      colors: ["Black"],
      sizes: ["Large"],
      popularity: 83,
      brand: "BrandBox",
      tags: ["premium", "branding", "travel"],
      image: bag4,
      images: [bag4, bag],
      description: "Professional-grade travel bag with extra padding and waterproof zippers."
    },

      // --- Hoodies ---
  {
    id: 16,
    name: "Shree Black Hoodie",
    category: "Hoodies",
    categoryKey: "hoodie_shree_black",
    price: 899,
    inStock: true,
    rating: 4.5,
    reviews: 35,
    colors: ["Black"],
    sizes: ["S", "M", "L", "XL"],
    popularity: 89,
    brand: "Shree Graphics",
    tags: ["winter", "fleece", "casual"],
    image: hoodie,
    images: [hoodie, hoodie1],
    description: "Warm and cozy black fleece hoodie with soft lining and kangaroo pocket."
  },
  {
    id: 17,
    name: "Shree Red Hoodie",
    category: "Hoodies",
    categoryKey: "hoodie_shree_red",
    price: 899,
    inStock: true,
    rating: 4.4,
    reviews: 28,
    colors: ["Red"],
    sizes: ["M", "L", "XL"],
    popularity: 82,
    brand: "Shree Graphics",
    tags: ["vibrant", "fleece", "hoodie"],
    image: hoodie1,
    images: [hoodie1, hoodie],
    description: "Bold red fleece hoodie to keep you warm in style."
  },
  {
    id: 18,
    name: "Chitronauts Hoodie - Black",
    category: "Hoodies",
    categoryKey: "hoodie_chitro_black",
    price: 999,
    inStock: true,
    rating: 4.7,
    reviews: 32,
    colors: ["Black"],
    sizes: ["S", "M", "L", "XL"],
    popularity: 90,
    brand: "Chitronauts",
    tags: ["branding", "winter", "black"],
    image: hoodie2,
    images: [hoodie2, hoodie3],
    description: "Premium black hoodie with Chitronauts logo and heavy-weight fabric for cold weather."
  },
  {
    id: 19,
    name: "Chitronauts Hoodie - Blue",
    category: "Hoodies",
    categoryKey: "hoodie_chitro_blue",
    price: 999,
    inStock: true,
    rating: 4.5,
    reviews: 26,
    colors: ["Blue"],
    sizes: ["S", "M", "L", "XL"],
    popularity: 84,
    brand: "Chitronauts",
    tags: ["blue", "warm", "branded"],
    image: hoodie3,
    images: [hoodie3, hoodie2],
    description: "Stylish blue hoodie for chilly days with full zip and branded chest print."
  },
  {
    id: 21,
    name: "Leather Messenger Bag",
    category: "Leather",
    categoryKey: "leather",
    price: 3499,
    inStock: true,
    rating: 4.7,
    reviews: 150,
    colors: ["brown", "black"],
    sizes: [],
    popularity: 92,
    brand: "UrbanHide",
    tags: ["leather", "bag", "messenger"],
    image: cap,
    images: [cap1,cap3 ],
    description:
      "Crafted from 100% genuine leather, this messenger bag is perfect for professionals and travelers. Stylish, durable, and spacious.",
  },
  {
    id: 22,
    name: "Premium Leather Wallet",
    category: "Leather",
    categoryKey: "leather",
    price: 799,
    inStock: true,
    rating: 4.3,
    reviews: 75,
    colors: ["brown", "tan", "black"],
    sizes: [],
    popularity: 80,
    brand: "HideMark",
    tags: ["leather", "wallet", "men"],
    image: hoodie,
    images: [
     hoodie1,hoodie2
    ],
    description:
      "A compact yet spacious wallet made of premium full-grain leather. Features RFID protection and multiple compartments.",
  },
  {
    id: 23,
    name: "Leather Laptop Sleeve",
    category: "Leather",
    categoryKey: "leather",
    price: 1299,
    inStock: false,
    rating: 4.5,
    reviews: 60,
    colors: ["black", "brown"],
    sizes: [],
    popularity: 70,
    brand: "LeatherEdge",
    tags: ["leather", "laptop", "sleeve", "office"],
    image: tshirt,
    images: [
     tshirt1,tshirt2
    ],
    description:
      "Protect your laptop in style with this sleek and padded leather sleeve. Fits up to 15.6” laptops.",
  },
  {
    id: 24,
    name: "School Uniform Set (Boys)",
    category: "Uniforms",
    categoryKey: "school",
    price: 999,
    inStock: true,
    rating: 4.2,
    reviews: 110,
    colors: ["white", "gray"],
    sizes: ["S", "M", "L", "XL"],
    popularity: 78,
    brand: "EduWear",
    tags: ["school", "uniform", "boys"],
    image:bag,
    images: [
     bag1,bag2
    ],
    description:
      "Durable and comfortable school uniform set for boys. Includes shirt and trousers made of wrinkle-free fabric.",
  },
  {
    id: 25,
    name: "School Uniform Set (Girls)",
    category: "Uniforms",
    categoryKey: "uniforms",
    price: 1099,
    inStock: true,
    rating: 4.4,
    reviews: 98,
    colors: ["white", "blue"],
    sizes: ["S", "M", "L", "XL"],
    popularity: 81,
    brand: "EduWear",
    tags: ["school", "uniform", "girls"],
    image: bag1,
    images: [
      bag,bag2
    ],
    description:
      "Complete uniform set for girls, includes tunic and shirt. Designed for comfort and easy care.",
  },
  {
    id: 26,
    name: "Chef Uniform (Unisex)",
    category: "Uniforms",
    categoryKey: "uniforms",
    price: 1399,
    inStock: true,
    rating: 4.6,
    reviews: 40,
    colors: ["white", "black"],
    sizes: ["M", "L", "XL", "XXL"],
    popularity: 88,
    brand: "ProWear",
    tags: ["chef", "uniform", "restaurant"],
    image: cap,
    images: [
     cap1,cap3
    ],
    description:
      "Professional chef uniform with breathable cotton fabric, double-breasted design, and heat resistance.",
  },

  ////////
  {
    id: 27,
    name: "Chitronauts Winter Jacket",
    category: "Apparels",
    categoryKey: "sweatshirt",
    price: 1299,
    inStock: true,
    rating: 4.7,
    reviews: 28,
    colors: ["Black", "Grey"],
    sizes: ["S", "M", "L", "XL"],
    popularity: 92,
    brand: "Chitronauts",
    tags: ["winter", "warm", "trendy"],
    image: bag2, // main display image
    images: [bag1, bag, bag3], // gallery
    description: "Stylish and warm black winter jacket with a sleek design, perfect for chilly days and casual outings."
  },
  {
    id: 28,
    name: "Chitronauts Winter Jacket",
    category: "Apparels",
    categoryKey: "denimShirt",
    price: 1299,
    inStock: true,
    rating: 4.7,
    reviews: 28,
    colors: ["Black", "Grey"],
    sizes: ["S", "M", "L", "XL"],
    popularity: 92,
    brand: "Chitronauts",
    tags: ["winter", "warm", "trendy"],
    image: bag3, // main display image
    images: [bag3, bag2, bag], // gallery
    description: "Stylish and warm black winter jacket with a sleek design, perfect for chilly days and casual outings."
  },
  {
    id: 29,
    name: "Chitronauts Winter Jacket",
    category: "Apparels",
    categoryKey: "windcheaters",
    price: 1299,
    inStock: true,
    rating: 4.7,
    reviews: 28,
    colors: ["Black", "Grey"],
    sizes: ["S", "M", "L", "XL"],
    popularity: 92,
    brand: "Chitronauts",
    tags: ["winter", "warm", "trendy"],
    image: hoodie, // main display image
    images: [hoodie, bag2, bag], // gallery
    description: "Stylish and warm black winter jacket with a sleek design, perfect for chilly days and casual outings."
  },

  {
    id: 30,
    name: "Chitronauts Winter Jacket",
    category: "Apparels",
    categoryKey: "handbag",
    price: 1299,
    inStock: true,
    rating: 4.7,
    reviews: 28,
    colors: ["Black", "Grey"],
    sizes: ["S", "M", "L", "XL"],
    popularity: 92,
    brand: "Chitronauts",
    tags: ["winter", "warm", "trendy"],
    image: hoodie, // main display image
    images: [tshirt, bag2, bag], // gallery
    description: "Stylish and warm black winter jacket with a sleek design, perfect for chilly days and casual outings."
  },

  {
    id: 31,
    name: "Chitronauts Winter Jacket",
    category: "Apparels",
    categoryKey: "strolleybag",
    price: 1299,
    inStock: true,
    rating: 4.7,
    reviews: 28,
    colors: ["Black", "Grey"],
    sizes: ["S", "M", "L", "XL"],
    popularity: 92,
    brand: "Chitronauts",
    tags: ["winter", "warm", "trendy"],
    image: hoodie, // main display image
    images: [tshirt1, bag2, bag], // gallery
    description: "Stylish and warm black winter jacket with a sleek design, perfect for chilly days and casual outings."
  },

  {
    id: 32,
    name: "Chitronauts Winter Jacket",
    category: "Apparels",
    categoryKey: "travelbag",
    price: 1299,
    inStock: true,
    rating: 4.7,
    reviews: 28,
    colors: ["Black", "Grey"],
    sizes: ["S", "M", "L", "XL"],
    popularity: 92,
    brand: "Chitronauts",
    tags: ["winter", "warm", "trendy"],
    image: hoodie, // main display image
    images: [bag, bag2, hoodie], // gallery
    description: "Stylish and warm black winter jacket with a sleek design, perfect for chilly days and casual outings."
  },
  {
    id: 33,
    name: "Chitronauts Winter Jacket",
    category: "Apparels",
    categoryKey: "backpacks",
    price: 1299,
    inStock: true,
    rating: 4.7,
    reviews: 28,
    colors: ["Black", "Grey"],
    sizes: ["S", "M", "L", "XL"],
    popularity: 92,
    brand: "Chitronauts",
    tags: ["winter", "warm", "trendy"],
    image: hoodie, // main display image
    images: [bag, bag2, hoodie], // gallery
    description: "Stylish and warm black winter jacket with a sleek design, perfect for chilly days and casual outings."
  },
  {
    id: 34,
    name: "Chitronauts Winter Jacket",
    category: "Apparels",
    categoryKey: "laptopbag",
    price: 1299,
    inStock: true,
    rating: 4.7,
    reviews: 28,
    colors: ["Black", "Grey"],
    sizes: ["S", "M", "L", "XL"],
    popularity: 92,
    brand: "Chitronauts",
    tags: ["winter", "warm", "trendy"],
    image: hoodie, // main display image
    images: [bag, bag2, hoodie], // gallery
    description: "Stylish and warm black winter jacket with a sleek design, perfect for chilly days and casual outings."
  },
  {
    id: 35,
    name: "Chitronauts Winter Jacket",
    category: "Apparels",
    categoryKey: "leatherofficebag",
    price: 1299,
    inStock: true,
    rating: 4.7,
    reviews: 28,
    colors: ["Black", "Grey"],
    sizes: ["S", "M", "L", "XL"],
    popularity: 92,
    brand: "Chitronauts",
    tags: ["winter", "warm", "trendy"],
    image: hoodie, // main display image
    images: [bag, bag2, hoodie], // gallery
    description: "Stylish and warm black winter jacket with a sleek design, perfect for chilly days and casual outings."
  },
  {
    id: 36,
    name: "Chitronauts Winter Jacket",
    category: "Apparels",
    categoryKey: "leatherwallets",
    price: 1299,
    inStock: true,
    rating: 4.7,
    reviews: 28,
    colors: ["Black", "Grey"],
    sizes: ["S", "M", "L", "XL"],
    popularity: 92,
    brand: "Chitronauts",
    tags: ["winter", "warm", "trendy"],
    image: hoodie, // main display image
    images: [bag, bag2, hoodie], // gallery
    description: "Stylish and warm black winter jacket with a sleek design, perfect for chilly days and casual outings."
  },
  {
    id: 37,
    name: "Chitronauts Winter Jacket",
    category: "Apparels",
    categoryKey: "corporate",
    price: 1299,
    inStock: true,
    rating: 4.7,
    reviews: 28,
    colors: ["Black", "Grey"],
    sizes: ["S", "M", "L", "XL"],
    popularity: 92,
    brand: "Chitronauts",   
    tags: ["winter", "warm", "trendy"],
    image: hoodie, // main display image
    images: [bag, bag2, hoodie], // gallery
    description: "Stylish and warm black winter jacket with a sleek design, perfect for chilly days and casual outings."
  },
];

export default products;