import React from "react";
import Frame from "../images/Frame.png";

const DocType = () => {
  return (
    <div className="row">
      <div className="col-md-12 ">
        <p className="doctype-section text-center">
          You're in <span className="Hero-name-color ms-3 ">safe hands</span>
        </p>
      </div>
      <div className="col-md-12">
        <div className="row">
          <p className="doctype-paragraph">
            Easily make an appointment with our best doctors for your family in
            the same day or the next day. Easily make an appointment with our
            best doctors.
          </p>
        </div>
      </div>
      <div className=" frama-p">
        <img className="frame-image" src={Frame} alt="Frame 1" />
        <img className="frame-image" src={Frame} alt="Frame 2" />
        <img className="frame-image" src={Frame} alt="Frame 3" />
      </div>
    </div>
  );
};

export default DocType;
