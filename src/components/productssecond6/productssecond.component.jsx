import React, { useEffect, useState } from "react";
import './productssecond.component.css';
import shirt from '../../assets/images/shirt.png';
import perfume from '../../assets/images/perfume.webp'
import coat from '../../assets/images/coat.webp'
import perfume1 from '../../assets/images/perfume1.webp'
import fashion from '../../assets/images/fashion.webp'
import heels from '../../assets/images/heels.webp'
import soft from '../../assets/images/soft.png'
import { ArrowRepeat, Heart, HeartFill } from "react-bootstrap-icons";
import { getProduct1 } from "../../services/product.service";
export function Productssecond() {
    //creating state variable for products
    const [productDetails1, setProductDetails1] = useState([]);
    const [showAddtocartMsg, setShowaddtocartMsg] = useState(false);

    useEffect(() => {
        getProduct1().then((res) => {
            setProductDetails1(res.data)
        })
    }, [])
    return (
        <>
            <section className="mt-3 container">
                <div className="main">
                    <div className="p1 container productscontainer">
                        <div className="row img1">
                            {
                                productDetails1 && productDetails1.map((item) =>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col_img p1-relative">
                                        <img src={coat} alt="" />
                                        <div className="product1-percent">{item.offerPercent}% off</div>
                                        <p style={{ fontSize: '20px' }}>{item.productName}</p>
                                        <div className="p2">
                                            <span style={{ color: '#0088DD', fontSize: '20px', fontWeight: '600' }}>&#x20B9;1000&nbsp;<span className="span">&#x20B9;1200</span></span>
                                            <form id={"addtocart" + item.id} method="post" action="http://localhost:4000/addtocart">
                                                <input type="hidden" value={item.id} name="productid" ></input>
                                            </form>
                                            <button className="btn btn-light bhover1" onClick={() => { document.getElementById("addtocart" + item.id).submit(); setShowaddtocartMsg(true) }} >Add to cart</button>
                                        </div>
                                        <div className="btnn1">
                                            <button className="bt1"><ArrowRepeat></ArrowRepeat></button>&nbsp;&nbsp;
                                            <button className="bt1"><Heart></Heart></button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        {
                            showAddtocartMsg && <label className="wishlist-popup"><HeartFill className="svg"></HeartFill>your product is added to cart</label>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}