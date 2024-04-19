import React, { useEffect, useState } from 'react'
import './addtocart.css';
import coat from '../../assets/images/coat.webp';
import { Cart, Dash, Plus, Trash3 } from 'react-bootstrap-icons';
import { getAddtocart } from '../../services/addtocart.service';
import ModalPopup from '../sharedcomponents/modalpopup/modalpopup';
import axios from 'axios';
import { DeletePopup } from './deletepopup1/deletepopup1';


export const Addtocart = () => {
    //creating state variable for addtocart
    const [addtocart, setAddtocart] = useState([]);
    const [pageSize, setPageSize] = useState(3);
    const [pageNumbers, setPageNumbers] = useState([]);
    const [totalCartitems, setTotalcartItems] = useState([]);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [deleteCartid, setDeleteCartid] = useState(0);

    useEffect(() => {
        getAddtocartProduct();
    }, [])


    function getAddtocartProduct() {
        getAddtocart().then((res) => {
            setTotalcartItems(res.data);
            let pNumbers =Math.ceil( res.data.length / pageSize);
            let pNumbersArray = [];
            for (let i = 1; i <= pNumbers; i++) {
                pNumbersArray.push(i)
            }
            setPageNumbers(pNumbersArray);

            let data = res.data.slice(0, pageSize);
            setAddtocart(data);
        })
    }

    function gotoPage(num) {
        let startIndex = pageSize * (num - 1);
        console.log(startIndex)
        let endIndex = pageSize * num;
        let res = totalCartitems.slice(startIndex, endIndex);
        setAddtocart(res)
    }

    //function for increment quantity
    function incrementQuantity1(item, index) {
        console.log(item)
        let data = JSON.parse(JSON.stringify(addtocart));
        data[index].quantity = item.quantity + 1;
        setAddtocart(data);
    }

    //function for decrement quantity
    function decrementQuantity1(item, index) {
        if (item.quantity > 0) {
            let data = JSON.parse(JSON.stringify(addtocart));
            data[index].quantity = item.quantity - 1;
            setAddtocart(data);
        }
    }

     // function for delete cart item
     async function deleteCartProduct() {
        if (deleteCartid > 0) {
            const config = {
                headers: { "content-type": "multipart/form-data" }
            }


            const newForm = new FormData();
            newForm.append("id", deleteCartid);
            const res = await axios.post(`http://localhost:4000/deletecartitem`, newForm, config);
            window.location.reload();
        }
    }


    return (
        <>
            <section className="mt-2">
                <div className=" aboutdiv ">
                    <div>
                        <h1>Add to cart</h1>
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
                            addtocart && addtocart.map((item, index) =>
                                <tr>
                                    <td className='wl1'>
                                        <div className='wl_img1'>
                                            <img src={coat} style={{ width: '100px' }} alt="" />
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
                                            <span><Dash onClick={() => { decrementQuantity1(item, index) }}></Dash></span>
                                            <span>{item.quantity}</span>
                                            <span><Plus onClick={() => { incrementQuantity1(item, index) }}></Plus></span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='center'><span className='rupee'>&#x20B9;{item.oldPrice * item.quantity}</span></div>
                                    </td>
                                    <td>
                                        <div className='span_class'>
                                            <span className='span1 child1'><Cart></Cart></span>
                                            <span className='span1 child2'><Trash3 onClick={() => { setDeleteCartid(item.id);  setShowDeletePopup(true) }} ></Trash3></span>
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
                    <button className='btn btn-warning'>Update Cart</button>&nbsp;
                    <button className='btn btn-info'>Check Out</button>
                </table>

            </div>
            <div>
                <ModalPopup open={showDeletePopup} title={"Delete Item"} closeModal={() => { setShowDeletePopup(false) }} >
                    <DeletePopup deleteCartProduct={() => {deleteCartProduct();  setShowDeletePopup(false) }}></DeletePopup>
                </ModalPopup>
            </div>
        </>
    )
}
