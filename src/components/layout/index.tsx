import type { ReactElement } from 'react'
import React from 'react';
import Footer from './footer';
import Header from './header';
import Image from 'next/image'

const Layout = ({children}:{children:ReactElement}) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;