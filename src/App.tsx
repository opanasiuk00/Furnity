import React from 'react';
import styles from './App.module.css';
import { Button } from './components/Button/Button';
import { Container } from './components/Container/Container';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Htag } from './components/Htag/Htag';
import { P } from './components/P/P';
import { Reviews } from './components/Reviews/Reviews';
import { ShopMenu } from './components/ShopMenu/ShopMenu';
import chairAbout from './chair.jpg';
import chairLLaptop from './chair075x.jpg';
import { Shop } from './components/Shop/Shop';
import { handleScroll } from './utils/ScrollToElement';

function App() {


	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<main className={styles.main}>
				<section className={styles.about}>
					<Container className={styles.inner}>
						<div className={styles.content}>
							<div className={styles.aboutItem}>
								<svg width="26" height="26" viewBox="0 0 26 26" fill="#98F3FD" xmlns="http://www.w3.org/2000/svg">
									<path d="M25.5 8.00004C25.5121 7.91296 25.5121 7.82462 25.5 7.73754V7.63754C25.4785 7.56777 25.4492 7.50067 25.4125 7.43754C25.3963 7.40154 25.3752 7.3679 25.35 7.33754L25.225 7.17504L25.125 7.10004L24.975 6.98754L13.725 0.737537C13.535 0.627826 13.3194 0.570068 13.1 0.570068C12.8806 0.570068 12.665 0.627826 12.475 0.737537L1.225 6.98754L1.1125 7.07504L0.975 7.17504C0.938686 7.21591 0.909146 7.26233 0.8875 7.31254C0.847507 7.34841 0.813718 7.39064 0.7875 7.43754C0.755044 7.49238 0.729834 7.55121 0.7125 7.61254C0.705507 7.65391 0.705507 7.69616 0.7125 7.73754C0.626557 7.81164 0.554587 7.90055 0.5 8.00004V18C0.501622 18.2228 0.562735 18.441 0.677014 18.6322C0.791293 18.8234 0.954588 18.9806 1.15 19.0875L12.4 25.3375C12.4517 25.3677 12.5061 25.3928 12.5625 25.4125H12.6875C12.8929 25.4624 13.1071 25.4624 13.3125 25.4125H13.4375L13.6125 25.3375L24.8625 19.0875C25.0556 18.979 25.2164 18.8211 25.3284 18.63C25.4404 18.4389 25.4996 18.2215 25.5 18V8.00004ZM13 12.8375L4.325 8.00004L7.775 6.10004L16.3125 10.975L13 12.8375ZM13 3.18754L21.675 8.00004L18.875 9.56254L10.3375 4.67504L13 3.18754ZM3 10.125L11.75 15.025V22.125L3 17.2625V10.125ZM14.25 22.125V15.025L18 12.925V16.75L20.5 15.5V11.525L23 10.1375V17.2625L14.25 22.125Z" />
								</svg>
								<Htag tag='h3'>Fast and safe delivery</Htag>
								<P color='black-light'>please login and buy our products, safe delivery guaranteed</P>
							</div>
							<div className={styles.aboutItem}>
								<svg width="30" height="30" viewBox="0 0 30 30" fill="#C5E2AC" xmlns="http://www.w3.org/2000/svg">
									<path d="M15 27.5C16.3807 27.5 17.5 26.3807 17.5 25C17.5 23.6193 16.3807 22.5 15 22.5C13.6193 22.5 12.5 23.6193 12.5 25C12.5 26.3807 13.6193 27.5 15 27.5Z" />
									<path d="M15 7.5C16.3807 7.5 17.5 6.38071 17.5 5C17.5 3.61929 16.3807 2.5 15 2.5C13.6193 2.5 12.5 3.61929 12.5 5C12.5 6.38071 13.6193 7.5 15 7.5Z" />
									<path d="M7.92871 24.5713C9.30942 24.5713 10.4287 23.452 10.4287 22.0713C10.4287 20.6906 9.30942 19.5713 7.92871 19.5713C6.548 19.5713 5.42871 20.6906 5.42871 22.0713C5.42871 23.452 6.548 24.5713 7.92871 24.5713Z" />
									<path d="M22.0713 10.4287C23.452 10.4287 24.5713 9.30942 24.5713 7.92871C24.5713 6.548 23.452 5.42871 22.0713 5.42871C20.6906 5.42871 19.5713 6.548 19.5713 7.92871C19.5713 9.30942 20.6906 10.4287 22.0713 10.4287Z" />
									<path d="M5.00003 17.5013C6.38143 17.5013 7.50128 16.3814 7.50128 15C7.50128 13.6186 6.38143 12.4988 5.00003 12.4988C3.61863 12.4988 2.49878 13.6186 2.49878 15C2.49878 16.3814 3.61863 17.5013 5.00003 17.5013Z" />
									<path d="M25 17.5C26.3807 17.5 27.5 16.3807 27.5 15C27.5 13.6193 26.3807 12.5 25 12.5C23.6193 12.5 22.5 13.6193 22.5 15C22.5 16.3807 23.6193 17.5 25 17.5Z" />
									<path d="M7.92871 10.4301C9.30942 10.4301 10.4287 9.31077 10.4287 7.93005C10.4287 6.54934 9.30942 5.43005 7.92871 5.43005C6.548 5.43005 5.42871 6.54934 5.42871 7.93005C5.42871 9.31077 6.548 10.4301 7.92871 10.4301Z" />
									<path d="M22.0713 24.5725C23.452 24.5725 24.5713 23.4532 24.5713 22.0725C24.5713 20.6918 23.452 19.5725 22.0713 19.5725C20.6906 19.5725 19.5713 20.6918 19.5713 22.0725C19.5713 23.4532 20.6906 24.5725 22.0713 24.5725Z" />
								</svg>
								<Htag
									tag='h3'
								>
									Quick and easy returns
								</Htag>
								<P
									color='black-light'
								>
									Items that do not match we are ready to replace, please return
								</P>
							</div>
							<div className={styles.aboutItem}>
								<svg width="30" height="30" viewBox="0 0 30 30" fill="#E4A9B7" xmlns="http://www.w3.org/2000/svg">
									<path d="M15 12.5C16.4388 12.5 17.5 11.44 17.5 10C17.5 8.56 16.4388 7.5 15 7.5C13.5625 7.5 12.5 8.56 12.5 10C12.5 11.44 13.5625 12.5 15 12.5ZM15 13.75C12.2387 13.75 10 15.765 10 18.25V18.7325H20V18.25C20 15.765 17.7613 13.75 15 13.75Z" />
									<path d="M23.75 2.5H6.25C4.87125 2.5 3.75 3.62125 3.75 5V21.25C3.75 22.6287 4.87125 23.75 6.25 23.75H11.25L15 27.5L18.75 23.75H23.75C25.1287 23.75 26.25 22.6287 26.25 21.25V5C26.25 3.62125 25.1287 2.5 23.75 2.5ZM17.5 21.25L15 23.75L12.5 21.25H6.25V5H23.75L23.7525 21.25H17.5Z" />
								</svg>
								<Htag tag='h3'>24 hour customer service</Htag>
								<P color='black-light'>Our customer service is ready to serve you at any time, don't hesitate to contact us</P>
							</div>
							<div className={styles.aboutItem}>
								<svg width="30" height="30" viewBox="0 0 30 30" fill="#73CAB2" xmlns="http://www.w3.org/2000/svg">
									<path d="M15 18.75C17.0711 18.75 18.75 17.0711 18.75 15C18.75 12.9289 17.0711 11.25 15 11.25C12.9289 11.25 11.25 12.9289 11.25 15C11.25 17.0711 12.9289 18.75 15 18.75Z" />
									<path d="M16.25 5.08625V2.5H13.75V5.08625C11.5502 5.36669 9.50582 6.36967 7.93775 7.93775C6.36967 9.50582 5.36669 11.5502 5.08625 13.75H2.5V16.25H5.08625C5.36649 18.4499 6.3694 20.4944 7.93751 22.0625C9.50563 23.6306 11.5501 24.6335 13.75 24.9137V27.5H16.25V24.9137C18.4499 24.6335 20.4944 23.6306 22.0625 22.0625C23.6306 20.4944 24.6335 18.4499 24.9137 16.25H27.5V13.75H24.9137C24.6333 11.5502 23.6303 9.50582 22.0623 7.93775C20.4942 6.36967 18.4498 5.36669 16.25 5.08625ZM15 22.5C10.8638 22.5 7.5 19.1362 7.5 15C7.5 10.8638 10.8638 7.5 15 7.5C19.1362 7.5 22.5 10.8638 22.5 15C22.5 19.1362 19.1362 22.5 15 22.5Z" />
								</svg>
								<Htag
									tag='h3'
								>
									the price match is very fitting
								</Htag>
								<P color='black-light'>The price of the products we offer is very in accordance with the quality of the goods</P>
							</div>
							<Button
								color='pink'
								size='s'
								onClick={() => handleScroll('shop')}
							>
								Start Shopping
							</Button>
						</div>
						<div className={styles.picture}>
							<picture>
								<source srcSet={chairLLaptop} media='(max-width:1075px)' />
								<img src={chairAbout} alt='chair' />
							</picture>
						</div>
					</Container>
				</section>
				<section className={styles.shop}>
					<Container>
						<Htag className={styles.shopTitle} tag='h2' id='shop'>Various collections of furniture to fill your interior</Htag>
						<P className={styles.shopDescription} color='black-light'>We provide a variety of goods with the best quality for you to find the right one to meet your interior needs</P>
						<ShopMenu />
						<Shop />
					</Container>
				</section>
				<Reviews />
				<section className={styles.contact}>
					<Container className={styles.contactInner}>
						<Htag tag='h2'>Contact us if you need anything, we are ready to serve you</Htag>
						<Button color='orange' size='m'>Contact us</Button>
					</Container>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default App;