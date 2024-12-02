import { SET_ALL_PRODUCTS } from "../constant";

export const productReducer=(state=[], action)=>{
    switch(action.type)
    {
        case SET_ALL_PRODUCTS:
            return action;
        default:
            return state;
    }
}