import React from 'react'

import Header from '../components/Header';
import Intro from '../components/Intro';

const Home = () => {
	return (
		<div className="home">
			<Header title={'React Space Invaders'} />
			<Intro />
		</div>
	)
}

export default Home;