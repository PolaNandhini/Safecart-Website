import React from "react"
import './logos.component.css'
import logo2 from '../../assets/images/logo2.webp'
import logo3 from '../../assets/images/logo3.webp'
import logo4 from '../../assets/images/logo4.webp'
import logo5 from '../../assets/images/logo5.webp'

export function Logosgroup() {
    return (
        <>
            <div className="container mt-5">
                <div className="row logobackground">
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                        <div className="logo11">
                            <img src={logo4} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4  ">
                        <div className="logo11">
                            <img src={logo2} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                        <div className="logo11">
                            <img src={logo3} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                        <div className="logo11">
                            <img src={logo4} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4  ">
                        <div className="logo11">
                            <img src={logo5} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 ">
                        <div className="logo11">
                            <img src={logo2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}