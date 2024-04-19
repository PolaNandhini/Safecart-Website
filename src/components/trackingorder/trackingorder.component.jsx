import React from "react";
import './trackingorder.component.css';
import tracking from '../../assets/images/tracking.webp'
import { Top } from "../header1/top.component";
import { Header } from "../header2/header.component";
import { MainNav } from "../mainnav3/mainnav.component";
import { Footer } from "../footer14/footer.component";
export function TrackingOrder() {
    return (
        <>
            <section className="mt-2">
                <div className=" aboutdiv ">
                    <div>
                        <h1>Track Order</h1>
                    </div>
                </div>
            </section>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4 trackdiv1">
                        <h4>Order Tracking</h4><br />
                        <label>Order Id</label>
                        <input type='text' placeholder='Order Id' className='form-control' /><br />
                        <label>Email</label>
                        <input type='text' placeholder='Billing Email' className='form-control' /><br />
                        <button className="btn btn-success">Track Your Order</button>
                    </div>
                    <div className="col-4">
                        <img src={tracking} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}