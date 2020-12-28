import axios from 'axios';

const api = axios.create({
  baseURL: 'https://edukatech-com-br.umbler.net/',
});

export default api;