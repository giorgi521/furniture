import React from 'react';
import backgroundImage from 'public/assets/img/background-image.jpeg';
import Image from 'next/image';
import Button from '@/components/shared/button';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { useRouter } from 'next/router';
import { useSingleFurniture } from '@/api/furniture/singleFurniture';
import {ColorPicker} from '@/components/shared/colorPicker';
import { Cards } from './helper';
import { useState } from 'react';
import  Price  from '@/components/shared/price';

 const benefits = [
        {
            id: 1,
            name:'No-Risk Money Back Guarantee!',
        },
        {
            id: 2,
            name:'No Hassle Refunds',
        },
        {
            id: 3,
            name:'Secure Payments',
        },
    ]

const SingleProducts = () => {
     const route = useRouter()
     const { data } = useSingleFurniture(route.query.id as string)
     const [image, setImage] = useState(data.image[0])
     
    return (
        <div className='flex justify-between px-24 py-14'>
            <Image
             src={image}
             alt="product"
             className='object-cover rounded-lg'
             width="650"
             height="600"
             />
            <div className='flex flex-col gap-4 w-[45%]'>
                <div>breadCrumbs</div>
                <div className='text-base  text-gray'>test</div>
                <div className='text-4xl'>{data.title}</div>
                <div className='flex gap-2 items-end text-2xl'>
                    <div className='text-gold'>
                    <Price 
                        minPrice={data.minPrice}
                        maxPrice={data.maxPrice}
                        image={data.image}
                        currentImage={image}
                    />
                    </div>
                    <div className='text-base text-gray'>& Free Shipping</div>
                </div>
                <div className='text-gray'>{data.description}</div>
                    <ColorPicker 
                      image={data.image}
                      correctImage={image}
                      setImages={setImage}
                    />
                <div className='flex gap-4 border-y-2 border-darkGray py-6'>
                    <div className='flex items-center rounded border-2 gap-6 px-6'>
                      <div className='flex items-center justify-center border-r-2 pr-6 cursor-pointer text-xl'>-</div>
                      <div className='flex items-center justify-center'>0</div>
                      <div className='flex items-center justify-center border-l-2 pl-6 cursor-pointer text-xl'>+</div>
                    </div>  
                    <Button>Add To Cart</Button>
                </div>

                <div className='flex flex-col gap-2 border-b-2 border-darkGray py-6'>
                   <div className='text-gray text-lg'>Guaranteed Safe Checkout</div>
                   <div className='flex gap-2 justify-center py-4 '>
                    {Cards.map(({id, icon})=> (
                        <div className='rounded-2xl overflow-hidden' key={id}>
                         {icon}
                        </div>
                    ))}
                   </div>
                </div>

                <div>
                    <div className='pb-4 text-lg'>Free shipping on orders over $50!</div>
                    {benefits.map((item)=> (
                      <div key={item.id} className='flex gap-2 text-gray'>
                        <IoCheckmarkDoneCircle  className='text-textHv text-2xl'/>
                        <div className=''>{item.name}</div>
                      </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SingleProducts;