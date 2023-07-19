import React from 'react';
import backgroundImage from 'public/assets/img/background-image.jpeg';
import {Button} from '@/components/ui/button';

const Header = () => {
    return (
        <div className='h-[90vh] w-full flex items-center justify-center p-12 bg-fixed bg-cover bg-no-repeat bg-center top-0 md:justify-start md:p-24'
        style={{
            backgroundImage: `url(${backgroundImage.src})`,
        }}
        >
            <div className='flex flex-col gap-1 items-center md:items-start text-center md:text-initial'>
                <div className="tracking-[2px] md:text-xl">Black Friday in july</div>
                <div className="text-6xl my-4">Up to 50% off</div>
                <div className="text-2xl mb-4">Hundreds of styles available</div>
                <Button className='w-40 md:w-[initial]'>shop now</Button>
            </div>
        </div>
    );
};

export default Header;