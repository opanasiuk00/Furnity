import React from 'react';
import styles from './Reviews.module.css';
import { Container } from '../Container/Container';
import { Htag } from '../Htag/Htag';
import sofaJPG from './sofa.jpg';
import { ReviewsSlider } from '../ReviewsSlider/ReviewsSlider';


export const Reviews = (): JSX.Element => {

	return (
		<section className={styles.reviews}>
			<Container className={styles.inner}>
				<div className={styles.content}>
					<Htag tag='h2' color='white'>What are they saying ?</Htag>
					<ReviewsSlider />
				</div>
				<img className={styles.picture} src={sofaJPG} alt='sofa' />
			</Container>
		</section>
	)
};
