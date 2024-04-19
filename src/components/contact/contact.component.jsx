import React from "react";
import './contact.component.css';
import { Clock, Envelope, GeoAlt, Telephone } from "react-bootstrap-icons";
import { Header } from "../header2/header.component";
import { MainNav } from "../mainnav3/mainnav.component";
import { Footer } from "../footer14/footer.component";
import { Top } from "../header1/top.component";
export function Contact() {
    return (
        <>
            <section className="mt-5">
                <div className=" aboutdiv ">
                    <div>
                        <h1>Contact</h1>
                        <p>contact</p>
                    </div>
                </div>
            </section>
            <div className="contactdiv mt-5">
                <div className="row c1 ">
                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 contactdivision ">
                        <h3 className="mt-3">Contact With Us</h3>
                        <div className="contactdiv1 mt-3">
                            <div className="sizeoficon">
                                <span className="v1"><Telephone></Telephone></span>
                            </div>
                            <div className="v2">
                                <h4>Call Us</h4>
                                <p>+012 789654321</p>
                            </div>
                        </div>
                        <div className="contactdiv1">
                            <div className="sizeoficon">
                                <span className="v1"><Envelope></Envelope></span>
                            </div>
                            <div className="v2">
                                <h4>Email Us</h4>
                                <p>company@mail.com</p>
                            </div>
                        </div>
                        <div className="contactdiv1">
                            <div className="sizeoficon">
                                <span className="v1"><Clock></Clock></span>
                            </div>
                            <div className="v2">
                                <h4>Service Hour</h4>
                                <p>10.00 am - 08.00 pm</p>
                            </div>
                        </div>
                        <div className="contactdiv1">
                            <div className="sizeoficon">
                                <span className="v1"><GeoAlt></GeoAlt></span>
                            </div>
                            <div className="v2">
                                <h4>Address</h4>
                                <p>2779 Chilkanagar Road,Uppal City, Hyd <br />500039</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 ">
                        <h3>Get In Touch</h3>
                        <label className="mt-2">Your Name</label>
                        <input type="text" placeholder="Your Name" className='form-control' />
                        <label className="mt-2">Your Email</label>
                        <input type="text" placeholder="Your Email" className='form-control' />
                        <label className="mt-2">Your Subject</label>
                        <input type="text" placeholder="Your subject" className='form-control' />
                        <label for="message" className="mt-2">Your Message</label>
                        <textarea id="message" rows="5" cols="33" className='form-control' placeholder="Your Message"></textarea>
                        <button className="btn btn-success mt-2">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}