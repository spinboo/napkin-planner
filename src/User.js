import React from "react";
import { Link } from "@reach/router";

const UserDetails = props => {
  const { id, name, surname, email, salary, role } = props;
  return (
    <Link to={`/user-profile/${id}`} className="pet">
      <h4>name: {name}</h4>
      <h2>surname: {surname}</h2>
      <p>email: {email}</p>
      <p>salary: {salary}</p>
      <p>role: {role}</p>
    </Link>
  );
};

export default UserDetails;
