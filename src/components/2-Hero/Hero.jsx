import React from "react";
import "./Hero.css";
import QRCode from "react-qr-code";
import Lottie from "lottie-react";
import codingAnimation from "../../../public/animation/coding.json"



export default function Hero() {


  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img src="me.jpg" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title">Hi, my name is OUSSAMA</h1>
        <p className="sub-title">
          <span className="skinny">
            I'm a proficient Web Developer located in Salé, Morocco.
          </span>
          With a rich background in crafting diverse platforms,
          <br />
        </p>
        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>
      <div className="right-section">
      <Lottie style={{height : 500, width: 500}} animationData={codingAnimation} />

      
      </div>
    </section>
  );
}
