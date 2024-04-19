import React from "react"
import './deletepopup.css'
import { Button } from "react-bootstrap"
export  function DeletePopup(props){
    return(
        <div>
            <div>Do you want to delete</div>
            <div className="mt-3">
                <Button className="btn btn-danger" onClick={()=>props.deleteWishlistProduct()}>Yes</Button>
                <Button className="btn btn-success ms-2" >No</Button>
            </div>
        </div>
    )
}