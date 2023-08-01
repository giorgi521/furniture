/* eslint-disable */
import React,{useEffect, useMemo, useState} from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import {FutureProductsType} from '@/api/futureProduct';
import { useRouter } from 'next/router';
import {CardIcons} from '@/components/home/featuredProduct/helper';
import {RadioGroup, RadioGroupItem, BORDER_OF_RADIO_GROUP_ENUM} from '@/components/ui/radio-group';
import clsx from 'clsx';
import Link from 'next/link';
import { useCart } from '@/components/helper/context';
import { TYPE } from '@/components/helper/context/type';

export enum Currency {
  GEL = '₾',
  USD = '$',
  EUR = '€',
}


interface PriceProps {
  minPrice:number,
  maxPrice:number
}


interface Props {
  item:FutureProductsType[0]
}


export const Price = ({minPrice,maxPrice}:PriceProps) => {
  return <div className='flex gap-4'>
     <div>{minPrice} {Currency.USD}</div>
     {"-"}
     <div>{maxPrice} {Currency.USD}</div>
  </div>
}

    


const Card = ({item:{
  id,
  minPrice,
  maxPrice,
  image,
  title,
}}:Props) => {
  const router = useRouter();
  const {state, dispatch} = useCart();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [popperId, setPopperId] = useState<number | null>(null);

  const [choosenImage, setChoosenImage] = useState<string>(image[0]);


  const addColorInImage = useMemo(()=>{
    return image.map((item,i)=> {
      return {
        id:i,
        item,
        color:BORDER_OF_RADIO_GROUP_ENUM[i]
      }
  })
  },[image])

  useEffect(()=> {
    setChoosenImage(image[0]);
  },[image])

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>,id:number) => {
    setAnchorEl(event.currentTarget);
    setPopperId(id);
  };

  const popper = CardIcons.find((item)=>item.id === popperId)?.poper;

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setPopperId(null);
  };

   const open = Boolean(anchorEl);

   const HandleFurnitureRounte = ()=> {
      router.push(`/product/${id}`);
   };


   const radioGrounHandle = (value: string) => {
    setChoosenImage(value);
   };

    return (
        <div
         onMouseOver={()=>setShowMore(true)}
         onMouseLeave={()=>setShowMore(false)}
         className='w-[333px] h-[500px] p-4 flex flex-col justify-between items-center
          overflow-hidden bg-darkGray relative rounded-md 2xl:w-[433px] 2xl:h-[600px]'
         >
            <div className="flex justify-between w-full">
                <div className='text-sm rounded-xl border-[1px] border-white drop-shadow-lg
                 p-2 h-8 flex items-center justify-center bg-white'>sale!</div>
              <div className={`flex flex-col ${showMore ? 'opacity-1' : 'md:opacity-0'} gap-4
               items-center justify-center transition-all duration-700 z-[2]`}>
                  {CardIcons.map(({id:i,icon})=>(
                    <Link
                      key={i}
                      className='p-2 rounded-full bg-white drop-shadow-lg cursor-pointer'
                      onMouseEnter={(event)=>{handlePopoverOpen(event,i);}}
                      onMouseLeave={handlePopoverClose}
                      onClick={
                        ()=> {
                          if(i === 1) {
                            dispatch({
                              type: TYPE.ADD_TO_CART,
                              payload: {
                                cart: {
                                  id,
                                  title,
                                  price: minPrice,
                                  quantity: 1,
                                  image: choosenImage
                                }
                              }
                            })
                          }
                        }
                      }
                      href={ i === 1 ? `/cart` :`/product/${id}`}
                      >
                       {icon}
                    </Link>
                    
                  )) }
                  <Popover
                          sx={{
                            pointerEvents: 'none',
                          }}
                          open={open}
                          anchorEl={anchorEl}
                          anchorOrigin={{
                            vertical: 'center',
                            horizontal: 'left',
                          }}
                          transformOrigin={{
                            vertical:"top",
                            horizontal: 'right',
                          }}
                          onClose={handlePopoverClose}
                          disableRestoreFocus
                        >
                          <Typography sx={{ p: 1 }}>{popper}</Typography>
                    </Popover>
              </div>
            </div>
            <Image
              src={choosenImage}
              alt="logo"
              width="250"
              height="300"
              className={`${showMore ? 'scale-125' : 'scale-1'} transition-all duration-700 object-cover`}
              
            />
            <div className='flex flex-col items-center z-[2]'>
                <div className="text-2xl">{title}</div>
                <div className='text-base text-gray'>
                <Price 
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                />
                </div>
                <div className='flex gap-2'>
                <RadioGroup defaultValue={image[0]} onValueChange={radioGrounHandle}>
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

                </div>
            </div>
            </div>
    );
};

export default Card;