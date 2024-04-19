import React from 'react';
import './homestyle01.css';
import headphones from '../../assets/images/mb.webp'
import hphones from '../../assets/images/headphones.webp'
import red from '../../assets/images/red.webp'
import perfume from '../../assets/images/perfume.webp'
import sandf from '../../assets/images/sandf.webp'
import handl from '../../assets/images/handl.webp'
import bed from '../../assets/images/bed.webp'
import ban1 from '../../assets/images/ban1.webp'
import ban2 from '../../assets/images/ban2.webp'
import ban3 from '../../assets/images/ban3.webp'
import cc from '../../assets/images/cc.webp'
import innocent from '../../assets/images/innocent.webp'
import wdress from '../../assets/images/wdress.webp'
import coat from '../../assets/images/coat.webp'
import ps from '../../assets/images/ps.webp'
import skirt from '../../assets/images/skirt.webp'
import skirt1 from '../../assets/images/skirt1.webp'
import pic2 from '../../assets/images/pic2.webp'
import store from '../../assets/images/store.webp'
import girl from '../../assets/images/girl.webp'
import shoe from '../../assets/images/shoe.webp'
import pic3 from '../../assets/images/pic3.webp'
import phone from '../../assets/images/phone.webp'
import sunglasses from '../../assets/images/sunglasses.webp'
import bgs1 from '../../assets/images/bgs1.webp'
import bgs2 from '../../assets/images/bgs2.webp'
import apple from '../../assets/images/apple.webp'
import google from '../../assets/images/google.webp'
import { Bag, EyeFill, Heart } from 'react-bootstrap-icons';
import { Top } from '../header1/top.component';
import { Header } from '../header2/header.component';
import { MainNav } from '../mainnav3/mainnav.component';
import { Footer } from '../footer14/footer.component';
import { Link } from 'react-router-dom';
export const Homestyle01 = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide hs mt-5 " data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner ">
                    <div class="carousel-item active hsimg">
                        <img src={headphones} class="d-block w-25 " alt="..." />
                        <div class="carousel-caption d-none d-md-block hstext">
                            <h1>QuantummCore Pro GAming Motherboard</h1> <br />
                            <h3>&#8360;10000 &nbsp; <del>&#8360;12000</del></h3> <br />
                            <div className='nnn'>
                                <button className='btn btn-success'>Shop Now</button>&nbsp;
                                <button className='btn  nn '>Explore More</button>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item  hsimg">
                        <img src={red} class="d-block w-25 " alt="..." />
                        <div class="carousel-caption d-none d-md-block hstext">
                            <h1>Mans Silver Ridge Lite Long Sleeve Shirt</h1> <br />
                            <h3>&#8360;5000 &nbsp; <del>&#8360;6000</del></h3> <br />
                            <div className='nnn'>
                                <button className='btn btn-success'>Shop Now</button>&nbsp;
                                <button className='btn nn'>Explore More</button>
                            </div>
                        </div>
                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <section className='container hssection'>
                <h1>Choose Category</h1>
                <div className='hs1 container'>
                    <div className='hsimglist hs2'>
                        <img src={hphones} alt="" />
                        <p>Electronics</p>
                    </div>
                    <div className='hsimglist hs2'>
                        <img src={perfume} alt="" />
                        <p>Personal Care & BEauty</p>
                    </div>
                    <div className='hsimglist hs2'>
                        <img src={red} alt="" />
                        <p>Fashion</p>
                    </div>
                    <div className='hsimglist hs2'>
                        <img src={sandf} alt="" />
                        <p>Sports & Fitness</p>
                    </div>
                    <div className='hsimglist hs2'>
                        <img src={handl} alt="" />
                        <p>Home & Living</p>
                    </div>
                </div>
            </section>
            <section className='container'>
                <h1 className='mt-5'>Flash Sale</h1>
                <div className='row'>
                    <div className='col-2 hsrow'>
                        <div className='q1'>
                            <img src={hphones} alt="" />
                        </div>
                        <div>
                            <h4>Titanpro gaming laptop</h4> <br />
                            <span className='spantxt'>&#x20B9;5000 <del>&#x20B9;6000</del> </span>
                        </div>
                        <div className='hovericon'>
                            <span><Bag></Bag></span>
                        </div>
                        <div className='hovericon1'>
                            <span><Heart></Heart></span>
                        </div>
                        <div className='hovericon2'>
                            <span><EyeFill></EyeFill></span>
                        </div>
                    </div>
                    <div className='col-2 hsrow'>
                        <div className='q1'>
                            <Link to='/hspdetails'><img src={red} alt="" /></Link>
                        </div>
                        <div>
                            <h4>Mans Silver Ridge Lite Long Shirt</h4> <br />
                            <span className='spantxt'>&#x20B9;1000 <del>&#x20B9;1500</del>  </span>
                        </div>
                        <div className='hovericon'>
                            <span><Bag></Bag></span>
                        </div>
                        <div className='hovericon1'>
                            <span><Heart></Heart></span>
                        </div>
                        <div className='hovericon2'>
                            <span><EyeFill></EyeFill></span>
                        </div>
                    </div>
                    <div className='col-2 hsrow'>
                        <div className='q1'>
                            <img src={bed} alt="" />
                        </div>
                        <div>
                            <h4>Raymond Wood Bed</h4> <br />
                            <span className='spantxt'>&#x20B9;15000 <del>&#x20B9;16000</del>  </span>
                        </div>
                        <div className='hovericon'>
                            <span><Bag></Bag></span>
                        </div>
                        <div className='hovericon1'>
                            <span><Heart></Heart></span>
                        </div>
                        <div className='hovericon2'>
                            <span><EyeFill></EyeFill></span>
                        </div>
                    </div>
                    <div className='col-2 hsrow'>
                        <div className='q1'>
                            <img src={perfume} alt="" />
                        </div>
                        <div>
                            <h4>Perfume for all dior</h4> <br />
                            <span className='spantxt'>&#x20B9;900 <del>&#x20B9;1100</del>  </span>
                        </div>
                        <div className='hovericon'>
                            <span><Bag></Bag></span>
                        </div>
                        <div className='hovericon1'>
                            <span><Heart></Heart></span>
                        </div>
                        <div className='hovericon2'>
                            <span><EyeFill></EyeFill></span>
                        </div>
                    </div>
                    <div className='col-2 hsrow'>
                        <div className='q1'>
                            <img src={headphones} alt="" />
                        </div>
                        <div>
                            <h4> Gaming Motherboard </h4> <br />
                            <span className='spantxt'>&#x20B9;2000 <del>&#x20B9;3000</del>  </span>
                        </div>
                        <div className='hovericon'>
                            <span><Bag></Bag></span>
                        </div>
                        <div className='hovericon1'>
                            <span><Heart></Heart></span>
                        </div>
                        <div className='hovericon2'>
                            <span><EyeFill></EyeFill></span>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container'>
                <div className='row'>
                    <div className='col-4'>
                        <div className='ban1'>
                            <div className='ban1padding'>
                                <p>Mens Collection</p>
                                <h1>40% OFF</h1>
                                <p>Get your product with supper offer</p>
                                <button className='btn btn-info'>Buy Now</button>
                            </div>
                            <div className='ban1img'>
                                <img src={ban1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='ban2'>
                            <div className='ban1padding'>
                                <p>Mens Collection</p>
                                <h1>40% OFF</h1>
                                <p>Get your product with supper offer</p>
                                <button className='btn btn-info'>Buy Now</button>
                            </div>
                            <div className='ban2img'>
                                <img src={ban2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='ban3'>
                            <div className='ban1padding'>
                                <p>Mens Collection</p>
                                <h1>40% OFF</h1>
                                <p>Get your product with supper offer</p>
                                <button className='btn btn-info'>Buy Now</button>
                            </div>
                            <div className='ban3img'>
                                <img src={ban3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container'>
                <h1>Popular Product</h1>
                <div className='row'>
                    <div className='col-4'>
                        <div className='flexitem1'>
                            <div className='hsppimg1'>
                                <img src={hphones} alt="" />
                            </div>
                            <div>
                                <h5>Blue Headphones</h5>
                                <h4>&#x20B9;2000 </h4>
                                <button className='btn btn-success'>Add To Cart</button>
                            </div>
                            <div className='hsicon'>
                                <span><Bag></Bag></span>
                            </div>
                            <div className='hsicon1'>
                                <span><Heart></Heart></span>
                            </div>
                            <div className='hsicon2'>
                                <span><EyeFill></EyeFill></span>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 '>
                        <div className='flexitem1'>
                            <div className='hsppimg2'>
                                <img src={cc} alt="" />
                            </div>
                            <div>
                                <h5>Sueveillance Camera</h5>
                                <h4>&#x20B9;5000</h4>
                                <button className='btn btn-success'>Add To Cart</button>
                            </div>
                            <div className='hsicon'>
                                <span><Bag></Bag></span>
                            </div>
                            <div className='hsicon1'>
                                <span><Heart></Heart></span>
                            </div>
                            <div className='hsicon2'>
                                <span><EyeFill></EyeFill></span>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='flexitem1'>
                            <div className='hsppimg3'>
                                <img src={perfume} alt="" />
                            </div>
                            <div>
                                <h5>Phoenix Motherboard</h5>
                                <h4>&#x20B9;10000</h4>
                                <button className='btn btn-success'>Add To Cart</button>
                            </div>
                            <div className='hsicon'>
                                <span><Bag></Bag></span>
                            </div>
                            <div className='hsicon1'>
                                <span><Heart></Heart></span>
                            </div>
                            <div className='hsicon2'>
                                <span><EyeFill></EyeFill></span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className='container'>
                <div className='row'>
                    <h1>All Products</h1>
                    <div className='col-2 '>
                        <div className='pppdiv'>
                            <div className='ppimg'>
                                <img src={wdress} alt="" />
                            </div>
                            <div className='ppimgh5'>
                                <h5>QuantummcorePro Gaming Motherboard</h5>
                                <h5>&#x20B9;5000</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-2 '>
                        <div className='pppdiv'>
                            <div className='ppimg'>
                                <img src={coat} alt="" />
                            </div>
                            <div  className='ppimgh5'>
                                <h5>QuantummcorePro Gaming Motherboard</h5>
                                <h5>&#x20B9;5000</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-2 '>
                        <div className='pppdiv'>
                            <div className='ppimg'>
                                <img src={skirt1} alt="" />
                            </div>
                            <div  className='ppimgh5'>
                                <h5>QuantummcorePro Gaming Motherboard</h5>
                                <h5>&#x20B9;5000</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-2 '>
                        <div className='pppdiv'>
                            <div className='ppimg'>
                                <img src={ps} alt="" />
                            </div>
                            <div  className='ppimgh5'>
                                <h5>QuantummcorePro Gaming Motherboard</h5>
                                <h5>&#x20B9;5000</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-2 '>
                        <div className='pppdiv'>
                            <div className='ppimg'>
                                <img src={skirt} alt="" />
                            </div>
                            <div  className='ppimgh5'>
                                <h5>QuantummcorePro Gaming Motherboard</h5>
                                <h5>&#x20B9;5000</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-2 '>
                        <div className='pppdiv'>
                            <div className='ppimg'>
                                <img src={skirt1} alt="" />
                            </div>
                            <div  className='ppimgh5'>
                                <h5>QuantummcorePro Gaming Motherboard</h5>
                                <h5>&#x20B9;5000</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className='container'>
                <h1>Best Selling Store</h1>
                <div className='row'>
                    <div className='col-2'>
                        <div className='bss1'>
                            <div className='bssimg'>
                                <img src={store} alt="" />
                                <br />
                                <h5 className='mt-3'>Loyce Hickle</h5>
                                <p>visit store</p>
                            </div>
                            <div className='bsspic'>
                                <img src={pic2}></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='bss1'>
                            <div className='bssimg'>
                                <img src={girl} alt="" />
                                <br />
                                <h5 className='mt-3'>Loyce Hickle</h5>
                                <p>visit store</p>
                            </div>
                            <div className='bsspic'>
                                <img src={shoe}></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-2 '>
                        <div className='bss1'>
                            <div className='bssimg'>
                                <img src={store} alt="" />
                                <br />
                                <h5 className='mt-3'>Loyce Hickle</h5>
                                <p>visit store</p>
                            </div>
                            <div className='bsspic'>
                                <img src={pic2}></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-2 '>
                        <div className='bss1'>
                            <div className='bssimg'>
                                <img src={girl} alt="" />
                                <br />
                                <h5 className='mt-3'>Loyce Hickle</h5>
                                <p>visit store</p>
                            </div>
                            <div className='bsspic'>
                                <img src={shoe}></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='bss1'>
                            <div className='bssimg'>
                                <img src={store} alt="" />
                                <br />
                                <h5 className='mt-3'>Loyce Hickle</h5>
                                <p>visit store</p>
                            </div>
                            <div className='bsspic'>
                                <img src={pic3}></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-2 '>
                        <div className='bss1'>
                            <div className='bssimg'>
                                <img src={girl} alt="" />
                                <br />
                                <h5 className='mt-3'>Loyce Hickle</h5>
                                <p>visit store</p>
                            </div>
                            <div className='bsspic'>
                                <img src={shoe}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container'>
                <div className='row'>
                    <div className='col-5 phoneimg'>
                        <img src={phone} alt="" />
                    </div>
                    <div className='col-5'>
                        <h1 className='mt-5'>Get Our Mobile App</h1>
                        <br />
                        <p>You can get our new mobile app, designed to make your life easier and more convenient! Our app is packed with features that allow you to do everything from managing your account to Buying Product, all from the comfort of your own device. With its user-friendly interface, you can quickly and easily navigate through the app to find what you need. Whether you're on-the-go or just prefer the convenience of using your phone, our app is the perfect solution for you. Download it now from the App Store or Google Play and start experiencing the benefits of a more organized and connected life!</p>
                        <div>
                            <img src={apple} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
                            <img src={google} alt="" />
                        </div>
                    </div>
                </div>

            </section>
            <section className='container'>
                <div className='row mt-5'>
                    <h1>Latest News</h1>
                    <div className='col-3  mt-5'>
                        <div className='sgdiv'>
                            <div className='sgimg'>
                                <img src={sunglasses} alt="" />
                            </div>
                            <div>
                                <h5>In mr began music weeks after at begin</h5>
                                <br />
                                <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush place. These tried for way...</p>
                                <br />
                                <p>Read More</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-3 mt-5'>
                        <div className='sgdiv'>
                            <div className='sgimg'>
                                <img src={bgs1} alt="" />
                            </div>
                            <div>
                                <h5>In mr began music weeks after at begin</h5>
                                <br />
                                <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush place. These tried for way...</p>
                                <br />
                                <p>Read More</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-3  mt-5'>
                        <div className='sgdiv'>
                            <div className='sgimg'>
                                <img src={bgs2} alt="" />
                            </div>
                            <div>
                                <h5>New organization are added seal there</h5>
                                <br />
                                <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush place. These tried for way...</p>
                                <br />
                                <p>Read More</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-3  mt-5'>
                        <div className='sgdiv'>
                            <div className='sgimg'>
                                <img src={sunglasses} alt="" />
                            </div>
                            <div>
                                <h5>In mr began music weeks after at begin</h5>
                                <br />
                                <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush place. These tried for way...</p>
                                <br />
                                <p>Read More</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
