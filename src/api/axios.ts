import axios from 'axios'

export const instance = axios.create({
    baseURL: import.meta.env.VITE_URL_BACKEND,
    withCredentials: true,
})