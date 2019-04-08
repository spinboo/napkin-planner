import React from 'react';
import { Consumer } from './SearchUserContext';

class SearchBox extends React.Component {

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.search();
  }
  render() {
    return (
      <Consumer>
        {context => (
          <div className="search-params">
            <form onSubmit={this.handleFormSubmit} >
              <label htmlFor="firstname">
                First Name
                  <input
                  onChange={context.handleFirstnameChange}
                  id="firstname"
                  value={context.firstname}
                  placeholder="first name"
                />
              </label>
              <label htmlFor="surname">
                Surname
                  <input
                  onChange={context.handleSurnameChange}
                  id="surname"
                  value={context.surname}
                  placeholder="surname"
                />
              </label>
              <label htmlFor="email">
                Email
                  <input
                  onChange={context.handleEmailChange}
                  id="email"
                  value={context.email}
                  placeholder="email"
                />
              </label>
              <label htmlFor="role">
                Role
                  <select
                  id="role"
                  value={context.role}
                  onChange={context.handleRoleChange}
                  onBlur={context.handleRoleChange}
                >
                  <option />
                  <option value={'project manager'}>project manager</option>
                  <option value={'sales manager'}>sales manager</option>
                  <option value={'purchase'}>purchase manager</option>
                  <option value={'developer'}>developer</option>
                </select>
              </label>
              <button>Submit</button>
            </form>
          </div>
        )
        }

      </Consumer>
    );
  }
}

export default SearchBox;
