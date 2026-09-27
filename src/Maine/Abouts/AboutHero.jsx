import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F5]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Small Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E1CFC4] bg-white px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#EE627D]"></span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#BE2229] sm:text-sm">
                About ZYRQON FITS
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-xl text-4xl font-black leading-[1.05] tracking-tight text-[#171717] sm:text-5xl lg:text-6xl">
              Style Meets{" "}
              <span className="text-[#BE2229]">Comfort</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Welcome to ZYRQON FITS — where everyday fashion meets comfort
              and confidence. We believe great style should feel as good as it
              looks.
            </p>

            {/* Button */}
            <div className="mt-8">
              <a
                href="/shop"
                className="group inline-flex items-center gap-3 rounded-full bg-[#BE2229] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#BE2229]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#EE627D] hover:shadow-xl sm:px-7"
              >
                <span>Explore Collection</span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                  <FiArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <div className="group relative mx-auto max-w-xl">
              
              {/* Decorative Background */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#E1CFC4] sm:-right-6 sm:-top-6 sm:h-32 sm:w-32"></div>

              <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-[#EE627D]/20 sm:-bottom-6 sm:-left-6 sm:h-28 sm:w-28"></div>

              {/* Image */}
              <div className="relative overflow-hidden rounded-[2rem] bg-[#E1CFC4] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85"
                  alt="BDARFATJAMA Fashion"
                  className="h-[380px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[480px] lg:h-[560px]"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                {/* Floating Brand Card */}
                <div className="absolute bottom-5 left-5 rounded-2xl border border-white/30 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md sm:bottom-7 sm:left-7">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#BE2229]">
                    ZYRQON FITS
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#171717]">
                    Fashion • Comfort • Confidence
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;