import React, { useEffect, useState } from "react";
import './productsthird.component.css';
import laptop from '../../assets/images/laptop.webp';
import perfume from '../../assets/images/perfume.webp'
import coat from '../../assets/images/coat.webp'
import shirt from '../../assets/images/shirt.png'
import { ArrowRepeat, Heart } from "react-bootstrap-icons";
import { getProduct3 } from "../../services/product.service";

export function Productsthird() {
    //creating state variable for products
    const [productDetails, setProductDetails] = useState([]);

    useEffect(() => {
        getProduct3().then((res) => {
            setProductDetails(res.data)
        })
    }, [])

    return (
        <>
            <section className="container productthird ">
                <div className="container mt-5">
                    <h3>Trending Products</h3>
                </div>
                <div className="tabs mt-5">
                    <ul>
                        <li><button className="btn btn-success">Featured</button></li>
                        <li><button className="btn btn-light">Top Selling</button></li>
                        <li><button className="btn btn-light">Weekly Top</button></li>
                    </ul>
                </div>
            </section>
            <section className="mt-3">
                <div className="main">
                    <div className="p1 container">
                        <div className="row img1">
                            {
                                productDetails && productDetails.map((item) =>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-3 p-relative">
                                        <img src={laptop} alt="" />
                                        <div className="product-percent">{item.offerPercent}% off</div>
                                        <p style={{fontSize:'20px'}}>{item.productName}</p>
                                        <div className="p2">
                                            <span  style={{color:'#0088DD',fontSize:'20px',fontWeight:'600'}}>&#x20B9;{item.newPrice}&nbsp;<span className="span">&#x20B9;{item.oldPrice}</span></span>
                                            <button className="btn btn-light bhover1">Add to cart</button>
                                        </div>
                                        <div className="btnn1">
                                            <button className="bt1"><ArrowRepeat></ArrowRepeat></button>&nbsp;&nbsp;
                                            <button className="bt1"><Heart></Heart></button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}