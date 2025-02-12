import axios from 'axios';
import { querySerializer } from '@/utils';
import { API_URL } from './env';

const api = axios.create({
  baseURL: API_URL,
  paramsSerializer: querySerializer,
});

export default api;
