import React from 'react';
import styles from './Typography.module.css';

export const TYPOGRAPHY_TEST = {
	CONTAINER: 'Typography-container'
};

export type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'p';
export type TypographyColor = 'black' | 'black-light' | 'white' | 'gray';

export interface TypographyProps extends React.ComponentPropsWithRef<'div'> {
	children: React.ReactNode;
	tag: TypographyTag;
	color?: TypographyColor;
};

export const Typography = ({ children, tag: Tag, color = 'black', className = '', ...props }: TypographyProps): JSX.Element => {

	return <Tag
		className={`${styles[Tag]} ${className} ${styles[color]}`}
		data-testid={TYPOGRAPHY_TEST.CONTAINER}
		{...props}
	>
		{children}
	</Tag>
};