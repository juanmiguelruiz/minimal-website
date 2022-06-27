import React from "react";
import { Job } from "./components";
import { jobs } from "./data";

const Experience = () => {
  return (
    <div className="row">
      <p className="title">Experience</p>
      {jobs.map((job) => (
        <Job
          image={job.image}
          company={job.company}
          position={job.position}
          location={job.location}
          date={job.date}
        />
      ))}
    </div>
  );
};

export default Experience;
