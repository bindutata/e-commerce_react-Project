import { ACTION_TYPE } from "./ActionType";

export const addToCart=(product)=>{
    return {type:ACTION_TYPE.ADD_TO_CART,payload:product}
};
export const removeFromCart=(productid)=>{
    return {type:ACTION_TYPE.REMOVE_FROM_CART,payload:productid}
};
