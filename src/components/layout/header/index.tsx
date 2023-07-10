import React from 'react';
import Image from 'next/image'
import logo from 'public/assets/img/logo-regular.png'
import { Menu } from './helper';
import {RightMenu} from '@/components/layout/header/helper';
import List from '@/components/layout/header/list';

const Header = () => {
    return (
        <div className='w-full'>
        <div className='flex flex-row justify-between items-center p-5'>
            <div className='w-[244px]'>
               <Image src={logo} alt="logo" />
            </div>
            <List  Menu={Menu}/>
            <List  Menu={RightMenu}/>
        </div>
        </div>
    );
};

export default Header;