import React from "react";
import mob from "../images/mob.png";


const Service = () => {
  return (
    <div className="service-body ">
      <div className="row">
        <div className="col-md-7 service-content">
          <div>
            <h2 className="service-text">
              Easy <span className="Hero-name-color">Same</span> or Next-day <br /> Appointments
            </h2>
            <p className="service-paragraph">
              Easily make an appointment with our best doctor for your family, either on the same day or the next day. Easily make an appointment with our best doctor for your family, either on the same day or the next day. Easily make an appointment with our best doctor for your family, either on the same day or the next day.
            </p>
          </div>
        </div>
        <div className="col-md-5 ">
          <img className="" src={mob} alt="About" />
        </div>
      </div>
    </div>
  );
};

export default Service;
