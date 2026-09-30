
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiHeart,
  FiShoppingBag,
  FiStar,
} from "react-icons/fi";

import products from "../../../../src/data/products";

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");

  const categories = [
    "All Products",
    "T-Shirts",
    "Shirts",
    "Jersey",
    "Pants",
  ];

  // ================= CATEGORY FILTER =================
  const filteredProducts =
    activeCategory === "All Products"
      ? products
      : products.filter(
          (product) =>
            product.category?.toLowerCase() ===
            activeCategory.toLowerCase()
        );

  return (
    <section className="bg-[#FAF7F4] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mb-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-2xl">
              <p className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#BE2229]">
                <span className="h-[2px] w-10 bg-[#BE2229]" />
                New Collection
              </p>

              <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-[#1D1D1D] sm:text-5xl lg:text-6xl">
                Designed for
                <br />

                <span className="font-serif italic text-[#BE2229]">
                  Your Style.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                Discover carefully selected pieces made for your
                everyday wardrobe. Simple, timeless and effortlessly stylish.
              </p>
            </div>

            <Link
              to="/shop"
              className="group flex w-fit items-center gap-3 border-b border-[#222] pb-2 text-sm font-semibold text-[#222] transition hover:border-[#BE2229] hover:text-[#BE2229]"
            >
              Explore Collection

              <FiArrowUpRight
                size={18}
                className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </div>
        </div>


        {/* ================= CATEGORY ================= */}
        <div className="mb-12 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">

          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full px-6 py-3 text-xs font-bold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#BE2229] text-white shadow-md shadow-red-900/10"
                  : "border border-[#DED8D4] bg-white text-gray-600 hover:border-[#BE2229] hover:bg-[#BE2229] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}

        </div>


        {/* ================= PRODUCTS ================= */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-14">

            {filteredProducts.map((product) => {

              const discount =
                product.oldPrice && product.oldPrice > product.price
                  ? Math.round(
                      ((product.oldPrice - product.price) /
                        product.oldPrice) *
                        100
                    )
                  : null;

              return (
                <article
                  key={product.id}
                  className="group"
                >

                  {/* ================= IMAGE ================= */}
                  <div className="relative overflow-hidden rounded-[2px] bg-[#E8DED7]">

                    <Link
                      to={`/product/${product.id}`}
                      className="block"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="aspect-[4/5] w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                      />
                    </Link>


                    {/* DISCOUNT */}
                    {discount && (
                      <span className="absolute left-3 top-3 rounded-full bg-[#BE2229] px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-white">
                        Sale {discount}%
                      </span>
                    )}


                    {/* WISHLIST */}
                    <button
                      type="button"
                      aria-label={`Add ${product.name} to wishlist`}
                      className="absolute right-3 top-3 flex h-10 w-10 translate-y-[-5px] items-center justify-center rounded-full bg-white text-[#222] opacity-0 shadow-lg transition-all duration-300 hover:bg-[#BE2229] hover:text-white group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <FiHeart size={16} />
                    </button>


                    {/* QUICK VIEW */}
                    <Link
                      to={`/product/${product.id}`}
                      className="absolute bottom-4 left-1/2 flex w-[85%] -translate-x-1/2 translate-y-5 items-center justify-center gap-2 rounded-full bg-white/95 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#222] opacity-0 shadow-xl backdrop-blur-sm transition-all duration-300 hover:bg-[#BE2229] hover:text-white group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <FiShoppingBag size={14} />
                      Quick View
                    </Link>

                  </div>


                  {/* ================= INFO ================= */}
                  <div className="px-1 pt-5">

                    <div className="mb-2 flex items-center justify-between">

                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
                        {product.category}
                      </p>

                      <div className="flex items-center gap-1 text-[#BE2229]">
                        <FiStar
                          size={11}
                          className="fill-current"
                        />

                        <span className="text-[10px] font-semibold text-gray-400">
                          4.8
                        </span>
                      </div>

                    </div>


                    {/* PRODUCT NAME */}
                    <Link
                      to={`/product/${product.id}`}
                      className="block truncate text-sm font-semibold text-[#222] transition-colors duration-200 hover:text-[#BE2229] sm:text-base"
                    >
                      {product.name}
                    </Link>


                    {/* PRICE */}
                    <div className="mt-2 flex items-center gap-2">

                      <span className="text-base font-bold text-[#BE2229]">
                        ৳{product.price}
                      </span>

                      {product.oldPrice && (
                        <span className="text-xs text-gray-400 line-through">
                          ৳{product.oldPrice}
                        </span>
                      )}

                    </div>

                  </div>

                </article>
              );
            })}

          </div>
        ) : (
          /* ================= NO PRODUCT ================= */
          <div className="flex min-h-[250px] items-center justify-center rounded-2xl border border-dashed border-[#DED8D4] bg-white">
            <div className="text-center">
              <p className="text-lg font-semibold text-[#222]">
                No products found
              </p>

              <p className="mt-2 text-sm text-gray-500">
                There are no products available in this category.
              </p>
            </div>
          </div>
        )}


        {/* ================= CTA ================= */}
        <div className="mt-16 flex justify-center sm:mt-20">

          <Link
            to="/shop"
            className="group inline-flex items-center gap-4 rounded-full border border-[#222] bg-transparent px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#222] transition-all duration-300 hover:border-[#BE2229] hover:bg-[#BE2229] hover:text-white"
          >
            View All Products

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#222] text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#BE2229]">
              <FiArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default Shop;
