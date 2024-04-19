import React from "react";
import './final.component.css'
import vendors from '../../assets/images/vendors.svg'
import award from '../../assets/images/award.svg'
import custom from '../../assets/images/custom.svg'
export function Final() {
    return (
        <>
            <section className="contain mt-4">
                <div className="shad">
                    <div className="row g-2">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 rr ">
                            <div className="contains">
                                <img src={vendors} alt="" />
                            </div>
                            <div>
                                <h4>1900+ Vendors</h4>
                                <p>1,900 Vendors are working with us around the US</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 rr">
                            <div className="contains">
                                <img src={custom} alt="" />
                            </div>
                            <div>
                                <h4>9102+ Customers</h4>
                                <p>9,102+ Customers are making retained purchases every now & then</p>
                            </div>

                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 rr">
                            <div className="contains">
                                <img src={award} alt="" />
                            </div>
                            <div>
                                <h4>12 Awards</h4>
                                <p>We won 12 awards for excellency in customer service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}