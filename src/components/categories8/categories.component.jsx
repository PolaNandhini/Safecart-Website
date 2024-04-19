import React from "react"
import './categories.component.css'
import pets from '../../assets/images/pets.webp'
import { ArrowLeftShort, ArrowRightShort } from "react-bootstrap-icons"
import music from '../../assets/images/music.webp'
import perfume1 from '../../assets/images/perfume1.webp'
import shoes from '../../assets/images/shoes.webp'
import fashion from '../../assets/images/fashion.webp'
import Slider from "react-slick"
export function Categories() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-11 mt-3">
                        <h2>Categories</h2>
                    </div>
                    <div className="col-1 arrows">
                        <span><ArrowLeftShort></ArrowLeftShort></span>
                        <span><ArrowRightShort></ArrowRightShort></span>
                    </div>
                </div>
            </div>

            <div className="container categorie mt-5 ">
                <div className="row ">
                    <Slider {...settings}>
                        <div className="col-lg-2 col-xl-2 col-md-3 col-sm-3 m-3 ">
                            <div className="col_padding">
                                <div className="pets">
                                    <img src={pets} alt="" />
                                </div>
                                <div className="dis mt-2">
                                    <h6>Pets & Animal Supplies</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-xl-2 col-md-3 col-sm-3 m-3">
                            <div  className="col_padding">
                                <div className="pets">
                                    <img src={shoes} alt="" />
                                </div>
                                <div className="dis mt-2">
                                    <h6>Sports & fitness</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-xl-2 col-md-3 col-sm-3 m-3">
                            <div  className="col_padding">
                                <div className="pets">
                                    <img src={perfume1} alt="" />
                                </div>
                                <div className="dis mt-2">
                                    <h6>Personal care & beauty</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-xl-2 col-md-3 col-sm-3 m-3">
                            <div  className="col_padding">
                                <div className="pets">
                                    <img src={fashion} alt="" />
                                </div>
                                <div className="dis mt-2">
                                    <h6>Fashion</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-xl-2 col-md-3 col-sm-3 m-3">
                            <div  className="col_padding">
                                <div className="pets">
                                    <img src={music} alt="" />
                                </div>
                                <div className="dis mt-2">
                                    <h6>Music & Instruments</h6>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

        </>
    )
}