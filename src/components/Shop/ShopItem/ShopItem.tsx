import React from 'react';
import styles from './ShopItem.module.css';
import { Typography } from '../../Typography/Typography';
import { CartItemType } from "../../../redux/cart/type";
import { ProductAddToCartIcon } from '../../Icons/ProductAddToCartIcon';
import { ButtonIcon } from '../../Buttons/ButtonIcon/ButtonIcon';

export const SHOP_ITEM_TEST = {
	IMAGE: 'ShopItem-image',
	TITLE: 'ShopItem-title',
	TYPE: 'ShopItem-type',
	PRICE: 'ShopItem-price'
}

export interface ShopItemProps {
	id: string;
	image: string;
	type: string;
	title: string;
	price: string;
	handleAddToCart: (item: CartItemType) => void;
};

export const ShopItem = ({ id, image, type, title, price, handleAddToCart }: ShopItemProps): JSX.Element => {
	return (
		<div
			className={`${styles.product}`}
		>
			<img src={image} alt={title} data-testid={SHOP_ITEM_TEST.IMAGE} />
			<div className={styles.content}>
				<Typography tag='p' data-testid={SHOP_ITEM_TEST.TYPE}>{type.replace(/-/ig, ' ')}</Typography>
				<Typography tag='h4' data-testid={SHOP_ITEM_TEST.TITLE}>{title}</Typography>
				<div className={styles.price}>
					<p data-testid={SHOP_ITEM_TEST.PRICE}><span>$</span>{price}</p>
					<ButtonIcon variant='orange' title='add to cart' onClick={() => handleAddToCart({ id, image, type, title, price, count: 1 })}>
						<ProductAddToCartIcon />
					</ButtonIcon>
				</div>
			</div>
		</div>
	)
};
