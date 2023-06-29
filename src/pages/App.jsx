import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Home';
import Game from './Game';
import Scores from './Scores';
import NotFound from './NotFound';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route path={"/game"} element={<Game />} />
        <Route path={"/scores"} element={<Scores />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
