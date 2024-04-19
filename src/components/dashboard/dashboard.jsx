import React from 'react'
import './dashboard.css';
import { Calendar2Week, PersonCircle } from 'react-bootstrap-icons';
import { AuthRoute } from '../../services/auth-route';
export const DashBoard = () => {
    return (
        // <AuthRoute>
        <>
            <section className="mt-5">
                <div className=" dashboarddiv ">
                    <div>
                        <h1>User Dashboard</h1>
                    </div>
                </div>
            </section>
            <section className='container'>
                <div className='row'>
                    <div className="col-3 db_ul ">
                        <ul>
                            <li style={{ backgroundColor: 'rgb(58, 152, 229)', color: 'white' }}><PersonCircle></PersonCircle>&nbsp;Name</li>
                            <li style={{ color: 'rgb(58, 152, 229)' }}>Dashboard</li>
                            <li>Edit Profile</li>
                            <li>Change Password</li>
                            <li>My Orders</li>
                            <li>Chat List</li>
                            <li>Refund Request</li>
                            <li>Wallet History</li>
                            <li>Shipping Address</li>
                            <li>Support Ticket</li>
                            <li>Log Out</li>
                        </ul>
                    </div>
                    <div className='col-9'>
                        <div className='db_div1'>
                            <div className='db_div2'>
                                <div className='db_div3'>
                                    <div className='cal_div'>
                                        <span className='cal'><Calendar2Week></Calendar2Week></span>
                                    </div>
                                    <div>
                                        <h3 className='db_color'>Total Orders</h3>
                                        <h1 className='db_color'>0</h1>
                                    </div>
                                </div>
                                <div className='db_div3'>
                                    <div className='cal_div'>
                                        <span className='cal'><Calendar2Week></Calendar2Week></span>
                                    </div>
                                    <div>
                                        <h3 className='db_color'>Support Tickets</h3>
                                        <h1 className='db_color'>4</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='table-bdr'>
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Order</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td scope="row">#569</td>
                                            <td>March 18, 2024</td>
                                            <td><button className='btn btn-warning'>pending</button></td>
                                            <td>&#x20B9;2000</td>
                                            <td><button className='btn btn-dark'>view details</button></td>
                                        </tr>
                                        <tr>
                                            <td scope="row">#567</td>
                                            <td>March 18, 2024</td>
                                            <td><button className='btn btn-warning'>pending</button></td>
                                            <td>&#x20B9;10000</td>
                                            <td><button className='btn btn-dark'>view details</button></td>
                                        </tr>
                                        <tr>
                                            <td scope="row">#566</td>
                                            <td>March 17, 2024</td>
                                            <td><button className='btn btn-warning'>pending</button></td>
                                            <td>&#x20B9;9000</td>
                                            <td><button className='btn btn-dark'>view details</button></td>
                                        </tr>
                                        <tr>
                                            <td scope="row">#564</td>
                                            <td>March 16, 2024</td>
                                            <td><button className='btn btn-warning'>pending</button></td>
                                            <td>&#x20B9;1100</td>
                                            <td><button className='btn btn-dark'>view details</button></td>
                                        </tr>
                                        <tr>
                                            <td scope="row">#563</td>
                                            <td>March 14, 2024</td>
                                            <td><button className='btn btn-warning'>pending</button></td>
                                            <td>&#x20B9;3000</td>
                                            <td><button className='btn btn-dark'>view details</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        // </AuthRoute>
    )
}
