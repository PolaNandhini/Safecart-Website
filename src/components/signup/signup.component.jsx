import React from "react";
import './signup.component.css';
import { useForm } from "react-hook-form";
export function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <>
            <section className="mt-2">
                <div className=" aboutdiv ">
                    <div>
                        <h1>Register</h1>
                    </div>
                </div>
            </section>
            <div className="signupdiv mt-5">
                <form className="su1" method="post" id="regForm" action="http://localhost:4000/saveUser"  onSubmit={handleSubmit(()=>document.getElementById("regForm").submit())} >
                    <h2>Create Account</h2>
                    <input type="text" placeholder="Name" className='form-control' name="userName"
                        {...register('userName', { required: true, minLength:3, maxLength:40, pattern:/^[A-Za-z]+$/i })} />
                    <div>
                        {
                           errors.userName && errors.userName.type === "required" ? <label style={{ color: 'red' }}>Please enter your name</label> :
                           errors.userName && errors.userName.type ===  "minLength" ? <label className="msg_clr">Please enter atleast three characters</label> :
                           errors.userName && errors.userName.type === "maxLength" ? <label  className="msg_clr">This field not allow more than 40 characters</label> :
                           errors.userName && errors.userName.type === "pattern" ? <label  className="msg_clr">This field not allow digits and symbols</label> : ' '

                        }
                    </div>
                    <br />
                     {/* pattern:/^[0-9]+$/i */}
                    <input type="number" placeholder="Phonenumber" className='form-control' name="phoneNumber"
                        {...register('phoneNumber', { required: true, maxLength:10,pattern: /^[6-9]\d{9}$/ })} />
                    <div>
                        {
                            // errors && errors.phonenumber ? <span style={{ color: 'red' }}>Please enter phonenumber field</span> : ''
                            errors.phoneNumber && errors.phoneNumber.type === "required" ? <label style={{ color: 'red' }}>Please enter your phone number</label> :
                            errors.phoneNumber && errors.phoneNumber.type ===  "maxLength" ? <label  className="msg_clr">Your number is exceeding 10 digits</label> :
                            errors.phoneNumber && errors.phoneNumber.type ===  "pattern" ? <label  className="msg_clr">Please enter a valid number</label> : ' '

                        }
                    </div>
                    <br />
                    <input type="text" placeholder="Email" className='form-control' name="email"
                        {...register('email', { required: true,pattern: {
                            value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message : "Email format should be 'name@domain.com'"
                        }})} />
                    <div>
                        {
                            errors.email && errors.email.type === "required" ? <label  className="msg_clr">Please enter your email</label> :
                            errors.email && errors.email.message ? <label style={{color:'red'}}>{errors.email.message}</label>: ' '
                        }
                    </div>
                    <br />
                    <input type="text" className="form-control" placeholder="Select your country" name="country"
                        {...register('country', { required: true })} />
                    <div>
                        {
                            errors && errors.country ? <span style={{ color: 'red' }}>Please enter country field</span> : ''
                        }
                    </div>
                    <br />
                    <input type="password" placeholder="Password" className='form-control' name="password"
                        {...register('password', { required: true,pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/ })} />
                    <div>
                        {
                            // errors && errors.password ? <span style={{ color: 'red' }}>Please enter password field</span> : ''
                            errors.password && errors.password.type === "required" ? <label style={{ color: 'red' }}>Please enter your password</label> :
                            errors.password && errors.password.type ===  "pattern" ? <label  className="msg_clr">Password must be alphanumeric contain a special character,an uppercase letter and length should be greater than 5</label> :' '
                        }
                    </div>
                    <br />
                    <input type="password" placeholder="Confirm Password" className='form-control' />
                    <br />
                    <input type="checkbox" /><h6>Accept all Terms and Conditions & Privacy Policy</h6>
                    <br />
                    <br />
                    <button className="btn btn-success form-control">Create Account</button>
                    <br />
                    <br />
                    <div className="block">
                        <p>Already Have account?</p>&nbsp;<span style={{ fontWeight: '700' }}>Sign in</span>
                    </div>
                </form>
            </div>
        </>
    )
}