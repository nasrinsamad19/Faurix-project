import React from 'react'
import './Gallery.css'
import data from '../.././Utils/gallery.json'

const Gallery = () => {
  return (
    <section className='g-wrapper'>
        <div className='innerWidh paddings flexColCenter g-container'>
        <div className='flexColCenter  g-heading'>
                <h1>
                Video gallery
                                    </h1> 
                    <span>
                    Faruix factory production plant video
                    </span>

            </div>
            <div className='flexCenter team-list'>
                {
                     
                    data.slice(0,3).map((list,i)=>  (
                       
                        <div className='flexColCenter t-list'>
                         <video height={130}>
                            <source src={list.video} width={150}height={150}></source>
                         </video>

                         

                            
                            </div>
))

                }


            </div>
            <button className='button'>
            <a href="">View all</a>
                

            </button>

        </div>

    </section>
  )
}

export default Gallery
