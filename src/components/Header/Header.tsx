import React from 'react';
import styles from './Header.module.css';
import { Container } from '../Container/Container';
import { Button } from '../Buttons/Button/Button';
import { Typography } from '../Typography/Typography';
import { Cart } from '../Cart/Cart';
import { HeaderMenu } from './HeaderMenu/HeaderMenu';
import { handleScroll } from '../../utils/ScrollToElement';
import { LogoIcon } from '../Icons/LogoIcon';


export interface HeaderProps extends React.ComponentPropsWithRef<'header'> {

}

export const Header = ({ className = '', ...props }: HeaderProps): JSX.Element => {

	return (
		<header
			className={`${styles.header} ${className}`}
		>
			<Container>
				<div className={styles.headerTop}>
					<div className={styles.headerLogo}>
						<LogoIcon />
						<h4>Furnity.</h4>
					</div>
					<HeaderMenu />
					<Cart />
				</div>
				<div className={styles.title}>
					<Typography tag='h1'>Offer products to make your interior <span>Minimalist.</span></Typography>
					<Typography tag='p'>we have helped more than 1000+ people to give perfect comfort to the interior of their home</Typography>
					<Button variant='orange' size='s' onClick={() => handleScroll('shop')}>Find Product</Button>
				</div>
			</Container>
		</header>
	)
}
