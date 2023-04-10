import React from 'react';
import { Typography } from '../Typography/Typography';
import styles from './ModalWindow.module.css';
import { ButtonIcon } from '../Buttons/ButtonIcon/ButtonIcon';

export interface ModalWindowProps extends React.ComponentPropsWithRef<'div'> {
	children: React.ReactNode;
	title: string;
	isOpen: boolean;
	onClose: () => void;
	position?: 'leftTop' | 'rightTop' | 'center';
};

export const ModalWindow = ({ children, title, className = '', position = 'center', isOpen, onClose }: ModalWindowProps): JSX.Element | null => {

	if (!isOpen) {
		return null;
	}

	return (
		<div className={`${styles.modal} ${styles[position]} ${className}`}>
			<div className={styles.modalContent}>
				<div className={styles.modalHeader}>
					<Typography tag='h3'>{title}</Typography>
					<ButtonIcon variant='ghost' title='modal close' onClick={onClose}>
						<svg width="12" height="12" viewBox="0 0 12 12" fill="black" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.5001 0L5.99947 4.5L1.49987 0L0 1.5L4.4996 6L0 10.5L1.49987 12L5.99947 7.5L10.5001 12L12 10.5L7.5004 6L12 1.5L10.5001 0Z" />
						</svg>
					</ButtonIcon>
				</div>
				<div className={styles.modalBody}>
					{children}
				</div>
			</div>
		</div>
	)
}
