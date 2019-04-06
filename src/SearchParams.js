import React from "react";

class SearchParams extends React.Component {
  state = {
    firstName: "",
    role: ""
  };

  render() {
    return (
      <div className="search-params">
        <label htmlFor="firstName">
          <input
            id="firstName"
            value={this.state.firstName}
            placeholder="first name"
          />
        </label>
      </div>
    );
  }
}

export default SearchParams;
