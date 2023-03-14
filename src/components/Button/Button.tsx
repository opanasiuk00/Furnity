import React from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

export const Button = ({ children, className = '', color = 'orange', size = 's', active = false, disabled = false, ...props }: ButtonProps): JSX.Element => {
	return (
		<button
			className={`${styles.button} ${className} ${styles[color]} ${styles[size]} ${active ? styles[`${color}Active`] : ''}`}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	)
};
