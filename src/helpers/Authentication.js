import Axios from '../config/axios' 

import jwt from 'jsonwebtoken'

export function fetchUser() {
  let decoded = jwt.decode(localStorage.getItem('x-access-token'))

  if(decoded) return {
    _id: decoded._id,
    email: decoded.email,
    first_name: decoded.first_name,
    last_name: decoded.last_name,
    role: decoded.role
  }
}

export function isAuthenticated() {
  return localStorage.getItem('x-access-token') && localStorage.getItem('x-access-token-expiration') > Date.now()
}

export function login(data) {
  return Axios.post('auth', { email: data.email, password: data.password })
  .then(response => {
    localStorage.setItem('x-access-token', response.data.token)
    localStorage.setItem('x-access-token-expiration', Date.now() + 2 * 60 * 60 * 1000)
    return response.data
  })
  .catch(error => Promise.reject('Auth failed'))
}