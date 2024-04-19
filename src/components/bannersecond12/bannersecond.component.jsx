import React from "react";
import './bannersecond.component.css';
import man from '../../assets/images/man.webp'
import nail from '../../assets/images/nail.webp'
import women1 from '../../assets/images/women1.webp'
import { ArrowDown, Check2 } from "react-bootstrap-icons";
export function Bannersecond() {
    return (
        <>
            <div className="maindiv mt-5">

                <div className="bannerr3">
                    <div className=" roww row">
                        <div className=" secbann col-6 ">
                            <h2 style={{ color: 'blue', marginLeft: '2.5rem', fontSize: '50px' }}>WINTER</h2>
                            <h3 style={{ color: 'blue', marginLeft: '2.5rem' }}>ON THE DOOR</h3>
                            <div className="list">
                                <ul >
                                    <li><span><Check2></Check2></span>&nbsp;Skin care</li>
                                    <li><span><Check2></Check2></span>&nbsp;Fashion Wear</li>
                                    <li><span><Check2></Check2></span>&nbsp;Electronic Items</li>
                                    <li><span><Check2></Check2></span>&nbsp;Furniture</li>
                                </ul>
                            </div>
                            <div className="qn ">
                                <button className="btn btn-success">Get Offers</button>
                            </div>
                        </div>
                        <div className="imgg3 col-6">
                            <img src={women1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="seccdiv">
                    <div className="bannerr1  row">
                        <div className="col-6 bj">
                            <h3 style={{fontWeight:'700'}}>ENJOY TEXAS
                                STYLE  WINTER
                                FASHION 2023</h3>
                            <button className="btn btn-warning mt-4">GET OFFER</button>
                        </div>
                        <div className="col-6 imagee mr-1 ">
                            <img src={man} alt="" />
                        </div>
                    </div>
                    <div className="bannerr2  row">
                        <div className="col-6 h3">
                            <h3 style={{fontWeight:'700'}}>NAILS CARE ?</h3>
                            <h3 style={{fontWeight:'700'}}>GET YOUR WINTER KIT NOW</h3>
                            <br />
                            <button className="btn btn-dark">View Product</button>
                        </div>
                        <div className="col-6 nailimg">
                            <img src={nail} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}