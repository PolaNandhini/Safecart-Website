import React from "react";
import './footer.component.css'
import footerlogo from '../../assets/images/footerlogo.png'
import { Envelope, Facebook, GeoAlt, Instagram, Phone, Pinterest, Send,  Twitter } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
export function Footer() {
    return (
        <>
            <footer style={{ marginTop: '120px' }}>
                <div className="footer mt-5">
                    <div className="row ">
                        <div className="col-lg-3 col-md-2 col-sm-6 footerlogo">
                            <img src={footerlogo} alt="" /> <br />
                            <p style={{ color: 'white' }}>The best multi-vendor ecommerce website for you. You can easily buy your product according to your choice.</p>
                            <div className="list3">
                                <ul>
                                    <li><div className="social"><Twitter></Twitter></div></li>
                                    <li><div className="social"><Facebook></Facebook></div></li>
                                    <li><div className="social"><Pinterest></Pinterest></div></li>
                                    <li><div className="social"><Instagram></Instagram></div></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2 col-sm-6 list4">

                            <ul>
                                <li><h5 style={{fontWeight:'600'}}>Helpful Links</h5></li>
                                <li><Link to='/home' className="decor">Home</Link></li>
                                <li><Link to='/bloggridstyle' className="decor">Blog</Link></li>
                                <li><Link to='/contact' className="decor">Contact</Link></li>
                                <li><Link to='/productlist' className="decor">Shop Page</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 list4 ">

                            <ul>
                                <li><h5 style={{fontWeight:'600'}}>Store Info</h5></li>
                                <li><GeoAlt></GeoAlt>&nbsp;Hyderabad,India</li>
                                <li><Phone></Phone>&nbsp;8989764320</li>
                                <li><Envelope></Envelope>&nbsp;support@safecart.com</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 inp">
                            <h5 style={{fontWeight:'600'}}>Get In Touch</h5>
                            <p>signup to our mailing list now!</p>
                            <input type="text" placeholder="your mail here" className="p-4" />
                            <button className="btn btn-success"><Send></Send></button>
                        </div>
                    </div>
                    <br />
                    <div className="line"></div>
                    <center><span>&copy;2024 All Rights Reserved</span></center>
                </div>
            </footer>
        </>
    )
}