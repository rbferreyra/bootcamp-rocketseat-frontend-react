import axios from 'axios';

// usar a api do projeto do backend
// @repo https://github.com/rbferreyra/bootcamp-rocketseat-backend-node
const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;