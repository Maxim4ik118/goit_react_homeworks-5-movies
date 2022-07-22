import { Loader } from 'components';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useFetch } from 'hooks/useFetch';
import { fetchMovieCast } from 'services/api';

import { StyledCast } from './Styled';

function Cast() {
  const { isFetching, data, error, fetchData } = useFetch();
  const castData = data?.cast;
  let { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    fetchData(fetchMovieCast(movieId));
  }, [fetchData, movieId]);

  return (
    <StyledCast>
      {error && <p>{error.message}</p>}
      {isFetching && (
        <div>
          <Loader />
        </div>
      )}
      {!!castData && !isFetching && (
        <ul>
          {castData.length > 0 &&
            castData.map(cast => (
              <li className="cast-item" key={cast.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                  alt={cast.name}
                />
                <p>{cast.name}</p>
                <p>Character: {cast.character}</p>
              </li>
            ))}
        </ul>
      )}
    </StyledCast>
  );
}

export default Cast;
