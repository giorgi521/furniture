import React from 'react';
import Categorys from '@/components/shared/category';
import {useFurnitureCategory} from '@/api/category/index';
import Link from 'next/link';


const Index = () => {
    const { data } = useFurnitureCategory();
    return (
        <Categorys  title='Shop by category'>   
         <div className='grid gap-2  grid-cols-2 xl:flex flex-wrap sm:gap-24 pt-8 justify-center xl:gap-8'>
            {data.slice(0,4).map(({image,id,title,slug}) => (
                <Link href={{
                    pathname: '/product-category/[slug]',
                    query: { slug },
                }} 
                key={id}
                className='rounded-md overflow-hidden w-[150px] h-[250px] relative sm:w-[300px] sm:h-[300px] 2xl:w-[350px] 2xl:h-[350px] flex justify-center'
                style={{
                    background: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                >
                      <div className='text-xl w-[90%]  absolute bottom-4 text-center bg-white md:w-[90%] md:bottom-6'>{title}</div>
                </Link>
            ))}
        </div>
        </Categorys>
    );
};

export default Index;