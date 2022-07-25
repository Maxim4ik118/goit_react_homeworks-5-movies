import React, { useEffect } from 'react';

import { useFetch } from 'hooks/useFetch';
import { MoviesAPI } from 'services/api';


import { MoviesGallery } from 'components';

function HomePage() {
  const { isFetching, data, error, fetchData } = useFetch();
  
  useEffect(() => {
    fetchData(MoviesAPI.fetchMovies());
  }, [fetchData]);

  const movies = data?.results;

  return (
    <div>
      Homapage
      <MoviesGallery error={error} isFetching={isFetching} movies={movies} />
    </div>
  );
}

export default HomePage;
