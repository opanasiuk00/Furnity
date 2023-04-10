import { CartItemType, CartSliceState } from "./type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const calcTotalPrice = (items: CartItemType[]) => {
    return items.reduce(
        (sum, obj) => Number(obj.price.replace(/\s/g, "")) * obj.count + sum,
        0
    );
};

const getCartFromLS = () => {
    const data = localStorage.getItem("cart-furnity");
    const items = data ? JSON.parse(data) : [];
    const totalPrice = calcTotalPrice(items);
    const totalCount = items.reduce(
        (sum: number, item: { count: number }) => sum + item.count,
        0
    );
    return {
        cartItems: items as CartItemType[],
        totalPrice,
        cartLength: totalCount || 0,
    };
};

const initialState: CartSliceState = getCartFromLS();

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItemType>) {
            const findItem = state.cartItems.find(
                (obj) => obj.id === action.payload.id
            );
            if (findItem) {
                findItem.count++;
            } else {
                state.cartItems.push({
                    ...action.payload,
                });
            }
            state.cartLength++;

            state.totalPrice = calcTotalPrice(state.cartItems);
        },
        minusCount(state, action: PayloadAction<string>) {
            const findItem = state.cartItems.find(
                (obj) => obj.id === action.payload
            );
            if (findItem) {
                findItem.count--;
                state.cartLength--;
            }
            state.totalPrice = calcTotalPrice(state.cartItems);
        },
        removeItem(state, action: PayloadAction<string>) {
            state.cartItems = state.cartItems.filter(
                (obj) => obj.id !== action.payload
            );
            state.cartLength = state.cartItems.reduce(
                (prev, curr) => prev + curr.count,
                0
            );
            state.totalPrice = calcTotalPrice(state.cartItems);
        },
    },
});

export const { addItem, minusCount, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
