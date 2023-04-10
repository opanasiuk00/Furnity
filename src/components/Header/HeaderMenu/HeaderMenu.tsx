import React, { useState } from 'react';
import { handleScroll } from '../../../utils/ScrollToElement';
import { ShopMenu } from '../../ShopMenu/ShopMenu';
import styles from './HeaderMenu.module.css';
import { OpenMenuIcon } from '../../Icons/OpenMenuIcon';
import { CloseMenuIcon } from '../../Icons/CloseMenuIcon';
import { ButtonIcon } from '../../Buttons/ButtonIcon/ButtonIcon';

export const HeaderMenu = (): JSX.Element => {

	const [mobileMenu, setMobileMenu] = useState(false);

	const handleMenu = () => {
		setMobileMenu(prev => !prev);
	}

	return (
		<>
			<div className={styles.headerMobile}>
				<ButtonIcon variant='ghost' title={!mobileMenu ? 'open menu' : 'close menu'} onClick={handleMenu}>
					{
						!mobileMenu ?
							<OpenMenuIcon />
							:
							<CloseMenuIcon />
					}
				</ButtonIcon>
			</div>
			<ShopMenu className={`${styles.headerMenu} ${mobileMenu ? styles.headerMenuActive : ''}`} handleScroll={handleScroll} />
		</>
	)
};
