import cartSlice from "./cart/slice";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import productSlice from "./product/slice";
import reviewsSlice from "./reviews/slice";

export const store = configureStore({
    reducer: {
        products: productSlice,
        cart: cartSlice,
        reviews: reviewsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export const productsReducer = (state: RootState) => state.products;
export const selectCartData = (state: RootState) => state.cart;
export const selectReviewsData = (state: RootState) => state.reviews;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
