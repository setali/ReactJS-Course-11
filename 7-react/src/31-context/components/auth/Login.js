import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'
import Loading from '../general/Loading'
import LoginForm from './LoginForm'

export default function Login () {
  const { isLoggedIn, isLoading } = useContext(UserContext)

  const theme = useContext(ThemeContext)
  const location = useLocation()

  if (isLoading) {
    return <Loading />
  }

  if (isLoggedIn) {
    return <Navigate to={location.state?.from || '/'} />
  }

  return (
    <div className='box' style={theme}>
      <h2>Login</h2>
      <div>
        <LoginForm />
      </div>
    </div>
  )
}
