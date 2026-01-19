import axios from "axios";

export const api = axios.create({
    baseURL : 'http://192.168.1.68:3000/api',
    timeout: 10000,
});