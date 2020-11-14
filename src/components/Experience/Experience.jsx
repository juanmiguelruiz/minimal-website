import React from "react";
import Job from "./Job";

import everis from "../../assets/img/everis.png";
import oesia from "../../assets/img/oesia.png";

const Experience = () => {
  return (
    <div className="row">
        <p className="title">Experience</p>
        <Job
          image={everis}
          company="Everis"
          position="Solutions Assitant"
          location="Seville"
          date="Since November 2020"
        />
        <Job
          image={oesia}
          company="Grupo Oesía"
          position="Software developer (Internship)"
          location="Seville"
          date="July 2020 - November 2020"
        />
      </div>

  );
};

export default Experience;
