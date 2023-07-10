import React from 'react';
import Categorys from '@/components/shared/category';
import Image from 'next/image';
import backgroundImage from 'public/assets/img/background-image.jpeg';

const Header = () => {
    return (
        <Categorys
          subTitle='About us'
          title='Our story'
        >
        <div className='flex flex-col items-center justify-between my-12 gap-16'>
         <Image src={backgroundImage} alt="furniture" className="w-[70%] object-cover"/>
         <div className='flex w-[50%]'>
            <div className="flex flex-col gap-4 w-[50%]">
                <div className='text-sm text-gray'>About us</div>
                <div className='text-4xl w-[80%]'>Our team is what we value the most</div>
            </div>
            <div className='flex flex-col gap-2 w-[50%]'>
                 <div className='text-2xl'>With great people, modern and cool products emerge.</div>
                       <div className='text-sm text-gray'>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Sed rhoncus eget enim eget tincidunt.
                        In finibus nisi ex, eu interdum urna euismod sit amet. Morbi 
                        sollicitudin in magna sed tristique. Nulla pharetra sapien eros,
                        sit amet bibendum nibh consectetur quis. Curabitur tortor dolor, 
                        fringilla eu fringilla id, dignissim in urna. Nulla varius dolor ac eros posuere,
                        nec interdum justo condimentum. Phasellus lacinia sit amet tellus at pulvinar.
                        Maecenas faucibus porta quam.
                        Ut in lorem ullamcorper velit facilisis pellentesque.
                        In tincidunt metus eget arcu congue, ac aliquam velit ultricies.
                        Aliquam posuere eu arcu et elementum. Donec pulvinar eget orci et pellentesque.
                        Aenean at ultricies quam. Nunc feugiat sapien quis pharetra tincidunt. Etiam a viverra
                        nulla. Pellentesque consectetur libero est, sed ullamcorper diam convallis ac. Praesent
                        a convallis ante. Suspendisse potenti. Sed sed cursus erat, et auctor metus.
                        </div>
                 </div>
         </div>
         </div>
        </Categorys>
    );
};

export default Header;