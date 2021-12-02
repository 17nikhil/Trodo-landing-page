import React from 'react';
import { useInView } from "react-intersection-observer";

function Pricing() {
    const { ref, inView } = useInView({
        threshold: 0.4,
      });

    return (
        <div id='contact'>
            <h3>Pricing</h3>
            <p>You’d expect that something like this would be expensive. But it’s absolutely free!</p>
            
            <div className='pricingBox'>
                <h3>Trodo<span className='pro'>Pro</span></h3>
                <div className='price'>
                    <h1>$0<span className='month'>/month</span></h1>
                    <div className={inView ? "p-slider p-slider--zoom" : "p-slider"} ref={ref}>
                        <p>Track all your tasks, goals and events simultaneously</p>
                        <p>Tag all your tasks, goals and events to personalized goals</p>
                        <p>View all scheduled tasks and events on the in-built calendar</p>
                        <p>See a breakdown of your daily tasks based on your goals</p>
                    </div>
                </div>
            </div>     
        </div>
    )
}

export default Pricing;
