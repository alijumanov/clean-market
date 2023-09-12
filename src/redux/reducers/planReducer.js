import { ActionTypes } from "../contants/actionTypes";

const initialState = {
    savedProducts: { products: [] },
    countProducts: { products: [] },
    cartProducts: { products: [] },
};

export const savedProductsReducer = (state = initialState.savedProducts, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_SAVE_PRODUCT:
            return { ...state, products: payload }
        default:
            return state
    }
};

export const cartProductsReducer = (state = initialState.cartProducts, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_CART_PRODUCT:
            return { ...state, products: payload }
        default:
            return state
    }
};

export const countProductsReducer = (state = initialState.countProducts, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_COUNT_PRODUCT:
            return { ...state, products: payload }
        default:
            return state
    }
};

export const categoryIdReducer = (state = 0, { type, payload }) => {
    switch (type) {
        case ActionTypes.CHOOSE_CATEGORY_ID:
            return { ...state, id: payload }
        default:
            return state
    }
};


// bular map qilish uchun kerak