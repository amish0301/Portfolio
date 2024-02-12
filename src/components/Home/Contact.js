import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { MdContactMail } from "react-icons/md";
// import { toast } from "react-toastify";

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
      )
      .then(
        () => {
          // toast.success("Message sent Successfully!", {
          //   position: "top-right",
          //   autoClose: 3000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          // });
          console.log("Success");
        },
        (error) => {
          console.log("FAILED...", error.text);
          // toast.error(`FAILED... due to ${error.message}`, {
          //   theme: "dark",
          //   position: "top-right",
          //   autoClose: 3000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          // });
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
        <label>Name</label>
        <input type="text" name="user_name" placeholder="your name" required />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          placeholder="your email"
          required
        />
        <label>Message</label>
        <textarea name="message" className="msg" required />
        <input type="submit" value="Send" />
      </form>
    </Container>
  );
}

export default Contact;
