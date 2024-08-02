import axios from "axios";

export const apiEndpoint = "http://172.17.0.1:3001";

export const api = axios.create({
    baseURL: apiEndpoint,
});
