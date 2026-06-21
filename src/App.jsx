import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import AR from './pages/AR';
import LandingPage from './pages/LandingPage';

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
      </Routes>
    </BrowserRouter>
  )
}

export default App