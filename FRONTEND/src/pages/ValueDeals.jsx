import React from 'react'
import Deals from '../components/Deals'

const ValueDeals = (props) => {
  return (
    <>
    <img src={props.banner} alt="" className="w-full h-60 lg:h-100" />
    <Deals/>
    </>
  )
}

export default ValueDeals