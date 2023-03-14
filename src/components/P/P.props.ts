import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	children: ReactNode;
	color?: 'black' | 'black-light' | 'white' | 'gray';
}