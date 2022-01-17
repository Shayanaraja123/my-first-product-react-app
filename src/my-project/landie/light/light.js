import React from 'react'
import "./light.css"
import titlelogo from '../../../assests/titlelogo.png'
import gf from '../../../assests/gf.png'
const light = () => {
    return (
        <div className='container'>
            <div className='light-content'>
                <div className='light-fast'>
                    <h1>Light, Fast Poweful</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
               
                <div className='titles'>
                <div className="title">
                <img src={titlelogo} />
                <h4>Title Goes Here</h4>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                </div>

                <div className="title">
                <img src={titlelogo} />
                <h4>Title Goes Here</h4>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                </div>
                </div>
                </div>
                <div className='light-image'>
                <img src={gf} />
                </div>
            </div>
        </div>
    )
}

export default light
