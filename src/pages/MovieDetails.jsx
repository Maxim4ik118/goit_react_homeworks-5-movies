import { Loader } from 'components';
import { Suspense, useEffect, useState } from 'react';
import {
  useParams,
  useLocation,
  useNavigate,
  Outlet,
  Link,
} from 'react-router-dom';

import { fetchMovieById } from 'services/api';

import {
  StyledMovieAdditionalInfo,
  StyledMovieDetails,
  StyledMovieDetailsMeta,
} from './Styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { movieId } = useParams();

  useEffect(() => {
    requestMovieById(movieId);
  }, []);

  const requestMovieById = async movieId => {
    try {
      setIsFetching(true);
      const data = await fetchMovieById(movieId);
      setMovieDetails(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsFetching(false);
    }
  };

  const handleMoveBack = () => {
    if (location.state) {
      navigate(location.state.from);
      return;
    } 

    navigate('/');
  };

  return (
    <StyledMovieDetails>
      <button onClick={() => handleMoveBack()}>Go back</button>
      {error && <p>{error.message}</p>}
      {isFetching && (
        <div>
          <Loader />
        </div>
      )}
      {!!movieDetails && (
        <>
          <StyledMovieDetailsMeta>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.original_title}
            />
            <div className="movie-info">
              <h1>{movieDetails.original_title}</h1>
              <p>Vote Average: {movieDetails.vote_average}</p>
              <h2>Overview</h2>
              <p> {movieDetails.overview}</p>
              <h3>Genres:</h3>
              {movieDetails.genres.map(({ id, name }) => {
                return (
                  <span className="genre" key={id}>
                    {name}
                  </span>
                );
              })}
            </div>
          </StyledMovieDetailsMeta>
        </>
      )}
      <StyledMovieAdditionalInfo>
        <div className="additional-handlers">
          <Link
            className="link"
            to="cast"
            state={{ from: location.state.from }}
          >
            Cast
          </Link>
          <Link
            className="link"
            to="reviews"
            state={{ from: location.state.from }}
          >
            Reviews
          </Link>
        </div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </StyledMovieAdditionalInfo>
    </StyledMovieDetails>
  );
};

export default MovieDetails;
