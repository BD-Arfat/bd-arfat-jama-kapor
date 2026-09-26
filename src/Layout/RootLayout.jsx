import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../NavFooter/Navbar/Navbar';
import Footar from '../NavFooter/Footer/Footar';
import BackToTop from '../NavFooter/BackToTop';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footar></Footar>
            <BackToTop></BackToTop>
        </div>
    );
};

export default RootLayout;