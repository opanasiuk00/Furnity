export type product = {
    id: string;
    title: string;
    image: string;
    price: string;
    type: string;
};

export enum Status {
    Loading = "loading",
    Success = "success",
    Error = "error",
}
export interface ProductsSliceState {
    products: product[] | null;
    status: Status;
    typeActive: typeActive;
}

export type typeActive = string;
