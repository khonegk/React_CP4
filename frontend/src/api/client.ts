import axios from 'axios';
export const apiClient = axios.create({ // общие настройки для запросов к серверу
    baseURL: 'http://localhost:8000',
    timeout: 5000,
});