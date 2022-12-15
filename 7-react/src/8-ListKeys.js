import React, { Component } from 'react'

export default class Users extends Component {
  state = { users: [] }

  componentDidMount () {
    fetch('https://jsonplaceholder.ir/users')
      .then(response => response.json())
      .then(users => this.setState({ users }))
  }
  
  render () {
    return (
      <div>
        <ol>
          {this.state.users.map(user => (
            <li key={user.id}> {user.name}</li>
          ))}
        </ol>
      </div>
    )
  }
}

// export default class Users extends Component {
//   render () {
//     return (
//       <div>
//         {[
//           <div key={1}>Ali</div>,
//           <div key={2}>Eli</div>,
//           <div key={3}>Qoli</div>
//         ]}
//       </div>
//     )
//   }
// }
