import Layout from '@/components/layout';
import React, { ReactElement } from 'react';
import SingleProducts from '@/components/products/';

const Products = () => {
    return (
        <div>
           <SingleProducts />
        </div>
    );
};

export default Products;

Products.getLayout = (page:ReactElement)=> <Layout>{page}</Layout> 