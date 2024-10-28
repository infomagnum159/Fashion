import React from "react";
import "./ContactsPage.css";

const ContactsPage = () => {
  return (
    <div className="contacts-page">
      <div className="content">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <p>Email: liama_style@mail.ru</p>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <p>Phone: +996 (500) 979 919 </p>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>Address: Чынгыз Айтматова 54, Бишкек</p>
          </div>
        </div>
        <div className="contact-form">
          <h2>Связаться</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
