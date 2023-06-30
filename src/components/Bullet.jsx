import React from 'react';

const BULLET_WIDTH = 5;
const BULLET_HEIGHT = 15;

const Bullet = ({ x, y }) => {
	return (
		<div style={{
			position: 'absolute',
      left: x - BULLET_WIDTH / 2,
      top: y - BULLET_HEIGHT / 2,
      width: BULLET_WIDTH,
      height: BULLET_HEIGHT,
      background: 'red',
			}}
		/>
	)
}

export default Bullet;