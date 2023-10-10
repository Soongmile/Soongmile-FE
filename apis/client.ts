import axios from 'axios';

const client = axios.create({
  baseURL: 'https://soongcharo.site/',
});

export default client;
