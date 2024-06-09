
import React from 'react';
import './Contact.css'; // Import your CSS file for styling

export default function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Have questions or need assistance? Feel free to contact us using the information below:</p>
      <div className="contact-info">
        <p> <img src="images/email.png" className="contact-icon" alt="Email" /> contact@travelx.com</p>
        <p> <img src="images/contact.png" className="contact-icon" alt="Phone" /> +1-234-567-890</p>
        <p> <img src="images/address.png" className="contact-icon" alt="Address" /> 123 Travel St, Adventure City, USA</p>
      </div>
      <p>Alternatively, you can fill out the form below and we'll get back to you as soon as possible:</p>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
