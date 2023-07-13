import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay } from 'swiper/modules';
import { usePartners} from '@/api/allPartners';


const Partners = () => {
    const {data} = usePartners();
    return (
        <Swiper
           className='flex items-center h-[300px]'
             style={{
                padding: '20px 0 30px',
            }}
             modules={[Autoplay,Pagination]}
             spaceBetween={5}
             loop
             freeMode={true}
             slidesOffsetBefore={25}
             slidesOffsetAfter={5}
             pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
             autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
             slidesPerView={6}
         >
            <div className='bg-textHv'>
            {data?.allPartners.map(({title,image}:any) => (
                <SwiperSlide key={title}>
                    <Image src={image.asset.url} alt="image" width="192" height="80"/>
                </SwiperSlide>
            ))}
            </div>
        </Swiper>
    );
};

export default Partners;