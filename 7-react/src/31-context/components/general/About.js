import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

export default function About (props) {
  const theme = useContext(ThemeContext)

  return (
    <div className='box' style={theme}>
      <h2>About Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        dignissimos necessitatibus suscipit itaque tempora quae aliquid rem
        facilis architecto cupiditate, iusto maiores? Minima sapiente illum
        error, qui obcaecati nemo dolore? dignissimos necessitatibus suscipit
        itaque tempora quae al
      </p>
    </div>
  )
}
