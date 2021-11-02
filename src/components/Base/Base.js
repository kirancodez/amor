import React, { useEffect, useState } from "react";
import Navigation from "./navigationBar";
import "./base.css";
import loader from "../../assets/loading.gif" 
import logo from "../../assets/logo.png"
import {NavLink} from "react-router-dom"
const Base = ({children}) => {
    
    const [ loading, setLoading ] = useState(true);
    useEffect(() => {
        setLoading(false);
    })

    return(
        <div>
            {loading ? 
                <div>
                    <img className="spinner" src={loader} />
                </div>
            : 
            <div>
                <Navigation/>
                {children}
                <footer>
            <div className="container">
                <div className="row">
                             
                <div className="col-md-3 abt-company">
                    <img src={logo} className="img-fluid" />
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in , making it over 2000 years old.</p>
                </div>
                <div className="col-4 col-md-2 company">
                        <h6>Company</h6>
                        <p><NavLink exact={true} activeClassName='is-active' to='/'>Home</NavLink></p>
                        <p><NavLink exact={true} activeClassName='is-active' to='/about'>About us</NavLink></p>
                        <p><NavLink exact={true} activeClassName='is-active' to='/services'>Services</NavLink></p>
                        <p><NavLink exact={true} activeClassName='is-active' to='/contact-us'>Contact Us</NavLink></p>
                    </div>
                    <div className="col-7 col-md-2">
                        <h6>Services</h6>
                        <p><NavLink exact={true} activeClassName='is-active' to='/service/medical-transcription'>Medical Transcription</NavLink></p>
                        <p><NavLink exact={true} activeClassName='is-active' to='/service/medical-scribing'>Medical Scribing</NavLink></p>
                        <p><NavLink exact={true} activeClassName='is-active' to='/service/medical-coding'>Medical Coding</NavLink></p>
                        <p><NavLink exact={true} activeClassName='is-active' to='/service/web-development'>Software Development</NavLink></p>
                    </div>
                <div className="col-md-3 policyes">
                    <h6>About</h6>
                    
                    <p><NavLink exact={true} activeClassName='is-active' to='/privacy-policy'>Privacy Policy</NavLink></p>
                    <p><NavLink exact={true} activeClassName='is-active' to='/terms-condition'>Terms & Condition </NavLink></p>
                </div>
                </div>
            </div>
            <hr/>
            <div className="powered text-center pt-2 mx-2">
                <p>Powered by <a href="http://digicartonline.com" target="_blank" >Digicart</a></p>
            </div>
        </footer>
            </div>
            }
        
        </div>
    )
}

export default Base;