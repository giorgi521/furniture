import React from 'react';

interface Props {
    title: string;
    children: React.ReactNode;
    subTitle?: string;
}

const Categorys = ({subTitle='Shop by category' ,title, children}:Props) => {
    return (
        <div className='mt-24 pb-24 flex flex-col items-center gap-2'>
        <div className='text-xs'>{subTitle}</div>
        <div className='text-4xl'>{title}</div>
        <div
         className='w-32 h-[1px] bg-textHv'
         />
       {children}
    </div>
    );
};

export default Categorys;