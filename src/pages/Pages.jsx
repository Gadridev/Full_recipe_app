import React from 'react'
import Categorie from '../Components/Categorie'
import Homes from './Homes'
import {Route,Routes, useLocation } from 'react-router-dom'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipe from './Recipe'
import { AnimatePresence } from 'framer-motion'




function Pages() {
  const location =useLocation();
  return (
    <div>
      <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Homes />} />
        <Route path='/Cuisine/:type' element={<Cuisine />} />
        <Route path='/Searched/:search' element={<Searched />} />
        <Route path='/recipe/:name' element={<Recipe />} />
      </Routes>
      </AnimatePresence>
      
    </div>
  )
}

export default Pages
