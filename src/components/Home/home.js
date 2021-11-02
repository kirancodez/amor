import React from "react";
import Base from "../Base/Base";
import "./style/home.css";
import banner from "../../assets/banner.jpg";
import user from "../../assets/users.png";
import doc from "../../assets/doc.png";
import contact from "../../assets/contact.png";
import ServiceList from "./serviceList";
import {NavLink} from "react-router-dom"

const Home = () => {
    return(
        <Base>
            <div>
                
                <div className="container">
                    <div className="row banner-wrapper">
                        <div className="col-md-6 img-div">
                            <img className="img-fluid" src={banner} />
                        </div>
                            <div className="col-md-6 content-div">
                                <h1>Providing The Best <br/>Online Medical<span> Consultant</span></h1>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
                                <NavLink exact={true} activeClassName='is-active' to='/request-quote' className="">Request Quote</NavLink>
                                <div className="users-list">
                                    <img src={user} className="img-fluid" />
                                    <p><span>200+ </span> Happy Doctor <br /> Worldwide.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="aboutus-wrapper">
                        <h1>We  Make Sure The Quality Is <br/><span>Extraterrestrial.</span></h1>
                        <div className="row">
                            <div className="aboutus-content d-flex">
                                <div className="col-md-3">
                                    <img className="" src={doc} />
                                </div>
                                <div className="col-md-7">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                    <NavLink exact={true} activeClassName='is-active' to='/about-us' >Know More</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
              
              <ServiceList 
                heading= "Our Services"
                content = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia" 
              />

                <div className="contacts">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={contact} className="img-fluid" />
                            </div>
                            <div className="col-md-6 m-md-auto">
                                <h2>Connect With Us</h2>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in , making it over 2000 years old.</p>
                                <form>
                                    <input className="form-control" type="text" placeholder="Name" />
                                    <input className="form-control" type="text" placeholder="Email" />
                                    <div className="txtarea">
                                        <textarea name="Text1" className="form-control" cols="30" rows="2" placeholder="Message" ></textarea>
                                    </div>
                                    <button className="btn">Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Base>
    )
}

export default Home;