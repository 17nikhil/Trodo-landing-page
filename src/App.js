import React from 'react';
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import trodo1 from './images/trodo_01.svg';
import trodo2 from './images/trodo_02.svg';
import trodo3 from './images/trodo_03.svg';
import icon1 from './images/feature_1_icon.svg';
import icon2 from './images/feature_2_icon.svg';
import icon3 from './images/feature_3_icon.svg';
import Presentation from './Components/Presentation';
import Pricing from './Components/Pricing';
import Download from './Components/Download';
import Footer from './Components/Footer';
/* import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor'; */

function App() {

  return (
    <div className="App">
      <Header />
      <Presentation />
      
        <About icon={icon1} image={trodo1} title='Tag your tasks, events and notes to your goals' details='Define your goals and tag every task, event and note to those goals to keep track of them. When you see how much you’ve accomplished after a couple of months, you’ll be amazed with yourself' />
        <About flipped={true} icon={icon2} image={trodo2} title='Complete your Productivity Rings' details='Trodo makes productivity fun by showing you all your tasks in the form of Productivity Rings. Your goal is to complete your rings by the end of the day' />
        <About icon={icon3} image={trodo3} title='See your daily, weekly and monthly stats' details='See your tasks, events and notes in a daily, weekly and monthly view. See your progress with different levels of granularity' />
      
      
        <Feature />
      
      
        <Pricing />
      
      
        <Download />
      
      <Footer />
    </div>
  );
}

export default App;
