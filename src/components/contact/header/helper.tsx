import { FcPhone } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import {IoLocation} from 'react-icons/io5';

export const Contact = [
    {
        id:2,
        icon: <FcPhone />,
        title:"Phone",
        desc: '598 28 25 75'
    },
    {
        id:3,
        icon: <MdEmail className='text-gold'/>,
        title:"Email",
        desc: 'gogoladzeg321@gmail.com'
    },
    {
        id:4,
        icon: <IoLocation className='text-textHv'/>,
        title:"Address",
        desc: 'Tbilisi, P.qavtaradze 34'
    }
]