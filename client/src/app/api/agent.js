import axios, { AxiosRequestConfig } from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/api';

const responseBody = (response) => response.data;

const requests = {
  get: (url, config) => axios.get(url, config).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
}


const Product = {
  getProdcuts: () => requests.get('/products'),
  getProductByLowestPrice: () => requests.get('/products', { params: { sort: 'low_price' } }),
  getProductByHighPrice: () => requests.get('/products', { params: { sort: 'high_price' } }),
  getProductByTitleAZ: () => requests.get('/products', { params: { sort: 'title_az' } }),
  getProductByTitleZA: () => requests.get('/products', { params: { sort: 'title_za' } }),
}

const Agent = { Product }

export default Agent;