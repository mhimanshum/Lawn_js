import axios from 'axios';
const client = axios.create({
  baseURL: 'http://192.168.121.25:8080',
});

export { client};
