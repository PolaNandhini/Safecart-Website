import React from "react";
import { BorderAll, List } from "react-bootstrap-icons";
import './flashsale.css';
import cc from '../../assets/images/cc.webp'
import mb from '../../assets/images/mb.webp'
import heels from '../../assets/images/heels.webp'
import coat from '../../assets/images/coat.webp'
import red from '../../assets/images/red.webp'
import laptop from '../../assets/images/laptop.webp'
import { Top } from "../header1/top.component";
import { Header } from "../header2/header.component";
import { MainNav } from "../mainnav3/mainnav.component";
import { Footer } from "../footer14/footer.component";
export function FlashSale() {
    return (
        <>
            <section className="mt-5">
                <div className=" aboutdiv ">
                    <div>
                        <h1>Flash Sale</h1>
                        <p>Flash Sale</p>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="mt-5">
                    <div className="borandmenu">
                        <span className="borderall1"><List></List></span>
                        &nbsp;
                        <span className="borderall2"><BorderAll></BorderAll></span>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="row">
                        <div className="col-2">
                            <div className="fsimg1">
                                <img src={cc} alt="" />
                            </div>
                            <div className="count mt-4">
                                <div><span>3</span></div>
                                <div><span>3</span></div>
                                <div><span>3</span></div>
                                <div className="ml"><span>3</span></div>
                            </div>
                            <div>
                                <h4>Survellion Camera</h4>
                                <h6>In Stock(120)</h6><br /><br />
                                <h5><span>&#x20B9;4000</span>&nbsp;<del>&#x20B9;5000</del></h5>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="fsimg1">
                                <img src={mb} alt="" />
                            </div>
                            <div className="count mt-4">
                                <div><span>3</span></div>
                                <div><span>3</span></div>
                                <div><span>3</span></div>
                                <div className="ml"><span>3</span></div>
                            </div>
                            <div>
                                <h4>ProGaming Motherboard</h4>
                                <h6>In Stock(120)</h6><br /><br />
                                <h5><span>&#x20B9;4000</span>&nbsp;<del>&#x20B9;5000</del></h5>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="fsimg1">
                                <img src={heels} alt="" />
                            </div>
                            <div className="count mt-4">
                                <div><span>3</span></div>
                                <div><span>3</span></div>
                                <div><span>3</span></div>
                                <div className="ml"><span>3</span></div>
                            </div>
                            <div>
                                <h4>High Heel Wedding Shoes</h4>
                                <h6>In Stock(10)</h6><br /><br />
                                <h5><span>&#x20B9;4000</span>&nbsp;<del>&#x20B9;5000</del></h5>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="fsimg1">
                                <img src={coat} alt="" />
                            </div>
                            <div className="count mt-4">
                                <div><span>3</span></div>
                                <div><span>3</span></div>
                                <div><span>3</span></div>
                                <div className="ml"><span>3</span></div>
                            </div>
                            <div>
                                <h4>Mans Denim cloth coat</h4>
                                <h6>In Stock(120)</h6><br /><br />
                                <h5><span>&#x20B9;4000</span>&nbsp;<del>&#x20B9;5000</del></h5>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="fsimg1">
                                <img src={red} alt="" />
                            </div>
                            <div className="count mt-4">
                                <div><span>32</span></div>
                                <div><span>33</span></div>
                                <div><span>32</span></div>
                                <div className="ml"><span>31</span></div>
                            </div>
                            <div>
                                <h4>Mans Long Sleeve Shirt</h4>
                                <h6>In Stock(120)</h6><br /><br />
                                <h5><span>&#x20B9;4000</span>&nbsp;<del>&#x20B9;5000</del></h5>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="fsimg1">
                                <img src={laptop} alt="" />
                            </div>
                            <div className="count mt-4">
                            <div><span>3</span></div>
                                <div><span>3</span></div>
                                <div><span>3</span></div>
                                <div className="ml"><span>3</span></div>
                            </div>
                            <div>
                                <h4>Pro Gaming Laptop</h4>
                                <h6>In Stock(120)</h6><br /><br />
                                <h5><span>&#x20B9;4000</span>&nbsp;<del>&#x20B9;5000</del></h5>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <div className="fsimg1">
                                <img src={cc} alt="" />
                            </div>
                            <div className="count mt-4">
                                <div><span>3</span></div>
                                <div><span>3</span></div>
                                <div><span>3</span></div>
                                <div className="ml"><span>3</span></div>
                            </div>
                            <div>
                                <h4>Survellion Camera</h4>
                                <h6>In Stock(120)</h6><br /><br />
                                <h5><span>&#x20B9;4000</span>&nbsp;<del>&#x20B9;5000</del></h5>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="fsimg1">
                                <img src={mb} alt="" />
                            </div>
                            <div className="count mt-4">
                                <div><span>3</span></div>
                                <div><span>3</span></div>
                                <div><span>3</span></div>
                                <div className="ml"><span>3</span></div>
                            </div>
                            <div>
                                <h4>ProGaming Motherboard</h4>
                                <h6>In Stock(120)</h6><br /><br />
                                <h5><span>&#x20B9;4000</span>&nbsp;<del>&#x20B9;5000</del></h5>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="fsimg1">
                                <img src={heels} alt="" />
                            </div>
                            <div className="count mt-4">
                                <div><span>3</span></div>
                                <div><span>3</span></div>
                                <div><span>3</span></div>
                                <div className="ml"><span>3</span></div>
                            </div>
                            <div>
                                <h4>High Heel Wedding Shoes</h4>
                                <h6>In Stock(10)</h6><br /><br />
                                <h5><span>&#x20B9;4000</span>&nbsp;<del>&#x20B9;5000</del></h5>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="fsimg1">
                                <img src={coat} alt="" />
                            </div>
                            <div className="count mt-4">
                                <div><span>3</span></div>
                                <div><span>3</span></div>
                                <div><span>3</span></div>
                                <div className="ml"><span>3</span></div>
                            </div>
                            <div>
                                <h4>Mans Denim cloth coat</h4>
                                <h6>In Stock(120)</h6><br /><br />
                                <h5><span>&#x20B9;4000</span>&nbsp;<del>&#x20B9;5000</del></h5>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="fsimg1">
                                <img src={red} alt="" />
                            </div>
                            <div className="count mt-4">
                                <div><span>32</span></div>
                                <div><span>33</span></div>
                                <div><span>32</span></div>
                                <div className="ml"><span>31</span></div>
                            </div>
                            <div>
                                <h4>Mans Long Sleeve Shirt</h4>
                                <h6>In Stock(120)</h6><br /><br />
                                <h5><span>&#x20B9;4000</span>&nbsp;<del>&#x20B9;5000</del></h5>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="fsimg1">
                                <img src={laptop} alt="" />
                            </div>
                            <div className="count mt-4">
                            <div><span>3</span></div>
                                <div><span>3</span></div>
                                <div><span>3</span></div>
                                <div className="ml"><span>3</span></div>
                            </div>
                            <div>
                                <h4>Pro Gaming Laptop</h4>
                                <h6>In Stock(120)</h6><br /><br />
                                <h5><span>&#x20B9;4000</span>&nbsp;<del>&#x20B9;5000</del></h5>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            <br /><br />
        </>
    )
}