import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import AR from './pages/AR';
import LandingPage from './pages/LandingPage';
import Doa from './pages/Doa';


const App = () => {
  return (
    <BrowserRouter basename="/islamic-burial-ar/">
      <Routes>
        <Route
          path='/'
          element={<LandingPage />}
        />

        <Route
          path='/home'
          element={<Home />}
        />

        <Route
          path='/ar'
          element={<AR/>}
        />

        <Route
          path='/doa'
          element={<Doa/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App