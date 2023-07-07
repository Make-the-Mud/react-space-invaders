import React from 'react'


import Header from '../components/Header';
import ScoreTable from '../components/ScoreTable';

const Scores = () => {
	return (
		<>
			<Header title={'Scores - Top 10'}/>
			<ScoreTable 
			points1={'99'}
			points2={'83'}
			points3={'71'}
			points4={'54'}
			points5={'47'}
			points6={'39'}
			points7={'36'}
			points8={'31'}
			points9={'22'}
			points10={'20'}
			 />
		</>
	)
}

export default Scores;