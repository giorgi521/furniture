import React from 'react';
import {CategoryImages} from '@/components/home/category/helper';
import Categorys from '@/components/shared/category';
import Image from 'next/image';


const Index = () => {
    return (
        <Categorys  
            title='Shop by category'
        >   
         <div className='flex gap-8 pt-8'>
            {CategoryImages.map(({src,id}) => (
                <div key={id}>
                    <Image src={src} alt='category' className='w-[300px] h-[300px] cursor-pointer object-cover'/>
                </div>
            ))}
        </div>
        </Categorys>
    );
};

export default Index;