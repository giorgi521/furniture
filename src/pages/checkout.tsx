import Checkout from '@/components/checkout';
import Layout from '@/components/layout';
import React, { ReactElement } from 'react';

const Index = () => {
    return (
        <div>
           <Checkout />
        </div>
    );
};

export default Index;

Index.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
