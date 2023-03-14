import React from 'react';
import styles from './Header.module.css';
import { HeaderProps } from './Header.props';
import { Container } from '../Container/Container';
import { Button } from '../Button/Button';
import { Htag } from '../Htag/Htag';
import { P } from '../P/P';
import { Cart } from '../Cart/Cart';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';
import { handleScroll } from '../../utils/ScrollToElement';

export const Header = ({ className = '', ...props }: HeaderProps): JSX.Element => {

	return (
		<header
			className={`${styles.header} ${className}`}
		>
			<Container>
				<div className={styles.headerTop}>
					<div className={styles.headerLogo}>
						<svg width="34" height="21" viewBox="0 0 34 21" fill="#D9534F" xmlns="http://www.w3.org/2000/svg">
							<path d="M33 16.5C36.5 23 20.1127 14.5 11 14.5C1.8873 14.5 0 25.6127 0 16.5C0 7.3873 7.3873 0 16.5 0C25.6127 0 10 6.5 33 16.5Z" />
						</svg>
						<h4>Furnity.</h4>
					</div>
					<HeaderMenu />
					<Cart />
				</div>
				<div className={styles.title}>
					<Htag tag='h1'>Offer products to make your interior <span>Minimalist.</span></Htag>
					<P>we have helped more than 1000+ people to give perfect comfort to the interior of their home</P>
					<Button color='orange' size='s' onClick={() => handleScroll('shop')}>Find Product</Button>
				</div>
			</Container>
		</header>
	)
}
