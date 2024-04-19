import React from "react";
import './products.component.css';
import { ArrowDownShort, ArrowRepeat, Heart, HeartFill } from "react-bootstrap-icons";
import { getProduct } from "../../services/product.service";
import { Link } from "react-router-dom";

export class Products extends React.Component {

    constructor(){
        super();
        this.state={
            productDetails : [],
            showWishlistMsg : false
        }
    };

    componentDidMount(){
        getProduct().then((res)=>{
            this.setState({productDetails: res.data})
        })
    }

    // //creating state variable for products

    // const [productDetails, setProductDetails] = useState([]);

    // const [showWishlistMsg, setShowWishlistMsg] = useState(false);

    // // useeffect for api calling
    // useEffect(() => {
    //     getProduct().then((res) => {
    //         setProductDetails(res.data)
    //     })
    // }, [])

    render() {
        return (
            <>
                <section className="mt-3 section container">
                    <div className="mainn">
                        <div className="container productscontainer">
                            <h3>Popular Products</h3>
                            <p style={{ color: 'green', fontSize: '25px' }}>view all<ArrowDownShort></ArrowDownShort></p>
                        </div>
                        <div className="pp1 container">
                            <div className="row img1">
                                {
                                    this.state.productDetails && this.state.productDetails.map((item) =>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 p-relative">
                                            {
                                                item.productImg && <img src={item.productImg}></img>
                                            }
                                            <div className="product-percent">{item.offerPercent}% off</div>
                                            <p style={{ fontSize: '20px' }}>{item.productName}</p>
                                            <div className="p2">
                                                <span style={{ color: '#0088DD', fontSize: '20px', fontWeight: '600' }}>&#x20B9;{item.newPrice}&nbsp;<span className="span">&#x20B9;{item.oldPrice}</span></span>
                                                <button className="btn btn-light bhover"><Link to='/viewdetails' className="link_style">View Details</Link></button>
                                                <div className="btnn">
                                                    <button className="bt"><ArrowRepeat></ArrowRepeat></button>&nbsp;&nbsp;
                                                    <form id={"wishlist" + item.id} method="post" action="http://localhost:4000/addtowishlist">
                                                        <input type="hidden" value={item.id} name="productid" ></input>
                                                    </form>
                                                    <button className="bt" onClick={() => { document.getElementById("wishlist" + item.id).submit(); this.setState({showWishlistMsg: true}) }} ><Heart></Heart></button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            {
                                this.state.showWishlistMsg && <label className="wishlist-popup"><HeartFill className="svg"></HeartFill>your product is added to wishlist</label>
                            }
                        </div>
                    </div>
                </section>
            </>
        )
    }


}