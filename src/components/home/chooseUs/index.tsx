import React from 'react';
import Categorys from '@/components/shared/category';
import {Data} from '@/components/home/chooseUs/helper';
import Image from 'next/image';

const ChooseUs = () => {
    return (
        <Categorys  
            title='Why choose us'
        >   
         <div className='grid grid-cols-2 xl:flex gap-8 pt-8'>
            {Data.map(({id,description,icon,title}) => (
                <div key={id} className=" sm:w-[265px] flex flex-col items-center">
                      <Image  alt={title} src={icon} width="30" height="30"/>
                      <div className="sm:text-2xl mt-4 mb-2">{title}</div>
                      <div className="text-xs text-center md:text-sm text-gray sm:text-start">{description}</div>
                </div>
            ))}
        </div>
        </Categorys>
    );
};

export default ChooseUs;