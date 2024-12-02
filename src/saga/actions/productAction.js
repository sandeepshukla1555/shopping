import { ALL_PRODUCTS, CATEGORY_LIST } from "../../constant";

export function ProductAction(){
    return {
        type:ALL_PRODUCTS,
        data:'Product Data'
    }
}

export function CategoriesAction(){
    return {
        type:CATEGORY_LIST,
        data:'Product Data'
    }
}