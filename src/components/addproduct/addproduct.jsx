import React, { useState } from "react";
import './addproduct.css';
import { useForm } from "react-hook-form";
import axios from "axios";

export function Addproduct() {
    const [productImage,setProductImage] = useState()
 
    const {
        register,
        handleSubmit
    } = useForm();
    
    async function saveData(data){
        let formData = new FormData();

        formData.append("productName",data.productName);
        formData.append("oldPrice",data.oldPrice);
        formData.append("newPrice",data.newPrice);
        formData.append("offerPercent",data.offerPercent);
        formData.append("stockAvailableCount",data.stockAvailableCount);
        formData.append("productImg",productImage);

        const config = {
            headers : {"content-Type": "multipart/form-data"}
        }

        const res = await axios.post("http://localhost:4000/saveproductdata",formData,config);
        window.location.reload();
    }

    function loadImage(event){
        var reader = new FileReader();
        reader.onload = function(){
            setProductImage(reader.result)
        }

        reader.readAsDataURL(event.target.files[0]);
    } 
     
    return (
        <>
            <div className="frm">
                <div className="frm1">
                    <form onSubmit={handleSubmit((data)=>{saveData(data)})} >
                        <h3>Add Product</h3>
                        <div className="mt-2">
                            <input type="text" className="form-control" placeholder="Product Name" {...register('productName')} />
                        </div>
                        <div className="mt-2">
                            <input type="text" className="form-control" placeholder="Old Price" {...register('oldPrice')} />
                        </div>
                        <div className="mt-2">
                            <input type="text" className="form-control" placeholder="New Price" {...register('newPrice')} />
                        </div>
                        <div className="mt-2">
                            <input type="text" className="form-control" placeholder="Offer Percent" {...register('offerPercent')} />
                        </div>
                        <div className="mt-2">
                            <input type="text" className="form-control" placeholder="Stock Available Count" {...register('stockAvailableCount')} />
                        </div>
                        <div className="mt-2">
                            <input type="file" className="form-control" {...register('productImg')} onChange={(event)=>{loadImage(event)}} />
                        </div>
                        <div className="mt-2">
                            <input type="submit" value='Add Product' className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}