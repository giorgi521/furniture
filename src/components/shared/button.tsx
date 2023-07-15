import { ButtonBaseProps } from '@mui/material';
import React from 'react';

interface Props {
    children: React.ReactNode;
    type?: ButtonBaseProps['type'];
}

const Button  = ({children, type ,...props}:Props) => {
    return (
        <button
         type={type || 'button'}
        {...props}
         className="
        rounded border-2 w-36 h-9 flex items-center justify-center gap-2 overflow-hidden
        cursor-pointer relative before:content-[''] before:absolute before:w-full before:h-full 
        before:bg-textHv before:top-0 before:left-0  before:z-[-1] before:translate-x-[-100%]
        hover:before:translate-x-[0] before:transition-all before:duration-500 before:ease-in-out">
           {children}
        </button>
    );
};

export default Button;