import React from 'react'
import './Blogs.css'
import data from '../.././Utils/blogs.json'

function Blogs() {
  return (
    <section className='b-wrapper'>
        <div className='flexCenter paddings innerWidth b-container'>
        <div className='flexColCenter  b-heading'>
                <h1>
                Leatest Blogs
                </h1> 
            </div>
            <div className='flexCenter b-section'>
            {    
                     data.slice(0,3).map((list,i)=>  (  
                         <div className='flexColStart blogs's>
                          <img src= {list.image}width={270}height={150}/>
                          <text>
                            {list.date}
                          </text>
                          <h1>
                             {list.des}
                          </h1>
                          <a href=''>
                            Read more

                          </a>
 
                             
                             </div>
 ))
 
                 }
 
  

            </div>
            <button className='button'> 
            <a href=''>
                            view all

                          </a>


            </button>

        </div>

    </section>
    
  )
}

export default Blogs
