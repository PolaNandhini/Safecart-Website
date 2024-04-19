import React from 'react'
import './viewdetails.css'
import laptop from '../../assets/images/laptop.webp';
import vd5 from '../../assets/images/vd5.webp';
import vd2 from '../../assets/images/vd2.webp';
import vd6 from '../../assets/images/vd6.webp';
import vd4 from '../../assets/images/vd4.webp';
import { ArrowRepeat, Dash, Facebook, Heart, Linkedin, Pinterest, Plus, Twitter, Whatsapp, XCircle } from 'react-bootstrap-icons';
import Slider from 'react-slick';
export const ViewDetails = () => {
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
    return (
        <>
            <div className='vd_bg'>
                <div className='cross'><XCircle></XCircle></div>
                <div>
                    <div className='row vd_bgpadding'>
                        <div className='col-5 vd_img1'>
                            <div className='img_bg1'>
                                <img src={laptop} alt="" />
                            </div>
                            <div className='flex_lp mt-4'>
                                <div className='img_bg'>
                                    <div className='mini_lp'>
                                        <img src={laptop} alt="" />
                                    </div>
                                </div>
                                <div className='img_bg'>
                                    <div className='mini_lp'>
                                        <img src={laptop} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-7'>
                            <div>
                                <h2 style={{ fontWeight: '700' }}>TitanPro Gaming Laptop</h2>
                                <br />
                                <h5 style={{ color: 'rgb(79, 227, 79)' }}>In stock(132)</h5>
                                <br />
                                <h5>&#x20B9;120000<del>&#x20B9;130000</del></h5>
                                <br />
                                <h6>No Import Fees Deposit and  $25.56 Shipping to <br /> India</h6>
                                <br />
                                <br />
                                <h4>RAM</h4>
                                <br />
                                <span className='vd_bdr'>4GB</span>
                                <span className='vd_bdr'>12GB</span>
                                <span className='vd_bdr'>8GB</span>
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
                                        <div className='vd_img3'>
                                            <img src={vd5} alt="" />
                                        </div>
                                        <div className='vd_img3'>
                                            <img src={vd2} alt="" />
                                        </div>
                                        <div className='vd_img3'>
                                            <img src={vd4} alt="" />
                                        </div>
                                        <div className='vd_img3'>
                                            <img src={vd6} alt="" />
                                        </div>
                                        <div className='vd_img3'>
                                            <img src={vd5} alt="" />
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <h5 className='mt-5'>Category: <span className='cat_style'>Electronics</span> </h5>
                            <h5>Sub Category: <span className='cat_style'>Smartphones</span> </h5>
                            <h5>Child Category: <span className='cat_style'> Android Phones  iPhones  Refurbished <br /> Phones   Gaming Phones  Business Phones <br />  Feature Phones  Rugged Phones</span> </h5>
                            <h5>Sku: <span className='cat_style'>titanpro-gaming-laptop</span> </h5>
                        </div>
                    </div>
                    <div className='share_ctr mt-5'>
                        <div className='sh1'>
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
                </div>
            </div>
        </>
    )
}
