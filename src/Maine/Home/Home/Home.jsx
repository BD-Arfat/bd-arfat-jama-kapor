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
        <div>
            <Banner></Banner>
            <AboutBDARFATJAMA></AboutBDARFATJAMA>
            <ShopByCategory></ShopByCategory>
            <FeaturedProducts></FeaturedProducts>
            <NewArrivals></NewArrivals>
            <CollectionBanner></CollectionBanner>
            <WhyChooseUs></WhyChooseUs>
            <CustomerReviews></CustomerReviews>
        </div>
    );
};

export default Home;