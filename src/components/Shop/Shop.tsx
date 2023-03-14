import React, { useEffect } from 'react';
import styles from './Shop.module.css';
import { ShopItem } from '../ShopItem/ShopItem';
import ContentLoader from 'react-content-loader';
import { productsReducer, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { addItem } from '../../redux/cart/slice';
import { CartItemType } from '../../redux/cart/type';
import { fetchPropducts } from '../../redux/product/asyncAction';
import noProduct from './no-product.png';

export const Shop = (): JSX.Element => {

	const { status, products, typeActive } = useSelector(productsReducer);
	const dispatch = useAppDispatch();

	const handleAddToCart = (item: CartItemType) => {
		dispatch(addItem(item));
	}

	useEffect(() => {
		dispatch(fetchPropducts(typeActive))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [typeActive]);

	return (
		<>
			<div className={styles.shopProducts}>
				{
					(status === 'success' && (products?.length !== 0) && (products?.map(item => <ShopItem key={item.id} handleAddToCart={handleAddToCart} {...item} />)))
					||
					((status === 'loading' || status === 'error') && new Array(8).fill(1).map((elem, i) => <ContentLoader
						key={i}
						speed={2}
						width={240}
						height={470}
						viewBox="0 0 240 470"
						backgroundColor="#b6afaf"
						foregroundColor="#ecebeb"
					>
						<rect x="0" y="0" rx="5" ry="5" width="240" height="280" />
						<rect x="10" y="285" rx="5" ry="5" width="50" height="20" />
						<rect x="10" y="311" rx="5" ry="5" width="100" height="20" />
						<rect x="185" y="341" rx="100" ry="100" width="45" height="45" />
						<rect x="10" y="351" rx="5" ry="5" width="40" height="25" />
					</ContentLoader>))
				}
			</div>

			({
				products?.length === 0 &&
				<img className={styles.notFound} src={noProduct} alt='not found' />
			})
		</>
	)
};