import React from 'react'
import './About.css'

const About = () => {
  return (
   <section classname='a-wrapper' >
    <div className='paddings innerWidth flexCenter a-container'>
        <div className='flexColCenter paddings about-us'>
        <img src='./Assets/Homepage/facebook.png' width={70}/>
        <h1>
            About us
        </h1>
        <span>
        Established in 2011 in Shenzhen, Faruix specializes in manufacturing and selling mobile phone accessories, including LCD screens,
        </span>
        <span>
        batteries, and spare parts for phone repairs. Our products are exported to over 50 countries, such as the USA, Europe, and Dubai. We offer
        </span>
        <span>
        OEM & ODM customized services, fostering successful partnerships. Our products adhere to international standards with certifications like
        </span>
        <span>
        ISO9001, RoHS, EMC, CE, FCC, EC CA65, and 2006/66/EC. Faruix focuses on cutting-edge phone screen technologies like TFT, Incell, Hard 
        </span>
        <span>
     warehouses in Europe, the USA, and Dubai. Additionally, we contribute to environmental protection by recycling and refurbishing broken 
        </span>
        <span>
        screens, housing, and electronic waste in our Recycling program.
        </span>
        </div>
        <div className='aims paddings innerWidth  flexCenter'>
            <div className='flexColCenter vision'>
            <img src='./Assets/Homepage/facebook.png' width={30}/>
            <h1 className='heading'>Vision</h1>
            <span className='greyText'>To be a Global Leading Mobile
                  </span>
                  <span className='greyText'>
                  Phone Repair Accessories
                  </span>
                  <span className='greyText'>
                  Solutions Provider.
                  </span>
 
            </div>
            <div className='flexColCenter mission'>
            <img src='./Assets/Homepage/facebook.png' width={30}/>
            <h1 className='heading'>Mission</h1>
            <span className='greyText'>To Provide One Stop 
                  </span>
                  <span className='greyText'>
                  Mobile Phone Repair Platform.                  
                  </span>
            </div>
            <div className='flexColCenter values'>
            <img src='./Assets/Homepage/facebook.png' width={30}/>
            <h1 className='heading'>Values</h1>
            <span className='greyText'>Integrity, Honesty, 
                  </span>
                  <span className='greyText'>
                  Service First, Quality Best.
                  </span>
            
 
            </div>
            <div className='flexColCenter culture'>
            <img src='./Assets/Homepage/facebook.png' width={30}/>
            <h1 className='heading'>Culture</h1>
            <span className='greyText'>Be Optimistic And Brave, 
                  </span>
                  <span className='greyText'>
                  Hard Work, Keep Learning,
                  </span>
                  <span className='greyText'>
                  Rapid Growth.
                  </span>
 
            </div>
        </div>
    </div>
   </section>
  )
}
  
export default About
