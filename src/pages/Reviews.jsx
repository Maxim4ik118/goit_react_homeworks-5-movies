import { Loader } from 'components';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useFetch } from 'hooks/useFetch';
import { MoviesAPI } from 'services/api';

import { StyledReviews } from './Styled';

function Reviews() {
  const { isFetching, data, error, fetchData } = useFetch();
  const reviews = data?.results;
  let { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    fetchData(MoviesAPI.fetchMovieReviews(movieId));
  }, [fetchData, movieId]);

  return (
    <StyledReviews>
      {error && <p>{error.message}</p>}
      {isFetching && (
        <div>
          <Loader />
        </div>
      )}
      {!!reviews && !isFetching && (
        <ul>
          {reviews.length > 0 &&
            reviews.map(review => (
              <li className="cast-item" key={review.id}>
                <p>Author: {review.author}</p>
                <p>Character: {review.content}</p>
              </li>
            ))}
          {reviews.length === 0 && !isFetching && (
            <li>There are no reviews yet!</li>
          )}
        </ul>
      )}
    </StyledReviews>
  );
}

export default Reviews;
