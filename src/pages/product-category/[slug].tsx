import Layout from '@/components/layout';
import React,{ReactElement} from 'react';
import ProductCategorys from '@/components/productCategory/index';

const Decor = () => {
    return (
        <ProductCategorys />
    );
};

Decor.getLayout = (page: ReactElement) => <Layout>{page}</Layout>

export default Decor;