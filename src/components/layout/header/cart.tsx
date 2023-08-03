import { useCart } from '@/components/helper/context';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import Image from 'next/image';
import * as React from 'react';
import { CiSquareRemove } from 'react-icons/ci';
import { TYPE } from '@/components/helper/context/type';
import clsx from 'clsx';
import { Button } from '@/components/ui/button';
import useGetTotalCartValue from '@/components/helper/getTotalCartPrice';
import { useRouter } from 'next/router';
import { SheetClose } from '@/components/ui/sheet';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    quantity?: number;
}

const Box = ({children,quantity,...props}:Props) => {
    return (
        <div
         className={clsx`rounded-md border-2 border-darkGray px-2 py-[5px]  ${quantity === 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
         {...props}
         >
           {children}
        </div>
    )
}



const SheedDesc = () => {
    const Router = useRouter();
    const {state:{cart}, dispatch} = useCart();
    const {totalPrice} = useGetTotalCartValue();

    const RemoveItemHandler = (id:string) => {
        dispatch({
            type: TYPE.REMOVE_FROM_CART,
            payload:{
                id,
            }
        })
    }

    return (
        <div className='flex flex-col gap-6 items-center py-4 justify-between h-full'>
          <div className='h-[400px] w-full overflow-auto '>
            {cart.map(({id, title, image, price, quantity})=> (
            <div key={id} className='flex justify-between items-start w-full border-b-2 py-4 border-darkGray'>
             <div className='w-10 h-10 md:w-16 md:h-16 rounded-md relative bg-darkGray flex items-center justify-center overflow-hidden'>   
              <Image src={image} alt={title} width={100} height={100} />
            </div>
            <div className='flex flex-col gap-2'>
                <div>product title</div>
                <div className='flex gap-2 items-center'>
                <Box
                 quantity={quantity}
                 onClick={()=> {
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
                     className={clsx`text-base  ${quantity === 0 && 'fill-darkGray'}`}
                   />
                </Box>
                <div className='w-6 text-center'>{quantity}</div>
                <Box
                    onClick={()=> {
                        dispatch({
                            type: TYPE.INCREASE_QUANTITY,
                            payload: {
                                id,
                            }
                        })
                    }}
                >
                   <AiOutlinePlus 
                    className='text-base'
                   />
                </Box>
                </div>
            </div>
            <div className='flex flex-col gap-2 w-12 items-end'>
               <CiSquareRemove 
                onClick={()=>RemoveItemHandler(id)}
                className='text-4xl cursor-pointer fill-gray hover:fill-black'
               />
               <div>{price * quantity}$</div>
            </div>
            </div>
            ))}
        </div>
        <div className='flex flex-col gap-2 w-full'>
            <div className='flex justify-between items-center border-darkGray border-y-2 p-4 mb-4'>
                <div>subtotal</div>
                <div>{totalPrice}$</div>
            </div>
            <SheetClose asChild>
            <Button
            type='submit'
            onClick={()=> {
                Router.push('/cart')
            }}
            >VIEW CART</Button>
            </SheetClose>
            <SheetClose asChild>
              <Button>CHECKOUT</Button>
            </SheetClose>
          </div>
        </div>
    );
};

export default SheedDesc;