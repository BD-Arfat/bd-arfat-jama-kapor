
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiHeart,
  FiShoppingBag,
} from "react-icons/fi";

import products from "../../../../src/data/products";

const Shop = () => {
  return (
    <section className="bg-[#FFF9F5] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= SECTION HEADER ================= */}
        <div className="mb-10 sm:mb-14">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-[#BE2229]" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#BE2229]">
                  Our Collection
                </span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-[#222] sm:text-4xl lg:text-5xl">
                Find Your
                <span className="ml-2 text-[#BE2229]">
                  Style
                </span>
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-6 text-gray-500 sm:text-base">
                Explore our latest collection of quality clothing,
                designed to make your everyday style stand out.
              </p>
            </div>

            <Link
              to="/shop"
              className="group flex w-fit items-center gap-2 border-b border-[#222] pb-1 text-sm font-semibold text-[#222] transition hover:border-[#BE2229] hover:text-[#BE2229]"
            >
              Explore All

              <FiArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </div>
        </div>


        {/* ================= CATEGORY FILTER ================= */}
        <div className="mb-10 flex items-center gap-2 overflow-x-auto pb-2">

          <button
            type="button"
            className="shrink-0 rounded-full bg-[#BE2229] px-5 py-2.5 text-xs font-semibold text-white shadow-sm"
          >
            All
          </button>

          {["T-Shirts", "Shirts", "Jersey", "Pants"].map((category) => (
            <button
              key={category}
              type="button"
              className="shrink-0 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-xs font-medium text-gray-600 transition duration-300 hover:border-[#BE2229] hover:text-[#BE2229]"
            >
              {category}
            </button>
          ))}

        </div>


        {/* ================= PRODUCT GRID ================= */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-7">

          {products.map((product) => {

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

                {/* ================= PRODUCT IMAGE ================= */}
                <div className="relative overflow-hidden bg-[#E1CFC4]">

                  <Link
                    to={`/product/${product.id}`}
                    className="block"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                    />
                  </Link>


                  {/* DISCOUNT */}
                  {discount && (
                    <span className="absolute left-3 top-3 bg-[#BE2229] px-2.5 py-1.5 text-[10px] font-bold tracking-wide text-white">
                      -{discount}%
                    </span>
                  )}


                  {/* WISHLIST */}
                  <button
                    type="button"
                    aria-label={`Add ${product.name} to wishlist`}
                    className="absolute right-3 top-3 flex h-9 w-9 translate-x-2 items-center justify-center bg-white text-gray-700 opacity-0 shadow-sm transition-all duration-300 hover:bg-[#BE2229] hover:text-white group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <FiHeart size={17} />
                  </button>


                  {/* VIEW PRODUCT */}
                  <Link
                    to={`/product/${product.id}`}
                    className="absolute bottom-0 left-0 right-0 flex translate-y-full items-center justify-center gap-2 bg-[#222]/90 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-transform duration-300 group-hover:translate-y-0"
                  >
                    <FiShoppingBag size={15} />

                    View Product
                  </Link>

                </div>


                {/* ================= PRODUCT INFO ================= */}
                <div className="pt-4">

                  <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                    {product.category}
                  </p>


                  <Link
                    to={`/product/${product.id}`}
                    className="block truncate text-sm font-semibold text-[#222] transition duration-200 hover:text-[#BE2229] sm:text-base"
                  >
                    {product.name}
                  </Link>


                  {/* PRICE */}
                  <div className="mt-2 flex items-center gap-2">

                    <span className="text-base font-bold text-[#BE2229] sm:text-lg">
                      ৳{product.price}
                    </span>

                    {product.oldPrice && (
                      <span className="text-xs text-gray-400 line-through sm:text-sm">
                        ৳{product.oldPrice}
                      </span>
                    )}

                  </div>

                </div>

              </article>
            );
          })}

        </div>


        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-14 flex justify-center sm:mt-16">

          <Link
            to="/shop"
            className="group inline-flex items-center gap-3 border border-[#222] px-7 py-3.5 text-sm font-semibold text-[#222] transition duration-300 hover:border-[#BE2229] hover:bg-[#BE2229] hover:text-white"
          >
            View Complete Collection

            <FiArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default Shop;

