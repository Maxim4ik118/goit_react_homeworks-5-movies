export const fetchMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_THEMOVIE_API_KEY}`,
  );
  return await response.json();
};
export const fetchMovieById = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_THEMOVIE_API_KEY}&language=en-US`
  );
  return await response.json();
};
export const fetchMovieBySearch = async (searchTerm) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_THEMOVIE_API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
  );
  return await response.json();
};
export const fetchMovieCast = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_THEMOVIE_API_KEY}&language=en-US`,
  );
  return await response.json();
};
export const fetchMovieReviews = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie//${movieId}/reviews?api_key=${process.env.REACT_APP_THEMOVIE_API_KEY}&language=en-US&page=1`
  );
  return await response.json();
};

