import React from "react";
import User from "./User";

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    const users = [
      {
        id: 1,
        name: "Carolina Candelaria",
        surname: "Garcia Gonzalez",
        email: "ccgarciagonzalez@spinboo.com",
        salary: 50000,
        role: "Project Manager"
      },
      {
        id: 2,
        name: "Daniel",
        surname: "Perez Crespo",
        email: "dperezcrespo@spinboo.com",
        salary: 50000,
        role: "Developer"
      },
      {
        id: 3,
        name: "Gustavo",
        surname: "Perez Crespo",
        email: "gperezcrespo@spinboo.com",
        salary: 50000,
        role: ["Purchase Manager"]
      },
      {
        id: 4,
        name: "Ana Belen",
        surname: "De la torre Enriquez",
        email: "abdelatorreenriquez@spinboo.com",
        salary: 50000,
        role: ["Sales Manager"]
      }
    ];

    this.setState({
      users
    });
  }
  render() {
    return (
      <div className="search">
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
}

export default Users;
