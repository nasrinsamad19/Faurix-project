import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    
     <section className='hero-wrapper'>
        <div className=' paddings innerWidth flexCenter  hero-container'>
            < div className='flexColStart paddings  title'>
                <div className=' title1'>
                <h1>
            100% genuine Products
            </h1>
            </div>
            <div className='flexColStart  des'>
                <span>
                Faruix makes  
                </span><span>
                the world more
                </span><span>
                environmental!
                </span>

            </div>
            <button className='button'>
                    <a href="">shop now</a>
                </button>
                </div>
            

        </div>
       {/*<div className='flexCenter hero-right'>
            <div className='image-container'>
                <img src='./Assets/Homepage/iphonedemo.jpeg'></img>
  </div>

  </div>*/}
        </section> 
    
  )
}

export default Hero
