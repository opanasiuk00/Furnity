import React, { memo } from 'react';
import { Typography } from '../../Typography/Typography';
import styles from './CartItem.module.css';
import { CartItemType } from '../../../redux/cart/type';
import { MinusCartItemIcon } from '../../Icons/MinusCartItemIcon';
import { RemoveCartItemIcon } from '../../Icons/RemoveCartItemIcon';
import { ButtonIcon } from '../../Buttons/ButtonIcon/ButtonIcon';

export const CART_ITEM_TEST = {
	IMAGE: 'CartItem-image',
	TITLE: 'CartItem-title',
	TYPE: 'CartItem-type',
	COUNT: 'CartItem-count',
	PRICE: 'CartItem-price'
}

export interface CartItemProps extends CartItemType {
	handleAdd: (item: CartItemType) => void;
	handleMinus: (id: string) => void;
	handleRemove: (id: string) => void;
};

export const CartItem = memo(({ id, image, title, type, count, price, handleAdd, handleMinus, handleRemove }: CartItemProps): JSX.Element => {
	return (
		<div className={styles.cartItem}>
			<img className={styles.picture} src={image} alt='' data-testid={CART_ITEM_TEST.IMAGE} />
			<Typography tag='h4' className={styles.title} data-testid={CART_ITEM_TEST.TITLE}>{title}</Typography>
			<Typography tag='p' className={styles.type} data-testid={CART_ITEM_TEST.TYPE}>{type}</Typography>
			<ButtonIcon title='minus' variant='ghost' className={styles.remove} onClick={() => handleMinus(id)} disabled={count === 1}>
				<MinusCartItemIcon />
			</ButtonIcon>
			<span className={styles.amount} data-testid={CART_ITEM_TEST.COUNT}>{count}</span>
			<ButtonIcon title='add' variant='ghost' className={styles.add} onClick={() => handleAdd({ id, image, title, type, count, price })}>
				<MinusCartItemIcon />
			</ButtonIcon>
			<Typography tag='p' className={styles.price} data-testid={CART_ITEM_TEST.PRICE}>${price}</Typography>
			<ButtonIcon title='modal' variant='orange' className={styles.delete} onClick={() => handleRemove(id)}>
				<RemoveCartItemIcon />
			</ButtonIcon>
		</div>
	)
});
