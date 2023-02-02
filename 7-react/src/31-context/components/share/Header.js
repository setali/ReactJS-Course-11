import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'

export default class Header extends Component {
  render () {
    return (
      <UserContext.Consumer>
        {({ user, isLoggedIn, logout }) => (
          <ThemeContext.Consumer>
            {theme => (
              <div className='box header' style={theme}>
                <h2>Header</h2>
                <div>
                  {isLoggedIn ? (
                    <span>
                      <span>{user.username}</span>
                      <span onClick={logout} className='logout'>
                        logout
                      </span>
                    </span>
                  ) : (
                    <Link to='/login'>Login</Link>
                  )}
                </div>
              </div>
            )}
          </ThemeContext.Consumer>
        )}
      </UserContext.Consumer>
    )
  }
}
