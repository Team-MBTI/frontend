import axios from 'axios';

export const getMovies = async () => {
  const response = await axios.get(`${process.env.API_URL}`);
  return response.data;
};
