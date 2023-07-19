import type { ReactElement } from 'react';
import React from 'react';
import Footer from './footer';
import {Navigation} from './header';

const Layout = ({children}:{children:ReactElement}) => {
    return (
        <>
            <Navigation />
            {children}
            <Footer />
        </>
    );
};

export default Layout;