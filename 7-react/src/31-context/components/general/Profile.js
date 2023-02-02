import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'

export default function Profile () {
  const theme = useContext(ThemeContext)
  const { user } = useContext(UserContext)

  return (
    <div className='box' style={theme}>
      <h2>Profile</h2>
      <div>Name: {user.username}</div>
      <div>Email: {user.email}</div>
    </div>
  )
}
