import React from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Redux'
import PageController from './components/PageController'
import "./main.css"


const root = createRoot(document.getElementById('root'));
root.render(
  <Router >
    <Provider store={store}>
      <Routes >
          <Route exact path="/" element={ <PageController route="home" />} />
          <Route path="/game" element={ <PageController route="game"/>} />
          <Route path="/ending" element={<PageController route="ending"/>} />
      </Routes>
    </Provider>
  </Router>
)
