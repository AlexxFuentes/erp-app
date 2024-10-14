import { instance as axios } from '@/api/axios'
import { User } from '@/types/user'

export const register = async (user: User) => await axios.post('/auth/register', user)

export const login = async (user: User) => await axios.post('/auth/login', user)

export const logoutRequest = async () => await axios.get('/auth/logout')

export const verifyToken = async () => await axios.get('/auth/verify')
