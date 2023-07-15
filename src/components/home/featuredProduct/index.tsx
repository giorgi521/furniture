import React from 'react';
import Categorys from '@/components/shared/category';
import Card from './card';
import { useFutureProducts } from '@/api/futureProduct';

const FutureProducts = () => {
    const { data } = useFutureProducts("future product");

    return (
    <Categorys  
        title='Future Product'
    >   
    <div className="flex flex-wrap gap-4 item-center justify-center">
    {data.map((item,i)=>(
        <Card
            item={item}
            key={i}
         />
     ))}
     </div>
    </Categorys>
    );
};

export default FutureProducts;