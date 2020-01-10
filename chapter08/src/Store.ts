import { applyMiddleware, combineReducers, createStore, Store } from "redux";

import thunk from "redux-thunk";

import { productsReducer } from "./ProductReducer";
import { basketReducer } from "./BasketReducer";
import { IProductsState } from "./ProductsType";
import { IBasketState } from "./BasketTypes";

export interface IApplicationState {
    products: IProductsState;
    basket: IBasketState;
}

const rootReducer = combineReducers<IApplicationState>({
    products: productsReducer,
    basket: basketReducer
});

export default function configureStore(): Store<IApplicationState> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
}