import product1 from "@/assets/products/product-1.jpg";
import product2 from "@/assets/products/product-2.jpg";
import product3 from "@/assets/products/product-3.jpg";
import product4 from "@/assets/products/product-4.jpg";
import product5 from "@/assets/products/product-5.jpg";
import product6 from "@/assets/products/product-6.jpg";
import product7 from "@/assets/products/product-7.jpg";
import product8 from "@/assets/products/product-8.jpg";
import product9 from "@/assets/products/product-9.jpg";
import product10 from "@/assets/products/product-10.jpg";
import product11 from "@/assets/products/product-11.jpg";
import product12 from "@/assets/products/product-12.jpg";
import product13 from "@/assets/products/product-13.jpg";
import product14 from "@/assets/products/product-14.jpg";
import product15 from "@/assets/products/product-15.jpg";
import product16 from "@/assets/products/product-16.jpg";
import product17 from "@/assets/products/product-17.jpg";
import product18 from "@/assets/products/product-18.jpg";
import product19 from "@/assets/products/product-19.jpg";
import product20 from "@/assets/products/product-20.jpg";
import product21 from "@/assets/products/product-21.jpg";
import product22 from "@/assets/products/product-22.jpg";
import product23 from "@/assets/products/product-23.jpg";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Elegant Purple Blazer",
    category: "Outerwear",
    price: 89.99,
    image: product1,
    description: "Sophisticated purple blazer with contrasting grey details, perfect for casual and formal occasions."
  },
  {
    id: 2,
    name: "Classic White Shirt",
    category: "Tops",
    price: 45.99,
    image: product2,
    description: "Timeless white button-up shirt that pairs perfectly with any outfit."
  },
  {
    id: 3,
    name: "Casual Denim Look",
    category: "Sets",
    price: 79.99,
    image: product3,
    description: "Comfortable casual wear perfect for everyday styling."
  },
  {
    id: 4,
    name: "Stylish Casual Ensemble",
    category: "Sets",
    price: 69.99,
    image: product4,
    description: "Modern and comfortable casual outfit for any occasion."
  },
  {
    id: 5,
    name: "Contemporary Casual Wear",
    category: "Sets",
    price: 74.99,
    image: product5,
    description: "Chic and versatile casual pieces that blend comfort with style."
  },
  {
    id: 6,
    name: "Modern Street Style",
    category: "Sets",
    price: 72.99,
    image: product6,
    description: "Trendy street style outfit perfect for urban fashion lovers."
  },
  {
    id: 7,
    name: "Effortless Chic Look",
    category: "Sets",
    price: 68.99,
    image: product7,
    description: "Effortlessly stylish ensemble for the modern woman."
  },
  {
    id: 8,
    name: "Urban Casual Set",
    category: "Sets",
    price: 71.99,
    image: product8,
    description: "Contemporary urban wear that combines comfort and elegance."
  },
  {
    id: 9,
    name: "Relaxed Style Outfit",
    category: "Sets",
    price: 66.99,
    image: product9,
    description: "Relaxed yet refined outfit perfect for casual outings."
  },
  {
    id: 10,
    name: "Casual Elegance",
    category: "Sets",
    price: 75.99,
    image: product10,
    description: "Elegant casual wear that transitions seamlessly from day to night."
  },
  {
    id: 11,
    name: "Smart Casual Look",
    category: "Sets",
    price: 77.99,
    image: product11,
    description: "Perfect balance of smart and casual for versatile styling."
  },
  {
    id: 12,
    name: "Contemporary Fashion",
    category: "Sets",
    price: 73.99,
    image: product12,
    description: "Modern fashion piece that makes a statement."
  },
  {
    id: 13,
    name: "Chic Daily Wear",
    category: "Sets",
    price: 70.99,
    image: product13,
    description: "Stylish daily wear that keeps you looking polished."
  },
  {
    id: 14,
    name: "Versatile Casual Set",
    category: "Sets",
    price: 76.99,
    image: product14,
    description: "Versatile pieces that mix and match effortlessly."
  },
  {
    id: 15,
    name: "Modern Minimalist",
    category: "Sets",
    price: 78.99,
    image: product15,
    description: "Clean lines and minimalist design for the contemporary woman."
  },
  {
    id: 16,
    name: "Stylish Comfort Wear",
    category: "Sets",
    price: 67.99,
    image: product16,
    description: "Comfortable yet stylish outfit for all-day wear."
  },
  {
    id: 17,
    name: "Urban Chic Ensemble",
    category: "Sets",
    price: 74.99,
    image: product17,
    description: "Urban sophistication meets casual comfort."
  },
  {
    id: 18,
    name: "Contemporary Classic",
    category: "Sets",
    price: 72.99,
    image: product18,
    description: "Classic style with a contemporary twist."
  },
  {
    id: 19,
    name: "Elegant Casual Wear",
    category: "Sets",
    price: 71.99,
    image: product19,
    description: "Elegant pieces perfect for casual sophistication."
  },
  {
    id: 20,
    name: "Modern Essential",
    category: "Sets",
    price: 69.99,
    image: product20,
    description: "Essential wardrobe piece for the modern woman."
  },
  {
    id: 21,
    name: "Vibrant Red Blazer",
    category: "Outerwear",
    price: 92.99,
    image: product21,
    description: "Bold red blazer with grey accents, a statement piece for any wardrobe."
  },
  {
    id: 22,
    name: "Red Statement Jacket",
    category: "Outerwear",
    price: 94.99,
    image: product22,
    description: "Eye-catching red jacket that elevates any look."
  },
  {
    id: 23,
    name: "Classic Red Blazer",
    category: "Outerwear",
    price: 91.99,
    image: product23,
    description: "Timeless red blazer perfect for making a confident impression."
  }
];

export const categories = ["All", "Outerwear", "Tops", "Sets"];
