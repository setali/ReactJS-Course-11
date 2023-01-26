import React, { Component } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

export default class Sidebar extends Component {
  static contextType = ThemeContext

  render () {
    return (
      <div className='box sidebar' style={this.context}>
        <h4>Sidebar</h4>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    )
  }
}
