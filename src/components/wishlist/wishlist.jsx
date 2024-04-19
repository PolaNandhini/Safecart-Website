import React, { useEffect, useState } from 'react'
import './wishlist.css';
import shirt from "../../assets/images/shirt1.png"
import { Cart, Dash, Plus, Trash3 } from 'react-bootstrap-icons';
import { getWishlist } from '../../services/wishlist.service';
import ModalPopup from '../sharedcomponents/modalpopup/modalpopup';
import { DeletePopup } from './deletepopup/deletepopup';
import axios from 'axios';
export const Wishlist = () => {

    //creating state variable for products
    const [wishlist, setWishlist] = useState([]);
    const [pageSize, setPageSize] = useState(3);
    const [pageNumbers, setPageNumbers] = useState([]);
    const [totalWishListitems, setTotalWishListItems] = useState([]);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [deleteWishlistid, setDeleteWishlistid] = useState(0);


    useEffect(() => {
        getWishlistProduct()
    }, [])

    function getWishlistProduct() {
        getWishlist().then((res) => {
            setTotalWishListItems(res.data);
            let pNumbers = Math.ceil(res.data.length / pageSize);
            let pNumbersArray = [];
            for (let i = 1; i <= pNumbers; i++) {
                pNumbersArray.push(i)
            }
            setPageNumbers(pNumbersArray);

            let data = res.data.slice(0, pageSize);
            setWishlist(data);
        });
    }

    function gotoPage(num) {
        let startIndex = pageSize * (num - 1);
        console.log(startIndex)
        let endIndex = pageSize * num;
        let res = totalWishListitems.slice(startIndex, endIndex);
        setWishlist(res)
    }

    //function for increment quantity
    function incrementQuantity(item, index) {
        let data = JSON.parse(JSON.stringify(wishlist));
        data[index].quantity = item.quantity + 1;
        setWishlist(data);
    }

    //function for decrement quantity
    function decrementQuantity(item, index) {
        if (item.quantity > 0) {
            let data = JSON.parse(JSON.stringify(wishlist));
            data[index].quantity = item.quantity - 1;
            setWishlist(data);
        }
    }

    // function for delete wishlist item
    async function deleteWishlistProduct() {
        if (deleteWishlistid > 0) {
            const config = {
                headers: { "content-type": "multipart/form-data" }
            }


            const newForm = new FormData();
            newForm.append("id", deleteWishlistid);
            const res = await axios.post(`http://localhost:4000/deletewishlistitem`, newForm, config);
            window.location.reload();
        }
    }

    return (
        <>
            <section className="mt-5">
                <div className=" aboutdiv ">
                    <div>
                        <h1>Wishlist Page</h1>
                    </div>
                </div>
            </section>
            <div className='wishlist'>
                <table class="table table-bordered">
                    <thead className='table-light'>
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Unite Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wishlist && wishlist.map((item, index) =>
                                <tr>
                                    <td className='wl1'>
                                        <div className='wl_img1'>
                                            {
                                                item.productimg && <img src={item.productimg} className='jimg'></img>
                                            }
                                        </div>
                                        <div>
                                            <h5>{item.productName}</h5>
                                            <p>Size:Large,</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='center'><span className='rupee'>&#x20B9;{item.oldPrice}</span></div>
                                    </td>
                                    <td>
                                        <div className='flex_wl'>
                                            <span><Dash onClick={() => { decrementQuantity(item, index) }}></Dash></span>
                                            <span>{item.quantity}</span>
                                            <span><Plus onClick={() => { incrementQuantity(item, index) }}></Plus></span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='center'><span className='rupee'>&#x20B9;{item.oldPrice * item.quantity}</span></div>
                                    </td>
                                    <td>
                                        <div className='span_class'>
                                            <span className='span1 child1'><Cart></Cart></span>
                                            <span className='span1 child2'><Trash3 onClick={() => { setDeleteWishlistid(item.id); setShowDeletePopup(true) }} ></Trash3></span>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                    <tfoot>
                        <div>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                {
                                    pageNumbers && pageNumbers.map((item) =>
                                        <button type="button" class="btn btn-primary" onClick={() => { gotoPage(item) }} >{item}</button>
                                    )
                                }
                            </div>
                        </div>
                    </tfoot>
                </table>
            </div>
            <div>
                <ModalPopup open={showDeletePopup} title={"Delete Item"} closeModal={() => { setShowDeletePopup(false) }} >
                    <DeletePopup deleteWishlistProduct={() => { deleteWishlistProduct(); setShowDeletePopup(false) }}></DeletePopup>
                </ModalPopup>
            </div>
        </>
    )
}