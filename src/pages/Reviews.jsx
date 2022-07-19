import { Loader } from 'components';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieReviews } from 'services/api';

import { StyledReviews } from './Styled';

function Reviews() {
  const [reviews, setReviews] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  let { movieId } = useParams();

  useEffect(() => {
    requestReviews(movieId);
  }, []);

  const requestReviews = async movieId => {
    try {
      setIsFetching(true);

      const { results } = await fetchMovieReviews(movieId);

      setReviews(results);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsFetching(false);
    }
  };

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
