import React from "react";
import DataRender from "../ghost-stories-react/resource-data";
import EmptyComponent from "../ghost-stories-react/empty";

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

const FooterData = props => {
  const { value } = props;
  const networks = value.map(socialLI);
  return <ul className="social-links">{networks}</ul>;
};

const Footer = props => {
  const { resource } = props;
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <DataRender
            resource={resource}
            Data={FooterData}
            Default={EmptyComponent}
          />
          <ul className="copyright">
            <li>&copy; Copyright 2020 Galileo Sánchez</li>
          </ul>
        </div>
      </div>
      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <i className="icon-up-open"></i>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
