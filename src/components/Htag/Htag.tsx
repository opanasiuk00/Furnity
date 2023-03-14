import React from 'react';
import styles from './Htag.module.css';
import { HtagProps } from './Htag.props';

export const Htag = ({ children, tag, color = 'black', className = '', ...props }: HtagProps): JSX.Element => {
	const Tag = tag;

	return <Tag
		className={`${styles[tag]} ${className} ${styles[color]}`}
		{...props}
	>
		{children}
	</Tag>
};