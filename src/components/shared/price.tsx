import React from 'react';

interface Props {
    minPrice:number,
    maxPrice:number,
    image:string[],
    currentImage:string
}

const furniturePriceEnum = {
    min:15,
    max:30,
    premium:50
};

const Price = ({minPrice,maxPrice,image,currentImage}:Props) => {
    switch(currentImage){
        case image[1]:
            return <div>${minPrice+furniturePriceEnum.min} - ${maxPrice+furniturePriceEnum.max}</div>;
        case image[2]:
            return <div>${minPrice+furniturePriceEnum.min} - ${maxPrice+furniturePriceEnum.premium}</div>;
        default:
            return <div>${minPrice} - ${maxPrice}</div>;
    }
};

export default Price;