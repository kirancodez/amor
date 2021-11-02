import React from "react";
import transcript from "../../assets/computer.png";
import write from "../../assets/write (2).png";
import medicalcode from "../../assets/1.png";
import softDev from "../../assets/coding.png";
import {NavLink} from "react-router-dom"

const serviceList = (props) => {
    return(
        <div>
                  <div className="services">
                    <div className="container">
                        <h1>{props.heading}</h1>
                        <p className="abt-detail">{props.content}</p>
                    </div>
                        <div className="card-wrapper container">
                            <div className="row">
                                
                                    <div className="col-md-3">
                                        <NavLink exact={true} activeClassName='is-active' to='/service/medical-transcription' className="" >
                                            <div className="card">
                                                <div className="card-body">
                                                <img src={transcript} className="img-fluid" />
                                                <h5 className=" text-white">Medical Transcription</h5>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                
                            
                                <div className="col-md-3">
                                    <NavLink exact={true} activeClassName='is-active' to='/service/medical-scribing' className="" >
                                        <div className="card">
                                            <div className="card-body">
                                            <img src={write} className="img-fluid" />
                                            <h5 className=" text-white">Medical Scribing</h5>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>

                                <div className="col-md-3">
                                    <NavLink exact={true} activeClassName='is-active' to='/service/medical-coding' className="" >
                                        <div className="card">
                                            <div className="card-body">
                                            <img src={medicalcode} className="img-fluid" />
                                            <h5 className=" text-white">Medical Coding</h5>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>

                                <div className="col-md-3">
                                    <NavLink exact={true} activeClassName='is-active' to='/service/web-development' className="" >
                                        <div className="card">
                                            <div className="card-body">
                                            <img src={softDev} className="img-fluid" />
                                            <h5 className=" text-white">Software Development</h5>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                                
                            </div>
                        </div>
                </div>
        </div>
    )
}

export default serviceList;