const ObjectivesAndKeyResults = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.title),
    React.createElement("h2", {}, props.keyResult)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement(ObjectivesAndKeyResults, {
      title: "Learn and Understand React",
      keyResult: "Create the frontend app by the end of Q3"
    }),
    React.createElement(ObjectivesAndKeyResults, {
      title: "Learn and Understand Nodejs",
      keyResult: "Create an api for an app by the end of Q4"
    }),
    React.createElement(ObjectivesAndKeyResults, {
      title: "Understand javascript",
      keyResult: "make at least 5 concise exercise each quarter"
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
