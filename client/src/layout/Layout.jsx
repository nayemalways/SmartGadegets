import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({childrean}) => {
    return (
        <>
            <Navbar />
            {childrean}
            <Footer />   
        </>
    );
};

export default Layout;