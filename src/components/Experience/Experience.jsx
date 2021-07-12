import React from "react";
import Job from "./Job";

import everis from "../../assets/img/everis.png";
import oesia from "../../assets/img/oesia.png";
import sixphere from "../../assets/img/sixphere.png";

const Experience = () => {
  return (
    <div className="row">
        <p className="title">Experience</p>
        <Job
          image={sixphere}
          company="Sixphere"
          position="Software Engineer"
          location="Dos Hermanas, Sevilla"
          date="Since July 2021"
        />
        <Job
          image={everis}
          company="Everis"
          position="Solutions Assitant"
          location="Sevilla"
          date="November 2020 - July 2021"
        />
        <Job
          image={oesia}
          company="Grupo Oesía"
          position="Software developer (Internship)"
          location="Sevilla"
          date="July 2020 - November 2020"
        />
      </div>

  );
};

export default Experience;
