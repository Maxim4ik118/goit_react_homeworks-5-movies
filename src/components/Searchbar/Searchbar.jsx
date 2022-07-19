import { useState } from 'react';
import PropTypes from 'prop-types';

import { StyledFilter } from './Styled';

const INITIAL_FORM_STATE = {
  searchValue: '',
};

const Searchbar = ({ onSubmit }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(formData.searchValue);
    setFormData({ searchValue: '' });
  };

  const handleSearchTermChange = ({ target: { value, name } }) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <StyledFilter>
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          onChange={handleSearchTermChange}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          name="searchValue"
          value={formData.searchValue}
          placeholder="Search movies"
        />
      </form>
    </StyledFilter>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
