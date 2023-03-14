import React from 'react';
import { useSelector } from 'react-redux';
import { changeMenu } from '../../redux/product/slice';
import { productsReducer, useAppDispatch } from '../../redux/store';
import { Button } from '../Button/Button';
import styles from './ShopMenu.module.css';
import { ShopMenuProps } from './ShopMenu.props';

const menu = [
	{ id: 0, name: 'Badroom' },
	{ id: 1, name: 'Living Room' },
	{ id: 2, name: 'Dining Room' },
	{ id: 3, name: 'Office' },
	{ id: 4, name: 'Kitchen' },
	{ id: 5, name: 'Sofa' },
]


export const ShopMenu = ({ handleScroll, className = '' }: ShopMenuProps): JSX.Element => {

	const { typeActive, status } = useSelector(productsReducer);
	const dispatch = useAppDispatch();

	const handleMenu = (name: string) => {
		if (status === 'loading') {
			return null;
		}
		if (handleScroll) {
			handleScroll('shop');
		}
		dispatch(changeMenu(name));
	};

	return (
		<nav className={`${styles.menu} ${className}`}>
			<ul className={styles.list}>
				{
					menu.map(elem => <li key={elem.id}> <Button
						color='ghost'
						size='s'
						onClick={() => handleMenu(elem.name.replace(/ /ig, '-'))}
						active={typeActive === elem.name.replace(/ /ig, '-')}
					>{elem.name}</Button> </li>)
				}
			</ul>
		</nav>
	)
};
