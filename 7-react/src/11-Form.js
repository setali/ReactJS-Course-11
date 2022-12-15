import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    username: 'ali',
    password: ''
  }

  handleChangeInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              name='username'
              value={this.state.username}
              onChange={this.handleChangeInput}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              name='password'
              value={this.state.password}
              onChange={this.handleChangeInput}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

//   export default class Form extends Component {
//     state = {
//       username: 'ali',
//       password: ''
//     }

//     handleChangeUsername = event =>
//       this.setState({ username: event.target.value })

//     handleChangePassword = event =>
//       this.setState({ password: event.target.value })

//     render () {
//       return (
//         <div>
//           <form>
//             <div>
//               <label>Username:</label>
//               <input
//                 value={this.state.username}
//                 onChange={this.handleChangeUsername}
//               />
//             </div>
//             <div>
//               <label>Password:</label>
//               <input
//                 value={this.state.password}
//                 onChange={this.handleChangePassword}
//               />
//             </div>
//             <button>Submit</button>
//           </form>
//         </div>
//       )
//     }
//   }
