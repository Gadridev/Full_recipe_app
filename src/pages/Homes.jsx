import React from 'react'
import Categorie from '../Components/Categorie'
import Popular from '../Components/Popular'
import Veggine from '../Components/Veggine'
import {motion} from 'framer-motion'


function Homes() {
  return (
    <motion.div
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    
    >
      <Veggine />
      <Popular />
    </motion.div>
  )
}

export default Homes
