import { combineReducers } from "redux";
import { cartProductsReducer, categoryIdReducer, countProductsReducer, savedProductsReducer } from "./planReducer";

const reducers = combineReducers({
    selectedId: categoryIdReducer,
    cartProducts: cartProductsReducer,
    savedProducts: savedProductsReducer,
    countProducts: countProductsReducer,
});

export default reducers;

// bular data ni export-import qilish uchun kerak