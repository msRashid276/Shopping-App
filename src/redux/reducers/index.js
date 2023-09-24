import { combineReducers } from "redux";
import { productReducer,productSelecterReducer } from "./productReducer";


const reducers = combineReducers({
    allProducts:productReducer,
    product:productSelecterReducer,
})

export default reducers