import React from "react";
import { FiArrowUpRight, FiHeart, FiStar } from "react-icons/fi";

const OurStory = () => {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left Content */}
          <div>
            {/* Small Label */}
            <div className="mb-5 inline-flex items-center gap-2">
              <span className="h-[2px] w-8 bg-[#EE627D]"></span>

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#BE2229]">
                Our Story
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-xl text-3xl font-black leading-tight tracking-tight text-[#171717] sm:text-4xl lg:text-5xl">
              Fashion That Tells{" "}
              <span className="text-[#BE2229]">Your Story</span>
            </h2>

            {/* Description */}
            <div className="mt-6 space-y-4 text-base leading-7 text-gray-600 sm:text-lg">
              <p>
                BDARFATJAMA started with a simple idea — to bring together
                modern style, everyday comfort, and quality clothing in one
                place.
              </p>

              <p>
                We believe fashion is more than just what you wear. It is a
                way to express your personality, confidence, and individual
                style.
              </p>

              <p>
                From everyday T-shirts and shirts to jerseys, pants, and new
                collections, we carefully focus on creating a shopping
                experience that feels simple, reliable, and enjoyable.
              </p>
            </div>

            {/* Small Highlight */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 rounded-2xl border border-[#E1CFC4] bg-[#FFF9F5] px-4 py-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EE627D]/10 text-[#BE2229]">
                  <FiHeart size={19} />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#171717]">
                    Made With Care
                  </p>
                  <p className="text-xs text-gray-500">
                    Quality in every choice
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-[#E1CFC4] bg-[#FFF9F5] px-4 py-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E1CFC4]/50 text-[#BE2229]">
                  <FiStar size={19} />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#171717]">
                    Style First
                  </p>
                  <p className="text-xs text-gray-500">
                    Modern & comfortable
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Decorative Shape */}
            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-[#E1CFC4] sm:-right-8 sm:-top-8 sm:h-36 sm:w-36"></div>

            <div className="absolute -bottom-5 -left-5 h-24 w-24 rounded-full bg-[#EE627D]/20 sm:-bottom-8 sm:-left-8 sm:h-32 sm:w-32"></div>

            {/* Image */}
            <div className="group relative overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=85"
                alt="BDARFATJAMA Fashion Collection"
                className="h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[500px]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              {/* Bottom Card */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/90 p-5 shadow-xl backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#BE2229]">
                  Since Day One
                </p>

                <div className="mt-2 flex items-center justify-between gap-4">
                  <p className="text-lg font-black text-[#171717]">
                    Style. Comfort. Confidence.
                  </p>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#BE2229] text-white">
                    <FiArrowUpRight size={19} />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;