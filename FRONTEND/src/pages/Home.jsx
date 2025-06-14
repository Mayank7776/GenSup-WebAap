import React from 'react'
import Slider from '../components/Slider'
import Popular from '../components/Popular'
import BrandBanner from '../components/BrandBanner'
import ExclusiveBanner from "../components/ExclusiveBanner"

const home = () => {
  return (
    <div className='bg-[#f9f9f9]'>
    <Slider/>
    <BrandBanner/>
    <Popular/>
    <ExclusiveBanner />
    </div>
  )
}

export default home 