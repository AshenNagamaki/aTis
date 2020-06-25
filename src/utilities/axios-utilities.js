import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://private-online-testing-service.firebaseio.com/',
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});
