import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

const getMovie = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`;

const getShow = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`;

const getNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;

const getUpComing = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;

const getTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;


/**
 *  All axios req
 *  @returns movies, tvshows, movieById, showById, now playing, upcoming movies and top rated
 *  
 */
export const getPopular =  (signal) =>  axios.get(getMovie, signal);

export const getTvShow = (signal) =>  axios.get(getShow, signal);

export const nowPlaying = (signal) => axios.get(getNowPlaying, signal);

export const upComing = (signal) => axios.get(getUpComing, signal);

export const topRated = (signal) =>  axios.get(getTopRated, signal);

export const movieById = (id, signal) => axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=videos`, {signal:signal});

export const similarMovies = (id, signal) => axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`, {signal:signal});

export const tvShowById = (id, signal) => axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US&append_to_response=videos`, {signal:signal});

export const similarTvShows = (id, signal) => axios.get(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=${apiKey}&language=en-US&page=1`, {signal:signal});

export const searchMovie = (query, signal) => axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=true`, {signal:signal})