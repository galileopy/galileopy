import React from "react";

const Skills = props => {
  const { value } = props;
  const skills = value.skills.map(function(skill) {
    const className = "bar-expand " + skill.name.toLowerCase();
    return (
      <li key={skill.name}>
        <span style={{ width: skill.level }} className={className}></span>
        <em>{skill.name}</em>
      </li>
    );
  });
  return (
    <div className="row skill">
      <div className="three columns header-col">
        <h1>
          <span>Skills</span>
        </h1>
      </div>
      <div className="nine columns main-col">
        <p>{value.skillsIntroduction}</p>

        <div className="bars">
          <ul className="skills">{skills}</ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
