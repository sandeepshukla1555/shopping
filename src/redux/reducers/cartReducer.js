import { ADD_TO_CART } from "../../constant";

export const cardReducer=(state=[], action)=>{
    switch(action.type)
    {
        case ADD_TO_CART:
            const cardData=[action.data, ...state]
            console.log("Card data",cardData)
            return cardData;
        default:
            return state;
    }
}