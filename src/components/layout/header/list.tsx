import React from 'react';
import Link from 'next/link';

interface List {
    id: number;
    link: string;
    name: string;
}

interface Props {
    Menu: List[];
}

const List = ({Menu}:Props) => {
        return (
                <div className="flex items-center gap-4">
                    {Menu.map(({id, link, name}) => (
                       <Link key={id} href={link}>
                              <div className='uppercase hover:scale-110 hover:text-textHv transition-all duration-300 cursor-pointer text-xs'>{name}</div>
                       </Link>))}
                </div>
        );
};

export default List;