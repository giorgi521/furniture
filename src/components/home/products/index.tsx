import React from 'react';
import backgroundImage from 'public/assets/img/background-image.jpeg';
import {PRODUCT} from '@/components/home/products/helper';
import {MdOutlineDoneAll} from 'react-icons/md';

const Products = () => {
    return (
        <div className='p-6 md:p-12 flex flex-col gap-12 2xl:justify-between items-center xl:flex-row'>
            <div
            style={{
                backgroundImage: `url(${backgroundImage.src})`,
            }}
            className='bg-no-repeat bg-center bg-cover w-full h-[300px] xl:w-[80%] lg:h-[551px] 2xl:w-[60%] rounded-lg relative flex flex-col items-center justify-center text-white gap-2'
            >
                <div className='text-sm font-bold '>New arrivals</div>
                <div className='md:text-2xl font-bold'>Brand new, modern lamps collection</div>
                <div className='text-base font-bold '>Ideal for offices, bedrooms and all in between.</div>
            <div>
            </div>
            </div>
            <div className='flex flex-col gap-4 2xl:w-[35%] text-start'>
                <div className='text-xl pb-4'>Care Instructions</div>
                   {PRODUCT.map(({id, title}) => (
                         <div className='flex gap-6' key={id}>
                            <MdOutlineDoneAll />
                            <div key={id}>{title}</div>
                         </div>
                   ))}
                   <div className='text-gold'><span className='text-based text-gray'>NOTE : </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
            </div>
        </div>
    );
};

export default Products;