import React from 'react';
import type { ReactElement } from 'react'
import Layout from '@/components/layout';
import Header from '@/components/home/header';
import Partners from '@/components/home/partners';
import Category from '@/components/home/category';
import ChooseUs from '@/components/home/chooseUs';
import Image from 'next/image';
import backgroundImage from 'public/assets/img/background-image.jpeg';
import FutureProducts from '@/components/home/featuredProduct/index';

const Index = () => {
  return (
    <>
      <Image src={backgroundImage} alt="furniture" className="fixed z-[-1] mt-0"/>
      <Header />
        <div className="bg-white">
        <Partners />
        <Category />
        <FutureProducts />
        <ChooseUs />
      </div>
    </>
  );
}; 

Index.getLayout  = (page:ReactElement) => <Layout>{page}</Layout>;


export default Index;