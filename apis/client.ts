import axios from 'axios';

const client = axios.create({
  baseURL: 'http://13.124.148.165:8080/',
});

export default client;
