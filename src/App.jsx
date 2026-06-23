import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import AR from './pages/AR';
import LandingPage from './pages/LandingPage';
import Doa from './pages/Doa';
import Guide from './pages/ARGuide';


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

        
        <Route
          path='/guide'
          element={<Guide/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App