import { useCart } from '@/components/helper/context';
import { TYPE } from '@/components/helper/context/type';
import Layout from '@/components/layout';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';
import {ReactElement, useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const titles = [
    'product',
    'price',
    'quantity',
    'subTotal'
]

const TOTAL = [
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
    const {state:{cart,total}, dispatch} = useCart();
    const [coupon, setCoupon] = useState(false)

    return (
        <div className='md:px-24 py-12'>
            <div className='text-4xl mb-12'>Cart</div>
            <div className='flex flex-col justify-between border-2 border-darkgray rounded-md px-4 md:px-6 py-10 md:flex-row'>
              <div className='md:w-[70%] rounded-t-md overflow-hidden border-r-2 border-darkGray'>
                <div className='flex justify-between bg-darkGray p-4 mb-6'>
                {titles.map((title,i) => (
                    <div key={i} className='text-md text-gray text-end'>{title}</div>
                ))}
                </div>
                <div className='flex flex-col gap-4'>
                {cart && cart.map(({id, price, quantity,title,image}) => (
                  <div key={id} className='flex justify-between items-center border-b-[1px] border-darkgray py-2'>
                    <div className='flex items-center gap-2'>
                    <div className='w-10 h-10 md:w-14 md:h-14 rounded-md relative bg-darkGray flex items-center justify-center'>
                        {""}
                    </div>
                    <div className='text-xs md:text-base'>{title}</div>
                    </div>
                    <div className='pr-6 md:pr-14 text-xs md:text-base'>{price}$</div>
                    <div className='pr-12 md:pr-12 flex gap-2 items-center'>
                        <div
                         className={clsx(`active:bg-gold ${quantity == 0 && 'cursor-not-allowed active:bg-darkGray'} border-none rounded-md px-2 md:px-4 text-xl py-1 bg-darkGray border-2 cursor-pointer `)}
                         onClick={()=>{
                            if(quantity == 0) return;
                            dispatch({
                                type: TYPE.DECREASE_QUANTITY,
                                payload: {
                                   id,
                                }
                            })
                         }}
                         >
                         <AiOutlineMinus 
                         fill={quantity == 0 ? 'gray' : 'black'}
                          className='text-xl'
                         />
                        </div>
                        <div>{quantity}</div>
                        <div
                         className='border-none rounded-md px-2 md:px-4 text-xl py-1 bg-darkGray border-2 cursor-pointer active:bg-gold'
                         onClick={()=>{
                            dispatch({
                                type: TYPE.INCREASE_QUANTITY,
                                payload: {
                                   id,
                                }})}}
                         >
                          <AiOutlinePlus
                          className='text-xl'
                        />
                        </div>
                    </div>
                    <div className='pr-6 md:pr-12 text-xs md:text-base'>{price * quantity}$</div>
                  </div>
                ))}
                </div>
              </div>
              <div className='mt-4 md:mt-0 md:w-[25%] h-[380px] rounded-md overflow-hidden p-4 bg-darkGray flex flex-col justify-between'>
               <div className='text-md text-gray rounded-md bg-white p-2 mb-6'>Cart totals</div>
               <div className='flex flex-col gap-6'>
                {TOTAL.map(({title, value},i)=> (
                <div key={i} className='flex justify-between py-2 border-b-[1px] border-darkgray'>
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