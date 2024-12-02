import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/reducers/rootReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga/watcher/Products";

const sagaMiddleware=createSagaMiddleware()
const store=configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
})

sagaMiddleware.run(rootSaga)
export default store;
