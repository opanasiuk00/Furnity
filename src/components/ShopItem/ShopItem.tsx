import React from 'react';
import styles from './ShopItem.module.css';
import { ShopItemProps } from './ShopItem.props';
import { Htag } from '../Htag/Htag';
import { Button } from '../Button/Button';

export const ShopItem = ({ id, image, type, title, price, handleAddToCart, className = '', ...props }: ShopItemProps): JSX.Element => {
	return (
		<div
			className={`${styles.product} ${className}`}
			{...props}
		>
			<img src={image} alt={title} />
			<div className={styles.content}>
				<p>{type.replace(/-/ig, ' ')}</p>
				<Htag tag='h4'>{title}</Htag>
				<div className={styles.price}>
					<p><span>$</span>{price}</p>
					<Button color='orange' size='svg' onClick={() => handleAddToCart({ id, image, type, title, price, count: 1 })}>
						<span>add to cart</span>
						<svg width="25" height="25" viewBox="0 0 25 25" fill="white" xmlns="http://www.w3.org/2000/svg">
							<path d="M22.3988 12.3865C22.3988 11.6174 21.7753 10.9939 21.0062 10.9939H14.0429V4.0306C14.0429 3.26145 13.4194 2.63794 12.6502 2.63794C11.8811 2.63794 11.2576 3.26145 11.2576 4.0306V10.9939H4.29427C3.52512 10.9939 2.90161 11.6174 2.90161 12.3865C2.90161 13.1557 3.52513 13.7792 4.29427 13.7792H11.2576V20.7425C11.2576 21.5116 11.8811 22.1352 12.6502 22.1352C13.4194 22.1352 14.0429 21.5116 14.0429 20.7425V13.7792H21.0062C21.7753 13.7792 22.3988 13.1557 22.3988 12.3865Z" />
						</svg>
					</Button>
				</div>
			</div>
		</div>
	)
}
