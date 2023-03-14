import { DetailedHTMLProps, HTMLAttributes } from "react";
import { CartItemType } from "../../redux/cart/type";

export interface ShopItemProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    id: string;
    image: string;
    type: string;
    title: string;
    price: string;
    handleAddToCart: (item: CartItemType) => void;
}
