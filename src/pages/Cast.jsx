import { Loader } from 'components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieCast } from 'services/api';

import { StyledCast } from './Styled';

function Cast() {
  const [castData, setCastData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  let { movieId } = useParams();

  useEffect(() => {
    requestCast(movieId);
  }, []);

  const requestCast = async movieId => {
    try {
      setIsFetching(true);

      const { cast } = await fetchMovieCast(movieId);

      setCastData(cast);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <StyledCast>
      {error && <p>{error.message}</p>}
      {isFetching && <div><Loader /></div>}
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
