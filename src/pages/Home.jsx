import React from "react";
import google from "../images/google.png";
import apple from "../images/apple.png";
import hero_image from "../images/hero-image.png";
import info from "../images/info.png";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="hero-content">
              <h1 className="Hero_name">
                Men's <span className="Hero-name-color">health stuff</span> <br />
                made easy.
              </h1>
            </div>
          </div>
          <div className="col-md-6">
            <div className="Hero-image">
              <div className="Hero_text">
                <p>
                  Check your family's health with the help of a professional
                  team of doctors and modern facilities.
                </p>
              </div>
              <div className="d-flex icon-button">
                <a className="store-button d-flex" href="https://play.google.com/store">
                  <img src={google} alt="Google Play Store" />
                  <p>
                    Get on <br className="icon-name" /> Google Play
                  </p>
                </a>
                <a className="store-button d-flex" href="https://www.apple.com/app-store/">
                  <img src={apple} alt="Apple App Store" />
                  <p>
                    Get on <br className="" /> Apple App Store
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="hero-image">
              <img src={hero_image} alt="Hero" className="hero-image" />
            </div>
            <div className="info-banner">
              <img src={info} alt="Info" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
