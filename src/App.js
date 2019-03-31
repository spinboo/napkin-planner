import React from "react";
import { render } from "react-dom";
import ObjectivesAndKeyResults from "./ObjectivesAndKeyResults";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Napking Planner</h1>
        <ObjectivesAndKeyResults
          title="Learn and Understand React"
          keyResults="Building and frontend app"
        />
        <ObjectivesAndKeyResults
          title="Learn and Understand Nodejs"
          keyResults="Building and backend app"
        />
        <ObjectivesAndKeyResults
          title="Learn and Understand JS deeply"
          keyResults="make 5 concise exercise"
        />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
