import { ADD_TO_CART } from "../../constant"

export const addCartAction=(data)=>{
    return {
        type:ADD_TO_CART,
        data
    }
}