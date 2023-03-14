import { createAsyncThunk } from "@reduxjs/toolkit";
import { review } from "./type";

export const fetchReviews = createAsyncThunk<review[]>(
    "review/fetchReviewStatus",
    async () => {
        const res = await fetch(
            "https://63d68268e60d57436979fb4f.mockapi.io/reviews"
        );
        return await res.json();
    }
);
