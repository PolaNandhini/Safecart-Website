import React, { useEffect, useState } from 'react';
import './editprofile.css';
import { Heart } from 'react-bootstrap-icons';
export const Editprofile = () => {

    const [user, setUser] = useState([]);
    const [showpopup, setShowPopup] = useState(false);

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        let data = localStorage.getItem("userData"); //userData(key)
        setUser(JSON.parse(data)[0]);
    }
    return (
        <div>
            <section className="mt-5">
                <div className="aboutdiv">
                    <div>
                        <h1>Edit Profile</h1>
                    </div>
                </div>
            </section>
            <div className='ep_div' >
                <form className='ep1' method='post' action='http://localhost:4000/updateUser' >
                    <input type="hidden" name="id" defaultValue={user.id} />
                    <input type="text" placeholder='Name' className='form-control mt-4' name='userName' defaultValue={user.userName} />
                    <input type="number" placeholder="Phonenumber" className='form-control mt-4' name="phoneNumber" defaultValue={user.phoneNumber} />
                    <input type="text" placeholder="Email" className='form-control mt-4' name="email" defaultValue={user.email} />
                    <input type="text" className="form-control mt-4" placeholder="Select your country" name="country" defaultValue={user.country} />
                    <button type='submit' className='btn btn-primary form-control mt-5' onClick={()=>{setShowPopup(true)}} >Update Profile</button>
                </form>
            </div>
            <div>
                {
                   showpopup && <label className='popup_profile'><Heart className='svg1'></Heart> Profile Updated</label>
                }
            </div>
        </div>
    )
}