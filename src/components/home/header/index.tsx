import React from 'react';
import Button from '@/components/shared/button';
import Image from 'next/image';

const Header = () => {
    return (
        <div className='h-[100vh] w-full flex items-center p-24'>
            <div className='flex flex-col gap-1'>
                <div className="tracking-[2px] text-xl">Black Friday in july</div>
                <div className="text-[65px]">Up to 50% off</div>
                <div className="text-2xl">Hundreds of styles available</div>
                <Button>shop now</Button>
            </div>
        </div>
    );
};

export default Header;