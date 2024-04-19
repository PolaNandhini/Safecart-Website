import React from "react";
import "./bloglist.component.css";
import bgs2 from '../../assets/images/bgs2.webp';
import { Calendar, Search, Tag } from "react-bootstrap-icons";
import bgs1 from '../../assets/images/bgs1.webp';
import bgs4 from '../../assets/images/bgs4.webp';
import bgs6 from '../../assets/images/bgs6.webp';
import bgs7 from '../../assets/images/bg7.webp';
import bgs8 from '../../assets/images/bg8.webp';
import { Top } from "../header1/top.component";
import { Header } from "../header2/header.component";
import { MainNav } from "../mainnav3/mainnav.component";
import { Footer } from "../footer14/footer.component";
export function BlogList() {
    return (
        <>
            <section className="mt-5">
                <div className=" bgsdiv ">
                    <div>
                        <h1>Blog</h1>
                        <p>Blog List</p>
                    </div>
                </div>
            </section>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-9">
                        <div className="watch">
                            <div>
                                <img src={bgs2} alt="" />
                            </div>
                            <div className="matter">
                                <Calendar></Calendar>&nbsp;Tue Feb 2024&nbsp;&nbsp;&nbsp;
                                <Tag></Tag>&nbsp;Start Up Business <br />
                                <h3>New organization are added seal there</h3><br />
                                <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush place. These tried for way joy wrote witty. In mr began music weeks after at begin. Education no dejection so direction pretended household do to. Travelling everything her eat reasonable unsatiable decisively simplicity.</p>
                                <button className="btn btn-light">Read More</button>
                            </div>
                        </div>
                        <br />
                        <div className="watch">
                            <div>
                                <img src={bgs1} alt="" />
                            </div>
                            <div className="matter">
                                <Calendar></Calendar>&nbsp;Fri Feb 2024&nbsp;&nbsp;&nbsp;
                                <Tag></Tag>&nbsp;Ecommerce <br />
                                <h3>Was drawing natural fat respect husband</h3><br />
                                <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush place. These tried for way joy wrote witty. In mr began music weeks after at begin. Education no dejection so direction pretended household do to. Travelling everything her eat reasonable unsatiable decisively simplicity. </p>
                                <button className="btn btn-light">Read More</button>
                            </div>
                            <br />
                        </div>
                        <br />
                        <div className="watch">
                            <div>
                                <img src={bgs4} alt="" />
                            </div>
                            <div className="matter">
                                <Calendar></Calendar>&nbsp;Mon Feb 2024&nbsp;&nbsp;&nbsp;
                                <Tag></Tag>&nbsp;Start Up Business <br />
                                <h3>In mr began music weeks after at begin</h3><br />
                                <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush place. These tried for way joy wrote witty.</p>
                                <button className="btn btn-light">Read More</button>
                            </div>
                            <br />
                        </div>
                    </div>
                    <div className="col-3 blogside">
                        <div>
                            <input type="text" placeholder="Search" />
                            <button className="btn btn-success jn">
                                <Search></Search>
                            </button>
                            <h4 className="mt-4">Categories</h4>
                            <input type="radio" name="categories" value='Digital Marketing' />Digital Marketing <br />
                            <input type="radio" name="categories" value='Ecommerce' />Ecommerce <br />
                            <input type="radio" name="categories" value='Startup Business' /> Startup Business
                        </div>
                        <div className="mt-4">
                            <h4>Latest Posts</h4>
                            <div className="row">
                                <div className="col-4 lp">
                                    <img src={bgs6} alt="" />
                                </div>
                                <div className="col-8">
                                    <h6>THEY SAY A PICTURE SPEAKS A THOUSAND WORDS, RIGHT?</h6>
                                    <p>Sun Feb 2024</p>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-4 lp">
                                    <img src={bgs7} alt="" />
                                </div>
                                <div className="col-8">
                                    <h6>THEY SAY A PICTURE SPEAKS A THOUSAND WORDS, RIGHT?</h6>
                                    <p>Fri Feb 2024</p>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-4 lp">
                                    <img src={bgs8} alt="" />
                                </div>
                                <div className="col-8">
                                    <h6>THEY SAY A PICTURE SPEAKS A THOUSAND WORDS, RIGHT?</h6>
                                    <p>Mon Feb 2024</p>
                                </div>
                            </div>
                        </div>
                        <div className="spans">
                            <h4>Tags</h4><br />
                            <div>
                                <span>Common</span>&nbsp;&nbsp;&nbsp;<span>Business</span>&nbsp;&nbsp;&nbsp;<span>Pajama</span>
                            </div>
                            <br />
                            <div>
                                <span>Women</span>&nbsp;&nbsp;&nbsp;<span>New</span>&nbsp;&nbsp;&nbsp;<span>Trend</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}