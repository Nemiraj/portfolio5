import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "c775ea47-00f7-4711-aa32-90da452e4129");
    
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
        }
      };
    return (
        <div id='contact' className='contact'>
            <div className='contact-title'>
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt='pattern'/>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="mail icon" /><p>yuvanemiraj@gmail.com</p>
                        </div>
                        <div className="contact-detail">                                                                                                                                                                                                                                                                                                           
                            <img src={call_icon} alt="call icon" /><p>+917975245016</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="location icon" /><p>India, karnataka-Davanagere</p>
                        </div>
                    </div>
                </div>
                <div onSubmit={onSubmit} className="contact-right">
                    <form>
                        <label>Your Name</label>
                        <input type="text" placeholder='Enter your name' name='name' />
                        <label>Your Email</label>
                        <input type="email" placeholder='Enter your email' name='email' />
                        <label>Write your message here</label>
                        <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                        <button type="submit" className="contact-submit">Submit now</button>
                    </form>
                </div>  
            </div>
        </div>
    );
}

export default Contact;
