import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const [name,setName] = useState('')
  const [ email, setEmail] = useState('')
  const [ message,setMessage] = useState('')
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3hxk2pl",
        "template_we23lte",
        form.current,
        "9yXB2C3uwiv0jLyBL"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setEmail('')
          setMessage('')
          setName('')
          // form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="from_name" className="user"  placeholder="Name"/>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="from_email" className="user" placeholder="Email"/>
          <textarea name="message" value={message} onChange={(e)=>setMessage(e.target.value)} className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
