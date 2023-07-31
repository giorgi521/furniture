import React, { useReducer } from 'react';
import {createContext} from 'react';
import {CartState, Context, ActionType, CartProviderProps, Type} from '@/components/helper/context/type';


export enum DefaultProductEnum {
    total = 0,
    quantity = 0,
}



const CartContext = createContext<Context | undefined>(undefined);

const reducer = (state:CartState, action:ActionType) => {
    switch (action.type) {
        case Type.ADD_TO_CART:
            return {
                ...state,
                cart: action.payload.cart,
            };
        case Type.REMOVE_FROM_CART:
            return {
                ...state,
                cart: action.payload.cart,
            };
        case Type.CLEAR_CART:
            return {
                ...state,
                cart: [],
            };
         case Type.INCREASE_QUANTITY:   
            return {
                ...state,
                quantity: state.quantity + 1
            };
        case Type.DECREASE_QUANTITY:   
            return {
                ...state,
                quantity: state.quantity - 1
            };
        default:
            return state;

        }
}


const CartProvider = ({children}:CartProviderProps) => {
    const initialState = {
        cart: [],
        total: DefaultProductEnum['total'],
        quantity: DefaultProductEnum['quantity']
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = {
      state,
      dispatch
    }


    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};



const useCart = ()=> {
    const context = React.useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}

export  {CartProvider,useCart};