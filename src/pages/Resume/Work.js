import React from "react";

const Work = props => {
  const { value } = props;
  const work = value.work.reverse().map(function(job) {
    return (
      <div key={job.company} className="row item">
        <div className="twelve columns">
          <h3>{job.company}</h3>
          <p className="info">
            {job.position}
            <span>&bull;</span> <em className="date">{job.years}</em>
          </p>

          <p>{job.project}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="row work">
      <div className="three columns header-col">
        <h1>
          <span>Work</span>
        </h1>
        <br />
      </div>
      {work}
    </div>
  );
};

export default Work;
