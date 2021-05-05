import React, { useState } from "react";
import axios from "axios";
import "./ContactMe.css";
// import "bootstrap/dist/css/bootstrap.min.css";

const ContactMe = () => {
  const [firstAndLastName, setFirstAndLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitEmail = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/contact", {
        name: firstAndLastName,
        email: email,
        message: message,
      })
      .then((response) => {
        console.log(firstAndLastName);
        console.log(email);
        console.log(message);
        if (response.data.status === "sent") {
          alert("Message Sent.");
          resetForm();
        } else if (response.data.status === "failed") {
          alert("Message failed to send.");
        }
      });
  };
  const resetForm = () => {
    setFirstAndLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className='container'>
      <form action='action_page.php'>
        <label htmlFor='fname'>First and Last Name</label>
        <input
          onChange={(e) => {
            setFirstAndLastName(e.target.value);
          }}
          type='text'
          id='fname'
          name='firstname'
          placeholder='First and Last Name'
        />

        <label htmlFor='lname'>E-Mail</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type='text'
          id='lname'
          name='lastname'
          placeholder='E-Mail...'
        />

        <label htmlFor='subject'>Message</label>
        <textarea
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          id='subject'
          name='subject'
          placeholder='Write something..'
          style={{ height: "200px" }}
        ></textarea>

        <input onClick={submitEmail} type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default ContactMe;
