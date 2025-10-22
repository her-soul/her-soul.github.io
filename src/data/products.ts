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
  images: string[];
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Elegant Casual Ensemble",
    category: "Sets",
    price: 89.99,
    images: [product7, product8, product9, product10],
    description: "Sophisticated casual wear perfect for any occasion. This versatile ensemble combines comfort with modern elegance."
  },
  {
    id: 2,
    name: "Contemporary Street Style",
    category: "Sets",
    price: 85.99,
    images: [product4, product5, product6, product3],
    description: "Modern street style outfit that makes a statement. Perfect blend of comfort and contemporary fashion."
  },
  {
    id: 3,
    name: "Urban Chic Collection",
    category: "Sets",
    price: 92.99,
    images: [product1, product2, product11, product12, product13],
    description: "Urban sophistication meets effortless style. A complete look for the modern woman."
  },
  {
    id: 4,
    name: "Modern Casual Wear",
    category: "Sets",
    price: 88.99,
    images: [product19, product16, product17, product15, product14],
    description: "Timeless pieces that transition seamlessly from day to night. Contemporary casual wear at its finest."
  },
  {
    id: 5,
    name: "Versatile Style Set",
    category: "Sets",
    price: 94.99,
    images: [product20, product22, product23, product21],
    description: "Complete versatile outfit perfect for any setting. Mix and match pieces for endless styling options."
  }
];

export const categories = ["All", "Sets"];
