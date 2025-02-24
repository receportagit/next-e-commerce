const products = [
  {
    id: 1,
    title: "Classic White T-Shirt",
    description: "Soft cotton fabric, perfect for daily wear.",
    price: 19.99,
    oldPrice: 24.99, // Eski fiyat
    rating: 4.5,
    colors: ["White", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
    image: "/product/product1.jpg",
    stock: 50,
  },
  {
    id: 2,
    title: "Elegant Black Dress",
    description: "Stylish and elegant design for every special occasion.",
    price: 49.99,
    oldPrice: 59.99, // Eski fiyat
    rating: 4.8,
    colors: ["Black"],
    sizes: ["S", "M", "L"],
    image: "/product/product2.jpg",
    stock: 20,
  },
  {
    id: 3,
    title: "Casual Sneakers",
    description: "Lightweight and comfortable sneakers.",
    price: 39.99,
    oldPrice: 49.99, // Eski fiyat
    rating: 4.7,
    colors: ["White", "Blue", "Black"],
    sizes: [38, 39, 40, 41, 42, 43],
    image: "/product/product3.jpg",
    stock: 100,
  },
  {
    id: 4,
    title: "Classic Blazer",
    description: "Perfect for office environments with style and comfort.",
    price: 89.99,
    oldPrice: 99.99, // Eski fiyat
    rating: 4.6,
    colors: ["Navy", "Gray"],
    sizes: ["M", "L", "XL"],
    image: "/product/product4.jpg",
    stock: 15,
  },
  {
    id: 5,
    title: "Denim Jeans",
    description: "Stylish and durable denim jeans.",
    price: 59.99,
    oldPrice: 69.99, // Eski fiyat
    rating: 4.3,
    colors: ["Light Blue", "Dark Blue"],
    sizes: [28, 30, 32, 34, 36],
    image: "/product/product5.jpg",
    stock: 75,
  },
  {
    id: 6,
    title: "Unisex Sports Bag",
    description: "Spacious interior, ideal for travel or sports.",
    price: 39.99,
    oldPrice: 49.99, // Eski fiyat
    rating: 4.9,
    colors: ["Black", "Red"],
    sizes: ["One Size"],
    image: "/product/product6.jpg",
    stock: 40,
  },
  {
    id: 8,
    title: "Women's Leather Wallet",
    description: "Elegant design suitable for any style.",
    price: 34.99,
    oldPrice: 39.99, // Eski fiyat
    rating: 4.7,
    colors: ["Brown", "Black"],
    sizes: ["One Size"],
    image: "/product/product8.jpg",
    stock: 35,
  },
  {
    id: 9,
    title: "Fleece Jacket",
    description: "Keeps you warm on cold winter days.",
    price: 59.99,
    oldPrice: 69.99, // Eski fiyat
    rating: 4.6,
    colors: ["Red", "Gray", "Green"],
    sizes: ["M", "L", "XL"],
    image: "/product/product9.jpg",
    stock: 25,
  },
  {
    id: 10,
    title: "Summer Sandals",
    description: "Comfortable and lightweight sandals for summer.",
    price: 24.99,
    oldPrice: 29.99, // Eski fiyat
    rating: 4.3,
    colors: ["Beige", "Black"],
    sizes: [36, 37, 38, 39, 40],
    image: "/product/product10.jpg",
    stock: 80,
  },
  {
    id: 11,
    title: "Fitness Leggings",
    description: "High-quality leggings perfect for workouts.",
    price: 29.99,
    oldPrice: 34.99, // Eski fiyat
    rating: 4.7,
    colors: ["Black", "Purple", "Gray"],
    sizes: ["S", "M", "L"],
    image: "/product/product11.jpg",
    stock: 70,
  },
  {
    id: 12,
    title: "Winter Scarf",
    description: "Soft and warm scarf for winter.",
    price: 19.99,
    oldPrice: 24.99, // Eski fiyat
    rating: 4.5,
    colors: ["Blue", "Gray", "Pink"],
    sizes: ["One Size"],
    image: "/product/product12.jpg",
    stock: 90,
  },
  {
    id: 13,
    title: "Men's Leather Belt",
    description: "Stylish leather belt for a classic look.",
    price: 24.99,
    oldPrice: 29.99, // Eski fiyat
    rating: 4.8,
    colors: ["Black", "Brown"],
    sizes: [32, 34, 36, 38],
    image: "/product/product13.jpg",
    stock: 45,
  },
  {
    id: 14,
    title: "Graphic Hoodie",
    description: "Trendy hoodie with a modern graphic design.",
    price: 44.99,
    oldPrice: 54.99, // Eski fiyat
    rating: 4.6,
    colors: ["Black", "White"],
    sizes: ["M", "L", "XL"],
    image: "/product/product14.jpg",
    stock: 50,
  },
  {
    id: 15,
    title: "Baseball Cap",
    description: "Classic cap for casual outings.",
    price: 14.99,
    oldPrice: 19.99, // Eski fiyat
    rating: 4.4,
    colors: ["Red", "Black", "Navy"],
    sizes: ["One Size"],
    image: "/product/product15.jpg",
    stock: 100,
  },
];

export default products;
