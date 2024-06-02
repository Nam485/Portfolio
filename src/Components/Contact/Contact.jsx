import React from 'react'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import './Contact.css'


const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "7ea92e32-44c4-46e4-8ccb-5ae2d9be1335");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
            document.getElementById("formId").reset();
        }
    };



    return (
        <div id="contact" className='contact'>
            
            <div className="contact-section">
                <div className="contact-left">
                <div className="contact-title">
            <h1>Contact <span>Us</span></h1>
            </div>
            <div className='contact-left-below'>
                    <h1>Let's talk</h1>
                    <p>In brief, I'd love to hear from you. Whether you have a question about my work, want to collaborate on a project, or just want to say hi, my inbox is always open. Drop me a message and I'll get back to you as soon as possible.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /><p>namitgoyal485@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /><p>+91 7023735485</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /><p>Malviya Nagar, Jaipur</p>
                        </div>
                    </div>
                    </div>
                </div>
                <form onSubmit={onSubmit}  id='formId' className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your Name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your Email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className='contact-submit'>Submit Now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
