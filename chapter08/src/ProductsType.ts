import { IProduct } from "./ProductsData";

export enum ProductsActionTypes {
    GETALL = "PRODUCTS/GETALL",
    LOEADING = "PRODUCTS/LOADING"
}

export interface IProductsGetAllAction {
    type: ProductsActionTypes.GETALL,
    products: IProduct[]
}

export interface IProductsLoadingAction {
    type: ProductsActionTypes.LOEADING
}

export interface IProdcutsState {
    readonly products: IProduct[];
    readonly productsLoading: boolean;
}

export type ProductsActions =
    | IProductsGetAllAction
    | IProductsLoadingAction