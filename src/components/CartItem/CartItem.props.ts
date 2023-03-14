import { CartItemType } from "./../../redux/cart/type";
export interface CartItemProps {
    id: string;
    image: string;
    title: string;
    type: string;
    count: number;
    price: string;
    handleAdd: (item: CartItemType) => void;
    handleMinus: (id: string) => void;
    handleRemove: (id: string) => void;
}
