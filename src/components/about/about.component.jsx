import React from "react";
import './about.component.css';
import aboutimg1 from '../../assets/images/aboutimg1.png'
import aboutimg2 from '../../assets/images/aboutimg2.png'
import aboutimg3 from '../../assets/images/aboutimg3.png'
import { BagFill, CreditCardFill, Headset, Truck } from "react-bootstrap-icons";
import abcard1 from '../../assets/images/abcard1.png';
import abcard2 from '../../assets/images/abcard2.png';
import abcard3 from '../../assets/images/abcard3.png';
import { Header } from "../header2/header.component";
import { MainNav } from "../mainnav3/mainnav.component";
import { Footer } from "../footer14/footer.component";
import { Top } from "../header1/top.component";
import { SlickSlider } from "../reactslick/reactslick";

export function About() {
    return (
        <>
            <section className="mt-4">
                <div className=" aboutdiv ">
                    <div>
                        <h1>About</h1>
                        <p>About</p>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row aboutrow">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <h1 style={{ fontWeight: '800' }}>This is how we do. Learn something about us and our services</h1>
                        <br /><br />
                        <p>There is a voice that keeps on calling me. Down the road, that is where I will always be. Every stop I make, I make a new friend. Cant stay for long, just turn around and I am  gone again. Maybe tomorrow, I will want to settle down, Until tomorrow, I will just keep moving on.</p>
                        <p>Top Cat! The most effectual Top Cat! Who is intellectual close friends get to call him T.C., providing it is with dignit</p>
                        <br />
                       
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 aboutimg1">
                        <img src={aboutimg1} alt="" />
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row aboutrow ">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 mt-5 aboutimg2">
                        <img src={aboutimg2} alt="" />
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                        <h1 style={{ fontWeight: '800' }}>We Provide Express & secure home delivery</h1>
                        <br /><br />
                        <p>here is a voice that keeps on calling me. Down the road, that is where I will always be. Every stop I make, I make a new friend. Cant stay for long, just turn around and I am gone again. Maybe tomorrow, I will want to settle down, Until tomorrow, I will just keep moving on.</p>
                        <br />
                        <p>Top Cat! The most effectual Top Cat! Who is intellectual close friends get to call him T.C., providing it’s with dignity.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row aboutrow mt-5 ">
                    <h2>Our Advantages</h2>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mt-5 abdiv">
                        <div className="abdiv1">
                            <div>
                                <span className="truck"><Truck></Truck>&nbsp;&nbsp;</span>
                            </div>
                            <div className="mt-3 ptag">
                                <h4>Free Shipping All Over</h4>
                                <p>Free Shopping on all online order</p>
                            </div>
                        </div>
                        <div className="abdiv1">
                            <div>
                                <span className="truck"><BagFill></BagFill>&nbsp;&nbsp;</span>
                            </div>
                            <div className="mt-3 ptag">
                                <h4>Fresh Product For You</h4>
                                <p>We provide 100% Original item</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mt-5 abdiv">
                        <div className="abdiv1">
                            <div>
                                <span className="truck"><CreditCardFill></CreditCardFill>&nbsp;&nbsp;</span>
                            </div>
                            <div className="mt-3 ptag">
                                <h4>100% Secure Payment</h4>
                                <p>We Ensure Secure Transections</p>
                            </div>
                        </div>
                        <div className="abdiv1">
                            <div>
                                <span className="truck"><Headset></Headset>&nbsp;&nbsp;</span>
                            </div>
                            <div className="mt-3 ptag">
                                <h4>24/7 support Center</h4>
                                <p>We are available in 24 hours</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3  aboutimg3 ">
                        <img src={aboutimg3} alt="" />
                    </div>
                </div>
            </div>
            <h2 className="container" style={{ fontWeight: '800' }}>Client Says</h2>
            <SlickSlider></SlickSlider>
        </>
    )
}