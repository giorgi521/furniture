import React, { useMemo, useReducer } from 'react';
import {createContext,useContext} from 'react';
import {CartState, Context, ActionType, CartProviderProps, TYPE, CartItem} from '@/components/helper/context/type';


export enum INITIAL_STATE {
    total = 0,
    quantity = 0,
}

export enum QUANTITY_STEPS {
    INCREASE = 1,
    DECREASE = 1,
}



const CartContext = createContext<Context | undefined>(undefined);

const reducer = (state:CartState, action:ActionType) => {
    switch (action.type) {
        case TYPE.ADD_TO_CART:
            return {
                ...state,
                cart: [
                    ...state.cart,
                    action.payload.cart
                ],
            };
        case TYPE.REMOVE_FROM_CART:
            return {
                ...state,
                cart: [
                    ...state.cart.filter((item) => item.id !== action.payload.id)
                ],
            };
        case TYPE.CLEAR_CART:
            return {
                ...state,
                cart: [],
            };
         case TYPE.INCREASE_QUANTITY:   
            return {
                ...state,
                cart: [
                    ...state.cart.map((item) => {
                        if (item.id === action.payload.id) {
                            return {
                                ...item,
                                quantity: item.quantity + QUANTITY_STEPS.INCREASE
                            }
                        }
                        return item;
                    }),
                ],
            };
        case TYPE.DECREASE_QUANTITY:   
            return {
                ...state,
                cart: [
                    ...state.cart.map((item) => {
                        if (item.id === action.payload.id) {
                            return {
                                ...item,
                                quantity: item.quantity - QUANTITY_STEPS.DECREASE
                            }
                        }
                        return item;
                    }),
                ],
            };
        default:
            return state;

        }
}


const CartProvider = ({children}:CartProviderProps) => {
    const initialState = {
        cart: [],
        total: INITIAL_STATE['total'],
        quantity: INITIAL_STATE['quantity']
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state)

    const value = useMemo(() => {
        return {
            state,
            dispatch
        }
    }, [state, dispatch])


    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};



const useCart = ()=> {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}

export  {CartProvider,useCart};