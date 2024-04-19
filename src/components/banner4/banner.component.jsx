import React from "react";
import './banner.component.css';
import headphones from '../../assets/images/headphones.webp'
import machine from '../../assets/images/washingmachine.webp'
import women from '../../assets/images/women.webp'
import { Link } from "react-router-dom";
export function Banner() {
    return (
        <>
            <div className="container">
                <div className="mainndiv mt-4">
                    <div className="secdiv">
                        <div className="banner1  row">
                            <div className="col-6 btns ">
                                <h5>NOVEMBERS GADGET MADNESS</h5>
                                <h3 style={{ fontWeight: '700', fontSize: '30px' }}>20% OFF</h3>
                                <button className="btn btn-warning mt-4 "><Link to='/flashsale' className="stylebtn"><p>GET OFFER</p></Link></button>
                            </div>
                            <div className="col-6 image mr-1 ">
                                <img src={headphones} alt="" />
                            </div>
                        </div>
                        <div className="banner2  row">
                            <div className="col-12 ban">
                                <h5>HOME APPLIANCES <br />
                                    CYBER MONDAY SPECIAL</h5>
                                <img className="img2" src={machine} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="banner3">
                        <div className=" roww">
                            <div className=" secbann">
                                <h4>WINTER 2024 OFFER</h4>
                                <h1 style={{ fontWeight: '700', fontFamily: 'sans-serif', fontSize: '40px' }}>GRAB THE BEST FASHION DEALS IN THIS WINTER</h1>
                                <br></br><br></br>
                                <button className="btn  gdbtn"><Link to='/flashsale' className="stylebtn" ><p>GET OFFER</p></Link></button>
                            </div>
                            <div className="img3">
                                <img src={women} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}