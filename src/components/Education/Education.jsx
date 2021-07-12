import React from "react";

import us from "../../assets/img/us.png";
import Item from "./Item";

const Education = () => {
  return (
    <div className="row">
      <div className="col s12">
        <p className="title">Education</p>
        <Item
          image={us}
          university="Universidad de Sevilla"
          degree="Computer Engineering-Software Engineering Degree"
          location="Sevilla"
          date="2014-2020"
        />
        
      </div>
    </div>

  );
};

export default Education;
