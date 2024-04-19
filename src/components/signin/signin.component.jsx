import React, { useRef } from "react";
import './signin.component.css';
import { Facebook, Google } from "react-bootstrap-icons";
import { getUser } from "../../services/user.service";
import { useNavigate } from "react-router-dom";
import store from "../../services/reduxstore.service";
import { setLocalStorageItem } from "../../services/storage/local.storage";
export function SignIn() {

    const navigate=useNavigate()
    const userNameRef=useRef();
    const passwordRef=useRef();

    function getRegisterData() {
        const userName = userNameRef.current.value
        const password = passwordRef.current.value

        getUser().then((res) => {
            let filterData = res.data.filter((item, index, arr) =>
                item.userName == userName && item.password == password
            );
            if (filterData.length > 0) {
                setLocalStorageItem("userData",filterData)
                let action = {type : "login", data : filterData}   //action is an object it has two params type and data.
                store.dispatch(action)
                alert("user exist")
                navigate("/dashboard")
            }
            else {
                alert("user does not exist")
            }
        })
            .catch((ex) => {
                alert(ex.message)
            }
            )
    }

    return (
        <>
            <section className="mt-2">
                <div className=" aboutdiv ">
                    <div>
                        <h1>Sign In</h1>
                    </div>
                </div>
            </section>
            <div className="signindiv mt-5">
                <div className="s1">
                    <h4>Sign In</h4>
                    <label className="mt-2"><h6>Email Or User Name</h6></label>
                    <input type="text" placeholder="test_user" className='form-control' ref={userNameRef} />
                    <label className="mt-2 mt-3"><h6>Password</h6></label>
                    <input type="password" placeholder=".........." className='form-control' ref={passwordRef} />
                    <button className="btn form-control mt-3" onClick={() => { getRegisterData() }}>Sign In</button>
                    <div className="mt-3 checkandfp">
                        <div>
                            <input type="checkbox" />Remember Me
                        </div>
                        <p>Forgot Password ?</p>
                    </div>
                    <div className="contents">
                        <div className="or">
                            <center><span>OR</span></center>
                        </div>
                        <div className="iconborder mt-4">
                            <span><Google></Google>Login with Google</span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span><Facebook></Facebook>Login with Facebook</span>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </>
    )
}