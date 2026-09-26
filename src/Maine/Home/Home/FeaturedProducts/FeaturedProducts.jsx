import React from "react";
import {
  FiArrowUpRight,
  FiShoppingBag,
  FiHeart,
  FiStar,
  FiPlus,
} from "react-icons/fi";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Premium Oversized T-Shirt",
      category: "T-Shirts",
      price: 850,
      oldPrice: 1050,
      discount: "19% OFF",
      rating: 4.9,
      reviews: 128,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
      badge: "BEST SELLER",
    },
    {
      id: 2,
      name: "Classic Casual Shirt",
      category: "Shirts",
      price: 1250,
      oldPrice: 1500,
      discount: "17% OFF",
      rating: 4.8,
      reviews: 96,
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85",
      badge: "POPULAR",
    },
    {
      id: 3,
      name: "Premium Football Jersey",
      category: "Jerseys",
      price: 950,
      oldPrice: 1200,
      discount: "21% OFF",
      rating: 4.9,
      reviews: 154,
      image:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=85",
      badge: "TRENDING",
    },
    {
      id: 4,
      name: "Relaxed Fit Denim Pants",
      category: "Pants",
      price: 1450,
      oldPrice: 1750,
      discount: "17% OFF",
      rating: 4.7,
      reviews: 82,
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85",
      badge: "NEW",
    },
    {
      id: 5,
      name: "Essential Cotton T-Shirt",
      category: "T-Shirts",
      price: 750,
      oldPrice: 900,
      discount: "17% OFF",
      rating: 4.8,
      reviews: 113,
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85",
      badge: "NEW",
    },
    {
      id: 6,
      name: "Premium Casual Outfit",
      category: "Collection",
      price: 1650,
      oldPrice: 2000,
      discount: "18% OFF",
      rating: 4.9,
      reviews: 76,
      image:
        "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=85",
      badge: "LIMITED",
    },
    {
      id: 7,
      name: "Modern Streetwear T-Shirt",
      category: "T-Shirts",
      price: 900,
      oldPrice: 1100,
      discount: "18% OFF",
      rating: 4.8,
      reviews: 91,
      image:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
      badge: "TRENDING",
    },
    {
      id: 8,
      name: "Premium Casual Shirt",
      category: "Shirts",
      price: 1350,
      oldPrice: 1600,
      discount: "16% OFF",
      rating: 4.9,
      reviews: 67,
      image:
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=85",
      badge: "NEW",
    },
  ];

  return (
    <section className="bg-[#FFF9F5] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= SECTION HEADER ================= */}
        <div className="mb-10 text-center sm:mb-12">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#EE627D]" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#BE2229]">
              Our Collection
            </span>

            <span className="h-[2px] w-8 bg-[#EE627D]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#171717] sm:text-4xl lg:text-5xl">
            Featured{" "}
            <span className="text-[#BE2229]">
              Products
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Discover our most loved styles, carefully selected for
            comfort, quality and everyday fashion.
          </p>
        </div>

        {/* ================= PRODUCT GRID ================= */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">

          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
            >

              {/* ================= IMAGE ================= */}
              <div className="relative overflow-hidden rounded-2xl bg-[#E1CFC4] sm:rounded-3xl">

                <div className="aspect-[4/5] overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                  />

                </div>

                {/* DARK HOVER OVERLAY */}
                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />

                {/* DISCOUNT */}
                <div className="absolute left-2.5 top-2.5 rounded-full bg-[#BE2229] px-2.5 py-1.5 text-[8px] font-bold tracking-wide text-white shadow-lg sm:left-4 sm:top-4 sm:px-3 sm:text-[10px]">
                  {product.discount}
                </div>

                {/* PRODUCT BADGE */}
                <div className="absolute bottom-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-[8px] font-bold tracking-wider text-[#171717] shadow-md sm:bottom-4 sm:left-4 sm:px-3 sm:py-1.5 sm:text-[9px]">
                  {product.badge}
                </div>

                {/* HEART BUTTON */}
                <button
                  type="button"
                  aria-label={`Add ${product.name} to wishlist`}
                  className="absolute right-2.5 top-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[#BE2229] shadow-md transition duration-300 hover:bg-[#BE2229] hover:text-white sm:right-4 sm:top-4 sm:h-10 sm:w-10"
                >
                  <FiHeart size={17} />
                </button>

                {/* QUICK SHOP BUTTON */}
                <button
                  type="button"
                  className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-14 items-center justify-center rounded-full bg-white text-[#BE2229] opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-4 sm:right-4 sm:h-10 sm:w-10"
                  aria-label={`Quick view ${product.name}`}
                >
                  <FiArrowUpRight size={18} />
                </button>
              </div>

              {/* ================= PRODUCT INFO ================= */}
              <div className="px-1 pt-4 sm:px-2 sm:pt-5">

                {/* CATEGORY */}
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#BE2229] sm:text-[10px]">
                  {product.category}
                </p>

                {/* NAME */}
                <h3 className="mt-1.5 line-clamp-1 text-sm font-bold text-[#171717] transition-colors duration-300 group-hover:text-[#BE2229] sm:text-base">
                  {product.name}
                </h3>

                {/* RATING */}
                <div className="mt-2 flex items-center gap-1.5">

                  <div className="flex items-center gap-0.5 text-[#EE627D]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FiStar
                        key={star}
                        size={11}
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  <span className="text-[10px] font-medium text-gray-400">
                    ({product.reviews})
                  </span>

                </div>

                {/* PRICE */}
                <div className="mt-2.5 flex items-center gap-2">

                  <span className="text-base font-extrabold text-[#BE2229] sm:text-lg">
                    ৳{product.price}
                  </span>

                  <span className="text-xs font-medium text-gray-400 line-through">
                    ৳{product.oldPrice}
                  </span>

                </div>

                {/* ADD TO CART */}
                <button
                  type="button"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#171717] px-3 py-2.5 text-[10px] font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#BE2229] sm:rounded-2xl sm:py-3 sm:text-xs"
                >
                  <FiShoppingBag size={14} />
                  Add To Cart
                </button>

              </div>
            </div>
          ))}

        </div>

        {/* ================= VIEW ALL ================= */}
        <div className="mt-12 flex justify-center sm:mt-14">

          <a
            href="/shop"
            className="group flex items-center gap-3 rounded-full border-2 border-[#BE2229] px-7 py-3 text-sm font-bold text-[#BE2229] transition-all duration-300 hover:bg-[#BE2229] hover:text-white sm:px-9 sm:py-3.5"
          >
            View All Products

            <FiArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </a>

        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;