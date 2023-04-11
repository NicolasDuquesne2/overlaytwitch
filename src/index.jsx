import React from 'react'
import {createRoot} from 'react-dom/client'
import Home from './pages/Home'
import Game from './pages/Game'
import Ending from './pages/Ending'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Redux'
import "./main.css"


const root = createRoot(document.getElementById('root'));
root.render(
  <Router >
    <Provider store={store}>
      <Routes >
          <Route exact path="/" element={ <Home route="home" numOfFollowers="" lastFollower=""/>} />
          <Route path="/game" element={ <Game route="game" numOfFollowers="" lastFollower=""/>} />
          <Route path="/ending" element={<Ending route="ending" numOfFollowers="" lastFollower=""/>} />
      </Routes>
    </Provider>
  </Router>
)
