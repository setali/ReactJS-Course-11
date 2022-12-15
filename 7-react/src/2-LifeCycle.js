import React, { Component } from 'react'

export default class LifeCycle extends Component {
  constructor (props) {
    super(props)
    console.log('constructor')
    this.state = {
      counter: 0,
      user: {}
    }
  }

  static getDerivedStateFromProps (props, state) {
    console.log('getDerivedStateFromProps', state.counter)

    if (state.counter % 2) {
      return {
        counter: state.counter + 1
      }
    }

    return null
  }

  shouldComponentUpdate (props, state) {
    console.log('shouldComponentUpdate', state.counter)
    if (state.counter % 4 === 0) {
      return false
    }

    return true
  }

  componentDidMount () {
    console.log('componentDidMount')
    // fetch('https://jsonplaceholder.ir/users/1')
    //   .then(response => response.json())
    //   .then(data => this.setState({ user: data }))
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  render () {
    console.log('render')
    return (
      <div>
        <div>Username: {this.state.user.username}</div>
        <hr />
        Counter: {this.state.counter}
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
      </div>
    )
  }
}
