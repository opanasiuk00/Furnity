import { createSlice } from "@reduxjs/toolkit";
import { fetchReviews } from "./asyncAction";
import { reviewsType } from "./type";

const initialState: reviewsType = {
    reviews: null,
    slideActive: 0,
    amountSlide: null,
    status: "loading",
};

const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {
        changeSlide(state, { payload }) {
            state.slideActive = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchReviews.pending, (state) => {
            state.status = "loading";
            state.reviews = null;
            state.slideActive = 0;
            state.amountSlide = null;
        });
        builder.addCase(fetchReviews.fulfilled, (state, { payload }) => {
            state.status = "success";
            state.reviews = payload;
            state.slideActive = 0;
            state.amountSlide = payload.length;
        });
        builder.addCase(fetchReviews.rejected, (state) => {
            state.status = "error";
            state.reviews = null;
            state.slideActive = 0;
            state.amountSlide = null;
        });
    },
});

export const { changeSlide } = reviewsSlice.actions;

export default reviewsSlice.reducer;
