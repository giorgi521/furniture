import React from 'react';
import backgroundImage from 'public/assets/img/background.jpg';
import Image from 'next/image';

const Founder = () => {
    console.log(backgroundImage)
    return (
        <div className='px-24 flex items-center h-[600px] bg-darkGray border-b-[1px] border-gray'>
            <div className='w-[40%] flex flex-col gap-4'>
              <div className='text-4xl'>About the founder</div>
              <div className='text-gray'>Proin nec ante eu sem luctus bibendum.
                Sed ut fringilla dolor. Morbi suscipit a
                nunc eu finibus. Nam rutrum mattis velit
                eget volutpat. Fusce egestas mi urna, id pulvinar
                ipsum dictum eget. Mauris in dolor velit. Vestibulum finibus
                felis non massa commodo molestie at id justo. Quisque sollicitudin elit sit amet facilisis euismod.
                 Fusce at arcu sed libero lacinia dignissim id bibendum metus.
                Nam rutrum mattis velit eget volutpat. Fusce egestas mi urna, id pulvinar ipsum dictum eget.
                </div>
            </div>
            <Image src={backgroundImage} alt="founder" className='w-[570px] h-[670px] object-cover absolute right-48 translate-y-[-100px]'/>
        </div>
    );
};

export default Founder;