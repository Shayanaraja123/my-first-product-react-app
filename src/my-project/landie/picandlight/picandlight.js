import React from 'react'
import './picandlight.css'
import pb from '../../../assests/pb.png'
import eg from '../../../assests/eg.png'
import gb from '../../../assests/gb.png'
const picandlight = () => {
    return (
        <>
        <div className='container'>
            <div className='lp-content'>
                <div className='light-pic'>
                <img className='pb-pic' src={pb} />
                </div>
                <div className='light-p'>
                    <h1>Light, Fast & Powerful</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                </div>
            </div>  
        </div>

        
<div className='container'>
<div className='lp-content'>
    <div className='light-pic'>
    <img className='pb-pic' src={gb} />
    </div>
    <div className='light-p'>
        <h1>Light, Fast & Powerful</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
    </div>
</div>  
</div>

<div className='container'>
            <div className='lp-content'>
                <div className='light-pic'>
                <img className='pb-pic' src={eg} />
                </div>
                <div className='light-p'>
                    <h1>Light, Fast & Powerful</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

                        <button className='pur-button'>Purchase Now</button>
                </div>
            </div>  
        </div>
        

        </>
    )
}

export default picandlight
