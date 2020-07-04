import Axios from 'axios'

export function fetchUser() {
  
}

export function isAuthenticated() {
  return localStorage.getItem('x-access-token') && localStorage.getItem('x-access-token-expiration') > Date.now()
}

export function login(data) {
  return Axios.post('http://localhost:8080/auth/', { email: data.email, password: data.password })
  .then(response => {
    localStorage.setItem('x-access-token', response.data.token)
    localStorage.setItem('x-access-token-expiration', Date.now() + 2 * 60 * 60 * 1000)
    return response.data
  })
  .catch(error => Promise.reject('Auth failed'))
}