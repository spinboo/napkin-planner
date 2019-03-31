const Okr = () => {
  return React.createElement("div", {}, [
    React.createElement(
      "h1",
      {},
      "Understand react, building a professional application"
    ),
    React.createElement(
      "h2",
      {},
      "Learn Node, creating an api for a professional application"
    ),
    React.createElement(
      "h2",
      {},
      "Understand deeply javascript reading some stuff"
    )
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement(Okr),
    React.createElement(Okr),
    React.createElement(Okr)
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
