import React from 'react';
import Categorys from '@/components/shared/category';
import {Data} from '@/components/home/chooseUs/helper';
import Image from 'next/image';

const ChooseUs = () => {
    return (
        <Categorys  
            title='Why choose us'
        >   
         <div className='flex gap-8 pt-8'>
            {Data.map(({id,description,icon,title}) => (
                <div key={id} className="w-[265px] flex flex-col items-center">
                      <Image  alt={title} src={icon} width="30" height="30"/>
                      <div className="text-2xl mt-4 mb-2">{title}</div>
                      <div className="text-sm text-gray">{description}</div>
                </div>
            ))}
        </div>
        </Categorys>
    );
};

export default ChooseUs;