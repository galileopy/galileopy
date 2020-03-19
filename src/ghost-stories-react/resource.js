import React from "react";

const merge = (obj1, obj2) => Object.assign({}, obj1, obj2);

// This component needs a ton of validation before being able to be called production ready
export default props => {
  const {
    resource,
    Data,
    Query,
    Empty,
    Error,
    commonProps,
    matchingProps
  } = props;
  // specify default props for all
  const specific = merge(
    {
      Data: {},
      Query: {},
      Empty: {},
      Error: {}
    },
    matchingProps || {}
  );

  if (typeof resource.matchWith !== "function") return null;

  return resource.matchWith({
    Query({ meta, params }) {
      return (
        <Query
          resource={resource}
          {...{ meta, params }}
          {...merge(commonProps, specific.Query)}
        />
      );
    },
    Empty({ meta, params }) {
      return (
        <Empty
          resource={resource}
          {...{ meta, params }}
          {...merge(commonProps, specific.Empty)}
        />
      );
    },
    Data({ value, meta, params }) {
      return (
        <Data
          resource={resource}
          {...{ value, meta, params }}
          {...merge(commonProps, specific.Data)}
        />
      );
    },
    Error({ messages, meta, params }) {
      return (
        <Error
          resource={resource}
          {...{ messages, meta, params }}
          {...merge(commonProps, specific.Error)}
        />
      );
    }
  });
};
