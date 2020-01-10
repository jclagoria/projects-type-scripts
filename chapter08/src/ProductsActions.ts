import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import { getProduct as getProductFromApi,  getProducts as getProductsFromAPI } from "./ProductsData";
import { IProductsGetAllAction, IProductsGetSingleAction, IProductsLoadingAction, IProductsState, ProductsActionTypes } from "./ProductsType";
import any = jasmine.any;

const loading: ActionCreator<IProductsLoadingAction> = () => ({
        type: ProductsActionTypes.LOADING
    });

export const getProducts: ActionCreator<ThunkAction<Promise<AnyAction>,
    IProductsState, null, IProductsGetAllAction>> = () => {
    return async (dispach: Dispatch) => {
        dispach(loading());
        const products = await getProductsFromAPI();
        return dispach({
            products,
            type: ProductsActionTypes.GETALL
        });
    };
};

export const getProduct: ActionCreator<ThunkAction<Promise<any>, IProductsState,
    null, IProductsGetSingleAction>> = (id: number) => {
    return async (dispach: Dispatch) => {
        dispach(loading());
        const product = await getProductFromApi(id);
        dispach({
            product,
            type: ProductsActionTypes.GETSINGLE
        });
    };
};