import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'
import LoginForm from '../auth/LoginForm'

export default function Home (props) {
  const theme = useContext(ThemeContext)
  const { isLoggedIn, isLoading } = useContext(UserContext)

  return (
    <div className='box' style={theme}>
      <h2>Home Page</h2>
      {!isLoading && !isLoggedIn && <LoginForm />}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        dignissimos necessitatibus suscipit itaque tempora quae aliquid rem
        facilis architecto cupiditate, iusto maiores? Minima sapiente illum
        error, qui obcaecati nemo dolore?
      </p>
    </div>
  )
}
