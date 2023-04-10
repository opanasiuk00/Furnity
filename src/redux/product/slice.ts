import { createSlice } from "@reduxjs/toolkit";
import { ProductsSliceState, Status } from "./type";
import { fetchPropducts } from "./asyncAction";

const initialState: ProductsSliceState = {
    products: null,
    typeActive: "Badroom",
    status: Status.Loading,
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
            state.status = Status.Loading;
            state.products = null;
        });
        builder.addCase(fetchPropducts.fulfilled, (state, { payload }) => {
            state.status = Status.Success;
            state.products = payload;
        });
        builder.addCase(fetchPropducts.rejected, (state) => {
            state.status = Status.Error;
            state.products = null;
        });
    },
});

export const { changeMenu } = productSlice.actions;

export default productSlice.reducer;

/* Запрос */
// {
// 	"topicId": 5,
// 	"status": "published" // "draft", "deleted"
// }
// /* Ответ */
// [
// 	{
// 		"question": "Как осуществляется доставка?",
// 		"answer": "быстро!",
// 		"tags": [
// 			"popular",
// 			"new"
// 		],
// 		"likes": 3,
// 		"status": "published"
// 	}
// ]

// enum Status {
//     published = "published",
//     draft = "draft",
//     deleted = "deleted",
// }

// async function getFaqs(req: { topicId: number; status?: Status }): Promise<
//     {
//         question: string;
//         answer: string;
//         tags: string[];
//         likes: number;
//         status: Status;
//     }[]
// > {
//     const res = await fetch("/faqs", {
//         method: "POST",
//         body: JSON.stringify(req),
//     });
//     const data: {
//         question: string;
//         answer: string;
//         tags: string[];
//         likes: number;
//         status: Status;
//     }[] = await res.json();
//     return data;
// }

// ---------------------------2

// Запрос в виде платежа
// {
// 	"sum": 10000,
// 	"from": 2,
// 	"to": 4
// }
// // Ответ
// {
// 	"status": "success",
// 	"data": {
// 		"databaseId": 567,
// 		"sum": 10000,
// 		"from": 2,
// 		"to": 4
// 	}
// },
// {
// 	"status": "failed",
// 	"data": {
// 		"errorMessage": "Недостаточно средств",
// 		"errorCode": 4
// 	}
// }

// type question = {
// 		sum: number,
// 	from: number,
// 	to: number
// }

// type dataSuccess = {
// 		errorMessage: string,
// 		errorCode: number
// }

// type dataFailed = question & {
// 			databaseId: number,

// }

// enum paymentStatus {
// 	Success= 'success',
// Failed = 'failed'
// }

// type answerSuccess = {
// 	status: paymentStatus.Success,
// 	data: dataSuccess
// }
// type answerFailed = {
// 	status: paymentStatus.Failed,
// 	data: dataFailed
// }
