import React from 'react';
import backgroundImage from 'public/assets/img/background.jpg';

const Animation = () => {
    return (
        <div
         className='h-[700px] w-full grid place-items-center bg-center bg-no-repeat bg-cover bg-fixed'
         style={{
            backgroundImage: `url(${backgroundImage.src})`,
        }}>
            <div className='w-[500px] text-4xl text-center'>
              Simplicity carried to an extreme becomes elegance 
            </div>
        </div>
    );
};

export default Animation;