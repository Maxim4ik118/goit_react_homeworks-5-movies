import { Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { Loader } from 'components';
// import { HomePage, MovieDetails, Movies } from 'pages';

const LazyHomePage = lazy(() => import('./pages/HomePage'));
const LazyMovies = lazy(() => import('./pages/Movies'));
const LazyMovieDetails = lazy(() => import('./pages/MovieDetails'));

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LazyHomePage />} />
          <Route path="/movies" element={<LazyMovies />} />
          <Route path="/movies/:movieId/*" element={<LazyMovieDetails />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
