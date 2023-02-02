import { useEffect, useState } from 'react'
import request, { UnauthorizeRequest } from '../tools/request'
import { getToken, removeToken, setToken } from '../tools/utils'

export default function useAuth () {
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginError, setLoginError] = useState()
  const [isLoading, setIsLoading] = useState(true)

  function logon (data) {
    setUser(data)
    setIsLoggedIn(true)
  }

  function login (data) {
    UnauthorizeRequest({ url: '/api/login', method: 'post', data })
      .then(({ data }) => {
        logon(data)
        setLoginError(undefined)
        setToken(data.token)
      })
      .catch(error => {
        setLoginError(error.response.data.message)
      })
  }

  function getUser () {
    request('/api/user')
      .then(({ data }) => logon(data))
      .finally(() => setIsLoading(false))
  }

  function logout () {
    removeToken()
    setUser({})
    setIsLoggedIn(false)
  }

  useEffect(() => {
    getToken() ? getUser() : setIsLoading(false)
  }, [])

  return { user, isLoggedIn, isLoading, login, loginError, logout }
}
