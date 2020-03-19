import React from "react";
import DataRender from "../ghost-stories-react/resource-data";
import EmptyComponent from "../ghost-stories-react/empty";
import { Navigation } from "./Navigation";

// STRIKE 2
const iconName = name =>
  `https://icongr.am/simple/${name}.svg?size=32&color=DBDBDB`;
const socialLI = social => (
  <li>
    <a href={social.url}>
      <img
        alt={social.name}
        height="32"
        width="32"
        src={iconName(social.name)}
      />
    </a>
  </li>
);

const Hero = props => {
  const { value } = props;
  const name = value.name;
  const occupation = value.occupation;
  const description = value.description;
  const city = value.address.city;
  const networks = value.social.map(socialLI);

  return (
    <div className="banner-text">
      <h1 className="responsive-headline">I'm {name} .</h1>
      <h3>
        I'm a {city} based <span>{occupation}. </span> {description}
      </h3>
      <hr />
      <ul className="social">{networks}</ul>
    </div>
  );
};

export default props => {
  const { resource } = props;
  return (
    <header id="home">
      <div className="row banner">
        <Navigation />
        <DataRender
          resource={resource}
          Data={Hero}
          Default={EmptyComponent}
        />
      </div>
      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};
