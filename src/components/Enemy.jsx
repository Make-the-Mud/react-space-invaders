import React from 'react';

const ENEMY_WIDTH = 30;
const ENEMY_HEIGHT = 30;

const Enemy = ({ x, y }) => {
	return (
		<div style={{
			position: 'absolute',
      left: x - ENEMY_WIDTH / 2,
      top: y - ENEMY_HEIGHT / 2,
      width: ENEMY_WIDTH,
      height: ENEMY_HEIGHT,
      background: 'green',
			}}
		/>
	)
}

export default Enemy;