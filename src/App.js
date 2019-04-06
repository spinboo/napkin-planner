import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";

import Users from "./Users";
import UserProfile from "./UserProfile";
import SearchParams from "./SearchParams";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Napking Planner</Link>
        </header>
        <Router>
          <Users path="/" />
          <UserProfile path="/user-profile/:id" />
          <SearchParams path="/search-params" />
        </Router>
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
