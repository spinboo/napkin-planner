import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import { Provider } from './SearchUserContext';

import Users from "./Users";
import UserProfile from "./UserProfile";
import SearchUserForm from "./SearchUserForm";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      surname: "",
      email: "",
      salary: 0,
      role: "",
      users: [],
      handleFirstnameChange: this.handleFirstnameChange,
      handleSurnameChange: this.handleSurnameChange,
      handleEmailChange: this.handleEmailChange,
      handleSalaryChange: this.handleSalaryChange,
      handleRoleChange: this.handleRoleChange,
      getUsers: this.getUsers
    }
  }

  handleFirstnameChange = event => {
    this.setState({
      firstname: event.target.value
    })
  }

  handleSurnameChange = event => {
    this.setState({
      surname: event.target.value
    })
  }

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    })
  }

  handleRoleChange = event => {
    this.setState({
      role: event.target.value
    })
  }

  render() {
    return (
      <div>
        <header>
          <Link to="/">Napking Planner</Link>
          <Link to="/search-user">
            <span aria-label="search" role="img">
              <i className="fas fa-search"></i>
            </span>
          </Link>
        </header>
        <Provider value={this.state}>
          <Router>
            <Users path="/" />
            <UserProfile path="/user-profile/:id" />
            <SearchUserForm path="/search-user" />
          </Router>
        </Provider>
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
