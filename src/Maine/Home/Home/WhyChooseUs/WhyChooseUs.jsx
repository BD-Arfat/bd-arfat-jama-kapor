import React from "react";
import {
  FiShield,
  FiTruck,
  FiRefreshCw,
  FiCreditCard,
  FiHeadphones,
  FiArrowUpRight,
} from "react-icons/fi";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <FiShield />,
      title: "Premium Quality",
      description:
        "Quality fabrics and carefully selected products made for everyday comfort.",
    },
    {
      id: 2,
      icon: <FiTruck />,
      title: "Fast Delivery",
      description:
        "Get your favorite products delivered quickly and safely to your doorstep.",
    },
    {
      id: 3,
      icon: <FiRefreshCw />,
      title: "Easy Returns",
      description:
        "Simple return process whenever your order does not meet your expectations.",
    },
    {
      id: 4,
      icon: <FiCreditCard />,
      title: "Secure Payment",
      description:
        "Enjoy a safe and convenient checkout experience with secure payment options.",
    },
    {
      id: 5,
      icon: <FiHeadphones />,
      title: "Customer Support",
      description:
        "Our support team is here to help you with your questions and orders.",
    },
  ];

  return (
    <section className="bg-[#FFF9F5] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">

          {/* Small Label */}
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#EE627D]" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#BE2229]">
              Why Choose Us
            </span>

            <span className="h-[2px] w-8 bg-[#EE627D]" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold tracking-tight text-[#171717] sm:text-4xl lg:text-5xl">
            Why Choose{" "}
            <span className="text-[#BE2229]">
              BDARFATJAMA?
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
            We care about every part of your shopping experience —
            from product quality to delivery and customer support.
          </p>
        </div>

        {/* ================= FEATURES ================= */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-5">

          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative overflow-hidden rounded-2xl border border-[#E1CFC4]/70 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#EE627D]/40 hover:shadow-xl sm:rounded-3xl sm:p-6 lg:p-7"
            >

              {/* Top Decorative Line */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-[#BE2229] transition-all duration-500 group-hover:w-full" />

              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E1CFC4]/50 text-[#BE2229] transition-all duration-500 group-hover:bg-[#BE2229] group-hover:text-white group-hover:rotate-3 sm:h-14 sm:w-14">
                <span className="text-xl sm:text-2xl">
                  {feature.icon}
                </span>
              </div>

              {/* Number */}
              <span className="absolute right-4 top-4 text-2xl font-black text-[#E1CFC4]/60 transition-colors duration-300 group-hover:text-[#EE627D]/20">
                0{feature.id}
              </span>

              {/* Title */}
              <h3 className="mt-5 text-sm font-extrabold text-[#171717] sm:text-base lg:text-lg">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-[10px] leading-5 text-gray-500 sm:text-xs sm:leading-6">
                {feature.description}
              </p>

              {/* Bottom Arrow */}
              <div className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#BE2229] sm:text-xs">
                <span>Learn More</span>

                <FiArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>

            </div>
          ))}

        </div>

        {/* ================= BOTTOM TRUST LINE ================= */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center sm:mt-12 sm:gap-x-10">

          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
            <FiShield className="text-[#BE2229]" />
            Trusted Quality
          </div>

          <span className="hidden h-4 w-px bg-[#E1CFC4] sm:block" />

          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
            <FiTruck className="text-[#BE2229]" />
            Reliable Delivery
          </div>

          <span className="hidden h-4 w-px bg-[#E1CFC4] sm:block" />

          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
            <FiHeadphones className="text-[#BE2229]" />
            Friendly Support
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;