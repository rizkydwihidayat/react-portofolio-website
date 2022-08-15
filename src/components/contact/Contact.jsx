import "./contact.css";
import Phone from "../../img/telephone.png";
import Email from "../../img/email.png";
import Linkedin from "../../img/linkedin.png";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import swal from '@sweetalert/with-react';

const Contact = () => {
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_q4o3k49', 'template_0itrv7o', form.current, 'Xfp5q_Zq2DoLCPaTA')
      .then(() => {
          e.target.reset();
          swal(
            <div>
              <h1>Thanks a lot</h1>
              <p>
                Your message has been sent!
              </p>
          </div>
          )
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div id="contact" className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              <span>+62 895411114371</span>
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              <span>rizkydwihidayat@gmail.com</span>
            </div>
            <div className="c-info-item">
              <img src={Linkedin} alt="" className="c-icon" />
              <a
                href="https://www.linkedin.com/in/rizky-dwi-hidayat-15b6ba182/"
                target="blank"
              >
                linkedin/rizkydwihidayat
              </a>
            </div>
          </div>
        </div>
        <div className="c-right ">
          <p className="c-desc">
            <b>What's your story?</b> Let's get in touch.
          </p>
          <form ref={form} autoComplete="off" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message"></textarea>
            <button className="c-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
