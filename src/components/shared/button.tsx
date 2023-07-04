import React from 'react';

interface Props {
    width?: string;
    height?: string;
    color?: string;
    children: React.ReactNode;
}

const Button = ({width,height, color,children}:Props) => {
    return (
        <div className="
        rounded border-2 w-36 h-9 flex items-center justify-center overflow-hidden
        cursor-pointer relative before:content-[''] before:absolute before:w-full before:h-full 
        before:bg-textHv before:top-0 before:left-0  before:z-[-1] before:translate-x-[-100%]
        hover:before:translate-x-[0] before:transition-all before:duration-500 before:ease-in-out">
           {children}
        </div>
    );
};

export default Button;