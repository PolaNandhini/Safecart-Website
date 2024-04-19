import React, { useContext, useEffect, useState } from "react";
import './mainnav.component.css';
import { ArrowRepeat, Heart, Cart, Person, ChevronDown, List, Backspace, ChevronRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import chair from "../../assets/images/chair.webp";
import coat from "../../assets/images/coat.webp";
import table from "../../assets/images/table.webp"
import wood from "../../assets/images/wood.webp"
import wdress from "../../assets/images/wdress.webp";
import shirt from "../../assets/images/shirt.png";
import music from "../../assets/images/music.webp";
import airpods from "../../assets/images/bg8.webp";
import mouse from '../../assets/images/headphones.webp'
import handl from '../../assets/images/handl.webp'
import fw from '../../assets/images/fw.webp'
import store from "../../services/reduxstore.service";
import {useNavigate} from 'react-router-dom';
import { getAddtocart } from "../../services/addtocart.service";
import { UserContextVariable } from "../../services/userContext";

export function MainNav() {
    //creating state variable for addtocart
    const [addtocart, setAddtocart] = useState([]);
    //creating state variables
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const navigate = useNavigate();

    const user = useContext(UserContextVariable)
    useEffect(()=>{
        if(user){
            setIsUserLoggedIn(true)
        }
        else{
            setIsUserLoggedIn(false)
        }
    },[user])

    useEffect(() => {
        getAddtocart().then((res) => {
            setAddtocart(res.data)
        })
    }, [])

    // useEffect(()=>{
    //     checkUserLoggedIn();
    // },[])
 
    // console.log(isUserLoggedIn)
     
    // function checkUserLoggedIn() {
    //     store.subscribe(() => {
    //         let user = store.getState()?.user  //user is type in redux store.js
    //         if (user) {
    //             setIsUserLoggedIn(true);
    //         }
    //         else {
    //             setIsUserLoggedIn(false);
    //         }
    //     })
        
    // }

    function logout(){
        let action = {type:"login", data:null};
        store.dispatch(action);
        navigate("/home");
    }

    return (
        <>
            <div className="file container">
                <div className="nan">
                    <ul className="menu">
                        <button class="navbar-toggler btn-color" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="icons"><List /></span>
                        </button>
                        Categories
                        <div className="offcanvas offcanvas-start a" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">All Category</h5>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body categoryul ">
                                <ul class="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Home & living<span className="iconml"><ChevronRight></ChevronRight></span></a>
                                        <div className="catbox">
                                            <div className="row rpadding">
                                                <div className="col-4">
                                                    <h4>Furniture</h4>
                                                    <div className="chairimg mt-2">
                                                        <h6>Hall Room Chair</h6>
                                                        <img src={chair} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <h4>Kitchen</h4>
                                                    <div className="chairimg mt-2">
                                                        <h6>coffee table</h6>
                                                        <img src={table} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <h4>Home Decor</h4>
                                                    <div className="chairimg mt-2">
                                                        <h6>Wood Cabinet</h6>
                                                        <img src={wood} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row rpadding">
                                                <div className="col-4">
                                                    <h4>Furniture</h4>
                                                    <div className="chairimg mt-2">
                                                        <h6>Hall Room Chair</h6>
                                                        <img src={handl} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <h4>Footwear</h4>
                                                    <div className="chairimg mt-2">
                                                        <h6>Shoes</h6>
                                                        <img src={fw} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <h4>Home Decor</h4>
                                                    <div className="chairimg mt-2">
                                                        <h6>Wood Cabinet</h6>
                                                        <img src={wood} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Fashion<span className="iconml1"><ChevronRight></ChevronRight></span></a>
                                        <div className="catbox1">
                                            <div className="row rpadding">
                                                <div className="col-4">
                                                    <h4></h4>
                                                    <div className="chairimg mt-2">
                                                        <h6>Long Length</h6>
                                                        <img src={wdress} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <h4></h4>
                                                    <div className="chairimg mt-2">
                                                        <h6>Men's wear</h6>
                                                        <img src={shirt} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <h4></h4>
                                                    <div className="chairimg mt-2">
                                                        <h6>Denim Coat</h6>
                                                        <img src={coat} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Electronics<span className="iconml2"><ChevronRight></ChevronRight></span></a>
                                        <div className="catbox2">
                                            <div className="row rpadding">
                                                <div className="col-4">
                                                    <h4></h4>
                                                    <div className="chairimg mt-2">
                                                        <h6>Speakers</h6>
                                                        <img src={music} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <h4></h4>
                                                    <div className="chairimg mt-2">
                                                        <h6>Airpods</h6>
                                                        <img src={airpods} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <h4></h4>
                                                    <div className="chairimg mt-2">
                                                        <h6>Headphones</h6>
                                                        <img src={mouse} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item"><a class="nav-link" href="#">Personal Care & Beauty</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Kids & Babies</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Arts & craft</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Health & Wellness</a></li>
                                </ul>
                            </div>
                        </div>
                        <li className="menu-list"><Link className="no">Home Pages<ChevronDown></ChevronDown></Link>
                            <ul className='submenu'>
                                <li><Link className="no" to='/homestyle01'>Home style 01</Link></li>
                                <li><Link className="no" to='/homestyle02'>Home style 02</Link></li>
                                <li><Link className="no" to='/home'>Home style 03</Link></li>
                            </ul>
                        </li>
                        <li className="menu-list"><Link className="no">Shop Page<ChevronDown></ChevronDown></Link>
                            <ul className='submenu1'>
                                <li><Link to='/productlist' className="no" >Product List</Link></li>
                                <li><Link to='/productlist' className="no" >Grid Product</Link></li>
                                <li><Link to='/fsp' className="no" >Full Shop Page</Link></li>
                            </ul>
                        </li>
                        <li className="menu-list"><Link to='/about' className="no">About</Link></li>

                        <li className="menu-list"><Link className="no">Pages<ChevronDown></ChevronDown></Link>
                            <ul className='submenu2'>
                                <li><Link to='/terms' className="no">Terms & Conditions</Link></li>
                                <li><Link to='/privacypolicy' className="no">Privacy Policy</Link></li>
                                <li><Link to='/faq' className="no">FAQ</Link></li>
                            </ul>
                        </li>
                        <li className="menu-list"><Link className="no">Blog<ChevronDown></ChevronDown></Link>
                            <ul className='submenu3'>
                                <li><Link to='/bloggridstyle' className="no">Blog Grid Style</Link></li>
                                <li><Link to='/bloglist' className="no">Blog List</Link></li>
                            </ul>
                        </li>
                        <li className="menu-list"><Link className="no" to='/contact'>Contact</Link></li>
                        <li className="menu-list"><Link className="no" to='/addproduct'>Add Product</Link></li>
                    </ul>
                </div>
                <div className="nan1">
                    <ul>
                        <li className="menu-list"><Link className="no" to='/wishlist'><span className="rel_icon"><Heart></Heart>
                            <div className="abs_icon"><p>0</p></div>
                        </span></Link></li>
                        <li className="menu-list rell"><Link className="no" to='/addtocart'><span className="rel_icon"><Cart></Cart>
                            <div className="abs_icon"><p>0</p></div>
                        </span>
                            <div className="abst_div">
                            <Backspace style={{color:'red',marginLeft:'450px',fontSize:'20px'}}></Backspace>
                                {
                                    addtocart && addtocart.map((item) =>
                                        <>
                                            <div className="abst_div1">
                                                <img src={coat} alt="" />
                                                <div>
                                                    <h6>{item.productName}</h6>
                                                    <br />
                                                    <p>&#x20B9;{item.newPrice}&nbsp;<del>&#x20B9;{item.oldPrice}</del></p>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                                <div className="abst_div2">
                                    <h6>Total Amount</h6>
                                    <p>&#x20B9;10000</p>
                                </div>
                                <div className="btn_abst">
                                    <button className="btn btn-success form-control">Check Out</button>
                                    <button className="btn btn-success form-control">View Cart</button>
                                </div>
                            </div>
                        </Link>
                        </li>
                        <li className="menu-list"><ArrowRepeat></ArrowRepeat></li>
                        {
                            isUserLoggedIn == false &&
                            <li className="menu-list"><Person></Person>
                                <ul className="submenu4">
                                    <li><Link className="no" to='/signin'>Sign In</Link></li>
                                    <li><Link className="no" to='/signup'>Sign Up</Link></li>
                                </ul>
                            </li>
                        }
                        {
                            isUserLoggedIn == true &&
                            
                            <li className="menu-list"><Person></Person>
                                <ul className="submenu4">
                                    <li><Link className="no" to='/editprofile'>Edit Profile</Link></li>
                                    <li><input type="btn" style={{marginLeft:'-70px'}} className="btn no" value="Logout" onClick={()=>{logout()}} /></li>
                                </ul>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}