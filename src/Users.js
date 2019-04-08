import React from "react";
import User from "./User";
import SearchBox from "./SearchBox";
import { Consumer } from "./SearchUserContext";

import seedUsers from "../seed/users";

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.search();
  }

  search = () => {
    let users;
    if (this.props.searchParams.firstname.length === 0) {
      users = seedUsers;
    } else {
      users = this.state.users.filter(user => {
        return user.name === this.props.searchParams.firstname;
      });
    }

    this.setState({
      users
    });
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
