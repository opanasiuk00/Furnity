import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
export interface ModalWindowProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
	children: ReactNode;
	title: string;
	isOpen: boolean;
	onClose: () => void;
	position?: 'leftTop' | 'rightTop' | 'center';
};