import React, { useRef } from "react";
import './Join.css'
import emailjs from "@emailjs/browser";

export const Join = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_lvtbt5a', 'template_wjy7sfb', form.current, {
            publicKey: 'YmAsgO3AHp8lnb-aP',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <div className="join" id="join_us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container">
            <input type="email" name="user_email" placeholder="Enter your email address" />
            <button className="btn btn-j" onSubmit={sendEmail}>Join Now</button>
        </form>
      </div>
    </div>
  );
};
 