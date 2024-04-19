import React from 'react'
import './becomeaseller.css'
import { Top } from '../header1/top.component'
import { Header } from '../header2/header.component'
import { MainNav } from '../mainnav3/mainnav.component'
import { Footer } from '../footer14/footer.component'
export const Becomeaseller = () => {
    return (
        <div>
            <section className="mt-2">
                <div className=" aboutdiv ">
                    <div>
                        <h1>Vendor Registration</h1>
                        <p>Home | Registration</p>
                    </div>
                </div>
            </section>
            <div className='basdiv mt-5'>
                <div className='basdiv1'>
                    <div className='padding-inp'>
                        <h3>Basic Info*</h3>
                        <label className="mt-2"><h6>Owner Name</h6></label>
                        <input type="text" placeholder="Owner Name" className='form-control' />
                        <label className="mt-2 mt-3"><h6>Business Name</h6></label>
                        <input type="password" placeholder="Business Name" className='form-control' />
                        <label className="mt-2"><h6>Email</h6></label>
                        <input type="text" placeholder="Email" className='form-control' />
                        <label className="mt-2 mt-3"><h6>User Name</h6></label>
                        <input type="password" placeholder="User Name" className='form-control' />
                        <label className="mt-2"><h6>Password</h6></label>
                        <input type="text" placeholder="Password" className='form-control' />
                        <label className="mt-2 mt-3"><h6>Confirm Password</h6></label>
                        <input type="password" placeholder="Confirm Password" className='form-control' />
                        <label className="mt-2"><h6>Business Category</h6></label>
                        <input type="text" placeholder="Business Category" className='form-control' />
                        <label className="mt-2 mt-3"><h6>Description</h6></label>
                        <input type="password" placeholder="Description" className='form-control' />
                        <br />
                        <input type="checkbox" /> &nbsp; Accept all Terms and Conditions & Privacy Policy
                        <br />
                        <br />
                        <button className='btn btn-success form-control'>Submit For Registration</button>
                        <center> <p>Already Have Account? Login</p></center>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    )
}
