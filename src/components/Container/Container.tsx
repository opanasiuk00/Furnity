import React from 'react';
import styles from './Container.module.css';


export const CONTAINER_TEST = {
	CONTAINER: 'Container-container'
};

export interface ContainerProps extends React.ComponentPropsWithoutRef<'div'> {
	children: React.ReactNode;
};

export const Container = ({ children, className = '', ...props }: ContainerProps): JSX.Element => {
	return (
		<div
			className={`${styles.container} ${className}`}
			data-testid={CONTAINER_TEST.CONTAINER}
			{...props}
		>
			{children}
		</div>
	)
};
