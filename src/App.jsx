import { lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { HomePage, MovieDetails, Movies } from 'pages';

const LazyCast = lazy(() => import('./pages/Cast'));

const LazyReviews = lazy(() => import('./pages/Reviews'));

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <Link to="/goit-react-hw-05-movies">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/goit-react-hw-05-movies" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<LazyCast />} />
          <Route path="reviews" element={<LazyReviews />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
