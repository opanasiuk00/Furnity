import React from 'react';
import styles from './Footer.module.css';
import { Container } from '../Container/Container';

export const Footer = (): JSX.Element => {

	const todayYear = (new Date().getFullYear());

	return (
		<footer
			className={styles.footer}
		>
			<Container className={styles.inner}>
				<div className={styles.logo}>
					<svg width="34" height="21" viewBox="0 0 34 21" fill="#D9534F" xmlns="http://www.w3.org/2000/svg">
						<path d="M33 16.5C36.5 23 20.1127 14.5 11 14.5C1.8873 14.5 0 25.6127 0 16.5C0 7.3873 7.3873 0 16.5 0C25.6127 0 10 6.5 33 16.5Z" />
					</svg>
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
