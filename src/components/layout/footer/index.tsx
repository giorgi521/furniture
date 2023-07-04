import React from 'react';
import {FOOTERINFO, SOCIALMEDIA} from '@/components/layout/footer/helper';
import Image from 'next/image';
import logo from 'public/assets/img/logo-regular.png';
import InputSubscription from './input';
import Instagram from '@/components/helper/icons/instagram';
const Footer = () => {
    return (
        <div className="flex flex-col bg-darkGray">
        <div className='flex justify-between items-start h-[400px] pt-[50px] px-24'>
            <div className='w-[244px]'>
               <Image src={logo} alt="logo" />
            </div>
            <div className='flex gap-32'>
            {FOOTERINFO.map(({id,title, links}) => (
                  <div key={id} className='flex flex-col gap-[3.2em]'>
                        <h3 className='text-xl'>{title}</h3>
                        <div>
                        {links.map(({id,name, link}) => (
                           <div key={id}>
                                 <a href={link} className='text-gold text-sm'>{name}</a>
                           </div>
                          ))}
                        </div>
                  </div>
            ))}
            <div>
                <div>Subscribe</div>
                <InputSubscription />
            </div>
            </div>
        </div>
        <div className="py-4 px-24 rounded border-t-[1px] border-lightGray flex justify-between">
            <div className="text-sm text-gray">Copyright © 2023 Furniture Shop | Powered by Giorgi gogoladze</div>
            <div className="flex gap-6">
                {SOCIALMEDIA.map(({id, icon, link}) => (
                    <a href={link} key={id}>
                        {icon}
                    </a>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Footer;