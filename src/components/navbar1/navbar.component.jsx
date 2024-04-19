import React from "react";
import { Facebook, Instagram, Pinterest, Twitter } from "react-bootstrap-icons";
import './navbar.component.css';
export function Navbar() {
  return (
    <>
      <header>
        <div className="container-fluid margintop">
          <div className=" container navbarcontainer">
            <div className="container1 ">
              <ul>
                <li><Twitter></Twitter></li>
                <li><Facebook></Facebook></li>
                <li><Pinterest></Pinterest></li>
                <li><Instagram></Instagram></li>
              </ul>
            </div>
            <div className="container2 ">
              <ul>
                <li><button className="btn btn-warning bn">Become a seller</button></li>
                <li>SellerLogin</li>
                <li>FAQ</li>
                <li>Contact</li>
                <li>TrackingOrder</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}