import React from "react";
import './homestyle02.css';
import table from '../../assets/images/table.webp'
import chair from '../../assets/images/chair.webp'
import wood from '../../assets/images/wood.webp'
import hsimg from '../../assets/images/hsimg.webp'
import airpods from '../../assets/images/airpods.webp'
import choco from '../../assets/images/choco.webp'
import ring from '../../assets/images/ring.webp'
import { Link } from "react-router-dom";
import { ArrowCounterclockwise, Bag, ChevronRight, Clock, EyeFill, Heart, RocketTakeoffFill, Send, Truck } from "react-bootstrap-icons";
import Slider from "react-slick";
import perfume from '../../assets/images/perfume1.webp';
import laptop from '../../assets/images/laptop.webp';
import mb from '../../assets/images/cc.webp';
import bed from '../../assets/images/bed.webp';
import scent from '../../assets/images/scent.webp';
import wdress from '../../assets/images/wdress.webp';
import heels from '../../assets/images/heels.webp';
import cc from '../../assets/images/cc.webp';
import board from '../../assets/images/mb.webp';
import red from '../../assets/images/red.webp';
import shirt from '../../assets/images/shirt.png';
import skirt from '../../assets/images/skirt.webp';
import bg7 from '../../assets/images/bg7.webp';
import bgs1 from '../../assets/images/bgs1.webp';
import bgs2 from '../../assets/images/bgs2.webp';
import tv from '../../assets/images/tv.webp';
import bags from '../../assets/images/bags.webp';
import rs1 from '../../assets/images/rs1.webp';
import rs2 from '../../assets/images/rs2.webp';
import rs3 from '../../assets/images/rs3.webp';
import rs4 from '../../assets/images/rs4.webp';
import giftvoucher from '../../assets/images/giftvoucher.webp';
import electronics from '../../assets/images/electronics.webp';
import { Top } from "../header1/top.component";
import { Header } from "../header2/header.component";
import { MainNav } from "../mainnav3/mainnav.component";
import mini1 from "../../assets/images/mini1.webp"
import mini2 from "../../assets/images/mini2.webp"
import mini3 from "../../assets/images/mini3.webp"
import mini4 from "../../assets/images/mini4.webp"
import mini5 from "../../assets/images/mini5.webp"
import mini6 from "../../assets/images/mini6.webp"
import apple from "../../assets/images/apple.webp"
import google from "../../assets/images/google.webp"
import ml1 from "../../assets/images/ml1.webp"
import coat from '../../assets/images/coat.webp'
import ml2 from "../../assets/images/ml2.webp"
import logo1 from "../../assets/images/logo1.webp"
import logo2 from "../../assets/images/logo2.webp"
import logo3 from "../../assets/images/logo3.webp"
import logo4 from "../../assets/images/logo4.webp"
import logo5 from "../../assets/images/logo5.webp"
import music from "../../assets/images/music.webp"
import headphones from "../../assets/images/headphones.webp"
import { Footer } from "../footer14/footer.component";
export function HomeStyleTwo() {
    var settings1 = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
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
    var settings3 = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    }
    const settings4 = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        verticalSwiping: true,
        beforeChange: function (currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        }
    };
    return (
        <>
            <section className="container mt-5">
                <div className="row">
                    <div className="col-3 homestyle_ul ">
                        <ul>
                            <li className="list_li">Home & Living&nbsp;<ChevronRight></ChevronRight>
                                <div className="hlbox">
                                    <div className="row">
                                        <div className="col-4">
                                            <h4>Furniture</h4>
                                            <div className="chairimg mt-2">
                                                <h6>Hall Room Chair</h6>
                                                <img src={chair} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <h4>Kitchen</h4>
                                            <div className="chairimg mt-2">
                                                <h6>coffee table</h6>
                                                <img src={table} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <h4>Home Decor</h4>
                                            <div className="chairimg mt-2">
                                                <h6>Wood Cabinet</h6>
                                                <img src={wood} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="list_li">Fashion&nbsp;<ChevronRight></ChevronRight>
                                <div className="hlbox1">
                                    <div className="row">
                                        <div className="col-4">
                                            <h4>Men wear</h4>
                                            <div className="chairimg mt-2">
                                                <h6>Denim shirt</h6>
                                                <img src={coat} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <h4>For Women</h4>
                                            <div className="chairimg mt-2">
                                                <h6>Long Frock</h6>
                                                <img src={wdress} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <h4>Casual</h4>
                                            <div className="chairimg mt-2">
                                                <h6>Shirt</h6>
                                                <img src={shirt} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="list_li">Electronics&nbsp;<ChevronRight></ChevronRight>
                            <div className="hlbox2">
                                    <div className="row">
                                        <div className="col-4">
                                            <h4>Music</h4>
                                            <div className="chairimg mt-2">
                                                <h6>Speaker</h6>
                                                <img src={music} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <h4>Headset</h4>
                                            <div className="chairimg mt-2">
                                                <h6>Headphones</h6>
                                                <img src={headphones} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <h4>Electronic</h4>
                                            <div className="chairimg mt-2">
                                                <h6>Laptop</h6>
                                                <img src={laptop} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>Personal Care &  Beauty</li>
                            <li>Kids & Babies</li>
                            <li>Arts & Crafts</li>
                            <li>Health & Wellness</li>
                        </ul>
                    </div>
                    <div className="col-8">
                        <div id="carouselExampleCaptions" className="carousel slide hs_color" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item hs_img active">
                                    <img src={hsimg} class="d-block w-55" alt="..." />
                                    <div class="carousel-caption d-none d-md-block hs_text">
                                        <h5>Upto 70% off on black friday</h5>
                                        <h1>Trendy <span className="winter">Winter</span> Collection</h1>
                                        <button className="btn btn-primary mt-3">shop now</button>
                                    </div>
                                </div>
                                <div class="carousel-item hs_img">
                                    <img src={hsimg} class="d-block w-55" alt="..." />
                                    <div class="carousel-caption d-none d-md-block hs_text">
                                        <h5>Upto 70% off on black friday</h5>
                                        <h1>Trendy <span className="winter">Winter</span> Collection</h1>
                                        <button className="btn btn-primary  mt-3">shop now</button>
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
                    </div>
                </div>
            </section>
            <section className="container mt-5">
                <div className="row">
                    <div className="col-4">
                        <div className="bg_color">
                            <div className="hsimg_1">
                                <p className="mt-5">30% Off On</p>
                                <h4>30% Off On</h4>
                                <span className="bagicon"><Bag></Bag></span>&nbsp;<Link>Buy Now</Link>
                            </div>
                            <div className="hs_imgg">
                                <img src={airpods} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="bg_color1">
                            <div className="hsimg_1">
                                <p className="mt-5">30% Off On</p>
                                <h4>30% Off On</h4>
                                <span className="bagicon"><Bag></Bag></span>&nbsp;<Link>Buy Now</Link>
                            </div>
                            <div className="hs_imgg">
                                <img src={choco} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 ">
                        <div className="bg_color2">
                            <div className="hsimg_1">
                                <p className="mt-5">30% Off On</p>
                                <h4>30% Off On</h4>
                                <span className="bagicon"><Bag></Bag></span>&nbsp;<Link>Buy Now</Link>
                            </div>
                            <div className="hs_imgg">
                                <img src={ring} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="rkt">
                            <div className="rkticons">
                                <span className="rkticon"><RocketTakeoffFill></RocketTakeoffFill></span>&nbsp;&nbsp;
                            </div>
                            <div className="rkt1">
                                <h3>Express Delivery</h3>
                                <p>Get It Within 24 Hours</p>
                            </div>
                        </div>
                        <div className="rkt">
                            <div className="rkticons">
                                <span className="rkticon"><Truck></Truck></span>&nbsp;&nbsp;
                            </div>
                            <div className="rkt1">
                                <h3>Standard Delivery</h3>
                                <p>3-5 Business Days</p>
                            </div>
                        </div>
                        <div className="rkt">
                            <div className="rkticons">
                                <span className="rkticon"><Clock></Clock></span>&nbsp;&nbsp;
                            </div>
                            <div className="rkt1">
                                <h3>Same Day Delivery</h3>
                                <p>Order Before 10 AM</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <h2>Featured Item</h2>
                        <Slider {...settings1} className="container">
                            <div className="tdiv">
                                <div className="perborder">
                                    <div className="perimg11">
                                        <div className="perimg1">
                                            <img src={laptop} alt="" />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="fouricons">
                                        <div className="h1icon">
                                            <span className="hp"><Bag></Bag></span>
                                        </div>
                                        <div className="h1icon">
                                            <span className="hp"><Heart></Heart></span>
                                        </div>
                                        <div className="h1icon">
                                            <span className="hp"><ArrowCounterclockwise></ArrowCounterclockwise></span>
                                        </div>
                                        <div className="h1icon">
                                            <span className="hp"><EyeFill></EyeFill></span>
                                        </div>
                                    </div>
                                    <div className="txtpadding">
                                        <h3>Gaming Laptop</h3>
                                        <br />
                                        <h4 className="clr">Stock(100)</h4>
                                        <div className="clritems">
                                            <div>
                                                <span className="clr1">&#x20B9;120000</span>&nbsp;<del> &#x20B9;128000</del>
                                            </div>
                                            <div className="bgicon"><span className="hicon"><Heart></Heart></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tdiv">
                                <div className="perborder">
                                    <div className="perimg22">
                                        <div className="perimg2">
                                            <img src={perfume} alt="" />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="fouricons">
                                        <div className="h1icon">
                                            <span className="hp"><Bag></Bag></span>
                                        </div>
                                        <div className="h1icon">
                                            <span className="hp"><Heart></Heart></span>
                                        </div>
                                        <div className="h1icon">
                                            <span className="hp"><ArrowCounterclockwise></ArrowCounterclockwise></span>
                                        </div>
                                        <div className="h1icon">
                                            <span className="hp"><EyeFill></EyeFill></span>
                                        </div>
                                    </div>
                                    <div className="txtpadding">
                                        <h3>Maison Fransis</h3>
                                        <br />
                                        <h4 className="clr">Stock(100)</h4>
                                        <div className="clritems">
                                            <div>
                                                <span className="clr1">&#x20B9;2000</span>&nbsp;<del> &#x20B9;2300</del>
                                            </div>
                                            <div className="bgicon"><span className="hicon"><Heart></Heart></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tdiv">
                                <div className="perborder">
                                    <div className="perimg33">
                                        <div className="perimg3">
                                            <img src={mb} alt="" />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="fouricons">
                                        <div className="h1icon">
                                            <span className="hp"><Bag></Bag></span>
                                        </div>
                                        <div className="h1icon">
                                            <span className="hp"><Heart></Heart></span>
                                        </div>
                                        <div className="h1icon">
                                            <span className="hp"><ArrowCounterclockwise></ArrowCounterclockwise></span>
                                        </div>
                                        <div className="h1icon">
                                            <span className="hp"><EyeFill></EyeFill></span>
                                        </div>
                                    </div>
                                    <div className="txtpadding">
                                        <h3>Surveilance Camera</h3>
                                        <br />
                                        <h4 className="clr">Stock(100)</h4>
                                        <div className="clritems">
                                            <div>
                                                <span className="clr1">&#x20B9;2000</span>&nbsp;<del> &#x20B9;2300</del>
                                            </div>
                                            <div className="bgicon"><span className="hicon"><Heart></Heart></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="row">
                    <div className="col-3 itemsbdr">
                        <h4>Deal Of The Week</h4>
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
                        <div className="ficons">
                            <div className="hearticon">
                                <span className="hp"><Bag></Bag></span>
                            </div>
                            <div className="hearticon">
                                <span className="hp"><Heart></Heart></span>
                            </div>
                            <div className="hearticon">
                                <span className="hp"><ArrowCounterclockwise></ArrowCounterclockwise></span>
                            </div>
                            <div className="hearticon">
                                <span className="hp"><EyeFill></EyeFill></span>
                            </div>
                        </div>
                        <br />
                        <hr />
                        <div className="mt-5">
                            <div className="spanflex">
                                <div className="spanbdr"><span className="bbdr">53</span></div>
                                <span className="colon">
                                    :
                                </span>
                                <div className="spanbdr"><span className="bbdr">53</span></div>
                                <span className="colon">
                                    :
                                </span>
                                <div className="spanbdr"><span className="bbdr">53</span></div>
                            </div>
                            <p className="mt-3" style={{ textAlign: 'center' }}>Remains Until The End Of The Offer</p>
                        </div>
                    </div>
                    <div className="col-9 mt-5 ">
                        <div className="tags">
                            <h2>Todays Deal</h2>
                            <p>view all</p>
                        </div>
                        <div className="flex_items_img mt-5" >
                            <div className="laptopimg mt-5">
                                <img src={laptop} alt="" />
                                <div className="mt-5">
                                    <h4>Quantumm Core Mother Board</h4>
                                    <h5 className="clr1 mt-3">&#x20B9;120000&nbsp;<del>&#x20B9;123000</del></h5>
                                </div>
                            </div>
                            <div className="laptopimg mt-5">
                                <img src={perfume} alt="" />
                                <div className="mt-5">
                                    <h4>Versace Longlasting Perfume</h4>
                                    <h5 className="clr1 mt-3">&#x20B9;2000&nbsp;<del>&#x20B9;2300</del></h5>
                                </div>
                            </div>
                            <div className="laptopimg mt-5">
                                <img src={wdress} alt="" />
                                <div className="mt-5">
                                    <h4>Pink Colour Long Dress</h4>
                                    <h5 className="clr1 mt-3">&#x20B9;2800&nbsp;<del>&#x20B9;3300</del></h5>
                                </div>
                            </div>
                            <div className="laptopimg mt-5">
                                <img src={heels} alt="" />
                                <div className="mt-5">
                                    <h4>Blak Colour Pencil Heels</h4>
                                    <h5 className="clr1 mt-3">&#x20B9;5000&nbsp;<del>&#x20B9;6000</del></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="row">
                    <div className="col-3 minibdr">
                        <div>
                            <h2 className="mt-4">Trendy Collection</h2>
                            <div className="miniimgflex mt-5">
                                <div className="miniimg">
                                    <img src={laptop} alt="" />
                                </div>
                                <div>
                                    <h5>TitanPro<br />Gaming Laptop</h5>
                                    <span className="clr1">&#x20B9;120000</span>&nbsp;<del> &#x20B9;130000</del>
                                </div>
                            </div>
                            <div className="miniimgflex mt-5">
                                <div className="miniimg">
                                    <img src={cc} alt="" />
                                </div>
                                <div>
                                    <h5>GuardianEyeHD <br />Survilliance <br /> Camera</h5>
                                    <span className="clr1">&#x20B9;3000</span>&nbsp;<del> &#x20B9;3300</del>
                                </div>
                            </div>
                            <div className="miniimgflex mt-5">
                                <div className="miniimg">
                                    <img src={board} alt="" />
                                </div>
                                <div>
                                    <h5>QuantammCore <br />proGaming  <br /> Motherbord</h5>
                                    <span className="clr1">&#x20B9;12000</span>&nbsp;<del> &#x20B9;13000</del>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="flex_items_text">
                            <h2>Hot Item</h2>
                            <div className="flex_items_text1">
                                <p>All</p>&nbsp;&nbsp;&nbsp;
                                <p>Electronics</p>&nbsp;&nbsp;&nbsp;
                                <p>Fashion</p>
                            </div>
                        </div>
                        <div className="flex_items_img">
                            <div className="laptopimg mt-5  gi">
                                <img src={laptop} alt="" />
                                <div className="mt-5">
                                    <h4>Titan Pro Gaming Laptop</h4>
                                    <h5 className="clr1 mt-3">&#x20B9;120000&nbsp;<del>&#x20B9;123000</del></h5>
                                </div>
                                <div className="ficons1">
                                    <div className="hearticon">
                                        <span className="hp"><Bag></Bag></span>
                                    </div>
                                    <div className="hearticon">
                                        <span className="hp"><Heart></Heart></span>
                                    </div>
                                    <div className="hearticon">
                                        <span className="hp"><ArrowCounterclockwise></ArrowCounterclockwise></span>
                                    </div>
                                    <div className="hearticon">
                                        <span className="hp"><EyeFill></EyeFill></span>
                                    </div>
                                </div>
                            </div>
                            <div className="laptopimg mt-5 gi1">
                                <img src={red} alt="" />
                                <div className="mt-5">
                                    <h4>Mens Long Sleeve Shirt</h4>
                                    <h5 className="clr1 mt-3">&#x20B9;2000&nbsp;<del>&#x20B9;2300</del></h5>
                                </div>
                                <div className="ficons1">
                                    <div className="hearticon">
                                        <span className="hp"><Bag></Bag></span>
                                    </div>
                                    <div className="hearticon">
                                        <span className="hp"><Heart></Heart></span>
                                    </div>
                                    <div className="hearticon">
                                        <span className="hp"><ArrowCounterclockwise></ArrowCounterclockwise></span>
                                    </div>
                                    <div className="hearticon">
                                        <span className="hp"><EyeFill></EyeFill></span>
                                    </div>
                                </div>
                            </div>
                            <div className="laptopimg mt-5 gi2">
                                <img src={shirt} alt="" />
                                <div className="mt-5">
                                    <h4>Blue Half Hand Shirt</h4>
                                    <h5 className="clr1 mt-3">&#x20B9;1200&nbsp;<del>&#x20B9;1300</del></h5>
                                </div>
                                <div className="ficons1">
                                    <div className="hearticon">
                                        <span className="hp"><Bag></Bag></span>
                                    </div>
                                    <div className="hearticon">
                                        <span className="hp"><Heart></Heart></span>
                                    </div>
                                    <div className="hearticon">
                                        <span className="hp"><ArrowCounterclockwise></ArrowCounterclockwise></span>
                                    </div>
                                    <div className="hearticon">
                                        <span className="hp"><EyeFill></EyeFill></span>
                                    </div>
                                </div>
                            </div>
                            <div className="laptopimg mt-5 gi3">
                                <img src={skirt} alt="" />
                                <div className="mt-5">
                                    <h4>Long Denim Skirt For Women</h4>
                                    <h5 className="clr1 mt-3">&#x20B9;1200&nbsp;<del>&#x20B9;1330</del></h5>
                                </div>
                                <div className="ficons1">
                                    <div className="hearticon">
                                        <span className="hp"><Bag></Bag></span>
                                    </div>
                                    <div className="hearticon">
                                        <span className="hp"><Heart></Heart></span>
                                    </div>
                                    <div className="hearticon">
                                        <span className="hp"><ArrowCounterclockwise></ArrowCounterclockwise></span>
                                    </div>
                                    <div className="hearticon">
                                        <span className="hp"><EyeFill></EyeFill></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="row">
                    <div className="col-3 bluebdr">
                        <div className="mt-5 ml">
                            <h1 className="numclr">50%</h1>
                            <h2>540</h2>
                            <h3>shop Now</h3>
                        </div>
                        <div className="bagsimg mt-5">
                            <img src={bags} alt="" />
                        </div>
                        <div className="pic_bdr mt-5">
                            <div className="bdr_padding">
                                <h3>New Updates</h3>
                                <div className="bgs_list mt-4">
                                    <div className="bgs_img">
                                        <img src={bg7} alt="" />
                                    </div>
                                    <div>
                                        <h5>New Organization <br /> Are Added <br /> Seal There</h5>
                                        <p>2024 Feb 06</p>
                                    </div>
                                </div>
                                <div className="bgs_list mt-5">
                                    <div className="bgs1_img">
                                        <img src={bgs1} alt="" />
                                    </div>
                                    <div>
                                        <h5>Was drawing  <br /> natural fat respect <br /> husband</h5>
                                        <p>2024 Feb 10</p>
                                    </div>
                                </div>
                                <div className="bgs_list mt-5">
                                    <div className="bgs2_img">
                                        <img src={bgs2} alt="" />
                                    </div>
                                    <div>
                                        <h5>Thet say a <br /> picture speaks a<br /> thousand words</h5>
                                        <p>2024 March 06</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gifv mt-5">
                            <img src={giftvoucher} alt="" />
                        </div>
                    </div>
                    <div className="col-9">
                        <Slider {...settings3}>
                            <div className="rsimg">
                                <img src={rs1} alt="" />
                            </div>
                            <div className="rsimg">
                                <img src={rs2} alt="" />
                            </div>
                            <div className="rsimg">
                                <img src={rs3} alt="" />
                            </div>
                            <div className="rsimg">
                                <img src={rs4} alt="" />
                            </div>
                        </Slider>
                        <div className="vertical_sliders mt-5">
                            <div className="vertical_slider1">
                                <h1>Electronics</h1>
                                <Slider {...settings4}>
                                    <div className="vertical_flex gi9">
                                        <img src={red} alt="" />
                                        <div>
                                            <h5>Red Long Sleeve</h5>
                                            <span>&#x20B9;12000</span>&nbsp;<del> &#x20B9;13000</del>
                                        </div>
                                        <div className="ficons2">
                                            <div className="hearticon">
                                                <span className="hp"><Bag></Bag></span>
                                            </div>
                                            <div className="hearticon">
                                                <span className="hp"><Heart></Heart></span>
                                            </div>
                                            <div className="hearticon">
                                                <span className="hp"><ArrowCounterclockwise></ArrowCounterclockwise></span>
                                            </div>
                                            <div className="hearticon">
                                                <span className="hp"><EyeFill></EyeFill></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vertical_flex gi9">
                                        <img src={cc} alt="" />
                                        <div>
                                            <h5>Red Long Sleeve</h5>
                                            <span>&#x20B9;12000</span>&nbsp;<del> &#x20B9;13000</del>
                                        </div>
                                        <div className="ficons2">
                                            <div className="hearticon">
                                                <span className="hp"><Bag></Bag></span>
                                            </div>
                                            <div className="hearticon">
                                                <span className="hp"><Heart></Heart></span>
                                            </div>
                                            <div className="hearticon">
                                                <span className="hp"><ArrowCounterclockwise></ArrowCounterclockwise></span>
                                            </div>
                                            <div className="hearticon">
                                                <span className="hp"><EyeFill></EyeFill></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vertical_flex gi9">
                                        <img src={laptop} alt="" />
                                        <div>
                                            <h5>Red Long Sleeve</h5>
                                            <span>&#x20B9;12000</span>&nbsp;<del> &#x20B9;13000</del>
                                        </div>
                                        <div className="ficons2">
                                            <div className="hearticon">
                                                <span className="hp"><Bag></Bag></span>
                                            </div>
                                            <div className="hearticon">
                                                <span className="hp"><Heart></Heart></span>
                                            </div>
                                            <div className="hearticon">
                                                <span className="hp"><ArrowCounterclockwise></ArrowCounterclockwise></span>
                                            </div>
                                            <div className="hearticon">
                                                <span className="hp"><EyeFill></EyeFill></span>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                            <div className="vertical_slider1">
                                <h1>Fashion</h1>
                                <Slider {...settings4}>
                                    <div className="vertical_flex gi9">
                                        <img src={skirt} alt="" />
                                        <div>
                                            <h5>Red Long Sleeve</h5>
                                            <span>&#x20B9;12000</span>&nbsp;<del> &#x20B9;13000</del>
                                        </div>
                                        <div className="ficons2">
                                            <div className="hearticon">
                                                <span className="hp"><Bag></Bag></span>
                                            </div>
                                            <div className="hearticon">
                                                <span className="hp"><Heart></Heart></span>
                                            </div>
                                            <div className="hearticon">
                                                <span className="hp"><ArrowCounterclockwise></ArrowCounterclockwise></span>
                                            </div>
                                            <div className="hearticon">
                                                <span className="hp"><EyeFill></EyeFill></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vertical_flex gi9">
                                        <img src={perfume} alt="" />
                                        <div>
                                            <h5>Red Long Sleeve</h5>
                                            <span>&#x20B9;12000</span>&nbsp;<del> &#x20B9;13000</del>
                                        </div>
                                        <div className="ficons2">
                                            <div className="hearticon">
                                                <span className="hp"><Bag></Bag></span>
                                            </div>
                                            <div className="hearticon">
                                                <span className="hp"><Heart></Heart></span>
                                            </div>
                                            <div className="hearticon">
                                                <span className="hp"><ArrowCounterclockwise></ArrowCounterclockwise></span>
                                            </div>
                                            <div className="hearticon">
                                                <span className="hp"><EyeFill></EyeFill></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vertical_flex gi9">
                                        <img src={wdress} alt="" />
                                        <div>
                                            <h5>Red Long Sleeve</h5>
                                            <span>&#x20B9;12000</span>&nbsp;<del> &#x20B9;13000</del>
                                        </div>
                                        <div className="ficons2">
                                            <div className="hearticon">
                                                <span className="hp"><Bag></Bag></span>
                                            </div>
                                            <div className="hearticon">
                                                <span className="hp"><Heart></Heart></span>
                                            </div>
                                            <div className="hearticon">
                                                <span className="hp"><ArrowCounterclockwise></ArrowCounterclockwise></span>
                                            </div>
                                            <div className="hearticon">
                                                <span className="hp"><EyeFill></EyeFill></span>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                            <div className="vertical_slider1">
                                <h1>Home & Living</h1>
                                <Slider {...settings4}>
                                    <div className="vertical_flex gi9">
                                        <img src={table} alt="" />
                                        <div>
                                            <h5>Red Long Sleeve</h5>
                                            <span>&#x20B9;12000</span>&nbsp;<del> &#x20B9;13000</del>
                                        </div>
                                        <div className="ficons2">
                                            <div className="hearticon">
                                                <span className="hp"><Bag></Bag></span>
                                            </div>
                                            <div className="hearticon">
                                                <span className="hp"><Heart></Heart></span>
                                            </div>
                                            <div className="hearticon">
                                                <span className="hp"><ArrowCounterclockwise></ArrowCounterclockwise></span>
                                            </div>
                                            <div className="hearticon">
                                                <span className="hp"><EyeFill></EyeFill></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vertical_flex gi9">
                                        <img src={tv} alt="" />
                                        <div>
                                            <h5>Red Long Sleeve</h5>
                                            <span>&#x20B9;12000</span>&nbsp;<del> &#x20B9;13000</del>
                                        </div>
                                        <div className="ficons2">
                                            <div className="hearticon">
                                                <span className="hp"><Bag></Bag></span>
                                            </div>
                                            <div className="hearticon">
                                                <span className="hp"><Heart></Heart></span>
                                            </div>
                                            <div className="hearticon">
                                                <span className="hp"><ArrowCounterclockwise></ArrowCounterclockwise></span>
                                            </div>
                                            <div className="hearticon">
                                                <span className="hp"><EyeFill></EyeFill></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vertical_flex gi9">
                                        <img src={chair} alt="" />
                                        <div>
                                            <h5>Red Long Sleeve</h5>
                                            <span>&#x20B9;12000</span>&nbsp;<del> &#x20B9;13000</del>
                                        </div>
                                        <div className="ficons2">
                                            <div className="hearticon">
                                                <span className="hp"><Bag></Bag></span>
                                            </div>
                                            <div className="hearticon">
                                                <span className="hp"><Heart></Heart></span>
                                            </div>
                                            <div className="hearticon">
                                                <span className="hp"><ArrowCounterclockwise></ArrowCounterclockwise></span>
                                            </div>
                                            <div className="hearticon">
                                                <span className="hp"><EyeFill></EyeFill></span>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <Slider {...settings1} className="container mt-5">
                            <div className="tdiv">
                                <div className="perborder">
                                    <div className="perimg11">
                                        <div className="perimg1">
                                            <img src={laptop} alt="" />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="fouricons">
                                        <div className="h1icon">
                                            <span className="hp"><Bag></Bag></span>
                                        </div>
                                        <div className="h1icon">
                                            <span className="hp"><Heart></Heart></span>
                                        </div>
                                        <div className="h1icon">
                                            <span className="hp"><ArrowCounterclockwise></ArrowCounterclockwise></span>
                                        </div>
                                        <div className="h1icon">
                                            <span className="hp"><EyeFill></EyeFill></span>
                                        </div>
                                    </div>
                                    <div className="txtpadding">
                                        <h3>Gaming Laptop</h3>
                                        <br />
                                        <h4 className="clr">Stock(100)</h4>
                                        <div className="clritems">
                                            <div>
                                                <span className="clr1">&#x20B9;120000</span>&nbsp;<del> &#x20B9;128000</del>
                                            </div>
                                            <div className="bgicon"><span className="hicon"><Heart></Heart></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tdiv">
                                <div className="perborder">
                                    <div className="perimg22">
                                        <div className="perimg2">
                                            <img src={perfume} alt="" />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="fouricons">
                                        <div className="h1icon">
                                            <span className="hp"><Bag></Bag></span>
                                        </div>
                                        <div className="h1icon">
                                            <span className="hp"><Heart></Heart></span>
                                        </div>
                                        <div className="h1icon">
                                            <span className="hp"><ArrowCounterclockwise></ArrowCounterclockwise></span>
                                        </div>
                                        <div className="h1icon">
                                            <span className="hp"><EyeFill></EyeFill></span>
                                        </div>
                                    </div>
                                    <div className="txtpadding">
                                        <h3>Maison Fransis</h3>
                                        <br />
                                        <h4 className="clr">Stock(100)</h4>
                                        <div className="clritems">
                                            <div>
                                                <span className="clr1">&#x20B9;2000</span>&nbsp;<del> &#x20B9;2300</del>
                                            </div>
                                            <div className="bgicon"><span className="hicon"><Heart></Heart></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tdiv">
                                <div className="perborder">
                                    <div className="perimg33">
                                        <div className="perimg3">
                                            <img src={mb} alt="" />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="fouricons">
                                        <div className="h1icon">
                                            <span className="hp"><Bag></Bag></span>
                                        </div>
                                        <div className="h1icon">
                                            <span className="hp"><Heart></Heart></span>
                                        </div>
                                        <div className="h1icon">
                                            <span className="hp"><ArrowCounterclockwise></ArrowCounterclockwise></span>
                                        </div>
                                        <div className="h1icon">
                                            <span className="hp"><EyeFill></EyeFill></span>
                                        </div>
                                    </div>
                                    <div className="txtpadding">
                                        <h3>Surveilance Camera</h3>
                                        <br />
                                        <h4 className="clr">Stock(100)</h4>
                                        <div className="clritems">
                                            <div>
                                                <span className="clr1">&#x20B9;2000</span>&nbsp;<del> &#x20B9;2300</del>
                                            </div>
                                            <div className="bgicon"><span className="hicon"><Heart></Heart></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                        <div className="mt-5 bg-blue">
                            <div className="marginl">
                                <img src={electronics} alt="" />
                            </div>
                            <div>
                                <h5 className="whiteclr">Save upto 50%</h5>
                                <h3 className="whiteclr">Gadgets & Electronics</h3>
                            </div>
                            <div className="marginr">
                                <button className="btn btn-light">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="row">
                    <div className="col-3 mini_bdr">
                        <h3 className="mt-4">Instagram</h3>
                        <div className="minis">
                            <div className="mini">
                                <img src={mini1} alt="" />
                            </div>
                            <div className="mini">
                                <img src={mini2} alt="" />
                            </div>
                            <div className="mini">
                                <img src={mini3} alt="" />
                            </div>
                        </div>
                        <div className="minis">
                            <div className="mini">
                                <img src={mini4} alt="" />
                            </div>
                            <div className="mini">
                                <img src={mini5} alt="" />
                            </div>
                            <div className="mini">
                                <img src={mini6} alt="" />
                            </div>
                        </div>
                        <div className="minibdr mt-5">
                            <div>
                                <h2 className="mt-4">Hot Deal</h2>
                                <div className="miniimgflex mt-5">
                                    <div className="miniimg">
                                        <img src={laptop} alt="" />
                                    </div>
                                    <div>
                                        <h5>TitanPro<br />Gaming Laptop</h5>
                                        <span className="clr1">&#x20B9;120000</span>&nbsp;<del> &#x20B9;130000</del>
                                    </div>
                                </div>
                                <div className="miniimgflex mt-5">
                                    <div className="miniimg">
                                        <img src={cc} alt="" />
                                    </div>
                                    <div>
                                        <h5>GuardianEyeHD <br />Survilliance <br /> Camera</h5>
                                        <span className="clr1">&#x20B9;3000</span>&nbsp;<del> &#x20B9;3300</del>
                                    </div>
                                </div>
                                <div className="miniimgflex mt-5">
                                    <div className="miniimg">
                                        <img src={board} alt="" />
                                    </div>
                                    <div>
                                        <h5>QuantammCore <br />proGaming  <br /> Motherbord</h5>
                                        <span className="clr1">&#x20B9;12000</span>&nbsp;<del> &#x20B9;13000</del>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="clr_blue">
                            <div className="content_flex">
                                <div className="ml_img">
                                    <h4>Upto 70% of on Black Friday</h4> <br />
                                    <h2>Get The Link To <br /> Download The App</h2> <br />
                                    <div className="inpbtn">
                                        <input type="text" placeholder="Your Email Here" />
                                        <button className="btn btn-primary"><span className="send"><Send></Send></span></button>
                                    </div>
                                    <br />
                                    <div className="ag_img">
                                        <img src={apple} alt="" />&nbsp;&nbsp;
                                        <img src={google} alt="" />
                                    </div>
                                </div>
                                <img src={ml1} alt="" className="ml_img1" />
                                <img src={ml2} alt="" className="ml_img2" />
                            </div>
                        </div>
                        <div className="mt-5">
                            <h2>Our Brands</h2>
                            <Slider {...settings3}>
                                <div>
                                    <div className="rsimg1">
                                        <img src={logo1} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="rsimg1">
                                        <img src={logo2} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="rsimg1">
                                        <img src={logo3} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="rsimg1">
                                        <img src={logo4} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="rsimg1">
                                        <img src={logo5} alt="" />
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            <br /><br /><br /><br /><br /><br />
            <section className="container ">
                <div className="row">
                    <div className="col-3 minibdr">
                        <div>
                            <h2 className="mt-4">Hot Products</h2>
                            <div className="miniimgflex mt-5">
                                <div className="miniimg">
                                    <img src={laptop} alt="" />
                                </div>
                                <div>
                                    <h5>TitanPro<br />Gaming Laptop</h5>
                                    <span className="clr1">&#x20B9;120000</span>&nbsp;<del> &#x20B9;130000</del>
                                </div>
                            </div>
                            <div className="miniimgflex mt-5">
                                <div className="miniimg">
                                    <img src={cc} alt="" />
                                </div>
                                <div>
                                    <h5>GuardianEyeHD <br />Survilliance <br /> Camera</h5>
                                    <span className="clr1">&#x20B9;3000</span>&nbsp;<del> &#x20B9;3300</del>
                                </div>
                            </div>
                            <div className="miniimgflex mt-5">
                                <div className="miniimg">
                                    <img src={board} alt="" />
                                </div>
                                <div>
                                    <h5>QuantammCore <br />proGaming  <br /> Motherbord</h5>
                                    <span className="clr1">&#x20B9;12000</span>&nbsp;<del> &#x20B9;13000</del>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="flex_items_text">
                            <h2>Featured Items</h2>
                        </div>
                        <div className="flex_items_img">
                            <div className="laptopimg mt-5  gi">
                                <img src={laptop} alt="" />
                                <div className="mt-5">
                                    <h4>Titan Pro Gaming Laptop</h4>
                                    <h5 className="clr1 mt-3">&#x20B9;120000&nbsp;<del>&#x20B9;123000</del></h5>
                                </div>
                                <div className="ficons1">
                                    <div className="hearticon">
                                        <span className="hp"><Bag></Bag></span>
                                    </div>
                                    <div className="hearticon">
                                        <span className="hp"><Heart></Heart></span>
                                    </div>
                                    <div className="hearticon">
                                        <span className="hp"><ArrowCounterclockwise></ArrowCounterclockwise></span>
                                    </div>
                                    <div className="hearticon">
                                        <span className="hp"><EyeFill></EyeFill></span>
                                    </div>
                                </div>
                            </div>
                            <div className="laptopimg mt-5 gi1">
                                <img src={red} alt="" />
                                <div className="mt-5">
                                    <h4>Mens Long Sleeve Shirt</h4>
                                    <h5 className="clr1 mt-3">&#x20B9;2000&nbsp;<del>&#x20B9;2300</del></h5>
                                </div>
                                <div className="ficons1">
                                    <div className="hearticon">
                                        <span className="hp"><Bag></Bag></span>
                                    </div>
                                    <div className="hearticon">
                                        <span className="hp"><Heart></Heart></span>
                                    </div>
                                    <div className="hearticon">
                                        <span className="hp"><ArrowCounterclockwise></ArrowCounterclockwise></span>
                                    </div>
                                    <div className="hearticon">
                                        <span className="hp"><EyeFill></EyeFill></span>
                                    </div>
                                </div>
                            </div>
                            <div className="laptopimg mt-5 gi2">
                                <img src={shirt} alt="" />
                                <div className="mt-5">
                                    <h4>Blue Half Hand Shirt</h4>
                                    <h5 className="clr1 mt-3">&#x20B9;1200&nbsp;<del>&#x20B9;1300</del></h5>
                                </div>
                                <div className="ficons1">
                                    <div className="hearticon">
                                        <span className="hp"><Bag></Bag></span>
                                    </div>
                                    <div className="hearticon">
                                        <span className="hp"><Heart></Heart></span>
                                    </div>
                                    <div className="hearticon">
                                        <span className="hp"><ArrowCounterclockwise></ArrowCounterclockwise></span>
                                    </div>
                                    <div className="hearticon">
                                        <span className="hp"><EyeFill></EyeFill></span>
                                    </div>
                                </div>
                            </div>
                            <div className="laptopimg mt-5 gi3">
                                <img src={skirt} alt="" />
                                <div className="mt-5">
                                    <h4>Long Denim Skirt For Women</h4>
                                    <h5 className="clr1 mt-3">&#x20B9;1200&nbsp;<del>&#x20B9;1330</del></h5>
                                </div>
                                <div className="ficons1">
                                    <div className="hearticon">
                                        <span className="hp"><Bag></Bag></span>
                                    </div>
                                    <div className="hearticon">
                                        <span className="hp"><Heart></Heart></span>
                                    </div>
                                    <div className="hearticon">
                                        <span className="hp"><ArrowCounterclockwise></ArrowCounterclockwise></span>
                                    </div>
                                    <div className="hearticon">
                                        <span className="hp"><EyeFill></EyeFill></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br /><br />
        </>
    )
}