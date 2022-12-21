import axios from 'axios';
const API_KEY = '4dc43b4451d2b7a930d54ecfb9900cd7';

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovies = async (name) => {
  try {
    const response = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${name}`)
    return response.data
  } catch (error) {
    console.log(error);
  }
}
export const fetchById = async (id) => {
  try {
    const response = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    return response.data
  } catch (error) {
    console.log(error);
  }
}
export const fetchCast = async (id) => {
  try {
    const response = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
    return response.data
  } catch (error) {
    console.log(error);
  }
}

export const fetchReviews = async (id) => {
  try {
    const response = await axios(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`)
    return response.data
  } catch (error) {
    console.log(error);
  }
}