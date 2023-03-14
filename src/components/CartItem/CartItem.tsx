import React, { memo } from 'react';
import { Button } from '../Button/Button';
import { Htag } from '../Htag/Htag';
import styles from './CartItem.module.css';
import { CartItemProps } from './CartItem.props';

export const CartItem = memo(({ id, image, title, type, count, price, handleAdd, handleMinus, handleRemove }: CartItemProps): JSX.Element => {
	return (
		<div className={styles.cartItem}>
			<img className={styles.picture} src={image} alt='' />
			<Htag tag='h4' className={styles.title}>{title}</Htag>
			<p className={styles.type}>{type}</p>
			<Button size='svg' color='ghost' className={styles.remove} onClick={() => handleMinus(id)}>
				<span>remove</span>
				<svg width="12" height="12" viewBox="0 0 12 12" fill="white" xmlns="http://www.w3.org/2000/svg">
					<path d="M10.2779 5.59549C10.2779 5.24834 9.99648 4.96692 9.64933 4.96692H6.50648H5.24933H2.10648C1.75933 4.96692 1.47791 5.24834 1.47791 5.59549V5.59549C1.47791 5.94264 1.75933 6.22406 2.10648 6.22406H5.24933H6.50648H9.64933C9.99648 6.22406 10.2779 5.94264 10.2779 5.59549V5.59549Z" />
				</svg>
			</Button>
			<span className={styles.amount}>{count}</span>
			<Button size='svg' color='ghost' className={styles.add} onClick={() => handleAdd({ id, image, title, type, count, price })}>
				<span>add</span>
				<svg width="12" height="12" viewBox="0 0 12 12" fill="white" xmlns="http://www.w3.org/2000/svg">
					<path d="M10.1915 5.59556C10.1915 5.24841 9.91006 4.96698 9.56291 4.96698H6.42005V1.82413C6.42005 1.47698 6.13863 1.19556 5.79148 1.19556V1.19556C5.44433 1.19556 5.16291 1.47698 5.16291 1.82413V4.96698H2.02005C1.6729 4.96698 1.39148 5.24841 1.39148 5.59556V5.59556C1.39148 5.94271 1.6729 6.22413 2.02005 6.22413H5.16291V9.36698C5.16291 9.71413 5.44433 9.99556 5.79148 9.99556V9.99556C6.13863 9.99556 6.42005 9.71413 6.42005 9.36698V6.22413H9.56291C9.91006 6.22413 10.1915 5.94271 10.1915 5.59556V5.59556Z" />
				</svg>
			</Button>
			<p className={styles.price}>${price}</p>
			<Button color='orange' size='svg' className={styles.delete} onClick={() => handleRemove(id)}>
				<span>modal close</span>
				<svg width="12" height="12" viewBox="0 0 12 12" fill="black" xmlns="http://www.w3.org/2000/svg">
					<path d="M10.5001 0L5.99947 4.5L1.49987 0L0 1.5L4.4996 6L0 10.5L1.49987 12L5.99947 7.5L10.5001 12L12 10.5L7.5004 6L12 1.5L10.5001 0Z" />
				</svg>
			</Button>
		</div>
	)
});
