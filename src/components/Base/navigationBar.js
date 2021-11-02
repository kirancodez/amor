import React, { useRef, useState } from "react";
import logo from "../../assets/logo.png"
import {NavLink} from "react-router-dom"

const Navigation = () => {
    
    const [ navigation, setNavigation ] = useState(false)
    const active = useRef(null)
    
    return(

        <div className="container navigation__wrapper">
            <NavLink exact={true} activeClassName='is-active' to='/'><img src={logo} /></NavLink>
            
            <a href="#" className="toggle-button" onClick={() => {setNavigation(!navigation)}}>
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
            </a>
            <nav>
                <ul className={navigation ? "active" : ""} ref={active} >
                    <NavLink exact={true} activeClassName='is-active' to='/'>Home</NavLink>
                    <NavLink exact={true} activeClassName='is-active' to='/about'>About us</NavLink>
                    <NavLink exact={true} activeClassName='is-active' to='/services'>Services</NavLink>
                    <NavLink exact={true} activeClassName='is-active' to='/contact-us'>Contact Us</NavLink>
                </ul>
            </nav>
            <NavLink exact={true} activeClassName='is-active' to='/request-quote' className="btn quote-btn">Request Quote</NavLink>
        </div>
    )
}

export default Navigation;