import axios from 'axios';

export const axiosConfig = axios.create({
  baseURL: 'https://private-online-testing-service.firebaseio.com/',
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});
