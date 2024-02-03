import React from 'react';
import './Header.css';
import { CiAirportSign1, CiHeart, CiSearch, CiShoppingCart, CiUmbrella, CiUser } from 'react-icons/ci';
import { IoCarOutline } from 'react-icons/io5';




const Header = () => {
    return (
        <section className=' h-wrapper'>
            <div className='paddings innerWidth flexCenter  container'>
                <div className='flexColCenter'>
                <div className='flexRowCenter appbar'>
                <div className=' left-appbar'>
                    
                        <text className='h-second'>
                            Free shipping
                        </text>
                        <text classname='h-first'>&nbsp;orders for all item </text>
                    
                </div>
                <div className='flexCenter appbar-right'>
                    <div className='flexCenter search-bar'>
                        <input type='text'></input>
                        <div className='search'>
                            <CiSearch size="10px" />

                        </div>


                    </div>
                    <div className='flexRowCenter likes'>
                        <CiHeart />
                    </div>
                    <div className=' flexRowCenter account'>

                        <CiUser />
                    </div>
                    <div className='flexRowCenter cart'>

                        <CiShoppingCart />
                    </div>
                </div>




            </div>
            <div className='flexCenter h-container'>
                <img src="./Assets/Homepage/facebook.png" alt="facebook" width={20} />
                <div className='flexCenter h-menu'>
                    <a href="">Apple</a>
                    <a href="">Samsung</a>
                    <a href="">Reapair tools</a>
                    <a href="">About us</a>
                    <a href="">Contact</a>

                </div>

                <button className='button'>
                    <a href="">
                        
                    </a>
                </button>


            </div>

                </div>
            
            </div>
           
        </section>
    )
}

export default Header
