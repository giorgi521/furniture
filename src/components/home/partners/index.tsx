import React from 'react';
import {partnersImages} from '@/components/home/partners/helper';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';


const Partners = () => {
    return (
        <Swiper
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
            {partnersImages.map(({id,src}) => (
                <SwiperSlide key={id}>
                    <Image src={src} alt="image" className='w-48 m-h-20 min-w-initial'/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Partners;