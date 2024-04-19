import React from "react";
import './promo.component.css';
import lock from '../../assets/images/download.svg'
import review from '../../assets/images/review.svg'
import vehicle from '../../assets/images/return.svg'
import customersupport from '../../assets/images/customersupport.svg'
export function Promo() {
    return (
        <>
            <section style={{marginTop:'130px'}}>
                <div className="container mt-5">
                    {/* <h3>Categories</h3> */}
                </div>
            </section>
            <section>
                <div className="promomain container mt-5">
                    <div className=" row promomain1">
                        <div className="col-xl-3 col-lg-3 col-md-6 promo1">
                            <div>
                                <img src={lock} alt="" />
                            </div>
                            <div className="content">
                                <h5>secure payment gateways</h5>
                                <p>Partnered with 48+ gateways for your safety</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6  promo1">
                            <div>
                                <img src={review} alt="" />
                            </div>
                            <div  className="content">
                                <h5>Customer Reviews</h5>
                                <p>Verified reviews are featured in our platforms</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6  promo1">
                            <div>
                                <img src={vehicle} alt="" />
                            </div>
                            <div  className="content">
                                <h5>30 Days No-Hassle Return</h5>
                                <p>We guarantee happiness, If you’re not return it</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6  promo1">
                            <div>
                                <img src={customersupport} alt="" />
                            </div>
                            <div  className="content">
                                <h5>24/7 Customer Support</h5>
                                <p>Questions? Our support team is available 24/7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}