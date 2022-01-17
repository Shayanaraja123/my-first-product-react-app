import React from 'react'
import "./landie.css"
import introImage from "../../../assests/herosecimage.png"
const Landie = () => {
    return (
        <div className='container'>
           <div  className='hero-section'>
               <div  className='intro-sec'>
                   <h1>Introduce Your Product Quickly & Effectively </h1>
                   <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
<div className='intro-buttons'>
                     
                   <button className='purchase-button'>Purchase UI Kit</button>
                   
               
               <button className='Learn-button'>Learn More </button>  
               
               </div>
               </div>
               <div className='intro-image'>
            <img src={introImage} />
               </div>
           </div>
        </div>
    )
}

export default Landie
