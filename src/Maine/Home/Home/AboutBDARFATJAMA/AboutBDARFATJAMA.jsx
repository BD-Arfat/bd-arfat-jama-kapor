import React from "react";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";

const AboutBDARFATJAMA = () => {
  return (
    <section className="bg-[#FFF9F5] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-white p-4 shadow-sm sm:p-6 lg:grid-cols-2 lg:gap-12 lg:p-8">

          {/* ================= IMAGE ================= */}
          <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl">

            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85"
              alt="BDARFATJAMA Fashion"
              loading="lazy"
              className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[380px] lg:h-[430px]"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Brand Badge */}
            <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm sm:bottom-6 sm:left-6">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#BE2229]">
                BDARFATJAMA
              </p>
              <p className="mt-1 text-xs font-semibold text-[#171717]">
                Fashion • Comfort • Style
              </p>
            </div>

          </div>

          {/* ================= CONTENT ================= */}
          <div className="px-2 py-3 sm:px-4 lg:px-2">

            {/* Small Label */}
            <div className="mb-4 flex items-center gap-3">

              <span className="h-[2px] w-8 bg-[#EE627D]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#BE2229]">
                About Us
              </span>

            </div>

            {/* Heading */}
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#171717] sm:text-4xl">
              Style Meets{" "}
              <span className="text-[#BE2229]">
                Comfort
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
              BDARFATJAMA is all about bringing together modern style,
              everyday comfort and quality fashion in one place.
            </p>

            <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
              We believe great clothing should look good, feel comfortable
              and fit naturally into your everyday lifestyle.
            </p>

            {/* Features */}
            <div className="mt-6 grid grid-cols-2 gap-3">

              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E1CFC4]/60 text-[#BE2229]">
                  <FiCheck size={14} />
                </span>

                <span className="text-xs font-semibold text-[#171717]">
                  Quality Fashion
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E1CFC4]/60 text-[#BE2229]">
                  <FiCheck size={14} />
                </span>

                <span className="text-xs font-semibold text-[#171717]">
                  Comfortable Wear
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E1CFC4]/60 text-[#BE2229]">
                  <FiCheck size={14} />
                </span>

                <span className="text-xs font-semibold text-[#171717]">
                  Modern Designs
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E1CFC4]/60 text-[#BE2229]">
                  <FiCheck size={14} />
                </span>

                <span className="text-xs font-semibold text-[#171717]">
                  Customer Focused
                </span>
              </div>

            </div>

            {/* Button */}
            <div className="mt-7">

              <a
                href="/shop"
                className="group inline-flex items-center gap-3 rounded-full bg-[#171717] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#BE2229]"
              >
                Explore Collection

                <FiArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutBDARFATJAMA;