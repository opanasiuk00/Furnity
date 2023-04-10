import React, { ReactNode } from 'react';
import styles from './Button.module.css';

export const BUTTON_TEST = {
	CONTAINER: 'button-container'
}

export type ButtonVariant = 'pink' | 'orange' | 'ghost';
export type ButtonSize = 's' | 'm' | 'l';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
	children: ReactNode;
	variant: ButtonVariant;
	size?: ButtonSize;
	active?: boolean;
}

export const Button = ({ children, className = '', variant, size = 's', active = false, ...props }: ButtonProps): JSX.Element => {
	return (
		<button
			className={`${styles.button} ${className} ${styles[variant]} ${styles[size]} ${active ? styles[`${variant}Active`] : ''}`}
			data-testid={BUTTON_TEST.CONTAINER}
			{...props}
		>
			{children}
		</button>
	)
};
