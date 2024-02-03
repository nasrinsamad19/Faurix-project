import React from 'react'
import './Footer.css'
import { CiLocationOn, CiMail, CiPhone } from 'react-icons/ci'

function Footer() {
  return (
    <section className='f-wrapper'>
        <div className=' innerWidth flexCenter paddings f-container'>
            <div className=' division'>
                <div className='flexColStart division-one'>
                    <h1>
                        R Faurix
                    </h1>
                    <span className='bottom-padding '>
                    Faruix specializes in manufacturing and selling mobile phone accessories, including LCD screens, batteries, and spare parts for phone repairs.
                    </span>
                    <div className='bottom-padding'>
                    <CiLocationOn className='  location'></CiLocationOn>
                    <text>254 Lillian Blvd, Holbrook</text>
                    </div >
                    <div className='bottom-padding right-padding'>
                    <CiPhone className='  phone'></CiPhone>
                    <text>1-800-654-3210</text>
                    </div>
                    <div>
                    <CiMail className='mail'></CiMail>
                    <text>info@faruix.com</text>
                    </div>

                </div>
                <div className='flexColStart  division-two'>
                    <h1 className='bottom-padding'>
                    Information
                    </h1>
                    <a className='bottom-padding' href='' >
                    New Products 
                    </a>
                    <a className='bottom-padding' href=''>
                     Offer Products 
                    </a>
                    <a className='bottom-padding' href=''>
                     Special offer 
                    </a>
                    <a  className='bottom-padding'href=''>
                     Best Seller 
                    </a>
                    <a className='bottom-padding' href=''>
                    Terms and conditions 
                    </a>
                    <a className='bottom-padding' href=''>
                    About Our Shop
                    </a>
                </div>
                <div className='flexColStart division-three'>
                    <h1 className='bottom-padding'>
                    Your Account
                    </h1>
                    
                    <a className='bottom-padding' href=''>
                    Addresses                    </a>
                    <a className='bottom-padding' href=''>
                     Credit slips 
                    </a>
                    <a  className='bottom-padding'href=''>
                     Orders  
                    </a>
                    <a className='bottom-padding' href=''>
                    Personal info 
                    </a>
                    <a className='bottom-padding' href=''>
   My wishlists
                    </a>
                </div>
                <div className='flexColStart botton-padding division-four'>
                <h1 className='bottom-padding f-heading'>
                Sign Up Newslwtter
                    </h1>
                    <span>
                    Get updates by subscribe our weekly 
                    </span>
                    <span className='bottom-padding'>
                    newsletter

                    </span>
                    <div className='flexCenter bottom-padding sub '>
                    <div className='flexCenter bottom-padding sub-bar '>
                    <input type='text'></input>
                    <button className='button'>
                        <a href=''>
                            Subscribe

                        </a>
                    </button>
                    </div>
                  
                    </div>
                    
                    

                </div>

            </div>


        </div>

    </section>
   
  )
}

export default Footer
