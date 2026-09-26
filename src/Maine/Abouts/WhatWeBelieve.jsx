import React from "react";
import {
  FiAward,
  FiHeart,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const WhatWeBelieve = () => {
  const beliefs = [
    {
      icon: <FiAward size={26} />,
      title: "Quality First",
      description:
        "We believe quality should never be compromised. Every product is selected with care and attention to detail.",
    },
    {
      icon: <FiHeart size={26} />,
      title: "Comfort Matters",
      description:
        "Looking good should also feel good. We focus on clothing that brings style and everyday comfort together.",
    },
    {
      icon: <FiTrendingUp size={26} />,
      title: "Modern Style",
      description:
        "We keep up with modern fashion trends while choosing styles that are easy to wear and make you feel confident.",
    },
    {
      icon: <FiUsers size={26} />,
      title: "Customer Satisfaction",
      description:
        "Our customers are at the heart of what we do. We aim to make every shopping experience simple and enjoyable.",
    },
  ];

  return (
    <section className="bg-[#FFF9F5] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-[2px] w-8 bg-[#EE627D]"></span>

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#BE2229]">
              What We Believe
            </span>

            <span className="h-[2px] w-8 bg-[#EE627D]"></span>
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-[#171717] sm:text-4xl lg:text-5xl">
            More Than Just{" "}
            <span className="text-[#BE2229]">Fashion</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Our values guide everything we do — from choosing products to
            creating a better shopping experience for our customers.
          </p>
        </div>

        {/* Belief Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {beliefs.map((belief, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-[#E1CFC4]/70 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-7"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E1CFC4]/50 text-[#BE2229] transition-all duration-300 group-hover:bg-[#BE2229] group-hover:text-white">
                {belief.icon}
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-extrabold text-[#171717]">
                {belief.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                {belief.description}
              </p>

              {/* Bottom Line */}
              <div className="mt-6 h-1 w-10 rounded-full bg-[#EE627D] transition-all duration-300 group-hover:w-16"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeBelieve;