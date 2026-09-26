import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import logo from '../../../../assets/CollectionBanner.png';

const CollectionBanner = () => {
  return (
    <section className="bg-[#FFF9F5] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Banner */}
        <div className="group relative overflow-hidden rounded-3xl shadow-xl">

          {/* Banner Image */}
          <img
            src={logo}
            alt="BDARFATJAMA Collection"
            className="block h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />

        </div>
      </div>
    </section>
  );
};

export default CollectionBanner;