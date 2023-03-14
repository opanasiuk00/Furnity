import React from 'react';
import styles from './Container.module.css';
import { ContainerProps } from './Container.props';

export const Container = ({ children, className = '', ...props }: ContainerProps): JSX.Element => {
	return (
		<div
			className={`${styles.container} ${className}`}
			{...props}
		>
			{children}
		</div>
	)
};
