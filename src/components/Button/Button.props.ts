import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode;
	color?: 'pink' | 'orange' | 'ghost';
	size?: 's' | 'm' | 'l' | 'svg';
	active?: boolean;
	disabled?: boolean;
}