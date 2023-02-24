import React from 'react'
import bannervideo from '../../../assest/'
import '../../Shared/Css/style.css'

const Banner = () => {
  return (
    <div className='banner' >
        <video autoPlay loop muted>
            <source src={bannervideo} type="video/mp4"/>
        </video>
      <div className='flex justify-center items-center content '>
     <h1 className='banner-text  font-extrabold text-transparent text-3xl md:text-5xl xl:text-7xl text-[#c7d0e9]'>Let's Start Course_ <br/>for Your Career</h1>
      </div>
    </div>
  )
}

export default Banner
