import React from 'react';
import './Header.css';
import { CiAirportSign1, CiHeart, CiSearch, CiShoppingCart, CiUmbrella, CiUser } from 'react-icons/ci';




const Header = () => {
    return (
        <section className=' h-wrapper'>
            <div className='paddings flexCenter container'>
            <div className='flexCenter appbar'>
                <div className='left-appbar'>
                    <div>
                        <text className='h-second'>
                            Free shipping
                        </text>
                        <text classname='h-first'>&nbsp;orders for all item </text>
                    </div>
                </div>
                <div className='flexCenter appbar-right'>
                    <div className='flexCenter search-bar'>
                        <input type='text'></input>
                        <div className='search'>
                            <CiSearch size="10px" />

                        </div>


                    </div>
                    <div className='flexColStart likes'>
                        <CiHeart />
                    </div>
                    <div className=' flexColStart account'>

                        <CiUser />
                    </div>
                    <div className='flexColStart cart'>

                        <CiShoppingCart />
                    </div>
                </div>




            </div>
            <div className='flexCenter paddings innerWidth h-container'>
                <img src="./Assets/Homepage/facebook.png" alt="facebook" width={20} />
                <div className='flexCenter h-menu'>
                    <a href="">Apple</a>
                    <a href="">Samsung</a>
                    <a href="">Reapair tools</a>
                    <a href="">About us</a>
                    <a href="">Contact</a>

                </div>

                <button className='button'>
                    <a href="">About us</a>
                </button>


            </div>
            </div>
           
        </section>
    )
}

export default Header
