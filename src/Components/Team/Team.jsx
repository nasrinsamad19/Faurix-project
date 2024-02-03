import React from 'react'
import './Team.css'
import data from '../.././Utils/team.json'

const Team = () => {
  return (
    <section className='t-wrapper'>
        <div className='innerWidth paddings flexColCenter t-container'>
      
            <div className='flexColCenter  heading'>
                <h1>
                    Our team
                    </h1> 
                    <span>
                    Faces Behind the Excellence
                    </span>

            </div>
            <div className='flexCenter team-list'>
                {
                     
                    data.slice(0,3).map((list,i)=>  (
                       
                        <div className='flexColCenter t-list'>
                         <img src= {list.image}width={150}height={150}/>
                         <h1>
                            {list['team-name']}
                         </h1>
                         <h2>
                            {list.designation}
                         </h2>

                            
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

export default Team
