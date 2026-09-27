import React from "react";
import { FiArrowUpRight, FiShoppingBag } from "react-icons/fi";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F5] py-16 sm:py-20 lg:py-24">
      {/* Decorative Background */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#E1CFC4]/50 blur-3xl"></div>

      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#EE627D]/15 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#BE2229] px-6 py-14 text-center shadow-2xl sm:px-10 sm:py-16 lg:px-20 lg:py-20">
          
          {/* Decorative Circles */}
          <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full border border-white/10"></div>
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full border border-white/10"></div>

          <div className="relative mx-auto max-w-3xl">
            {/* Small Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              <FiShoppingBag size={15} />
              <span>ZYRQON FITS</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Find Your
              <span className="block text-[#E1CFC4]">
                Perfect Style?
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              Explore our latest collection and discover comfortable,
              stylish pieces made to match your everyday look.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/shop"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#BE2229] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#E1CFC4]"
              >
                <span>Shop Collection</span>

                <FiArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#BE2229]"
              >
                Contact Us
              </a>
            </div>

            {/* Bottom Text */}
            <p className="mt-7 text-xs font-medium text-white/60">
              Style • Comfort • Confidence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;