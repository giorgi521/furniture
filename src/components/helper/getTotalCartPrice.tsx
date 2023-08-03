import React, { useMemo } from 'react';
import { useCart } from './context';

const useGetTotalCartValue = () => {
    const {state:{cart}} = useCart();

    return useMemo(()=>({
           totalQuantity: cart.reduce((acc, item) =>acc + item.quantity, 0),
           totalPrice: cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
        }),[cart])
};

export default useGetTotalCartValue