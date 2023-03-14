import React, { useState } from 'react';
import { handleScroll } from '../../utils/ScrollToElement';
import { Button } from '../Button/Button';
import { ShopMenu } from '../ShopMenu/ShopMenu';
import styles from './HeaderMenu.module.css';

export const HeaderMenu = (): JSX.Element => {

	const [mobileMenu, setMobileMenu] = useState(false);

	const handleMenu = () => {
		setMobileMenu(prev => !prev);
	}

	return (
		<>
			<div className={styles.headerMobile}>
				<Button color='ghost' size='svg' onClick={handleMenu}>
					{
						!mobileMenu ?
							<>
								<span>open menu</span>
								<svg width="12" height="8" viewBox="0 0 12 8" fill="white" xmlns="http://www.w3.org/2000/svg">
									<path d="M11.8535 1.85345L6.14645 7.56045L0.439453 1.85345L1.85345 0.439453L6.14645 4.73245L10.4395 0.439453L11.8535 1.85345Z" />
								</svg>
							</>
							:
							<>
								<span>close menu</span>
								<svg width="12" height="12" viewBox="0 0 12 12" fill="black" xmlns="http://www.w3.org/2000/svg">
									<path d="M10.5001 0L5.99947 4.5L1.49987 0L0 1.5L4.4996 6L0 10.5L1.49987 12L5.99947 7.5L10.5001 12L12 10.5L7.5004 6L12 1.5L10.5001 0Z" />
								</svg>
							</>
					}
				</Button>
			</div>
			<ShopMenu className={`${styles.headerMenu} ${mobileMenu ? styles.headerMenuActive : ''}`} handleScroll={handleScroll} />
		</>
	)
};
