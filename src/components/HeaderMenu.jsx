import React from 'react';
import { Link } from 'react-router-dom';

import styles from './HeaderMenu.module.scss';

const HeaderMenu = () => {
	return (
		<div className={styles.headerMenu}>
			<Link to={'/'} className={styles.home__btn}>Home</Link>
			<h1 className={styles.title}>Score: 12</h1>
			<button className={styles.pause__btn}>Pause</button>
		</div>
	)
}

export default HeaderMenu;