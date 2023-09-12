import thunk from "redux-thunk";
import reducers from "./reducers/index";
import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage: storage,
    whiteList: ['savedProducts, cartProducts']
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
    persistedReducer,
    applyMiddleware(thunk)
);

export const persistor = persistStore(store);
