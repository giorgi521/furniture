import React from 'react';
import backgroundImage from 'public/assets/img/background-image.jpeg';
import Image from 'next/image';
import Button from '@/components/shared/button';
import MasterCard from '@/components/helper/icons/masterCard';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import  Maestro  from '@/components/helper/icons/maestro';
import  Discover  from '@/components/helper/icons/discover';
import  Visa  from '@/components/helper/icons/visa';

const Data = {
        id: 1,
        name:"product Name 10",
        subTitle: "Living Room, Office",
        minPrice: '80$',
        maxPrice: '100$',
        image: backgroundImage,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing, elit. Proin vestibulum erat leo, id pulvinar lorem maximus sit amet. orem ipsum dolor sit amet, consectetur adipiscing, elit. Proin vestibulum erat leo, id pulvinar lorem maximus sit amet. orem ipsum dolor sit amet, consectetur adipiscing, elit. Proin vestibulum erat leo, id pulvinar lorem maximus sit amet.",
    }

const colors = [
        {
            id: 1,
            name: 'textHv',
        },
        {
            id: 2,
            name: 'darkGray',
        },
    ]

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

const Cards = [
        {
            id: 1,
            icon: <MasterCard />,
        },
        {
            id: 2,
            icon: <Maestro />,
        },
        {
            id: 3,
            icon: <Discover />,
        },
        {
            id: 4,
            icon: <Visa />,
        },
]

const SingleProducts = () => {

    return (
        <div className='flex justify-between px-24 py-14'>
            <Image src={Data.image} alt="product" className='w-[650px] h-[750px] object-cover rounded-lg'/>
            <div className='flex flex-col gap-4 w-[45%]'>
                <div>breadCrumbs</div>
                <div className='text-base  text-gray'>{Data.subTitle}</div>
                <div className='text-4xl'>{Data.name}</div>
                <div className='flex gap-2 items-end text-2xl'>
                    <div className='text-gold'>{Data.minPrice} - {Data.maxPrice}</div>
                    <div className='text-base text-gray'>& Free Shipping</div>
                </div>
                <div className='text-gray'>{Data.desc}</div>
                <div className='flex gap-4'>
                    {colors.map((item)=> (
                    <div
                     key={item.id}
                     className={`rounded-full bg-${item.name} w-6 h-6 flex
                     cursor-pointer`}
                   />
                    ))}
                </div>
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