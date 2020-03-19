import React from "react";
import DataRender from "../../ghost-stories-react/resource-data";
import EmptyComponent from "../../ghost-stories-react/empty";

import Work from "./Work";
import Education from "./Education";
import Skills from "./Skills";

export default props => {
  const { resource } = props;
  const workData = resource;
  const educationData = resource;
  const skillData = resource;
  return (
    <section id="resume">
      <DataRender
        resource={educationData}
        Data={Education}
        Default={EmptyComponent}
      />
      <DataRender
        resource={skillData}
        Data={Skills}
        Default={EmptyComponent}
      />
      <DataRender
        resource={workData}
        Data={Work}
        Default={EmptyComponent}
      />
    </section>
  );
};
