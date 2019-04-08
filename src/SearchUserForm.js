import React from 'react';
import SearchBox from './SearchBox';
import { navigate } from '@reach/router';

class SearchUserForm extends React.Component {
  handleSearchSubmit() {
    navigate('/');
  }
  render() {
    return (
      <div className="search-user">
        <SearchBox search={this.handleSearchSubmit} />
      </div>
    );
  }
}

export default SearchUserForm;