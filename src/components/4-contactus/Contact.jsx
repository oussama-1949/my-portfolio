import React from "react";
import "./Contact.css";
import QRCode from "react-qr-code";

const resumeUrl = "/Resume.pdf";


export default function Contact() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
      <div className="right-section ">

        <div className="card">
          <p className="resume-text">Resume</p>
          <p className="view-resume-text">Click to view resume</p>
        </div>

           {/* <div className="card" onClick={downloadResume}>
          <QRCode value={resumeUrl} size={150} className="qr-code" />
          <p>Download my resume</p>
        </div>  */}
      </div>
    </section>
  );
}
