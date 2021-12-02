import React from 'react';
import FeatureBox from './FeatureBox';
import map from '../images/map.svg';
import privacy from '../images/privacy.svg';
import simple from '../images/simple.svg';
import { useInView } from "react-intersection-observer";

function Feature() {

    const { ref, inView } = useInView({
        threshold: 0.4,
      });

    return (
        <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
            <div id='features'>
                <div className="a-container">
                    <FeatureBox image={map} title='Automatically mapped tasks' details='Created tasks are mapped to your Productivity Rings to give you a visual representation of your to-do list' />
                    <FeatureBox image={privacy} title='Data Privacy' details='We don’t store or collect any of your data. All you information is on your phone and your phone only' />
                    <FeatureBox image={simple} title='Simple and intuitive format' details='Your completed tasks and events are stored in an intuitive and easy-to-track format under goal statistics' />
                </div>
            </div>
        </div>
    )
}

export default Feature
