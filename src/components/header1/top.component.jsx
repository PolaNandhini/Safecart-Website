import React from 'react';
import './top.component.css';
import { Facebook, Instagram, Pinterest, Twitter } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';
export const Top = () => {
    return (
        <>
            <div className='top group'>
                <div className='topp1'>
                    <ul class="top1">
                        <li class='nav-item'>
                            <a class="nav-link" href="#"><Twitter></Twitter></a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#"><Facebook></Facebook></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><Pinterest></Pinterest></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><Instagram></Instagram></a>
                        </li>
                    </ul>
                </div>
                <div className='menuu'>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
                <div className='topp2'>
                    <ul>
                        <li class="nav-item ">
                            
                            <Link to='/bas' className='noo nav-link'><button className="btn btn-warning bn">Become a seller</button></Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/sellerlogin' className='noo nav-link'>Seller Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/faq' className='noo nav-link'>FAQ</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/contact' className='noo nav-link'>contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/trackingorder' className='noo nav-link'>Tracking Order</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}