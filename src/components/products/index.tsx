import React from 'react';
import Image from 'next/image';
import {Button} from '@/components/ui/button';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { useRouter } from 'next/router';
import { useSingleFurniture } from '@/api/furniture/singleFurniture';
import {RadioGroup, RadioGroupItem, BORDER_OF_RADIO_GROUP_ENUM} from '@/components/ui/radio-group';
import { Cards } from './helper';
import {useState, useMemo} from 'react';
import {Price} from '@/components/home/featuredProduct/card';
import clsx from 'clsx';
import {Benefits} from '@/components/products/helper';
import StyledBreadcrumb from '@/components/shared/breadCrumbs';
import { useCart } from '../helper/context';
import {TYPE} from '@/components/helper/context/type';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import {QUANTITY_STEPS} from '@/components/helper/context/index';
  

const SingleProducts = () => {
     const router = useRouter();
     const [quantity, setQuantity] = useState(0);
     const { dispatch} = useCart();
     const route = useRouter();
     const { data:{
            minPrice,
            maxPrice,
            image,
            title,
            description
     } } = useSingleFurniture(route.query.id as string);
     const [choosenImage, setChoosenImage] = useState(image[0]);

     const addColorInImage = useMemo(()=>{
        return image.map((item,i)=> {
          return {
            id:i,
            item,
            color:BORDER_OF_RADIO_GROUP_ENUM[i]
          }
      })
      },[image])

     const radioGrounHandle = (value: string) => {
        setChoosenImage(value);
       };

    return (
        <div className='flex justify-between px-24 py-14'>
            <Image
             src={choosenImage}
             alt="product"
             className='object-cover rounded-lg'
             width="650"
             height="600"
             />
            <div className='flex flex-col gap-4 w-[45%]'>
            <StyledBreadcrumb
              isProduct={true}
             />
                <div className='text-base  text-gray'>test</div>
                <div className='text-4xl'>{title}</div>
                <div className='flex gap-2 items-end text-2xl'>
                    <div className='text-gold'>
                    <Price 
                          minPrice={minPrice}
                          maxPrice={maxPrice}
                />
                    </div>
                    <div className='text-base text-gray'>& Free Shipping</div>
                </div>
                <div className='text-gray'>{description}</div>
                <RadioGroup  defaultValue={image[0]} onValueChange={radioGrounHandle}>
                     {addColorInImage.map(({item,id,color})=> (
                      <RadioGroupItem
                       className={clsx(choosenImage === item && "bg-textHv", color)}
                       checked={choosenImage === item}
                       key={id}
                       value={item}
                       id="option-two" 
                       />
                      ))}
                 </RadioGroup>
                      <div className='flex gap-4 border-y-2 border-darkGray py-6'>
                      <div className='flex items-center rounded border-2 gap-6 px-6'>
                      <div
                       className={clsx(`flex items-center justify-center border-r-2 pr-6 
                        ${quantity == 0 ? 'cursor-not-allowed' : 'cursor-pointer'} text-xl`)}
                        onClick={()=>{
                            if(quantity == 0) return;
                            setQuantity((prev)=>prev - QUANTITY_STEPS.DECREASE)
                        }}
                       >
                        <AiOutlineMinus 
                        className='text-xl'
                        />
                       </div>
                      <div className='flex items-center justify-center w-8'>{quantity}</div>
                      <div
                       className='flex items-center justify-center border-l-2 pl-6 cursor-pointer text-xl'
                        onClick={()=>{
                          setQuantity((prev)=>prev + QUANTITY_STEPS.INCREASE)
                       }}
                      >
                        <AiOutlinePlus 
                        className='text-xl'
                        />
                      </div>
                    </div>  
                    <Button
                     disabled={quantity == 0}
                     onClick={
                        ()=> {
                          dispatch({
                            type: TYPE.ADD_TO_CART,
                            payload: {
                                cart: {
                                    id: route.query.id as string,
                                    title,
                                    image: choosenImage,
                                    price: maxPrice,
                                    quantity: quantity,
                                }
                            }
                        }),
                        router.push('/cart')
                        }
                     }
                    >Add To Cart</Button>
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
                    {Benefits.map((item)=> (
                      <div key={item.id} className='flex gap-2 text-gray items-center'>
                        <IoCheckmarkDoneCircle  className='text-textHv text-2xl'/>
                        <span>{item.name}</span>
                      </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SingleProducts;