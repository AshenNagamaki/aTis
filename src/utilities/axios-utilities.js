import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://atis-f5916.firebaseio.com/',
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});
