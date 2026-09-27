const products = [
  // =====================================================
  // PRODUCT 1
  // =====================================================
  {
    id: 1,
    name: "Spider jersey",
    category: "T-Shirts",

    price: 720,
    oldPrice: 800,
    discount: 10,

    rating: 4.8,
    reviews: 124,
    stock: 50,

    image:
      "https://i.ibb.co.com/9HrhK7jK/Whats-App-Image-2026-09-27-at-8-58-38-PM.jpg",

    images: [
      "https://i.ibb.co.com/9HrhK7jK/Whats-App-Image-2026-09-27-at-8-58-38-PM.jpg",
      "https://i.ibb.co.com/wZVRpWRt/Whats-App-Image-2026-09-27-at-8-58-41-PM.jpg",
      "https://i.ibb.co.com/N66YdBqx/Whats-App-Image-2026-09-27-at-8-58-43-PM.jpg",
      "https://i.ibb.co.com/LDgWyP8p/Whats-App-Image-2026-09-27-at-8-58-45-PM.jpg",
      "https://i.ibb.co.com/qMTFRnd7/Whats-App-Image-2026-09-27-at-8-58-49-PM.jpg",
    ],

    description:
      "A premium oversized t-shirt designed for everyday comfort and effortless style. Made with soft and breathable fabric, perfect for casual outings and daily wear.",

    sizes: ["S", "M", "L", "XL", "XXL"],

    colors: ["Black", "White", "Beige"],

    material: "Premium Cotton",
    fit: "Oversized Fit",

    delivery: "2-5 working days",

    sku: "BDT-001",
  },

  // =====================================================
  // PRODUCT 2
  // =====================================================
  // {
  //   id: 2,
  //   name: "Classic Cotton T-Shirt",
  //   category: "T-Shirts",

  //   price: 750,
  //   oldPrice: 950,
  //   discount: 21,

  //   rating: 4.7,
  //   reviews: 98,
  //   stock: 45,

  //   image:
  //     "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1000&q=85",

  //   images: [
  //     "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1000&q=85",
  //     "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85",
  //     "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=85",
  //     "https://images.unsplash.com/photo-1583743814966-8936f37f4678?auto=format&fit=crop&w=1000&q=85",
  //   ],

  //   description:
  //     "A comfortable classic cotton t-shirt made for everyday wear. Soft fabric, clean design and a comfortable fit make it perfect for casual styling.",

  //   sizes: ["S", "M", "L", "XL", "XXL"],

  //   colors: ["Black", "White", "Navy Blue"],

  //   material: "100% Cotton",
  //   fit: "Regular Fit",

  //   delivery: "2-5 working days",

  //   sku: "BDT-002",
  // },

  // =====================================================
  // PRODUCT 3
  // =====================================================
  // {
  //   id: 3,
  //   name: "Premium Black T-Shirt",
  //   category: "T-Shirts",

  //   price: 900,
  //   oldPrice: 1200,
  //   discount: 25,

  //   rating: 4.9,
  //   reviews: 156,
  //   stock: 35,

  //   image:
  //     "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=85",

  //   images: [
  //     "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=85",
  //     "https://images.unsplash.com/photo-1583743814966-8936f37f4678?auto=format&fit=crop&w=1000&q=85",
  //     "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85",
  //     "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1000&q=85",
  //   ],

  //   description:
  //     "A stylish premium black t-shirt with a clean modern look. Designed with comfortable fabric for everyday use and casual occasions.",

  //   sizes: ["S", "M", "L", "XL", "XXL"],

  //   colors: ["Black", "Charcoal", "White"],

  //   material: "Premium Cotton",

  //   fit: "Regular Fit",

  //   delivery: "2-5 working days",

  //   sku: "BDT-003",
  // },

  // =====================================================
  // PRODUCT 4
  // =====================================================
  // {
  //   id: 4,
  //   name: "Oversized Streetwear T-Shirt",
  //   category: "T-Shirts",

  //   price: 950,
  //   oldPrice: 1250,
  //   discount: 24,

  //   rating: 4.8,
  //   reviews: 87,
  //   stock: 30,

  //   image:
  //     "https://images.unsplash.com/photo-1583743814966-8936f37f4678?auto=format&fit=crop&w=1000&q=85",

  //   images: [
  //     "https://images.unsplash.com/photo-1583743814966-8936f37f4678?auto=format&fit=crop&w=1000&q=85",
  //     "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=85",
  //     "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=85",
  //     "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85",
  //   ],

  //   description:
  //     "A modern oversized streetwear t-shirt designed for a relaxed and stylish look. Perfect for casual outfits, hangouts and everyday wear.",

  //   sizes: ["M", "L", "XL", "XXL"],

  //   colors: ["Black", "White", "Beige"],

  //   material: "Heavy Cotton",

  //   fit: "Oversized Fit",

  //   delivery: "2-5 working days",

  //   sku: "BDT-004",
  // },

  // =====================================================
  // PRODUCT 5
  // =====================================================
  // {
  //   id: 5,
  //   name: "Casual Everyday T-Shirt",
  //   category: "T-Shirts",

  //   price: 700,
  //   oldPrice: 900,
  //   discount: 22,

  //   rating: 4.6,
  //   reviews: 76,
  //   stock: 60,

  //   image:
  //     "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=85",

  //   images: [
  //     "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=85",
  //     "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1000&q=85",
  //     "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85",
  //   ],

  //   description:
  //     "A simple and comfortable everyday t-shirt with a clean design. Easy to pair with jeans, trousers or shorts for a casual look.",

  //   sizes: ["S", "M", "L", "XL"],

  //   colors: ["White", "Black", "Grey"],

  //   material: "Cotton Blend",

  //   fit: "Regular Fit",

  //   delivery: "2-5 working days",

  //   sku: "BDT-005",
  // },

  // =====================================================
  // PRODUCT 6
  // =====================================================
  // {
  //   id: 6,
  //   name: "Premium Relaxed Fit T-Shirt",
  //   category: "T-Shirts",

  //   price: 800,
  //   oldPrice: 1050,
  //   discount: 24,

  //   rating: 4.7,
  //   reviews: 112,
  //   stock: 40,

  //   image:
  //     "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85",

  //   images: [
  //     "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85",
  //     "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=85",
  //     "https://images.unsplash.com/photo-1583743814966-8936f37f4678?auto=format&fit=crop&w=1000&q=85",
  //     "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=85",
  //   ],

  //   description:
  //     "A premium relaxed-fit t-shirt made with soft and breathable fabric. Designed for comfort while maintaining a clean and modern appearance.",

  //   sizes: ["S", "M", "L", "XL", "XXL"],

  //   colors: ["Black", "White", "Olive"],

  //   material: "Premium Cotton",

  //   fit: "Relaxed Fit",

  //   delivery: "2-5 working days",

  //   sku: "BDT-006",
  // },
];

export default products;