import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS details
    const SERVICE_ID = "service_dm6r64r";
    const TEMPLATE_ID = "template_za6qiy9";
    const PUBLIC_KEY = "Ehj7AEDNNyAFVlxV3";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY).then(
      (response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setStatusMessage("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        console.error("Failed to send email:", error);
        setStatusMessage("Failed to send email. Please try again later.");
      }
    );
  };

  return (
    <div className="contact-form">
      {statusMessage && <p>{statusMessage}</p>}

      <div className="contact-text">
        
        <div className="contactb">
          <h3>Let's Work Together!</h3>
          <div className="contact">
            <div className="details">
              <p>
                As a motivated individual eager to gain practical experience, I
                am on the lookout for internship opportunities that align with
                my interests and skills. If you see a potential match between
                your organization's needs and my abilities, I'd love to hear
                from you. Let's explore how we can collaborate for mutual
                growth.
              </p>
            </div>
            <div className="details contact-form2">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="icon-container">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
