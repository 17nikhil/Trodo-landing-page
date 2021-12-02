import React, {useState} from "react";
import logo from "../images/trodo_logo.svg";


function Navbar() {

    /* Using state to check which nav bar needs to render- the normal one or the responsive one with the hamburger icon */
    const [nav, setNav] = useState(false);

    const changeBackground = () =>{
        if(window.scrollY >= 50){
            setNav(true);
        }
        else{
            setNav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);
    return(
        <nav className={nav ? 'nav active' : 'nav'}>
            <a href="index.html" className="logo">
                <img src={logo} alt="trodo logo" />
            </a>
            <input type="checkbox" className='menu-btn' id='menu-btn' />
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className="menu">
                <li><a classname="whytrodo" href="#about">Why Trodo?</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#contact">Pricing</a></li>
                <li><a href="#download">Download</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;