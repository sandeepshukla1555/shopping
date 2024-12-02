import { combineReducers } from "redux";
import { cardReducer } from "./cartReducer";
import { productReducer } from "../../saga/productReducer";
import { productCategories } from "../../saga/categoriesReducer";

const rootReducer = combineReducers({
    cart: cardReducer, // Assign a meaningful key name
    products:productReducer,
    categories:productCategories,

});

export default rootReducer;