import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Intro.module.scss';

import spaceship from '../assets/spaceship.svg';
import alien_1 from '../assets/alien-1.svg';
import alien_2 from '../assets/alien-2.svg';
import alien_3 from '../assets/alien-3.svg';
import alien_4 from '../assets/alien-4.svg';
import alien_5 from '../assets/alien-5.svg';

const Intro = () => {
	return (
		<div className={styles.intro}>
			<div className={styles.btns}>
				<Link to='/game' className={styles.play_btn}>Play</Link>
				<Link to='/scores' className={styles.scores_btn}>Scores</Link>
			</div>
			<img className={styles.spaceship} src={spaceship} alt="Spaceship" />
			<img className={styles.alien__1} src={alien_1} alt="Alien 1" />
			<img className={styles.alien__2} src={alien_2} alt="Alien 2" />
			<img className={styles.alien__3} src={alien_3} alt="Alien 3" />
			<img className={styles.alien__4} src={alien_4} alt="Alien 4" />
			<img className={styles.alien__5} src={alien_5} alt="Alien 5" />
		</div>
	)
}

export default Intro;