import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiHeart,
  FiShoppingBag,
  FiStar,
  FiTag,
} from "react-icons/fi";

import products from "../../../../data/products";

const ShopByCategory = () => {
  // Latest 6 Products
  const latestProducts = [...products].reverse().slice(0, 6);

  return (
    <section className="bg-[#FFF9F5] py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mb-8 text-center sm:mb-10">

          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-7 bg-[#BE2229]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#BE2229] sm:text-[10px]">
              Explore Collection
            </span>

            <span className="h-[2px] w-7 bg-[#BE2229]" />
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#1D1D1D] sm:text-4xl lg:text-5xl">
            Our Latest{" "}
            <span className="font-serif italic text-[#BE2229]">
              Products.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-gray-500 sm:text-sm">
            Discover our latest collection of carefully selected
            products, made to bring style, comfort and quality to
            your everyday wardrobe.
          </p>

        </div>

        {/* ================= PRODUCTS ================= */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">

          {latestProducts.map((product) => {

            // ================= AUTO DISCOUNT =================
            const hasDiscount =
              product.oldPrice &&
              product.price &&
              product.oldPrice > product.price;

            const discount = hasDiscount
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
                <div className="relative overflow-hidden rounded-[3px] bg-[#E8DED7]">

                  <Link
                    to={`/product/${product.id}`}
                    className="block"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="aspect-[4/4.5] w-full object-cover
                      transition duration-700 ease-out
                      group-hover:scale-105"
                    />
                  </Link>

                  {/* ================= SALE BADGE ================= */}
                  {hasDiscount && discount > 0 && (
                    <span
                      className="absolute left-2.5 top-2.5 flex items-center
                      gap-1 rounded-full bg-[#BE2229] px-2.5 py-1
                      text-[8px] font-bold uppercase tracking-wider
                      text-white shadow-md sm:left-3 sm:top-3 sm:px-3
                      sm:py-1.5 sm:text-[9px]"
                    >
                      <FiTag size={9} />

                      {discount}% OFF
                    </span>
                  )}

                  {/* ================= REGULAR BADGE ================= */}
                  {!hasDiscount && (
                    <span
                      className="absolute left-2.5 top-2.5 rounded-full
                      border border-white/80 bg-white/90 px-2.5 py-1
                      text-[8px] font-bold uppercase tracking-wider
                      text-gray-600 shadow-sm backdrop-blur-sm
                      sm:left-3 sm:top-3 sm:px-3 sm:py-1.5 sm:text-[9px]"
                    >
                      Regular Price
                    </span>
                  )}

                  {/* ================= WISHLIST ================= */}
                  <button
                    type="button"
                    aria-label={`Add ${product.name} to wishlist`}
                    className="absolute right-2.5 top-2.5 flex h-8 w-8
                    translate-y-[-4px] items-center justify-center
                    rounded-full bg-white text-[#222] opacity-0
                    shadow-lg transition-all duration-300
                    hover:bg-[#BE2229] hover:text-white
                    group-hover:translate-y-0 group-hover:opacity-100
                    sm:right-3 sm:top-3 sm:h-9 sm:w-9"
                  >
                    <FiHeart size={14} />
                  </button>

                  {/* ================= QUICK VIEW ================= */}
                  <Link
                    to={`/product/${product.id}`}
                    className="absolute bottom-2.5 left-1/2 flex w-[82%]
                    -translate-x-1/2 translate-y-4 items-center
                    justify-center gap-1.5 rounded-full bg-white/95
                    py-2 text-[8px] font-bold uppercase
                    tracking-[0.15em] text-[#222] opacity-0 shadow-lg
                    backdrop-blur-sm transition-all duration-300
                    hover:bg-[#BE2229] hover:text-white
                    group-hover:translate-y-0 group-hover:opacity-100
                    sm:bottom-3 sm:py-2.5 sm:text-[9px]"
                  >
                    <FiShoppingBag size={12} />

                    Quick View
                  </Link>

                </div>

                {/* ================= PRODUCT INFO ================= */}
                <div className="px-0.5 pt-3 sm:pt-4">

                  {/* CATEGORY + RATING */}
                  <div className="mb-1.5 flex items-center justify-between">

                    <p
                      className="text-[7px] font-bold uppercase
                      tracking-[0.18em] text-gray-400 sm:text-[8px]"
                    >
                      {product.category}
                    </p>

                    <div className="flex items-center gap-0.5 text-[#BE2229]">

                      <FiStar
                        size={9}
                        className="fill-current"
                      />

                      <span className="text-[8px] font-semibold text-gray-400">
                        4.8
                      </span>

                    </div>

                  </div>

                  {/* PRODUCT NAME */}
                  <Link
                    to={`/product/${product.id}`}
                    className="block truncate text-xs font-semibold
                    text-[#222] transition-colors duration-200
                    hover:text-[#BE2229] sm:text-sm"
                  >
                    {product.name}
                  </Link>

                  {/* ================= PRICE ================= */}
                  <div className="mt-1.5 flex items-center gap-1.5">

                    <span className="text-sm font-bold text-[#BE2229] sm:text-base">
                      ৳{product.price}
                    </span>

                    {hasDiscount && (
                      <span className="text-[9px] text-gray-400 line-through sm:text-[10px]">
                        ৳{product.oldPrice}
                      </span>
                    )}

                  </div>

                  {/* ================= SAVING ================= */}
                  {hasDiscount && (
                    <p className="mt-0.5 text-[8px] font-medium text-green-600 sm:text-[9px]">
                      Save ৳{product.oldPrice - product.price}
                    </p>
                  )}

                </div>

              </article>
            );
          })}

        </div>

        {/* ================= SEE MORE PRODUCTS ================= */}
        <div className="mt-10 flex justify-center sm:mt-12">

          <Link
            to="/shop"
            className="group inline-flex items-center gap-3
            rounded-full border border-[#222] bg-transparent
            px-6 py-3 text-[9px] font-bold uppercase
            tracking-[0.15em] text-[#222]
            transition-all duration-300
            hover:border-[#BE2229] hover:bg-[#BE2229]
            hover:text-white sm:px-7 sm:py-3.5 sm:text-[10px]"
          >
            See More Products

            <span
              className="flex h-6 w-6 items-center justify-center
              rounded-full bg-[#222] text-white
              transition-all duration-300
              group-hover:bg-white group-hover:text-[#BE2229]"
            >
              <FiArrowUpRight
                size={13}
                className="transition-transform duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5"
              />
            </span>

          </Link>

        </div>

      </div>
    </section>
  );
};

export default ShopByCategory;