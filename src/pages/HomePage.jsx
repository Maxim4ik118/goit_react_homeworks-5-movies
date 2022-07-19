import React from 'react';
import PropTypes from 'prop-types';

import { MoviesGallery } from 'components';

function HomePage({ error, isFetching, movies }) {
  return (
    <div>
      Homapage
      <MoviesGallery error={error} isFetching={isFetching} movies={movies} />
    </div>
  );
}

HomePage.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({ 
        id: PropTypes.number,
        original_title: PropTypes.string,
        overview: PropTypes.string,
        vote_average: PropTypes.number,
        poster_path: PropTypes.string,
    })).isRequired,
};

export default HomePage;
