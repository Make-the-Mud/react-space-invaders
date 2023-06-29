import React from 'react';
import styles from './Header.module.scss';



const Header = () => {
	return (
		<div className={styles.header}>
			<h1 className={styles.title}>React Space Invaders</h1>
		</div>
	)
}

export default Header;