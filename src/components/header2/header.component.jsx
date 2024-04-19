import React from "react";
import './header.component.css';
import logo from '../../assets/images/logo.webp'
import { Search, GeoAlt } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
export function Header() {
    return (
        <>
            <nav>
                <div className=" container1-fluid ">
                    <div className='row p-2 fluid '>
                        <div className='col-xl-3  col-lg-3 col-md-4 col-sm-4 box1 '>
                            <Link to='/home'><img src={logo} alt="logo" /></Link>
                        </div>
                        <div className='col-xl-7 col-lg-7 mt-3 col-md-5 col-sm-5 box'>
                            <input type='text' placeholder='Search for products' className='form-control' /><button className="btn btn-success"><Search></Search></button>
                        </div>
                        <div className='col-xl-2 col-lg-2 mt-2 col-md-3 col-sm-3 boxx'>
                            <span><GeoAlt></GeoAlt></span><Link to='/trackingorder' className="boxxp">Order tracking</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <hr></hr>
        </>
    )
}