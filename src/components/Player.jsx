import React from 'react';

import styles from './Player.module.scss';

const Player = ({ x, y }) => {
	return (
		<div className={styles.player} style={{
			position: 'absolute',
			left: x - 50 / 2,
			top: y - 30 / 2,
			width: '2.5rem',
			height: '1.5rem',
			background: 'white',
			backgroundImage: 'url(../assets/spaceship.svg)',
			}} 
		/>
	)
}

export default Player;