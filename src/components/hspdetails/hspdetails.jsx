import React from 'react'
import './hspdetails.css';
import heels from '../../assets/images/heels.webp';
import heels1 from '../../assets/images/heels1.webp';
import { ArrowRepeat, Dash, Facebook, Heart, Linkedin, Pinterest, Plus, Twitter, Whatsapp } from 'react-bootstrap-icons';
import Slider from 'react-slick';
import vd5 from '../../assets/images/vd5.webp';
import vd2 from '../../assets/images/vd2.webp';
import vd4 from '../../assets/images/vd4.webp';
import vd6 from '../../assets/images/vd6.webp';
import laptop from '../../assets/images/laptop.webp'
import wdress from '../../assets/images/wdress.webp'
import scent from '../../assets/images/scent.webp'
import hspd from '../../assets/images/hspd.webp'
import hspd1 from '../../assets/images/hspd1.webp'
import hspd2 from '../../assets/images/hspd2.webp'
import hspd3 from '../../assets/images/skirt.webp'
import hspd4 from '../../assets/images/skirt1.webp'
import bed from '../../assets/images/bed.webp'
import red from '../../assets/images/red.webp'
import { Top } from '../header1/top.component';
import { Header } from '../header2/header.component';
import { MainNav } from '../mainnav3/mainnav.component';
import { Footer } from '../footer14/footer.component';

export const Hspdetails = () => {
    var settings1 = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    }
    var settings2 = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    }
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-5'>
                        <div className='hspd1_bg'>
                            <div className='hspd1'>
                                <img src={heels1} alt="" />
                            </div>
                            <div className='hspd_flex'>
                                <div>
                                    <div className='hspd_img1'>
                                        <img src={heels} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className='hspd_img1'>
                                        <img src={heels1} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className='hspd_img1'>
                                        <img src={heels} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div>
                            <h2 style={{ fontWeight: '700' }}>High Heel Wedding Shoes</h2>
                            <br />
                            <h5 style={{ color: 'rgb(79, 227, 79)' }}>In stock(132)</h5>
                            <br />
                            <h5>&#x20B9;12000<del>&#x20B9;13000</del></h5>
                            <br />
                            <h6>No Import Fees Deposit and &#x20B9;1300  Shipping to <br /> India</h6>
                            <br />
                            <br />
                            <h6>Quantity:&nbsp;<span className='vd_bdr1'><Dash></Dash>&nbsp;&nbsp;01&nbsp;&nbsp;<Plus></Plus></span> &nbsp;Instock(123)</h6>
                            <br />
                            <br /><br />
                            <button className='vdbtn1'>Add To Cart</button>&nbsp;&nbsp;
                            <button className='vdbtn2'><Heart></Heart></button>
                            <br />
                            <br />
                            <button className='vdbtn3'>Buy Now</button>&nbsp;&nbsp;
                            <button className='vdbtn4'><ArrowRepeat></ArrowRepeat>&nbsp;Add Compare</button>
                            <h5 className='mt-5'>Guaranteed Safe Checkout</h5>
                            <div className='vd_div1'>
                                <Slider {...settings1}>
                                    <div className='hspd_img2'>
                                        <img src={vd5} alt="" />
                                    </div>
                                    <div className='hspd_img2'>
                                        <img src={vd2} alt="" />
                                    </div>
                                    <div className='hspd_img2'>
                                        <img src={vd4} alt="" />
                                    </div>
                                    <div className='hspd_img2'>
                                        <img src={vd6} alt="" />
                                    </div>
                                    <div className='hspd_img2'>
                                        <img src={vd5} alt="" />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <h5 className='mt-5'>Category: <span className='cat_style'>Fashion</span> </h5>
                        <h5>Sub Category: <span className='cat_style'>Footwear</span> </h5>
                        <h5>Child Category: <span className='cat_style'> Android Phones  iPhones  Refurbished <br /> Phones   Gaming Phones  Business Phones <br />  Feature Phones  Rugged Phones</span> </h5>
                        <h5>Sku: <span className='cat_style'>High Heels</span> </h5>
                    </div>
                    <div className='col-3'>
                        <div className='hspd_div'>
                            <div className='hspd_bdr'>
                                <h4>Sold By:</h4>
                                <div className='heels_img mt-3'>
                                    <img src={hspd} alt="" />
                                </div>
                                <h5>Peter Abshire Sr.</h5>
                                <br />
                                <p>10 products</p>
                                <div className='hspd_btn'>
                                    <button className='btn btn-success'>visit store</button>&nbsp;
                                    <button className='btn btn-success'>chat</button>
                                </div>
                            </div>
                        </div>
                        <div className='share_ctr1 mt-5'>
                            <div className='sh2'>
                                <center><h5>Share:</h5></center>
                                <br />
                                <br />
                                <span className='social_mini'><Facebook></Facebook></span>
                                <span className='social_mini'><Twitter></Twitter></span>
                                <span className='social_mini'><Pinterest></Pinterest></span>
                                <span className='social_mini'><Whatsapp></Whatsapp></span>
                                <span className='social_mini'><Linkedin></Linkedin></span>
                            </div>
                        </div>
                        <div className='itemsbdr mt-4'>
                            <h3 style={{ marginLeft: '45px', marginTop: '10px' }}>Seller's Products</h3>
                            <Slider {...settings2}>
                                <div>
                                    <div className="bimg">
                                        <img src={scent} alt="" />
                                    </div>
                                    <div className="v1">
                                        <h4>Dior Scent</h4>
                                        <span className="clr1">&#x20B9;2000</span>&nbsp;<del> &#x20B9;2300</del>
                                        <h4>Stock Available(100)</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="bimg">
                                        <img src={laptop} alt="" />
                                    </div>
                                    <div className="v1">
                                        <h4>Dior Scent</h4>
                                        <span className="clr1">&#x20B9;2000</span>&nbsp;<del> &#x20B9;2300</del>
                                        <h4>Stock Available(100)</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="bimg">
                                        <img src={bed} alt="" />
                                    </div>
                                    <div className="v1">
                                        <h4>Dior Scent</h4>
                                        <span className="clr1">&#x20B9;2000</span>&nbsp;<del> &#x20B9;2300</del>
                                        <h4>Stock Available(100)</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="bimg">
                                        <img src={wdress} alt="" />
                                    </div>
                                    <div className="v1">
                                        <h4>Dior Scent</h4>
                                        <span className="clr1">&#x20B9;2000</span>&nbsp;<del> &#x20B9;2300</del>
                                        <h4>Stock Available(100)</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="bimg">
                                        <img src={heels} alt="" />
                                    </div>
                                    <div className="v1">
                                        <h4>Dior Scent</h4>
                                        <span className="clr1">&#x20B9;2000</span>&nbsp;<del> &#x20B9;2300</del>
                                        <h4>Stock Available(100)</h4>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='btn btn-success'>Description</button>&nbsp;&nbsp;
                    <button className='btn btn-light'>Information</button>&nbsp;&nbsp;
                    <button className='btn btn-light'>Reviews(0)</button>
                    <div className='hspd_div2 mt-4'>
                        <p className='hspd_div22'>Heel Height approximately 3.0" Platform measures approximately 0.25"| True size to fit. All your friends will be asking your advice when they see you with these sexy sandals! The open toe and strappy with sparkling rhinestone design front is eye-catching and alluring and will have envious stares on you all night long. This pair is perfectly designed for steady steps, as it features a single, slim sole that ideally balances the heel height with the rest of the sleek shoe design. This stunning pair of heels is ideal for weddings, parties and every other special occasion that calls for dressy, upscale shoes! Featuring a slim straps that hugs your ankle for custom support and provides a comfort throughout wear. Your feet will not slip, turn or move out of place while wearing these gorgeous sandals!  apples and other desserts.</p>
                    </div>
                </div>
                <h2 className='mt-4'>Related Products</h2>
                <div className='row mt-5'>
                    <div className='col-2'>
                        <div className='hspd_img3'>
                            <img src={hspd1} alt="" />
                        </div>
                        <div className='hspd_content'>
                            <h5>Silk Saree</h5>
                            <h6>Stock Available(40)</h6>
                            <br />
                            <span>&#x20B9;2000</span><del>&#x20B9;2300</del>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='hspd_img3'>
                            <img src={hspd2} alt="" />
                        </div>
                        <div className='hspd_content'>
                            <h5>Silk Saree</h5>
                            <h6>Stock Available(40)</h6>
                            <br />
                            <span>&#x20B9;2000</span><del>&#x20B9;2300</del>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='hspd_img3'>
                            <img src={hspd4} alt="" />
                        </div>
                        <div className='hspd_content'>
                            <h5>Silk Saree</h5>
                            <h6>Stock Available(40)</h6>
                            <br />
                            <span>&#x20B9;2000</span><del>&#x20B9;2300</del>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='hspd_img3'>
                            <img src={heels} alt="" />
                        </div>
                        <div className='hspd_content'>
                            <h5>Silk Saree</h5>
                            <h6>Stock Available(40)</h6>
                            <br />
                            <span>&#x20B9;2000</span><del>&#x20B9;2300</del>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='hspd_img3'>
                            <img src={red} alt="" />
                        </div>
                        <div className='hspd_content'>
                            <h5>Silk Saree</h5>
                            <h6>Stock Available(40)</h6>
                            <br />
                            <span>&#x20B9;2000</span><del>&#x20B9;2300</del>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='hspd_img3'>
                            <img src={hspd3} alt="" />
                        </div>
                        <div className='hspd_content'>
                            <h5>Silk Saree</h5>
                            <h6>Stock Available(40)</h6>
                            <br />
                            <span>&#x20B9;2000</span><del>&#x20B9;2300</del>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
