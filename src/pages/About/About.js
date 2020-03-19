import React from "react";
const About = props => {
  const { value } = props;
  const name = value.name;
  const image = "images/" + props.value.image;
  const bio = value.bio;
  const street = value.address.street;
  const city = value.address.city;
  const state = value.address.state;
  const zip = value.address.zip;
  const phone = value.phone;
  const email = value.email;
  const resumeDownload = value.resumedownload;
  return (
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={image} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p> {bio}</p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>{name}</span>
              <br />
              <span>
                {street}
                <br />
                {city}, {state} {zip}
              </span>
              <br />
              <span>{phone}</span>
              <br />
              <span>{email}</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href={resumeDownload} className="button">
                <i className="fa fa-download"></i>Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
