import { useState, useEffect, lazy } from 'react';
import { Routes, Route, Link, useSearchParams } from 'react-router-dom';

import { HomePage, MovieDetails, Movies } from 'pages';

import { useFetch } from './hooks/useFetch';
import { fetchMovieBySearch, fetchMovies } from 'services/api';

const App = () => {
  const [moviesBySearch, setMoviesBySearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { isFetching, data, error, fetchData } = useFetch();

  const movies = data?.results;

  const query = searchParams.get('query');

  useEffect(() => {
    fetchData(fetchMovies());
  }, [fetchData]);

  useEffect(() => {
    if (!query) return;

    fetchData(fetchMovieBySearch(query));
  }, [query, fetchData]);

  useEffect(() => {
    if (!query || !data?.results?.length) return;

    setMoviesBySearch(data.results);
  }, [data, query]);

  const handleSubmitSearchTerm = term => {
    setSearchParams({ query: term });
  };

  return (
    <AppLayout
      handleSubmitSearchTerm={handleSubmitSearchTerm}
      error={error}
      isFetching={isFetching}
      movies={movies}
      moviesBySearch={moviesBySearch}
    />
  );
};

const LazyCast = lazy(() => import('./pages/Cast'));

const LazyReviews = lazy(() => import('./pages/Reviews'));

const AppLayout = ({
  handleSubmitSearchTerm,
  error,
  isFetching,
  movies,
  moviesBySearch,
}) => {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <Link to="/goit-react-hw-05-movies">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Routes>
        <Route
          path="/goit-react-hw-05-movies"
          element={
            <HomePage movies={movies} isFetching={isFetching} error={error} />
          }
        />
        <Route
          path="/movies"
          element={
            <Movies
              onSubmit={handleSubmitSearchTerm}
              movies={moviesBySearch}
              isFetching={isFetching}
              error={error}
            />
          }
        />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<LazyCast />} />
          <Route path="reviews" element={<LazyReviews />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
