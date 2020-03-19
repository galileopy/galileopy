import React from "react";

const Education = props => {
  const { value } = props;
  const education = value.education.map(edu => (
    <div key={edu.school} className="row item">
      <div className="twelve columns">
        <h3>{edu.school}</h3>
        <p className="info">
          {edu.degree} <span>&bull;</span>{" "}
          <em className="date">{edu.graduated}</em>
        </p>
        <p>{edu.description}</p>
      </div>
    </div>
  ));
  return (
    <div className="row education">
      <div className="three columns header-col">
        <h1>
          <span>Education</span>
        </h1>
        <br />
      </div>
      {education}
    </div>
  );
};

export default Education;
