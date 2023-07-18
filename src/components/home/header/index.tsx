import React from 'react';
import backgroundImage from 'public/assets/img/background.jpg';
import {Button} from '@/components/ui/button';

const Header = () => {
    return (
        <div className='h-[90vh] w-full flex items-center p-24 bg-fixed bg-cover bg-no-repeat top-0'
        style={{
            backgroundImage: `url(${backgroundImage.src})`,
        }}
        >
            <div className='flex flex-col gap-1 items-start'>
                <div className="tracking-[2px] text-xl">Black Friday in july</div>
                <div className="text-6xl mt-2 mb-4">Up to 50% off</div>
                <div className="text-2xl mb-4">Hundreds of styles available</div>
                <Button>shop now</Button>
            </div>
        </div>
    );
};

export default Header;