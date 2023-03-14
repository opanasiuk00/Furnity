import { createSlice } from "@reduxjs/toolkit";
import { ProductsSliceState } from "./type";
import { fetchPropducts } from "./asyncAction";

const initialState: ProductsSliceState = {
    products: null,
    typeActive: "Badroom",
    status: "loading",
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        changeMenu(state, { payload }) {
            state.typeActive = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPropducts.pending, (state) => {
            state.status = "loading";
            state.products = null;
        });
        builder.addCase(fetchPropducts.fulfilled, (state, { payload }) => {
            state.status = "success";
            state.products = payload;
        });
        builder.addCase(fetchPropducts.rejected, (state) => {
            state.status = "error";
            state.products = null;
        });
    },
});

export const { changeMenu } = productSlice.actions;

export default productSlice.reducer;
