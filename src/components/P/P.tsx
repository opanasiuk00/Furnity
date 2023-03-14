import React from 'react';
import styles from './P.module.css';
import { PProps } from './P.props';

export const P = ({ children, color = 'black', className = '', ...props }: PProps): JSX.Element => {
	return (
		<p
			className={`${styles.p} ${className} ${styles[color]}`}
			{...props}
		>
			{children}
		</p>
	)
};
