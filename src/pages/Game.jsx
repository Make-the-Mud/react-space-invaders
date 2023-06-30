import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import HeaderMenu from '../components/HeaderMenu';
import Player from '../components/Player';
import Enemy from '../components/Enemy';
import Bullet from '../components/Bullet';

import styles from "./Game.module.scss";

const GAME_WIDTH = 1920;
const GAME_HEIGHT = 870;
const PLAYER_WIDTH = 50;
const PLAYER_HEIGHT = 30;
const ENEMY_WIDTH = 20;
const ENEMY_HEIGHT = 20;
const BULLET_WIDTH = 5;
const BULLET_HEIGHT = 15;

const PLAYER_SPEED = 10;
const ENEMY_SPEED = 3;
const BULLET_SPEED = 5;

const ENEMY_ROWS = 5;
const ENEMY_COLUMNS = 10;

const ENEMY_VERTICAL_PADDING = 70;
const ENEMY_HORIZONTAL_PADDING = 50;


const Game = () => {
	const [playerX, setPlayerX] = useState(GAME_WIDTH / 2);
	const [enemies, setEnemies] = useState([]);
	const [bullets, setBullets] = useState([]);
	const [score, setScore] = useState(0);
	const [isGameOver, setIsGameOver] = useState(false);
	const gameRef = useRef(null);



	const checkCollision = (bullet, enemy) => {
		const bulletLeft = bullet.x - BULLET_WIDTH / 2;
		const bulletRight = bullet.x + BULLET_WIDTH / 2;
		const bulletTop = bullet.y - BULLET_HEIGHT / 2;
		const bulletBottom = bullet.y + BULLET_HEIGHT / 2;

		const enemyLeft = enemy.x - ENEMY_WIDTH / 2;
		const enemyRight = enemy.x + ENEMY_WIDTH / 2;
		const enemyTop = enemy.y - ENEMY_HEIGHT / 2;
		const enemyBottom = enemy.y + ENEMY_HEIGHT / 2;

		return(
			bulletRight >= enemyLeft &&
			bulletLeft <= enemyRight &&
			bulletBottom >= enemyTop &&
			bulletTop <= enemyBottom
		);
	};



	useEffect(() => {
		const handleKeyDown = (event) => {
			if(event.key === 'ArrowLeft') {
				setPlayerX((prevX) => Math.max(prevX - PLAYER_SPEED, PLAYER_WIDTH / 2));
			} else if (event.key === 'ArrowRight') {
				setPlayerX((prevX) => Math.min(prevX + PLAYER_SPEED, GAME_WIDTH - PLAYER_WIDTH / 2));
			} else if (event.key === ' ') {
				setBullets((prevBullets) => [...prevBullets, { x: playerX, y: GAME_HEIGHT - PLAYER_HEIGHT }]);
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [playerX]);



	useEffect(() => {
		const animate = () => {
			if(!isGameOver) {
				setEnemies((prevEnemies) =>
					prevEnemies.map((enemy) => ({
						...enemy,
						y: enemy.y + ENEMY_SPEED,
					}))
				);

				setBullets((prevBullets) =>
					prevBullets.map((bullet) => ({
						...bullet,
						y: bullet.y - BULLET_SPEED,
					}))
				);

				setBullets((prevBullets) =>
					prevBullets.filter((bullet) => bullet.y > 0)
				);

				const isEnemyReachedBottom = enemies.some((enemy) => enemy.y >= GAME_HEIGHT - ENEMY_HEIGHT / 2);
				const isPlayerCollided = enemies.some((enemy) =>
					checkCollision({ x: playerX, y: GAME_HEIGHT - PLAYER_HEIGHT / 2 }, enemy)
				);

				if(isEnemyReachedBottom || isPlayerCollided) {
					setIsGameOver(true);
				} else {
					gameRef.current = requestAnimationFrame(animate);
				}
			}
		};

		gameRef.current = requestAnimationFrame(animate);

		return () => cancelAnimationFrame(gameRef.current);
	}, [isGameOver, enemies, playerX]);



	useEffect(() => {
		const createEnemies = () => {
			const newEnemies = [];

			for (let row = 0; row < ENEMY_ROWS; row++) {
				const y = row * (ENEMY_HEIGHT + ENEMY_VERTICAL_PADDING) + ENEMY_HEIGHT / 2;

				for(let col = 0; col < ENEMY_COLUMNS; col++){
					const x = col * (ENEMY_WIDTH + ENEMY_HORIZONTAL_PADDING) +
            (GAME_WIDTH - (ENEMY_COLUMNS - 1) * (ENEMY_WIDTH + ENEMY_HORIZONTAL_PADDING)) / 2;

					newEnemies.push({ x, y });
				}
			}

			setEnemies(newEnemies);
		};

		createEnemies();
	}, []);



	useEffect(() => {
		const handleCollision = () => {
			bullets.forEach((bullet, bulletIndex) => {
				enemies.forEach((enemy, enemyIndex) => {
					if (checkCollision(bullet, enemy)) {
						setBullets((prevBullets) => prevBullets.filter((_, index) => index !== bulletIndex));
						setEnemies((prevEnemies) => prevEnemies.filter((_, index) => index !== enemyIndex));
						setScore((prevScore) => prevScore + 1);
					}
				});
			});
		};

		handleCollision();
	}, [bullets, enemies]);


	return (
		<div className={styles.game}>
			<HeaderMenu score={score} />
			<div className={styles.game__window} />

			<Player x={playerX} y={GAME_HEIGHT - PLAYER_HEIGHT / 2} />

			{enemies.map((enemy, index) => (
				<Enemy key={index} x={enemy.x} y={enemy.y} />
			))}

			{bullets.map((bullet, index) => (
				<Bullet  key={index} x={bullet.x} y={bullet.y} />
			))}

			{isGameOver && (
				<div className={styles.gameover__window}>
					<div className={styles.gameover__title}>Game Over</div>
					<Link to={'/game'} className={styles.tryagain__btn}>Try again</Link>
				</div>
			)}
		</div>
	);
};



export default Game;