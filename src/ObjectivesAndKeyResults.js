import React from "react";

const ObjectivesAndKeyResults = props => {
  const { title, keyResults } = props;
  return (
    <div>
      <h1>Objective: {title}</h1>
      <h2>Key Result: {keyResults.map(keyResult => keyResult)}</h2>
    </div>
  );
};

export default ObjectivesAndKeyResults;
