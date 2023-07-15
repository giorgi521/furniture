import React from 'react';
import Categorys from '@/components/shared/category';
import {useFurnitureCategory} from '@/api/category/index';
import Link from 'next/link';


const Index = () => {
    const { data } = useFurnitureCategory();
    return (
        <Categorys  title='Shop by category'>   
         <div className='flex gap-8 pt-8'>
            {data.slice(0,4).map(({image,id,title,slug}) => (
                <Link href={{
                    pathname: '/product-category/[slug]',
                    query: { slug },
                }} 
                key={id} className='rounded-md overflow-hidden'
                style={{
                    background: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '300px',
                    height: '300px',
                    borderRadius: '10px',
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                }}
                >
                      <div className='text-xl w-[90%]  absolute bottom-6 text-center bg-white'>{title}</div>
                </Link>
            ))}
        </div>
        </Categorys>
    );
};

export default Index;