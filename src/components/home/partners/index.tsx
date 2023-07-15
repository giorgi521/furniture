import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination } from 'swiper/modules';
import { usePartners} from '@/api/partners/allPartners';


const Partners = () => {
    const {data} = usePartners();
    return (
        <Swiper
             style={{
                padding: '20px 0 30px',
            }}
            loop
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
             modules={[Autoplay,Pagination]}
             spaceBetween="20"
             scrollbar={{ draggable: true }}
             slidesOffsetBefore={25}
             slidesOffsetAfter={5}
             pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
             slidesPerView={6}
         >
            {data.map(({image},i) => (
                <SwiperSlide key={i}>
                    <div>
                    <Image src={image} alt="image" width="250" height="250"/>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Partners;