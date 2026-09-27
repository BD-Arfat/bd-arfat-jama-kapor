import React, { useEffect, useState } from "react";
import {
  FiShoppingBag,
  FiUsers,
  FiLayers,
  FiHeadphones,
} from "react-icons/fi";

const BrandStats = () => {
  const stats = [
    {
      icon: <FiShoppingBag size={24} />,
      number: 100,
      title: "Products",
    },
    {
      icon: <FiUsers size={24} />,
      number: 500,
      title: "Happy Customers",
    },
    {
      icon: <FiLayers size={24} />,
      number: 20,
      title: "Collections",
    },
    {
      icon: <FiHeadphones size={24} />,
      number: 24,
      title: "Online Support",
      suffix: "/7",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#E1CFC4] py-16 sm:py-20 lg:py-24">
      
      {/* Decorative Shapes */}
      <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[#EE627D]/15"></div>

      <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#BE2229]/10"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#BE2229]/20 bg-white/50 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#EE627D]"></span>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#BE2229] sm:text-sm">
              ZYRQON FITS In Numbers
            </p>
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#171717] sm:text-4xl lg:text-5xl">
            Our Journey{" "}
            <span className="text-[#BE2229]">So Far</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-700 sm:text-base">
            Every number represents our commitment to bringing better fashion
            and a better shopping experience to our customers.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-6">

          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}

        </div>
      </div>
    </section>
  );
};


/* =========================
   Stat Card
========================= */

const StatCard = ({ stat }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 1800;
    const incrementTime = 30;

    const increment = stat.number / (duration / incrementTime);

    const timer = setInterval(() => {
      start += increment;

      if (start >= stat.number) {
        start = stat.number;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(timer);
  }, [stat.number]);

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/70 p-5 text-center shadow-lg backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-2xl sm:p-7">

      {/* Top Gradient Line */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#BE2229] via-[#EE627D] to-[#BE2229]"></div>

      {/* Icon */}
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#BE2229] text-white shadow-lg shadow-[#BE2229]/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
        {stat.icon}
      </div>

      {/* Number */}
      <div className="mt-5 flex items-center justify-center">

        <h3 className="text-3xl font-black tracking-tight text-[#171717] sm:text-4xl lg:text-5xl">
          {count}
          {stat.suffix ? (
            <span className="text-[#BE2229]">{stat.suffix}</span>
          ) : (
            <span className="text-[#BE2229]">+</span>
          )}
        </h3>

      </div>

      {/* Title */}
      <p className="mt-2 text-sm font-semibold text-gray-600 sm:text-base">
        {stat.title}
      </p>

      {/* Bottom Decoration */}
      <div className="mx-auto mt-5 h-1 w-8 rounded-full bg-[#EE627D] transition-all duration-500 group-hover:w-16"></div>
    </div>
  );
};

export default BrandStats;