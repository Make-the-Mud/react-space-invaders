import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ScoreTable.module.scss';

import gold from '../assets/gold-crown.svg';
import silver from '../assets/silver-crown.svg';
import bronze from '../assets/bronze-crown.svg';


const ScoreTable = ({points1, points2, points3, points4, points5, points6, points7, points8, points9, points10}) => {
	return (
		<div className={styles.score__table}>
			<div className={styles.table}>
				<div className={styles.table__column1}>	
					<div className={styles.tops}>
						<img src={gold} alt="Top 1" />
						<span>..............................................</span>
						<p className={styles.points}>{points1}</p>
					</div>
					
					<div className={styles.tops}>
						<img src={silver} alt="Top 2" />
						<span>..............................................</span>
						<p className={styles.points}>{points2}</p>
					</div>
					
					<div className={styles.tops}>
						<img src={bronze} alt="Top 3" />
						<span>..............................................</span>
						<p className={styles.points}>{points3}</p>
					</div>
					
					<div className={styles.tops}>
						<p className={styles.top}>4</p>
						<span>..............................................</span>
						<p className={styles.points}>{points4}</p>
					</div>

					<div className={styles.tops}>
						<p className={styles.top}>5</p>
						<span>..............................................</span>
						<p className={styles.points}>{points5}</p>
					</div>
				</div>

				<div className={styles.table__column2}>
					<div className={styles.tops}>
						<p className={styles.top}>6</p>
						<span>..............................................</span>
						<p className={styles.points}>{points6}</p>
					</div>

					<div className={styles.tops}>
						<p className={styles.top}>7</p>
						<span>..............................................</span>
						<p className={styles.points}>{points7}</p>
					</div>

					<div className={styles.tops}>
						<p className={styles.top}>8</p>
						<span>..............................................</span>
						<p className={styles.points}>{points8}</p>
					</div>

					<div className={styles.tops}>
						<p className={styles.top}>9</p>
						<span>..............................................</span>
						<p className={styles.points}>{points9}</p>
					</div>

					<div className={styles.tops}>
						<p className={styles.top}>10</p>
						<span>..............................................</span>
						<p className={styles.points}>{points10}</p>
					</div>
				</div>
			</div>
			<Link className={styles.ok__btn} to={'/'}>OK</Link>
		</div>
	)
}

export default ScoreTable;