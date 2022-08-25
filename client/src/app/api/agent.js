import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/api';
axios.defaults.withCredentials = true;

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

const Cart = {
  getCart: () => requests.get('/cart'),
  addToCart: (productId) => requests.post(`/cart/add/${productId}`),
  removeFromCart: (productId) => requests.post(`/cart/remove/${productId}`),
}

const Agent = { Product, Cart }

export default Agent;