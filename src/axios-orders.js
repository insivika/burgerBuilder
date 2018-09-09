import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerbuilder-5d4c4.firebaseio.com/'
});

export default instance