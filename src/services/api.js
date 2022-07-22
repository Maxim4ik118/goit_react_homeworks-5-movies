export const fetchMovies = () =>
  `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_THEMOVIE_API_KEY}`;

export const fetchMovieById = movieId =>
  `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_THEMOVIE_API_KEY}&language=en-US`;

export const fetchMovieBySearch = searchTerm =>
  `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_THEMOVIE_API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`;

export const fetchMovieCast = movieId =>
  `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_THEMOVIE_API_KEY}&language=en-US`;

export const fetchMovieReviews = movieId =>
  `https://api.themoviedb.org/3/movie//${movieId}/reviews?api_key=${process.env.REACT_APP_THEMOVIE_API_KEY}&language=en-US&page=1`;
