import React from 'react';
import { Button } from '../Button/Button';
import { Htag } from '../Htag/Htag';
import styles from './ModalWindow.module.css';
import { ModalWindowProps } from './ModalWindow.props';

export const ModalWindow = ({ children, title, className = '', position = 'center', isOpen, onClose }: ModalWindowProps): JSX.Element => {

	if (!isOpen) {
		return <></>;
	}

	return (
		<div className={`${styles.modal} ${styles[position]} ${className}`}>
			<div className={styles.modalContent}>
				<div className={styles.modalHeader}>
					<Htag tag='h3'>{title}</Htag>
					<Button color='ghost' size='svg' onClick={onClose}>
						<span>modal close</span>
						<svg width="12" height="12" viewBox="0 0 12 12" fill="black" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.5001 0L5.99947 4.5L1.49987 0L0 1.5L4.4996 6L0 10.5L1.49987 12L5.99947 7.5L10.5001 12L12 10.5L7.5004 6L12 1.5L10.5001 0Z" />
						</svg>
					</Button>
				</div>
				<div className={styles.modalBody}>
					{children}
				</div>
			</div>
		</div>
	)
}
