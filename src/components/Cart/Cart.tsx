import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { addItem, minusCount, removeItem } from '../../redux/cart/slice';
import { CartItemType } from '../../redux/cart/type';
import { selectCartData, useAppDispatch } from '../../redux/store';
import { Button } from '../Button/Button';
import { CartItem } from '../CartItem/CartItem';
import { Htag } from '../Htag/Htag';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import styles from './Cart.module.css';
import cartClearSVG from './modal-cart-dummy.svg';


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
			<Button
				onClick={onOpen}
				color='ghost'
				size='svg'
			>
				<span>Cart</span>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="#1D1F23" xmlns="http://www.w3.org/2000/svg">
					<path d="M21 8.99991H19.58L15.868 2.50391L14.132 3.49591L17.277 8.99991H6.72302L9.86902 3.49591L8.13202 2.50391L4.42002 8.99991H3.00002C2.84631 9.00008 2.69472 9.03564 2.55697 9.10384C2.41923 9.17204 2.29904 9.27104 2.20572 9.39318C2.1124 9.51531 2.04846 9.65729 2.01886 9.80812C1.98926 9.95894 1.99479 10.1146 2.03502 10.2629L4.83402 20.5269C4.95037 20.9497 5.20213 21.3227 5.55072 21.5887C5.89931 21.8548 6.3255 21.9992 6.76402 21.9999H17.237C18.135 21.9999 18.929 21.3949 19.167 20.5249L21.966 10.2619C22.0067 10.1135 22.0126 9.95771 21.9831 9.80668C21.9536 9.65565 21.8896 9.51348 21.7961 9.39129C21.7025 9.2691 21.582 9.17019 21.4439 9.1023C21.3058 9.0344 21.1539 8.99936 21 8.99991ZM17.236 19.9999V20.9999V19.9999H6.76402L4.31002 10.9999H19.69L17.236 19.9999Z" />
					<path d="M9 13H11V18H9V13ZM13 13H15V18H13V13Z" />
				</svg>
			</Button>
			<ModalWindow
				title='Cart'
				position='rightTop'
				isOpen={isOpen}
				onClose={onClose}

			>
				{
					(cartLength !== 0 && <>
						{cartItems.map(item => <CartItem handleAdd={handleAdd} handleMinus={handleMinus} handleRemove={handleRemove} key={item.id} {...item} />)}
						<div className={styles.modalTotal}>
							<Htag tag='h4'>Total Payment</Htag>
							<Htag tag='h4'>{totalPrice}$</Htag>
						</div>
						<Button className={styles.modalBuy} size='l' color='orange'>Pay Now</Button>
					</>
					)
					||
					(cartLength === 0 && <>
						<img className={styles.cartClear} src={cartClearSVG} alt='' />
						<Htag className={styles.cartClearTitle} tag='h4'>Cart clear</Htag>
					</>)
				}
			</ModalWindow>
		</div>
	)
};
