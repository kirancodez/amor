import React from "react";
import Base from "../Base/Base";
import contactus from "../../assets/contactus.jpg";
import "./style/contact.css";
import { HiMail } from 'react-icons/hi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillPhone } from 'react-icons/ai';


const contact = () => {
  return (
    <Base>
      
        <div className="contacts">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={contactus} className="img-fluid" />
                    </div>
                    <div className="col-md-6 m-md-auto p-md-4">
                        <h2>Get In Touch With Us</h2>
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
        <div className="container social-wrap">
            <ul>
                <li><a href="tel:+919946666230" target="blank"><AiFillPhone/></a></li>
                <li><a href="mailto:amorbusinesssolution@gmail.com" target="blank"><HiMail/></a></li>
                <li><a href="https://wa.me/+919946666230" target="blank"><IoLogoWhatsapp/></a></li>
                <li><a href="https://www.facebook.com/Amor-Business-Soltions-100704915742891/" target="blank"><AiFillFacebook/></a></li>
                <li><a href="https://www.instagram.com/amorbusinesssolutions/" target="blank"><AiFillInstagram/></a></li> 
            </ul>
        </div>
    </Base>
  );
};

export default contact;
