import React from 'react';
import PropTypes from 'prop-types';

import { MoviesGallery, Searchbar } from 'components';

function Movies({ onSubmit, error, isFetching, movies }) {
  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <MoviesGallery error={error} isFetching={isFetching} movies={movies} />
    </>
  );
}

Movies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      original_title: PropTypes.string,
      overview: PropTypes.string,
      vote_average: PropTypes.number,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};

export default Movies;
