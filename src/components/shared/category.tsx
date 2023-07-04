import React from 'react';
import Image from 'next/image';

interface Props {
    title: string;
    children: React.ReactNode;
}

const Categorys = ({title, children}:Props) => {
    return (
        <div className='mt-24 pb-24 flex flex-col items-center gap-2'>
        <div className='text-xs'>Shop by category</div>
        <div className='text-4xl'>{title}</div>
        <div className='w-32 h-[1px] bg-textHv'/>
       {children}
    </div>
    );
};

export default Categorys;