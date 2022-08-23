import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/api';

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
}


const Product = {
  getProdcutsAsIs: () => requests.get('/products'),
}

const Agent = { Product }

export default Agent;