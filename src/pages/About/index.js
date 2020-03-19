import React from "react";
import DataRender from "../../ghost-stories-react/resource-data";
import EmptyComponent from "../../ghost-stories-react/empty";
import About from "./About";

export default props => {
  const { resource } = props;
  return (
    <section id="about">
      <DataRender
        resource={resource}
        Data={About}
        Default={EmptyComponent}
      />
    </section>
  );
};
