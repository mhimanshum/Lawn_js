import axios from 'axios';
const client = axios.create({
  baseURL: 'https://erin-different-ostrich.cyclic.app/',
});

export { client };
