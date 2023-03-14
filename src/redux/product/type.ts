export type product = {
    id: string;
    title: string;
    image: string;
    price: string;
    type: string;
};
export interface ProductsSliceState {
    products: product[] | null;
    status: "loading" | "success" | "error";
    typeActive: typeActive;
}

export type typeActive = string;
