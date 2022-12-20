import { productReducer ,selectedProductReducer } from "./productReducer";

import {combineReducers } from "redux";

const reducers = combineReducers({
    product:selectedProductReducer,
    allProducts:productReducer
}
);

export default reducers