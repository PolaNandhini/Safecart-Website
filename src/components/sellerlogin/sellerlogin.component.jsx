import React from "react";
import './sellerlogin.component.css';
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.webp';
export function SEllerLogin() {
    return (
        <>
            <div className="container seller">
                <div className="sl1">
                    <center>
                        <h4>Welcome Back!</h4>
                        <h5>Sign In</h5>
                    </center>
                    <label className="mt-2"><h6>User Name</h6></label>
                    <input type="text" placeholder="test_vendor" className='form-control' />
                    <label className="mt-2"><h6>Password</h6></label>
                    <input type="password" placeholder="......." className='form-control' />
                    <div className="sl2">
                        <div><input type="checkbox" />Remember me</div>
                        <p>Forgot Password</p>
                    </div>
                    <button className="btn btn-success form-control">Log In</button>
                    <br /><br />
                    <p>Don't have account?Signup Now</p>
                </div>
            </div>
        </>
    )
}