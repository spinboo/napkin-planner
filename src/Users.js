import React from "react";
import User from "./User";
import SearchBox from "./SearchBox";
import { Consumer } from "./SearchUserContext";

import users from "../seed/users";

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.search();
    this.setState({
      users: this.search()
    });
  }

  search = () => {
    if (this.props.searchParams.firstname.length === 0) {
      return users;
    } else {
      this.state.users.filter(user => {
        return user.name === this.props.searchParams.firstname;
      });
    }
  }

  render() {
    return (
      <div className="search">
        <SearchBox search={this.search} />
        {this.state.users.map(user => {
          return (
            <User
              key={user.id}
              name={user.name}
              surname={user.surname}
              email={user.email}
              salary={user.salary}
              role={user.role}
              id={user.id}
            />
          );
        })}
      </div>
    );
  }
};

export default function UsersWithContext(props) {
  return (
    <Consumer>
      {context => <Users {...props} searchParams={context} />}
    </Consumer>
  )
};
