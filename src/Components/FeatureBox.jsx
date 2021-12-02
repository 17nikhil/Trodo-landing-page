import React from 'react'

function FeatureBox(props) {
    return (
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image} alt='Image of the three main features of Trodo'/>
            </div>
            <div className='s-b-text'>
                <h2>{props.title}</h2>
                <p>{props.details}</p>
            </div>
        </div>
    )
}

export default FeatureBox
