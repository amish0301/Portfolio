import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { MdContactMail } from "react-icons/md";
import { toast } from "react-toastify";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tfddwfk",
        "template_8paa9hc",
        form.current,
        "WfJIBkAtmucEB93im"
      ).then(
        () => {
          toast.success("Message sent Successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          toast.error(`FAILED... due to ${error.message}`, {
            theme: "dark",
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );

    e.target.reset();
  };

  return (
    <Container className="contact-container">
      <div>
        <h2 style={{ fontWeight: "bold" }}>Contact Me</h2>
        <MdContactMail className="contact-logo" />
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="user_name">Name</label>
        <input type="text" name="user_name" id="user_name" placeholder="your name" required={true} aria-label="Name" />
        <label htmlFor="user_email">Email</label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          placeholder="your email"
          required
          aria-label="Email"
        />
        <label htmlFor="message">Message</label>
        <textarea  id="message" className="msg" required={true} placeholder="type your message here.." name="message" />
        <input type="submit" aria-label="Submit" value="Send" />
      </form>
    </Container>
  );
}

export default Contact;
