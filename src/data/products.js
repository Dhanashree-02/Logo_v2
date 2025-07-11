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
    category: "Tshirts",
    categoryKey: "round_neck",
    name: "Round Neck T-Shirt",
    price: 499,
    description: "Comfortable round neck t-shirt with custom logo.",
    image: tshirt,
  },
  {
    id: 2,
    category: "Tshirts",
    categoryKey: "v_neck",
    name: "V-Neck T-Shirt",
    price: 549,
    description: "Stylish V-neck t-shirt with quality print.",
    image: tshirt1,
  },
  {
    id: 3,
    category: "Tshirts",
    categoryKey: "pool_tshirt",
    name: "Pool T-Shirt",
    price: 599,
    description: "Pool-friendly t-shirt with fast-dry fabric.",
    image: tshirt2,
  },
  {
    id: 4,
    category: "Tshirts",
    categoryKey: "cutSew",
    name: "Cut and Sew T-Shirt",
    price: 699,
    description: "Trendy cut and sew style with modern design.",
    image: tshirt3,
  },
  {
    id: 5,
    category: "Tshirts",
    categoryKey: "basicpool",
    name: "Basic Pool T-Shirt",
    price: 499,
    description: "Lightweight and basic pool t-shirt.",
    image: tshirt4,
  },

  // --- Apparels ---
  {
    id: 6,
    category: "Apparels",
    categoryKey: "cap",
    name: "Custom Cap",
    price: 299,
    description: "Comfortable cap with stitched logo.",
    image: cap,
  },
  {
    id: 7,
    category: "Apparels",
    categoryKey: "jackets",
    name: "Stylish Jacket",
    price: 1499,
    description: "Premium jacket for casual and corporate wear.",
    image: cap1,
  },
  {
    id: 8,
    category: "Apparels",
    categoryKey: "sweatshirt",
    name: "Warm Sweatshirt",
    price: 999,
    description: "Cozy sweatshirt with custom embroidery.",
    image: cap3,
  },
  {
    id: 9,
    category: "Apparels",
    categoryKey: "denimShirt",
    name: "Denim Shirt",
    price: 899,
    description: "Classic denim shirt with rugged feel.",
    image: cap4,
  },
  {
    id: 10,
    category: "Apparels",
    categoryKey: "windcheaters",
    name: "Windcheater Jacket",
    price: 1199,
    description: "Wind-resistant jacket for all weather.",
    image: cap5,
  },

  // --- Travel ---
  {
    id: 11,
    category: "Travel",
    categoryKey: "handbag",
    name: "Stylish Hand Bag",
    price: 799,
    description: "Elegant handbag perfect for daily use.",
    image: bag,
  },
  {
    id: 12,
    category: "Travel",
    categoryKey: "strolleybag",
    name: "Strolley Bag",
    price: 2499,
    description: "Spacious strolley bag for travel ease.",
    image: bag1,
  },
  {
    id: 13,
    category: "Travel",
    categoryKey: "travelbag",
    name: "Multipurpose Travel Bag",
    price: 1599,
    description: "Durable and multi-pocketed travel bag.",
    image: bag2,
  },
  {
    id: 14,
    category: "Travel",
    categoryKey: "backpacks",
    name: "Back Pack",
    price: 999,
    description: "Trendy backpack with ergonomic design.",
    image: bag3,
  },
  {
    id: 15,
    category: "Travel",
    categoryKey: "laptopbag",
    name: "Laptop Bag",
    price: 1199,
    description: "Secure and padded laptop bag for professionals.",
    image: bag4,
  },

  // --- Leather ---
  {
    id: 16,
    category: "Leather",
    categoryKey: "leatherofficebag",
    name: "Office Bag",
    price: 1399,
    description: "Leather office bag with classic finish.",
    image: hoodie,
  },
  {
    id: 17,
    category: "Leather",
    categoryKey: "leatherwallets",
    name: "Leather Wallet",
    price: 499,
    description: "Genuine leather wallet with sleek design.",
    image: hoodie1,
  },

  // --- Uniforms ---
  {
    id: 18,
    category: "Uniforms",
    categoryKey: "school",
    name: "School Uniform Set",
    price: 1199,
    description: "Durable school uniform for students.",
    image: hoodie2,
  },
  {
    id: 19,
    category: "Uniforms",
    categoryKey: "corporate",
    name: "Corporate Uniform",
    price: 1299,
    description: "Formal uniform for corporate branding.",
    image: hoodie3,
  },
];

export default products;