export type CartItemType = {
    id: string;
    image: string;
    type: string;
    title: string;
    price: string;
    count: number;
};

export interface CartSliceState {
    cartItems: CartItemType[];
    totalPrice: number;
    cartLength: number;
}
