import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./css/contact.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("mpzvllnp");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit(event);
    if (state.succeeded) {
      alert("Message Sent!!!");
      setFormData({ name: "", email: "", message: "" }); 
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <>
      <div className="formhead">
        <h1>
          Get in <span className="light">Touch</span> Today!
        </h1>
      </div>
      <div className="formmain">
        <div className="contactimg1"></div>

        <form onSubmit={handleFormSubmit} className="formcontainer">
          <label htmlFor="name" className="formlabel">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="inputfield"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <label htmlFor="email" className="formlabel">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="inputfield"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <label htmlFor="message" className="formlabel">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="inputfield"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            className="formbtn"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
        <div className="contactimg2"></div>
      </div>
    </>
  );
};

export default Contact;
