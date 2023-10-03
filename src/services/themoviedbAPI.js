import axios from 'axios';

const API_KEY = '676659648d2ef6ef9dac67ab3f3effd4';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingFilms = () => {
  return axios(`trending/movie/day?api_key=${API_KEY}`);
};

export const getMovieDetails = id => {
  return axios(`movie/${id}?api_key=${API_KEY}`);
};

export const getMovieCast = id => {
  return axios(`movie/${id}/credits?api_key=${API_KEY}`);
};

export const getMovieReviews = id => {
  return axios(`movie/${id}/reviews?api_key=${API_KEY}`);
};

export const searchMovie = value => {
  return axios(`search/movie?query=${value}&api_key=${API_KEY}`);
};
