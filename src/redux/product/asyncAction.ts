import { createAsyncThunk } from "@reduxjs/toolkit";
import { product, typeActive } from "./type";

export const fetchPropducts = createAsyncThunk<product[], typeActive>(
    "propduct/fetchPropductsStatus",
    async (typeActive) => {
        const res = await fetch(
            `https://63d68268e60d57436979fb4f.mockapi.io/goods?type=${typeActive}`
        );
        return await res.json();
    }
);
