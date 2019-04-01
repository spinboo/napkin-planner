import React from "react";
import { render } from "react-dom";
import ObjectivesAndKeyResults from "./ObjectivesAndKeyResults";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      okrs: []
    };
  }

  componentDidMount() {
    const okrs = [
      {
        id: 1,
        title: "Learn and Understand React",
        keyResults: ["Building and frontend app"]
      },
      {
        id: 2,
        title: "Learn and Understand Nodejs",
        keyResults: ["Building and backend app"]
      },
      {
        id: 3,
        title: "Learn and Understand JS deeply",
        keyResults: ["make 5 concise exercise"]
      }
    ];

    this.setState({
      okrs
    });
  }
  render() {
    return (
      <div>
        <h1>Napking Planner</h1>
        <div>
          {this.state.okrs.map(okr => {
            return (
              <ObjectivesAndKeyResults
                key={okr.id}
                title={okr.title}
                keyResults={okr.keyResults}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
