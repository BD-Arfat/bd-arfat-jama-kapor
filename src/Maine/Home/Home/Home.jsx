import React from 'react';
import Banner from './Banner/Banner';
import ShopByCategory from './ShopByCategory/ShopByCategory';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import NewArrivals from './NewArrivals/NewArrivals';
import CollectionBanner from './CollectionBanner/CollectionBanner';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import CustomerReviews from './CustomerReviews/CustomerReviews';
import AboutBDARFATJAMA from './AboutBDARFATJAMA/AboutBDARFATJAMA';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <AboutBDARFATJAMA></AboutBDARFATJAMA>
            <ShopByCategory></ShopByCategory>
            <WhyChooseUs></WhyChooseUs>
            {/* <FeaturedProducts></FeaturedProducts> */}
            {/* <NewArrivals></NewArrivals> */}
            <CollectionBanner></CollectionBanner>
            <CustomerReviews></CustomerReviews>
        </div>
    );
};

export default Home;