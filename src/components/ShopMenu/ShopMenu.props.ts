import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ShopMenuProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    handleScroll?: (id: string) => void;
}
