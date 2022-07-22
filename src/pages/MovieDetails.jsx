import { Loader } from 'components';
import { useFetch } from 'hooks/useFetch';
import { Suspense, useEffect } from 'react';
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
  const { isFetching, data, error, fetchData } = useFetch();
  const movieDetails = data;

  const location = useLocation();
  const navigate = useNavigate();
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    fetchData(fetchMovieById(movieId));
  }, [fetchData, movieId]);

  const handleMoveBack = () => {
    if (location.state) {
      navigate(location.state.from);
      return;
    }

    navigate('/goit-react-hw-05-movies');
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
              {movieDetails?.genres?.length > 0
                ? movieDetails.genres.map(({ id, name }) => {
                    return (
                      <span className="genre" key={id}>
                        {name}
                      </span>
                    );
                  })
                : 'There are no genres available'}
            </div>
          </StyledMovieDetailsMeta>
        </>
      )}
      <StyledMovieAdditionalInfo>
        <div className="additional-handlers">
          <Link
            className="link"
            to="cast"
            state={{ from: location.state?.from }}
          >
            Cast
          </Link>
          <Link
            className="link"
            to="reviews"
            state={{ from: location.state?.from }}
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
