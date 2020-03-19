import React from "react";
import ResourceRender from "./resource";

const DataRender = props => {
  const { Data, resource, Default } = props;
  return (
    <ResourceRender
      resource={resource}
      Data={Data}
      Empty={Default}
      Query={Default}
      Error={Default}
      {...props}
    />
  );
};

export default DataRender;
