import { all, put, takeEvery } from "redux-saga/effects";
import { ALL_PRODUCTS, CATEGORY_LIST, SET_ALL_PRODUCTS, SET_CATEGORY_LIST } from "../../constant";

function* getProducts()
{
    const getFetch=yield fetch('https://fakestoreapi.com/products');
    const data=yield getFetch.json()
    yield put({type:SET_ALL_PRODUCTS, data})
}
function* getCategory()
{
    const getFetch=yield fetch('https://fakestoreapi.com/products/categories');
    const categories=yield getFetch.json()
    yield put({type:SET_CATEGORY_LIST, categories})
}
function* AllProduct(){
    yield takeEvery(ALL_PRODUCTS, getProducts)
}
function* AllCategories(){
    yield takeEvery(CATEGORY_LIST, getCategory)
}

export default function* rootSaga() {
    yield all([AllProduct(), AllCategories()]);
  }