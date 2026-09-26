import React from "react";
import { FiArrowUpRight, FiShoppingBag } from "react-icons/fi";

const OurCategories = () => {
  const categories = [
    {
      name: "T-Shirts",
      description: "Everyday style with effortless comfort.",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
      link: "/shop/t-shirts",
    },
    {
      name: "Shirts",
      description: "Classic and modern styles for every occasion.",
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85",
      link: "/shop/shirts",
    },
    {
      name: "Jerseys",
      description: "Sporty looks made for your active lifestyle.",
      image:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=85",
      link: "/shop/jerseys",
    },
    {
      name: "Pants",
      description: "Comfortable fits for your everyday wardrobe.",
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85",
      link: "/shop/pants",
    },
    {
      name: "New Arrivals",
      description: "Discover the latest styles added to our collection.",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=85",
      link: "/shop/new-arrivals",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FFF9F5] py-16 sm:py-20 lg:py-24">
      {/* Decorative Background */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#E1CFC4]/40 blur-3xl"></div>

      <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#EE627D]/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-[2px] w-8 bg-[#EE627D]"></span>

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#BE2229]">
              Our Categories
            </span>

            <span className="h-[2px] w-8 bg-[#EE627D]"></span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-[#171717] sm:text-4xl lg:text-5xl">
            Find Your{" "}
            <span className="text-[#BE2229]">Style</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
            Explore our carefully selected collections and discover styles
            made to match your everyday look.
          </p>
        </div>

        {/* Category Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className={`group relative overflow-hidden rounded-3xl bg-[#E1CFC4] shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                index === 0 ? "lg:row-span-2" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden ${
                  index === 0
                    ? "h-[500px] sm:h-[550px]"
                    : "h-[280px] sm:h-[320px]"
                }`}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"></div>

                {/* Category Number */}
                <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xs font-black text-[#BE2229] shadow-lg backdrop-blur-sm">
                  0{index + 1}
                </span>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">

                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EE627D] text-white">
                    <FiShoppingBag size={18} />
                  </div>

                  <h3 className="text-2xl font-black text-white sm:text-3xl">
                    {category.name}
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">
                    {category.description}
                  </p>

                  {/* Explore Button */}
                  <a
                    href={category.link}
                    className="group/btn mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#171717] transition-all duration-300 hover:bg-[#BE2229] hover:text-white"
                  >
                    <span>Explore</span>

                    <FiArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover/btn:rotate-45"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurCategories;