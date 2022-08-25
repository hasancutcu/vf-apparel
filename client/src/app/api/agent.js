import axios from 'axios';

if (typeof window === "undefined")
  axios.defaults.baseURL = 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local';
else
  axios.defaults.baseURL = '/';

axios.defaults.withCredentials = true;

const responseBody = (response) => response.data;

/**
 * @description This object includes functions are used to return responsebody of the api call
 */
const requests = {
  get: (url, config) => axios.get(url, config).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
}

/**
 * @description to use product related api calls
 */
const Product = {
  getProdcuts: () => requests.get('/api/products'),
  getProductByLowestPrice: () => requests.get('/api/products', { params: { sort: 'low_price' } }),
  getProductByHighPrice: () => requests.get('/api/products', { params: { sort: 'high_price' } }),
  getProductByTitleAZ: () => requests.get('/api/products', { params: { sort: 'title_az' } }),
  getProductByTitleZA: () => requests.get('/api/products', { params: { sort: 'title_za' } }),
}

/**
 * @description to use cart related api calls
 */
const Cart = {
  getCart: () => requests.get('/api/cart'),
  addToCart: (productId) => requests.post(`/api/cart/add/${productId}`),
  removeFromCart: (productId) => requests.post(`/api/cart/remove/${productId}`),
}

const Agent = { Product, Cart }

export default Agent;