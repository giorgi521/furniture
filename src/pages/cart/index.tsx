import Layout from '@/components/layout';
import { Button } from '@/components/ui/button';
import {ReactElement, useState} from 'react';

const titles = [
    'product',
    'price',
    'quantity',
    'subTotal'
]

const data = [
    {
        id:1,
        image:'image',
        product:'product 1',
        price: 100,

        quantity: 1,
        subTotal: 100
    },
    {
        id:1,
        image:'image',
        product:'product 1',
        price: 100,

        quantity: 1,
        subTotal: 100
    },
    {
        id:2,
        image:'image',
        product:'product 1',
        price: 100,

        quantity: 1,
        subTotal: 100
    },
    {
        id:3,
        image:'image',
        product:'product 1',
        price: 100,

        quantity: 1,
        subTotal: 100
    },
]


const total = [
     {
        title: 'subtotal',
        value: 100
    },
    {
        title: 'total',
        value: 100
     }
]


const Cart = () => {
    const [coupon, setCoupon] = useState(false)
    
    return (
        <div className='px-24 py-12'>
            <div className='text-4xl mb-12'>Cart</div>
            <div className='flex justify-between border-2 border-darkgray rounded-md px-6 py-10'>
              <div className='w-[70%] rounded-t-md overflow-hidden border-r-2 border-darkGray'>
                <div className='flex justify-between bg-darkGray p-4 mb-6'>
                {titles.map((title,i) => (
                    <div key={i} className='text-md text-gray text-end'>{title}</div>
                ))}
                </div>
                <div className='flex flex-col gap-4'>
                {data.map(({id, product, price, quantity, subTotal}) => (
                  <div key={id} className='flex justify-between items-center border-b-[1px] border-darkgray py-2'>
                    <div className='flex items-center gap-2'>
                    <div className='w-14 h-14 rounded-md relative bg-darkGray flex items-center justify-center'>
                        {""}
                    </div>
                    <div>{product}</div>
                    </div>
                    <div className='pr-14'>{price}</div>
                    <div className='pr-12 flex gap-2 items-center'>
                        <div className='border-none rounded-md px-4 text-xl bg-darkGray border-2 cursor-pointer active:bg-gold'>-</div>
                        <div>{quantity}</div>
                        <div className='border-none rounded-md px-4 text-xl bg-darkGray border-2 cursor-pointer active:bg-gold'>+</div>
                    </div>
                    <div className='pr-12'>{subTotal}</div>
                  </div>
                ))}
                </div>
              </div>
              <div className='w-[25%] h-[380px] rounded-md overflow-hidden p-4 bg-darkGray flex flex-col justify-between'>
               <div className='text-md text-gray rounded-md bg-white p-2 mb-6'>Cart totals</div>
               <div className='flex flex-col gap-6'>
                {total.map(({title, value},i)=> (
                <div key="i" className='flex justify-between py-2 border-b-[1px] border-darkgray'>
                    <div>{title}</div>
                    <div>{value}$</div>
                </div>))}
               </div>
               <div>
               <div
                className='text-md mt-12 mb-4 text-gray cursor-pointer'
                onClick={() => setCoupon(!coupon)}
                > 
                have a coupon?
                </div>
              {coupon && <div className='flex'>
                     <input
                    type="text"
                    placeholder='coupon code' 
                    className='border-2 border-darkgray rounded-md h-10 p-2 w-full'/>
                     <Button className='h-10 z-10'>Submit</Button>
               </div>}
               <Button className='z-10 my-4'>procced to checkout</Button>
               </div>   
              </div>
            </div>
        </div>
    );
};

export default Cart;

Cart.getLayout = (page: ReactElement) => <Layout>{page}</Layout>