import React from "react";
import aboutImage from "../images/aboutimg.png";
import green from "../images/green.png";
import FAQ from "./FAQ";

const AboutPage = () => {
  return (
    <div className="main-about">
      <div className="row">
        <div className="col-md-6">
          <div className="about-div">
            <img className="about-image" src={aboutImage} alt="About" />
            {/* <img src={green} alt="green" className="green-image " />  */}

          </div>
        </div>
        <div className="col-md-6">
          <div className="about-text">
            <h2>
              Easy <span className="Hero-name-color">Same</span> or Next-day <br /> Appointments
            </h2>
            <p className="paragraph">
              Easily make appointment with our best doctor for your families in
              same day or the next day. Easily make appointment with our best
              doctor for your families in same day or the next day. Easily make
              appointment with our best doctor for your families in same day or
              the next day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
