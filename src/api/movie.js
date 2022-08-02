import axios from 'axios';

const popularMovie = "https://api.themoviedb.org/3/movie/popular?api_key=54931a9461e6d4827987b707a2b44d61&language=en-US";

const movieShow = "https://api.themoviedb.org/3/tv/top_rated?api_key=54931a9461e6d4827987b707a2b44d61&language=en-US&page=1"

export const getPopular =  (signal) =>  axios.get(popularMovie, signal)

export const getTvShow = (signal) =>  axios.get(movieShow, signal);