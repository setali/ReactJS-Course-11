import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'
import Loading from '../general/Loading'

export default function RequireAuth ({ children, component }) {
  const { isLoggedIn, isLoading } = useContext(UserContext)
  const location = useLocation()

  if (isLoading) {
    return <Loading />
  }

  if (isLoggedIn) {
    return children || component
  }

  return <Navigate to='/login' state={{ from: location.pathname }} />
}
