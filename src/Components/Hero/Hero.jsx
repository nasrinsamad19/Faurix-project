import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    
     <section className='hero-wrapper'>
        <div className=' paddings innerWidth flexCenter  hero-container'>
            <div className='flexColCenter'>
            < div className='  title'>
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
       <div className=' hero-right'>
            <div className='image-container'>
                <img src='./Assets/Homepage/sample.png' width={150}height={200}></img>
  </div>
            </div>
            

  </div>
        </section> 
    
  )
}

export default Hero
