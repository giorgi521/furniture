import React from 'react';
import Categorys from '@/components/shared/category';
import Card from './card';
import { useFutureProducts } from '@/api/futureProducts';

const FutureProducts = () => {
    const { data } = useFutureProducts("future product");

    return (
    <Categorys  
        title='Future Product'
    >   
    <div className="flex flex-wrap gap-4 item-center justify-center">
    {data.map((item)=>(
        <Card
            item={item}
            key={item.title}
         />
     ))}
     </div>
    </Categorys>
    );
};

export default FutureProducts;