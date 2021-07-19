import React, { useState } from "react";

const Contact = () => {
  const [ data, setData ] = useState({
     fullname: "",
     phone:"",
     email: "",
     msg: ""
  })

  const InputEvent = (event) =>{
    const {name, value} = event.target;

    setData((preVal) => {
      return{
        ...preVal,
         [name]: value,
      };
    });
  };
  const formSubmit = (e) =>{  
        e.preventDefault()
        alert(
          `My name is ${data.fullname}
          . My mobile number is ${data.phone} mmy email is  ${data.email} this is masg  ${data.msg}`
        );
  };
    return(
      <>
        <div className="my-5">
            <h1 className="text-center"> Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}> 
                 <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Your Full Name</label>

                    <input type="text" className="form-control" id="exampleFormControlInput1"
                           name="fullname" value={data.fullname} onChange={InputEvent} placeholder="enter Your Name"/>
                  </div>
                  <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Mobile To Contact</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1"
                           name="phone" value={data.phone} onChange={InputEvent} placeholder="phone no"/>
                  </div>
                  <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1"
                           name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
                  </div>
                  <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                      name="msg" value={data.msg} onChange={InputEvent} ></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-outline-info" type="submit">Submit Form</button>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </>
    );
};

export default Contact;