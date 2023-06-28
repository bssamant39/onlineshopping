import React, { useState } from 'react'

const Contact = () => {
    const [inputValue, setInputValue] = useState([{
        name: "",
        mail: "",
        subject: "",
        msg: ""
    }]);
    const inputHandler = (e) => {

        const name = e.target.name
        const value = e.target.value
        console.log(name, value);
        setInputValue((preVal) => {
            return {
                ...preVal,
                [name]: value
            }

        })

    }
    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Hello Mr. ${inputValue.name} your Mail id is ${inputValue.mail} , Subject is ${inputValue.subject} and Message is ${inputValue.msg} `);

    }
    return (
        <div className="container-fluid">
            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Contact Us</span></h2>
            <div className="row px-xl-5">
                <div className="col-lg-7 mb-5">
                    <div className="contact-form bg-light p-30">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" novalidate="novalidate" onSubmit={submitHandler}>
                            <div className="control-group">
                                <input type="text" className="form-control" id="name" placeholder="Your Name"
                                    required="required" data-validation-required-message="Please enter your name"
                                    name="name"
                                    value={inputValue.name}
                                    onChange={inputHandler}
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="email" className="form-control" id="email" placeholder="Your Email"
                                    required="required" data-validation-required-message="Please enter your email"
                                    name="mail"
                                    value={inputValue.mail}
                                    onChange={inputHandler}
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control" id="subject" placeholder="Subject"
                                    required="required" data-validation-required-message="Please enter a subject"
                                    name="subject"
                                    value={inputValue.subject}
                                    onChange={inputHandler}
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control" rows="8" id="message" placeholder="Message"
                                    required="required"
                                    data-validation-required-message="Please enter your message"
                                    name="msg"
                                    value={inputValue.msg}
                                    onChange={inputHandler}></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                                <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Send
                                    Message</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-5 mb-5">
                    <div className="bg-light p-30 mb-30">
                        <iframe style={{ width: "100%", height: "250px" }}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13911.718911224365!2d79.54886724516587!3d29.34305515454392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a098281277a58f%3A0xcfc368b144efc139!2sBhimtal%20Lake!5e0!3m2!1sen!2sin!4v1687879604707!5m2!1sen!2sin" >
                        </iframe>
                    </div>
                    <div className="bg-light p-30 mb-3">
                        <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>123 Street, Nainital, Uttarakhand</p>
                        <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                        <p className="mb-2"><i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact