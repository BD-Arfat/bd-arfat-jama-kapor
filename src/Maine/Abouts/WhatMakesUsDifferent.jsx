import React from "react";
import {
  FiAward,
  FiTrendingUp,
  FiTag,
  FiSmile,
} from "react-icons/fi";

const WhatMakesUsDifferent = () => {
  const features = [
    {
      icon: <FiAward size={25} />,
      title: "Premium Quality",
      description:
        "We focus on quality materials and carefully selected products to give you a better wearing experience.",
    },
    {
      icon: <FiTrendingUp size={25} />,
      title: "Trendy Designs",
      description:
        "Discover modern and stylish designs that help you express your personality and everyday style.",
    },
    {
      icon: <FiTag size={25} />,
      title: "Affordable Pricing",
      description:
        "We aim to offer stylish and quality clothing at prices that make fashion more accessible.",
    },
    {
      icon: <FiSmile size={25} />,
      title: "Customer Friendly Service",
      description:
        "From ordering to delivery, we try to keep the shopping experience simple, helpful, and convenient.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Decorative Background */}
      <div className="absolute -right-24 top-20 h-64 w-64 rounded-full bg-[#E1CFC4]/40 blur-3xl"></div>

      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#EE627D]/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-[2px] w-8 bg-[#EE627D]"></span>

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#BE2229]">
              Why BDARFATJAMA
            </span>

            <span className="h-[2px] w-8 bg-[#EE627D]"></span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-[#171717] sm:text-4xl lg:text-5xl">
            What Makes Us{" "}
            <span className="text-[#BE2229]">Different?</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
            We bring together quality, style, value, and customer care to
            create a shopping experience you can feel confident about.
          </p>
        </div>

        {/* Features */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-[#E1CFC4]/70 bg-[#FFF9F5] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#EE627D]/30 hover:bg-white hover:shadow-xl sm:p-7"
            >
              {/* Number */}
              <span className="absolute right-5 top-4 text-5xl font-black text-[#E1CFC4]/50 transition-colors duration-300 group-hover:text-[#EE627D]/15">
                0{index + 1}
              </span>

              {/* Icon */}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#BE2229] text-white shadow-lg shadow-[#BE2229]/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="relative mt-6 text-xl font-extrabold text-[#171717]">
                {feature.title}
              </h3>

              <p className="relative mt-3 text-sm leading-6 text-gray-600">
                {feature.description}
              </p>

              {/* Bottom Accent */}
              <div className="mt-6 h-1 w-8 rounded-full bg-[#EE627D] transition-all duration-500 group-hover:w-16"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;