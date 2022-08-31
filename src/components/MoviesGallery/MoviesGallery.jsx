import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import Loader from 'components/Loader/Loader';

import { StyledMovies, StyledMovieItem } from './Styled';

function MoviesGallery({ movies = [], isFetching = false, error = '' }) {
  const showLoader = isFetching;
  const showMovies = movies?.length > 0;
  const showError = !!error;
  return (
    <>
      <StyledMovies>
        {showMovies &&
          movies.map(movie => {
            return <MovieItem key={movie.id} {...movie} />;
          })}
      </StyledMovies>
      {showError && <p>{error.message}</p>}
      {showLoader && <Loader />}
    </>
  );
}
function MovieItem({ original_title, id }) {
  const location = useLocation();

  return (
    <StyledMovieItem to={`/movies/${id}`} state={{ from: location }}>
      {original_title}
    </StyledMovieItem>
  );
}

MovieItem.propTypes = {
  original_title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

MoviesGallery.propTypes = {
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

export default MoviesGallery;
