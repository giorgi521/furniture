import React from 'react';
import Categorys from '@/components/shared/category';
import Card from './card';

const FutureProducts = () => {
    return (
    <Categorys  
        title='Future Product'
    >   
    <div className="flex flex-wrap gap-4 item-center justify-center">
     {[1,2,3,4].map(()=>(
        <Card />
     ))}
     </div>
    </Categorys>
    );
};

export default FutureProducts;