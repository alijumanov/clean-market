import { ActionTypes } from "../contants/actionTypes"

export const addProductsCart = (item) => {
    return {
        type: ActionTypes.ADD_CART_PRODUCT,
        payload: item,
    }
};

export const addProductsSaved = (item) => {
    return {
        type: ActionTypes.ADD_SAVE_PRODUCT,
        payload: item,
    }
};

export const addProductsCount = (item) => {
    return {
        type: ActionTypes.ADD_COUNT_PRODUCT,
        payload: item,
    }
};

export const selectCategoryId = (item) => {
    return {
        type: ActionTypes.CHOOSE_CATEGORY_ID,
        payload: item,
    }
};

// bular dispatch uchun kerak