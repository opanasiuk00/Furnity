export interface reviewsType {
    reviews: null | review[];
    slideActive: number;
    amountSlide: number | null;
    status: "loading" | "success" | "error";
}

export type review = {
    id: string;
    avatar: string;
    name: string;
    position: string;
    description: string;
};
