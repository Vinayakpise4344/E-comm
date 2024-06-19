import React from 'react'
import Header from '../Components/Footer/Header'
import Popular from '../Components/Popular/Popular'
import Begian from './Begian'
import Offer from '../Components/offers/Offer'
import Newcoll from '../Components/NewColl/Newcoll'
import Newsletter from '../Components/Newsletter/Newsletter'

const Home = () => {
  return (
    <div className='Home'> 
    <Header/>
    <Begian/>
    <Popular/>
    <Offer/>
    <Newcoll/>
    <Newsletter/>
    
    </div>
  )
}

export default Home