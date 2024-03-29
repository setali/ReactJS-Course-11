import axios from 'axios'
import { BASE_URL } from './constants'
import { getToken } from './utils'

const request = axios.create({
  baseURL: BASE_URL
})

export const UnauthorizeRequest = axios.create({
  baseURL: BASE_URL
})

request.interceptors.request.use(
  function (config) {
    const token = getToken()
    if (token) {
      config.headers.authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  function (response) {
    // response.data.username = 'qoli'
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default request
