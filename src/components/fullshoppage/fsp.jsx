import React from 'react';
import './fsp.css';
import laptop from '../../assets/images/laptop.webp';
import mb from '../../assets/images/mb.webp';
import red from '../../assets/images/red.webp';
import heels from '../../assets/images/heels.webp';
import coat from '../../assets/images/coat.webp';
import wdress from '../../assets/images/wdress.webp';
import { Top } from '../header1/top.component';
import { Header } from '../header2/header.component';
import { MainNav } from '../mainnav3/mainnav.component';
import { Footer } from '../footer14/footer.component';
export function FullShopPage() {
    return (
        <>
            <section className="mt-5">
                <div className=" aboutdiv ">
                    <div>
                        <h1>Products</h1>
                        <p>products</p>
                    </div>
                </div>
            </section>
            <div className='container ddm'>
                <div>
                    <p>Showing 1-11 of 11 results</p>
                </div>
                <div>
                    <select name="cars" id="cars">
                        <option value="Default Sorting">Default Sorting</option>
                        <option value="Sort By Popularity">Sort By Popularity</option>
                        <option value="Sort By Rating">Sort By Rating</option>
                        <option value="Sort By Latest">Sort By Latest</option>
                    </select>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='fspimg1'>
                            <img src={laptop} alt="" />
                            <h4>TitanPro Gaming Laptop</h4>
                        </div>
                        <div className='fspflex mt-5'>
                            <h5><span className='bluefsp'>&#x20B9;100000</span>&nbsp;<del>&#x20B9;120000</del> </h5>
                            <h6 className='gfsp'>Stock Available(159)</h6>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='fspimg1'>
                            <img src={mb} alt="" />
                            <h4>Pro Gaming Motherboard</h4>
                        </div>
                        <div className='fspflex mt-5'>
                            <h5><span className='bluefsp'>&#x20B9;5000</span>&nbsp;<del>&#x20B9;6000</del> </h5>
                            <h6 className='gfsp'>Stock Available(129)</h6>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='fspimg1'>
                            <img src={red} alt="" />
                            <h4>Mans Long Sleeve Shirt</h4>
                        </div>
                        <div className='fspflex mt-5'>
                            <h5><span className='bluefsp'>&#x20B9;500</span>&nbsp;<del>&#x20B9;700</del> </h5>
                            <h6 className='gfsp'>Stock Available(100)</h6>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='fspimg1'>
                            <img src={heels} alt="" />
                            <h4>High Heel Wedding Shoes</h4>
                        </div>
                        <div className='fspflex mt-5'>
                            <h5><span className='bluefsp'>&#x20B9;4000</span>&nbsp;<del>&#x20B9;5000</del> </h5>
                            <h6 className='gfsp'>Stock Available(19)</h6>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-3'>
                        <div className='fspimg1'>
                            <img src={coat} alt="" />
                            <h4>Blue Denim Coat</h4>
                        </div>
                        <div className='fspflex mt-5'>
                            <h5><span className='bluefsp'>&#x20B9;100000</span>&nbsp;<del>&#x20B9;120000</del> </h5>
                            <h6 className='gfsp'>Stock Available(159)</h6>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='fspimg1'>
                            <img src={red} alt="" />
                            <h4>Mans Long Sleeve Shirt</h4>
                        </div>
                        <div className='fspflex mt-5'>
                            <h5><span className='bluefsp'>&#x20B9;5000</span>&nbsp;<del>&#x20B9;6000</del> </h5>
                            <h6 className='gfsp'>Stock Available(129)</h6>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='fspimg1'>
                            <img src={heels} alt="" />
                            <h4>High Heel Wedding Shoes</h4>
                        </div>
                        <div className='fspflex mt-5'>
                            <h5><span className='bluefsp'>&#x20B9;500</span>&nbsp;<del>&#x20B9;700</del> </h5>
                            <h6 className='gfsp'>Stock Available(100)</h6>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='fspimg1'>
                            <img src={wdress} alt="" />
                            <h4>Long Length Dress</h4>
                        </div>
                        <div className='fspflex mt-5'>
                            <h5><span className='bluefsp'>&#x20B9;4000</span>&nbsp;<del>&#x20B9;5000</del> </h5>
                            <h6 className='gfsp'>Stock Available(19)</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}