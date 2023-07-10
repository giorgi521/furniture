import React from 'react';
import type { ReactElement } from 'react'
import Layout from '@/components/layout';
import Header from '@/components/home/header';
import Partners from '@/components/home/partners';
import Category from '@/components/home/category';
import ChooseUs from '@/components/home/chooseUs';
import FutureProducts from '@/components/home/featuredProduct/index';
import Products from '@/components/home/products/index';

const Index = () => {
  return (
    <>
      <Header />
        <Partners />
        <Category />
        <FutureProducts />
        <Products />
        <ChooseUs />
    </>
  );
}; 

Index.getLayout  = (page:ReactElement) => <Layout>{page}</Layout>;


export default Index;