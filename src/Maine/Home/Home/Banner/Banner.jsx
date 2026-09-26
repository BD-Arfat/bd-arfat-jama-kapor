import React from 'react';
import bannerImg from '../../../../assets/banner.png';

const Banner = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[#E1CFC4]">

            {/* Hero Banner Image */}
            <img
                src={bannerImg}
                alt="BDARFATJAMA - Style Meets Comfort"
                className="block h-auto w-full object-contain"
            />

        </section>
    );
};

export default Banner;