import React from 'react';
import styles from './Footer.module.css';
import { Container } from '../Container/Container';
import { LogoIcon } from '../Icons/LogoIcon';

export const Footer = (): JSX.Element => {

	const todayYear = (new Date().getFullYear());

	return (
		<footer
			className={styles.footer}
		>
			<Container className={styles.inner}>
				<div className={styles.logo}>
					<LogoIcon />
					<h4>Furnity.</h4>
				</div>
				<nav className={styles.menu}>
					<ul>
						<li>
							<a href='#!' target='_blank'>Support</a>
						</li>
						<li>
							<a href='#!' target='_blank'>Privacy Policy</a>
						</li>
						<li>
							<a href='#!' target='_blank'>Terms and Conditions</a>
						</li>
					</ul>
				</nav>
				<div className={styles.copyright}>
					© {todayYear} Furnity, All Rights Reserved
				</div>
			</Container>
		</footer>
	)
};
