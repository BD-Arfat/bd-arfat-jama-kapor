import React from 'react';
import AboutHero from './AboutHero';
import OurStory from './OurStory';
import WhatWeBelieve from './WhatWeBelieve';
import BrandStats from './BrandStats';
import WhatMakesUsDifferent from './WhatMakesUsDifferent';
import OurCategories from './OurCategories';
import FinalCTA from './FinalCTA';

const Abouts = () => {
    return (
        <div>
            <AboutHero></AboutHero>
            <OurStory></OurStory>
            <OurCategories></OurCategories>
            <WhatWeBelieve></WhatWeBelieve>
            <BrandStats></BrandStats>
            <WhatMakesUsDifferent></WhatMakesUsDifferent>
            <FinalCTA></FinalCTA>
        </div>
    );
};

export default Abouts;