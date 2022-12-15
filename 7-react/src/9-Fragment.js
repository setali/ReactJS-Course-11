import React, { Component } from 'react'

export default class Fragment extends Component {
  state = { users: [] }

  componentDidMount () {
    fetch('https://jsonplaceholder.ir/users')
      .then(response => response.json())
      .then(users => this.setState({ users }))
  }

  render () {
    return (
      <div>
        <table border='1'>
          <tbody>
            {this.state.users.map(user => (
              <tr key={user.id}>
                <Columns user={user} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

class Columns extends Component {
  render () {
    const { user } = this.props

    return (
      <>
        <td>{user.id}</td>
        <td>{user.name}</td>
      </>
    )

    // return (
    //   <React.Fragment>
    //     <td>{user.id}</td>
    //     <td>{user.name}</td>
    //   </React.Fragment>
    // )
  }
}
