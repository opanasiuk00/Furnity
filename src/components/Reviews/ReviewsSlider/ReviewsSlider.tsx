import React, { useEffect, useRef } from 'react';
import { Typography } from '../../Typography/Typography';
import styles from './ReviewsSlider.module.css';
import avatarJPG from './photo-cover.svg';
import ContentLoader from 'react-content-loader';
import { selectReviewsData, useAppDispatch } from '../../../redux/store';
import { fetchReviews } from '../../../redux/reviews/asyncAction';
import { useSelector } from 'react-redux';
import { changeSlide } from '../../../redux/reviews/slice';
import { ButtonIcon } from '../../Buttons/ButtonIcon/ButtonIcon';

export const ReviewsSlider = () => {
	const sliderWrapper = useRef<HTMLUListElement>(null);
	const { reviews, slideActive, amountSlide, status } = useSelector(selectReviewsData);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchReviews());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {

		const resizeObserver = new ResizeObserver(() => {
			dispatch(changeSlide(0));
		});

		resizeObserver.observe(sliderWrapper.current!);
		// eslint-disable-next-line react-hooks/exhaustive-deps
		return () => resizeObserver.unobserve(sliderWrapper.current!);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sliderWrapper]);

	const handleNextSlide = () => {
		dispatch(changeSlide(slideActive + 1));
	}
	const handlePrevSlide = () => {
		dispatch(changeSlide(slideActive - 1));
	}

	console.log()
	return (
		<>
			<div className={styles.sliderWrapper}>
				<ul className={styles.slider} style={{ transform: `translateX(${sliderWrapper.current !== null ? (-sliderWrapper.current!.offsetWidth) * slideActive : 0}px)` }} ref={sliderWrapper}>
					{
						(status === 'success' && reviews?.map((item) => <li className={styles.slide} key={item.id}>
							<img className={styles.slideAvatar} src={item.avatar} onError={({ currentTarget }) => { currentTarget.src = avatarJPG; }} alt='' />
							<Typography className={styles.slideName} tag='h4' color='white'>{item.name}</Typography>
							<Typography tag='p' color='gray' className={styles.slidePosition}>{item.position}</Typography>
							<Typography tag='p' color='white' className={styles.slideDescription}>{item.description}</Typography>
						</li>))
						||
						((status === 'loading' || status === 'error') && <ContentLoader
							speed={2}
							width={290}
							height={160}
							viewBox="0 0 290 160"
							backgroundColor="#b6afaf"
							foregroundColor="#ecebeb"
						>
							<rect x="0" y="0" rx="100" ry="100" width="50" height="50" />
							<rect x="60" y="0" rx="5" ry="5" width="80" height="25" />
							<rect x="60" y="30" rx="5" ry="5" width="80" height="20" />
							<rect x="0" y="70" rx="5" ry="5" width="290" height="90" />
						</ContentLoader>)
					}
				</ul>
			</div>
			<div className={styles.buttons}>
				<ButtonIcon
					onClick={handlePrevSlide}
					variant='pink'
					title='prev'
					disabled={slideActive === 0}
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
						<path d="M13.9999 6.29303L8.29294 12L13.9999 17.707L15.4139 16.293L11.1209 12L15.4139 7.70703L13.9999 6.29303Z" />
					</svg>
				</ButtonIcon>
				<ButtonIcon
					onClick={handleNextSlide}
					variant='pink'
					title='next'
					disabled={slideActive === (amountSlide !== null ? amountSlide - 1 : 0)}
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.707 17.707L16.414 12L10.707 6.29297L9.29297 7.70697L13.586 12L9.29297 16.293L10.707 17.707Z" />
					</svg>
				</ButtonIcon>
			</div>
		</>
	)
};
