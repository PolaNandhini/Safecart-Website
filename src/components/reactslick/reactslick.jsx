import React from "react";
import './reactslick.css';
import Slider from "react-slick";
import abcard1 from '../../assets/images/abcard1.png';
import abcard2 from '../../assets/images/abcard2.png';
import abcard3 from '../../assets/images/abcard3.png';
export function SlickSlider() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 200,
        cssEase: "linear"
    };
    return (
        <>
            <Slider {...settings} className="container">
                <div className="slidercolor">
                    <div className="slidercolor1">
                        <div className="sliderp">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti doloribus temporibus quasi quibusdam cum. Eligendi labore, minus excepturi similique eum expedita assumenda quod eaque, consequatur quas, nostrum nobis earum deserunt.</p>
                        </div>
                        <div className="sliderimg">
                            <img src={abcard1} alt="" />
                            <br /><br /> <br />
                            <h4>Jerry R Kuhn</h4>
                            <p>Student,Oxford university</p>
                        </div>
                    </div>
                </div>
                <div className="slidercolor">
                    <div className="slidercolor1">
                        <div className="sliderp">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti doloribus temporibus quasi quibusdam cum. Eligendi labore, minus excepturi similique eum expedita assumenda quod eaque, consequatur quas, nostrum nobis earum deserunt.</p>
                        </div>
                        <div className="sliderimg">
                            <img src={abcard2} alt="" />
                            <br /><br /> <br />
                            <h4>Graham Ortega</h4>
                            <p>Student,Oxford university</p>
                        </div>
                    </div>
                </div>
                <div className="slidercolor">
                    <div className="slidercolor1">
                        <div className="sliderp">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti doloribus temporibus quasi quibusdam cum. Eligendi labore, minus excepturi similique eum expedita assumenda quod eaque, consequatur quas, nostrum nobis earum deserunt.</p>
                        </div>
                        <div className="sliderimg">
                            <img src={abcard3} alt="" />
                            <br /><br /> <br />
                            <h4>Mellinda Watson</h4>
                            <p>Student,Oxford university</p>
                        </div>
                    </div>
                </div>
                <div className="slidercolor">
                    <div className="slidercolor1">
                        <div className="sliderp">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti doloribus temporibus quasi quibusdam cum. Eligendi labore, minus excepturi similique eum expedita assumenda quod eaque, consequatur quas, nostrum nobis earum deserunt.</p>
                        </div>
                        <div className="sliderimg">
                            <img src={abcard2} alt="" />
                            <br /><br /> <br />
                            <h4>Graham Ortega</h4>
                            <p>Student,Oxford university</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </>
    )
}