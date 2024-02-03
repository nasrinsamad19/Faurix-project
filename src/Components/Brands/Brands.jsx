import React from 'react'
import './Brands.css'

function Brands() {
  return (
   <section className='b-wrapper'>
    <div className='paddings innerWidth flexCenter  b-container'>
    <div className='flexColCenter brand-titles'>
    <h1>
        Agent Brands

        </h1>
        <span>
        Rich product resources, quality assurance, stable supply chain.

        </span>
    </div>
    <div className='flexCenter brands'>
        <div className='flexColCenter paddings rj'>
            <img src='./Assets/Homepage/img-2@2x.png' width={70} height={200}/>
            <button className='button'>
                    <a href="">RJ brand</a>
                </button>

        </div>
        <div className='flexColCenter paddings jk'>
            <img src='./Assets/Homepage/img-2@2x.png' width={100} height={300}/>
            <button className='button'>
                    <a href="">JK brand</a>
                </button>

        </div>
        <div className='flexColCenter paddings zy'>
            <img src='./Assets/Homepage/img-2@2x.png' width={70} height={200}/>
            <button className='button'>
                    <a href="">ZY brand</a>
                </button>

        </div>

    </div>
    <div className='flexColCenter paddings innerWidth brand-series'>
        <h1>Five Brand Series Screen</h1>
        <div className='flexCenter paddings series'>
            <div className='flexColCenter s'>
            <img src='./Assets/Homepage/facebook.png' width={40}/>
        <img src='./Assets/Homepage/sample.png' width={120} height={200}/>

            </div>
            <div className='flexColCenter s'>
            <img src='./Assets/Homepage/facebook.png' width={40}/>
        <img src='./Assets/Homepage/sample.png' width={120} height={200}/>

            </div>
            <div className='flexColCenter s'>
            <img src='./Assets/Homepage/facebook.png' width={40}/>
        <img src='./Assets/Homepage/sample.png' width={120} height={200}/>

            </div>
            <div className='flexColCenter s'>
            <img src='./Assets/Homepage/facebook.png' width={40}/>
        <img src='./Assets/Homepage/sample.png' width={120} height={200}/>

            </div>
        
        </div>

    </div>
        


    </div>

   </section>
  )
}

export default Brands
