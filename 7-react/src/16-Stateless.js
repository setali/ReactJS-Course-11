import React, { Component } from 'react'

export default class Users extends Component {
  state = {
    users: [
      { id: 1, name: 'Ali' },
      { id: 2, name: 'Amir' },
      { id: 3, name: 'Fati' }
    ]
  }

  render () {
    return (
      <div>
        {this.state.users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

function User ({ user }) {
  return <div>{user.name}</div>
}
