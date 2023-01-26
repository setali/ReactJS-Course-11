import React from 'react'
import useAuth from '../hooks/useAuth'
import UserContext from '../contexts/UserContext'

export default function AuthProvider ({ children }) {
  const auth = useAuth()

  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>
}
