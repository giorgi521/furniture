import React from 'react';

export interface CartProviderProps {
    children: React.ReactNode
}

export interface CartItem {
    id: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

export interface CartState {
    cart: CartItem[];
    total: number;
    quantity: number;
}

export interface Context {
    state: CartState;
    dispatch: (action: ActionType) => void;
}


export enum TYPE {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    CLEAR_CART = 'CLEAR_CART',
    INCREASE_QUANTITY = 'INCREASE_QUANTITY',
    DECREASE_QUANTITY = 'DECREASE_QUANTITY',
}

export interface ActionType {
    type: TYPE;
    payload: any;
}