import React from "react";
import Navbar from "./Navbar";
import HeaderText from "./HeaderText";

function Header(){
    return(
        <div id="main">
            <Navbar />
            <div className="name">
                <HeaderText />
                <h1>Increase your productivity</h1>
                <p className="details">REALLY boost your productivty. We’re not kidding. 
                Keep track of your to-dos and tag them to your goals.</p>
                <a href='#download' className='cv-btn'>Download Now</a>
            </div>
        </div>
    )
}

export default Header;