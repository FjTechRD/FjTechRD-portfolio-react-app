import React from "react";
import "./style/contact.css";

const Contact = () => {
  return (
    <main className="contact">
      <h2>Contact</h2>
      <section className="contact__info">
        <div className="contact__info-personal"></div>
        <div className="contact__info-address"></div>
      </section>
      <div className="contact-maps"></div>
    </main>
  );
};

export default Contact;
