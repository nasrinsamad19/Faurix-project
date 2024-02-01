import React from 'react'
import "./Items.css"
import { GiBattery50 } from "react-icons/gi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CgSmartphoneChip } from "react-icons/cg";
import { LuCable } from "react-icons/lu";
import { TfiHeadphone } from "react-icons/tfi";
import { IoIosSquareOutline } from "react-icons/io";




function Items() {
  return (
    <section className='items-wrapper'>
        <div className='paddings innerWidth flexCenter items-contaier'>
        <div className='flexColCenter batteries'>
            <span>
            <GiBattery50 />

            </span>
            <span className='t-batteries'>
            Phone Batteries
            </span>
                        
                    </div>
                    <div className='flexColCenter display'>
            <span>
            < IoPhonePortraitOutline />

            </span>
            <span className='t-display'>
            Phone display
                        </span>
                        
                    </div>
                    <div className='flexColCenter adapters'>
            <span>
            < CgSmartphoneChip />

            </span>
            <span className='t-adapters'>
            Adapters
                        </span>
                        
                    </div>
                    <div className='flexColCenter parts'>
            <span>
            < CgSmartphoneChip />

            </span>
            <span className='t-parts'>
            iPhone parts
                        </span>
                        
                    </div>
                    <div className='flexColCenter cable'>
            <span>
            < LuCable />

            </span>
            <span className='t-cable'>
            Charging cable
                        </span>
                        
                    </div>
                   
                    <div className='flexColCenter headphones'>
            <span>
            < TfiHeadphone />

            </span>
            <span className='t-headphones'>
            Headphones
                        </span>
                        
                    </div>
               
        </div>
        
        
        <hr/>
       

    </section>
  )
}

export default Items
