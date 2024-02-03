import React from 'react'
import './Products.css'
import data from '../../Utils/products.json'
import {Row,Card} from 'react-bootstrap'  

const Products = () => {
  return (
    <section className='p-wrapper'>
        <div className='paddings innerWidth flexColCenter p-container'>
        <h1>
                Leatest Product
                </h1>
            <div className='flexRowCenter products' >
                {
                    data.slice(0,4).map((card, i)=>(
                        <Card className='' style={{width:"20%"}} key={i}>
                            <img src= {card.image} width={120} height={200}/>
                            <h1>
                                {card.des}
                            </h1>
                            <button className='button'>
                            <a href="">shop now</a>
                            </button>
                            </Card>
                        
                        

                    ))
                }
                

            </div>
            <div className='flexCenter products' >
                {
                    data.slice(5,8).map((card, i)=>(
                        <Card className='' style={{width:"20%"}} key={i}>
                            <img src= {card.image} width={120} height={200}/>
                            <h1>
                                {card.des}
                            </h1>
                            <button className='button'>
                            <a href="">shop now</a>
                            </button>
                            </Card>
                        
                        

                    ))
                }
                

            </div>

        </div>

    </section>
  )
}

export default Products
