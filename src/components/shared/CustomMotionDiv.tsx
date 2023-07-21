import React from 'react';
import {easeInOut, motion} from 'framer-motion';

interface Props {
    children: React.ReactNode;
    className?: string;
}

const CustomMotionDiv = ({children, className, ...props}:Props) => {
    return (
        <motion.div
        className={className}
        {...props}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0 , opacity: 1}}
        transition={{
           duration: 0.5,
           easeInOut,
        }}>
            {children}
        </motion.div>
    );
};

export default CustomMotionDiv;