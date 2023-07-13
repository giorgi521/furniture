import React from 'react';
import type { ReactElement } from 'react'
import Layout from '@/components/layout';
import Header from '@/components/home/header';
import Partners from '@/components/home/partners';
import Category from '@/components/home/category';
import ChooseUs from '@/components/home/chooseUs';
import FutureProducts from '@/components/home/featuredProduct/index';
import Products from '@/components/home/products/index';
import { initializeApollo } from "../shared/lib/apolloClient";
import {PARTNERS_QUERY} from '@/api/allPartners';
import {FUTUREP_PRODUCTS_QUERY} from '@/api/futureProducts';

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

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: PARTNERS_QUERY
  })

  await apolloClient.query({
    query:FUTUREP_PRODUCTS_QUERY,
    variables: {
      products: "future product"
  }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    }
  };
}