import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-us flex">
      <div className="left-section">
        <h1 className="title">
          <span className="icon-envelope-o"></span>
          Contact Us
        </h1>
        <p>
          Contact us for more information and get notified when I publish
          something new.
        </p>
        <form className="myform">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input type="email" name="" id="email" />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message:</label>
            <textarea required name="" id="message"></textarea>
          </div>
          <button className="submit">Submit</button>
        </form>
      </div>
      <div className="right-section animation">
        <div className="iframe-container">
          <iframe
            src="https://open.spotify.com/embed/playlist/4829flRVJFnn8HqiYrhI4N?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
      
        </div>
      </div>
    </section>
  );
}
