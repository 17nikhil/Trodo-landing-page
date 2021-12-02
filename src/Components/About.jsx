import React from 'react';
import { useInView } from "react-intersection-observer";

function About(props) {

    const { ref, inView } = useInView({
        threshold: 0.4,
      });

    /* return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt='supporting image for why trodo?' />
            </div>
            <div className='about-text'>
                <img src={props.icon} alt='icon for the feature' />
                <h2>{props.title}</h2>
                <p>{props.details}</p>
            </div>
        </div>
    ) */

    const renderContent = () => {
        if(!props.flipped){
            return <>
                <div id='about'>
                    <div className='about-image'>
                        <img src={props.image} alt='supporting image for why trodo?' />
                    </div>
                    <div className='about-text'>
                        <img src={props.icon} alt='icon for the feature' />
                        <h2>{props.title}</h2>
                        <p>{props.details}</p>
                    </div>
                </div>
            </>
        }
        else{
            return <>
                <div id='about'>
                    <div className='about-text'>
                        <img src={props.icon} alt='icon for the feature' />
                        <h2>{props.title}</h2>
                        <p>{props.details}</p>
                    </div>
                    <div className='about-image'>
                        <img src={props.image} alt='supporting image for why trodo?' />
                    </div>
                </div>
            </>
        }
    }

    return( 
    <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
        {renderContent()}
    </div>
    )
}

export default About;
