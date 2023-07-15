import Image from 'public/assets/img/background-image.jpeg';
import {FaOpencart} from 'react-icons/fa';
import {LiaEyeSolid} from 'react-icons/lia';
export const FUTUREPRODUCS =[ 
{
    id: 1,
    src: Image,
},
{
    id: 2,
    src: Image,
},
{
    src: Image,
    id: 3,
},
{
    id: 4,
    src: Image,
},
];

export const CardIcons = [
    {
       id:1,
       icon: <FaOpencart className='w-4 h-4'/>,
       route: '/product',
       poper:'Select Option'
    },
    {
       id:2,
       icon: <LiaEyeSolid className="w-4 h-4"/>,
       route: '/product',
       poper:'Quick View'
    }
];