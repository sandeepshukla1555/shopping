import { SET_CATEGORY_LIST } from "../constant";

export const productCategories=(state=[], action)=>{
    switch(action.type)
    {
        case SET_CATEGORY_LIST:
            return action;
        default:
            return state;
    }
}