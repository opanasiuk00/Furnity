import React, { ReactNode } from 'react';
import styles from './ButtonIcon.module.css';

export const BUTTON_ICON_TEST = {
	CONTAINER: 'button-container'
}

export type ButtonIconVariant = 'pink' | 'orange' | 'ghost';

export interface ButtonIconProps extends React.ComponentPropsWithoutRef<'button'> {
	children: ReactNode;
	variant: ButtonIconVariant;
	title: string;
}

export const ButtonIcon = ({ children, variant, title, className = '', ...props }: ButtonIconProps): JSX.Element => {
	return (
		<button
			className={`${styles.button} ${className} ${styles[variant]}`}
			data-testid={BUTTON_ICON_TEST.CONTAINER}
			{...props}
		>
			<span className={styles.title}>{title}</span>
			<span className={styles.content}>{children}</span>
		</button>
	)
};
