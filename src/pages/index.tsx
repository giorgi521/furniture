import React from 'react';
import type { ReactElement } from 'react'
import Layout from '@/components/layout';
import Header from '@/components/home/header';
import Partners from '@/components/home/partners';
import Category from '@/components/home/category';
import ChooseUs from '@/components/home/chooseUs';
import FutureProducts from '@/components/home/featuredProduct/index';
import Products from '@/components/home/products/index';
import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2022-03-25",
  useCdn: false
});

const Index = ({furniture}:{furniture:any}) => {
  console.log(furniture);
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
  const furniture = await client.fetch(`*[_type == "furniture"]`);

  return {
    props: {
      furniture
    }
  };
}