import { ACTION_TYPE } from "./ActionType";

const initialState={
    cartItems:Array.isArray(JSON.parse(localStorage.getItem('cartItems')))?
     JSON.parse(localStorage.getItem('cartItems')): [],
};

export const productReducerFunction=(state=initialState,action)=>{
    switch(action.type){

        case ACTION_TYPE.ADD_TO_CART:
            const updatedCartItems=[...state.cartItems,action.payload];
            localStorage.setItem('cartItems',JSON.stringify(updatedCartItems));
            return {...state,cartItems:updatedCartItems};

        case ACTION_TYPE.REMOVE_FROM_CART:
            const filteredCartItems=state.cartItems.filter((item)=>item.id!==action.payload);
            localStorage.setItem('cartItems',JSON.stringify(filteredCartItems))
            return {...state,cartItems:filteredCartItems};
        
        default :
            return state;        
    }
};