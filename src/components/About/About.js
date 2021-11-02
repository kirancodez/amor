import React from "react";
import Base from "../Base/Base";
import call_center from "../../assets/cal_center.jpg"
import vision from "../../assets/vision.png"
import mission from "../../assets/mission.png"
import user1 from "../../assets/u1.jpg"
import user2 from "../../assets/u2.jpg"
import user3 from "../../assets/u3.jpg"
import user4 from "../../assets/u4.jpg"
import user5 from "../../assets/u5.jpg"
import quote from "../../assets/quote.png"
import "./style/about.css"
import {NavLink} from "react-router-dom"

const About = () => {
    return(
        <Base>
            <div className="about_header_wrapper">
                <div className="container">
                    <div className="about_header">
                        <h1>Dedicated Teams.</h1>  
                        <h1>For Your Dedicated Dreams.</h1>  
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <img src={call_center} className="img-fluid" />
                            <p>Lorem Ipsum is simply dummy  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>Lorem Ipsum is simply dummy text remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vision_mission mb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 crd">
                            <div className="card">
                                <div className="card-body">
                                    <img src={vision} />
                                    <h2>Our Vision</h2>
                                    <p>Lorem Ipsum is simply dummy text remaining essentially unchanged. It was popularised inremaining essentially unchanged. It was popularised in</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 crd">
                            <div className="card">
                                <div className="card-body">
                                    <img src={mission} />
                                    <h2>Our Mission</h2>
                                    <p>Lorem Ipsum is simply dummy text remaining essentially unchanged. It was popularised inremaining essentially unchanged. It was popularised in</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="team">
                <div className="container">
                    <h1>Our Team</h1>
                    <p>Lorem Ipsum is simply dummy text remaining essentially unchanged. It was popularised inremaining essentiallyremaining essentially unchanged. It was popularised inremaining essentially unchanged. It was popularised in</p>
                </div>
                <div className="container">
                    <div className="row members text-center justify-content-center">
                        <div className="col-md-3">
                                <img src={user1} className="img-fluid" />
                                <h3>Shyijo</h3>
                                <p>CEO, Co-founder</p>
                                <p>dummy text remaining essentially unchanged. It was popularised inremaining essentially unchanged.</p>
                        </div>
                        
                        <div className="col-md-3">
                                <img src={user2} className="img-fluid" />
                                <h3>Bindhu M</h3>
                                <p>CTO, Co-founder</p>
                                <p>dummy text remaining essentially unchanged. It was popularised inremaining essentially unchanged.</p>
                        </div>
                        
                        <div className="col-md-3">
                                <img src={user3} className="img-fluid" />
                                <h3>Kevin John</h3>
                                <p>Marketing Head</p>
                                <p>dummy text remaining essentially unchanged. It was popularised inremaining essentially unchanged.</p>
                        </div>
                        
                        <div className="col-md-3">
                                <img src={user4} className="img-fluid" />
                                <h3>Daliya Jain</h3>
                                <p>Analist</p>
                                <p>dummy text remaining essentially unchanged. It was popularised inremaining essentially unchanged.</p>
                        </div>
                        
                        <div className="col-md-3">
                                <img src={user5} className="img-fluid" />
                                <h3>Shilpa s</h3>
                                <p>Team Lead</p>
                                <p>dummy text remaining essentially unchanged. It was popularised inremaining essentially unchanged.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="request">
                    <img src={quote} className="img-fluid" />
                    <p>Our team is of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </p>
                    <div className="btndiv">
                        <NavLink exact={true}  to='/request-quote' className=" m-auto">Request Quote</NavLink>
                    </div>
                </div>
            </div>

        </Base>
    )
}

export default About;