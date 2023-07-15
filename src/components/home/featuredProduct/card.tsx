// disable-eslint
import React,{useState} from 'react';
import ColorPicker from '@/components/shared/colorPicker';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import {FutureProductsType} from '@/api/futureProduct';
import Price from '@/components/shared/price';
import { useRouter } from 'next/router';
import {CardIcons} from '@/components/home/featuredProduct/helper';

interface Props {
  item:FutureProductsType[0]
}


const Card = ({item}:Props) => {
  const router = useRouter();
  const {
    id,
    minPrice,
    maxPrice,
    image,
    title,
  }= item;

   const [correctImage, setCorrectImage] = useState<string>(image[0]);

   

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [popperId, setPopperId] = useState<number | null>(null);

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

    return (
        <div
         onMouseOver={()=>setShowMore(true)}
         onMouseLeave={()=>setShowMore(false)}
         className='w-[433px] h-[600px] p-4 flex flex-col justify-between items-center
          overflow-hidden bg-darkGray relative rounded-md'
         >
            <div className="flex justify-between w-full">
                <div className='text-sm rounded-xl border-[1px] border-white drop-shadow-lg
                 p-2 h-8 flex items-center justify-center bg-white'>sale!</div>
              <div className={`flex flex-col ${showMore ? 'opacity-1' : 'opacity-0'} gap-4
               items-center justify-center transition-all duration-700`}>
                  {CardIcons.map(({id,icon})=>(
                    <div
                      key={id}
                      className='p-2 rounded-full bg-white drop-shadow-lg cursor-pointer'
                      onMouseEnter={(event)=>{handlePopoverOpen(event,id);}}
                      onMouseLeave={handlePopoverClose}
                      onClick={HandleFurnitureRounte}
                      >
                       {icon}
                    </div>
                    
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
              src={correctImage}
              alt="logo"
              width="250"
              height="300"
              className={`${showMore ? 'scale-125' : 'scale-1'} transition-all duration-700 object-cover`}
              
            />
            <div className='flex flex-col items-center'>
                <div className="text-2xl">{title}</div>
                <div className='text-base text-gray'>
                <Price 
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  image={image}
                  currentImage={correctImage}
                />
                </div>
                <div className='flex gap-2'>
                  <ColorPicker
                    image={image}
                    correctImage={correctImage}
                    setImages={setCorrectImage} 
                  />  
                </div>
            </div>
            </div>
    );
};

export default Card;