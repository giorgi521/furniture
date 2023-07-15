import type { ReactElement } from 'react';
import React from 'react';
import Footer from './footer';
import Header from './header';

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