import type { ReactElement } from 'react';
import React from 'react';
import Footer from './footer';
import {Navigation} from './header';
import {CartProvider} from '@/components/helper/context';

const Layout = ({children}:{children:ReactElement}) => {
    return (
         <CartProvider>
            <Navigation />
            {children}
            <Footer />
        </CartProvider>
    );
};

export default Layout;