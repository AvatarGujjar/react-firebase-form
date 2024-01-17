import React, { useState } from 'react';
import "./contact.css";

const Reactcontact = () => {

const [user, setUser] = useState({
    name : "",
    email : "",
    phone : "",
    address : "",
    message : "",
});

let name, value;
 const getUserData = (event) =>{
  name = event.target.name;
  value = event.target.value;

  setUser({...user, [name]: value})
//  console.log(user);
 };

 const postData = async (e) =>{
    e.preventDefault();

    const {name, email, phone, address, message} = user;
   
    if(name && email && phone && address && message){

    const res = await fetch(
        "https://react-form-pro-default-rtdb.firebaseio.com/reactformproject.json", 
        {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                address,
                message,
            }),
        }
        );

        if(res){
            setUser({
                name: "",
                email: "",
                phone: "",
                address: "",
                message: "",
            });

            alert("Data stored successfully");
        }
    }

    else{
        alert("please fill all the data");
    }

 };

 

    return(
        <>
       
        <div className="container">
            <div className="wrap-contact100">
                <form className="contact100-form" method='POST'>
                    <span className="contact100-form-title">Contact Us</span>

                    <div className="wrap-input input-name">
                        <span className="label-input">Your Name</span>
                        <input
                          className="input100"
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          value={user.name}
                          onChange={getUserData}
                          autoComplete="off"
                          required
                        ></input>
                        <span className="focus-input"><hr/></span>
                    </div>

                    <div className="wrap-input input-email">
                        <span className="label-input">Email</span>
                        <input
                          className="input100"
                          type="text"
                          name="email"
                          placeholder="Enter your email address"
                          value={user.email}
                          onChange={getUserData}
                          autoComplete="off"
                          required
                        />
                        <span className="focus-input"><hr/></span>
                    </div>

                    <div className="wrap-input input-mobile">
                        <span className="label-input">Mobile Number</span>
                        <input
                          className="input100"
                          type="tel"
                          name="phone"
                          placeholder="Enter your phone number"
                          value={user.phone}
                          onChange={getUserData}
                          autoComplete="off"
                          required
                        />
                        <span className="focus-input"><hr/></span>
                    </div>

                    <div className="wrap-input input-address">
                        <span className="label-input">Address</span>
                        <input
                          className="input100"
                          type="text"
                          name="address"
                          placeholder="Enter your address"
                          value={user.address}
                          onChange={getUserData}
                          autoComplete="off"
                          required
                        />
                        <span className="focus-input"><hr/></span>
                    </div>

                    <div className="wrap-input input-message">
                        <span className="label-input">Message</span>
                        <textarea
                          className="input100"
                          name="message"
                          placeholder="your message here..."
                          value={user.message}
                          onChange={getUserData}
                        ></textarea>
                        <span className="focus-input"><hr/></span>
                    </div>

                    <div className="form-btn">
                        <button className="contact-from-btn" onClick={postData}>
                            <span>
                                submit
                                <i
                                className="fa fa-long-arrow-right m-l-7"
                                aria-hidden="ture"></i>
                            </span>
                        </button>
                    </div> 

                </form>
            </div>
        </div> 

        
        </>
    );
};

export default Reactcontact;