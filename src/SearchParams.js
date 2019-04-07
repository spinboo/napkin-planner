import React from "react";

class SearchParams extends React.Component {
  state = {
    firstName: "",
    surname: "",
    email: "",
    role: "",
  };

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
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
      <div className="search-params">
        <label htmlFor="firstName">
          Name
          <input
            onChange={this.handleFirstNameChange}
            id="firstName"
            value={this.state.firstName}
            placeholder="first name"
          />
        </label>
        <label htmlFor="surname">
          Surname
          <input
            onChange={this.handleSurnameChange}
            id="surname"
            value={this.state.surname}
            placeholder="surname"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            onChange={this.handleEmailChange}
            id="email"
            value={this.state.email}
            placeholder="email"
          />
        </label>
        <label htmlFor="role">
          Role
          <select
            id="role"
            value={this.state.role}
            onChange={this.handleRoleChange}
            onBlur={this.handleRoleChange}
          >
            <option />
            <option value={'project manager'}>project manager</option>
            <option value={'sales manager'}>sales manager</option>
            <option value={'purchase'}>purchase manager</option>
            <option value={'developer'}>developer</option>
          </select>
        </label>
        <button>Submit</button>
      </div>
    );
  }
}

export default SearchParams;
