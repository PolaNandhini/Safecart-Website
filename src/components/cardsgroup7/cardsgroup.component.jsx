import React from "react"
import './cardsgroup.component.css'
import { ArrowDown } from "react-bootstrap-icons";
import card1 from '../../assets/images/card1.webp';
import pic1 from '../../assets/images/pic1.webp';
import pic2 from '../../assets/images/pic2.webp';
import pic3 from '../../assets/images/pic3.webp';
import card2 from '../../assets/images/card2.webp';
import card3 from '../../assets/images/card3.webp';
import card4 from '../../assets/images/card4.webp';
import pic4 from '../../assets/images/pic4.webp';
import pic5 from '../../assets/images/pic5.webp';
import pic6 from '../../assets/images/shoe.webp';
import pic7 from '../../assets/images/laptopicon.webp';
import card5 from '../../assets/images/str.webp';
import card6 from '../../assets/images/str1.webp';
import card7 from '../../assets/images/str2.webp';
import pic8 from '../../assets/images/str3.webp';
export function Cards() {
    return (
        <>
            <section>
                <div className="container mt-5 list1">
                    <div>
                        <ul className="on">
                            <li><button className="btn btn-light">Top rated</button></li>
                            <li><button className="btn btn-light">Top Selling</button></li>
                            <li><button className="btn btn-light">Weekly Top</button></li>
                        </ul>
                    </div>
                    <div style={{ marginRight: '40px' }} className="viewall">
                        <p style={{ color: 'green', fontSize: '20px' }}>View All <span><ArrowDown></ArrowDown></span> </p>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row cardhold">
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5 pichold">
                        <div className="pic">
                            <img src={card1} alt="" />
                        </div>
                        <div className="pic1">
                            <img src={pic1} alt="" />
                        </div>
                        <br /><br />
                        <h4 style={{ fontWeight: 'bolder' }}>Prof. Dario Herzog DDS</h4>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5 pichold">
                        <div className="pic">
                            <img src={card1} alt="" />
                        </div>
                        <div className="pic2">
                            <img src={pic2} alt="" />
                        </div>
                        <br /><br />
                        <h4 style={{ fontWeight: 'bolder' }}>Dr. Lamar Rogahn</h4>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5 pichold">
                        <div className="pic">
                            <img src={card2} alt="" />
                        </div>
                        <div className="pic3">
                            <img src={pic3} alt="" />
                        </div>
                        <br /><br />
                        <h4 style={{ fontWeight: 'bolder' }}>Ms. Cassie Carter V</h4>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5 pichold">
                        <div className="pic">
                            <img src={card3} alt="" />
                        </div>
                        <div className="pic4">
                            <img src={pic4} alt="" />
                        </div>
                        <br /><br />
                        <h4 style={{ fontWeight: 'bolder' }}>Wilhelmine Schuster</h4>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5 pichold">
                        <div className="pic">
                            <img src={card4} alt="" />
                        </div>
                        <div className="pic5">
                            <img src={pic5} alt="" />
                        </div>
                        <br /><br />
                        <h4 style={{ fontWeight: 'bolder' }}>Cecilia Feeney</h4>
                    </div>
                </div>
                <div className="row cardhold mt-5">
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5 pichold">
                        <div className="pic">
                            <img src={card5} alt="" />
                        </div>
                        <div className="pic1">
                            <img src={pic6} alt="" />
                        </div>
                        <br /><br />
                        <h4 style={{ fontWeight: 'bolder' }}>Prof. Dario Herzog DDS</h4>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5 pichold">
                        <div className="pic">
                            <img src={card6} alt="" />
                        </div>
                        <div className="pic2">
                            <img src={pic7} alt="" />
                        </div>
                        <br /><br />
                        <h4 style={{ fontWeight: 'bolder' }}>Dr. Lamar Rogahn</h4>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5 pichold">
                        <div className="pic">
                            <img src={card7} alt="" />
                        </div>
                        <div className="pic3">
                            <img src={pic2} alt="" />
                        </div>
                        <br /><br />
                        <h4 style={{ fontWeight: 'bolder' }}>Ms. Cassie Carter V</h4>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5 pichold">
                        <div className="pic">
                            <img src={card4} alt="" />
                        </div>
                        <div className="pic4">
                            <img src={pic4} alt="" />
                        </div>
                        <br /><br />
                        <h4 style={{ fontWeight: 'bolder' }}>Wilhelmine Schuster</h4>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5 pichold">
                        <div className="pic">
                            <img src={card3} alt="" />
                        </div>
                        <div className="pic5">
                            <img src={pic8} alt="" />
                        </div>
                        <br /><br />
                        <h4 style={{ fontWeight: 'bolder' }}>Cecilia Feeney</h4>
                    </div>
                </div>
            </div>
        </>
    )
}