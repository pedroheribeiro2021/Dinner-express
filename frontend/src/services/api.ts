import axios from "axios";

export const api = axios.create({
    baseURL: 'https://dinner-express.onrender.com',
    timeout: 5000,
})