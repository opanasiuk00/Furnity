import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { addItem, minusCount, removeItem } from '../../redux/cart/slice';
import { CartItemType } from '../../redux/cart/type';
import { selectCartData, useAppDispatch } from '../../redux/store';
import { Button } from '../Buttons/Button/Button';
import { CartItem } from './CartItem/CartItem';
import { Typography } from '../Typography/Typography';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import styles from './Cart.module.css';
import cartClearSVG from './modal-cart-dummy.svg';
import { CartIcon } from '../Icons/CartIcon';
import { ButtonIcon } from '../Buttons/ButtonIcon/ButtonIcon';


export const Cart = (): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);
	const { cartItems, totalPrice, cartLength } = useSelector(selectCartData);
	const isMounted = React.useRef(false);
	const dispatch = useAppDispatch();
	const handleAdd = useCallback((item: CartItemType) => {
		dispatch(addItem(item));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleMinus = useCallback((id: string) => {
		dispatch(minusCount(id));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleRemove = useCallback((id: string) => {
		dispatch(removeItem(id));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		if (isMounted.current) {
			const json = JSON.stringify(cartItems);
			localStorage.setItem('cart-furnity', json);
		}
		isMounted.current = true;
	}, [cartItems]);

	const onOpen = () => {
		setIsOpen(true);
	};

	const onClose = () => {
		setIsOpen(false);
	};



	return (
		<div className={styles.headerCart}>
			<ButtonIcon
				onClick={onOpen}
				variant='orange'
				title='Cart open'
				className={styles.cartCurr}
			>
				<>
					<CartIcon />
					{cartLength !== 0 && <span className={styles.current}>{cartLength}</span>}
				</>
			</ButtonIcon>
			<ModalWindow
				title='Cart'
				position='rightTop'
				isOpen={isOpen}
				onClose={onClose}

			>
				{
					(totalPrice !== 0 && <>
						{cartItems.map(item => <CartItem handleAdd={handleAdd} handleMinus={handleMinus} handleRemove={handleRemove} key={item.id} {...item} />)}
						<div className={styles.modalTotal}>
							<Typography tag='h4'>Total Payment</Typography>
							<Typography tag='h4'>{totalPrice}$</Typography>
						</div>
						<Button className={styles.modalBuy} size='l' variant='orange'>Pay Now</Button>
					</>
					)
					||
					(totalPrice === 0 && <>
						<img className={styles.cartClear} src={cartClearSVG} alt='' />
						<Typography className={styles.cartClearTitle} tag='h4'>Cart clear</Typography>
					</>)
				}
			</ModalWindow>
		</div>
	)
};
