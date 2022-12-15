import React, { Component } from 'react'

export default class Parent extends Component {
  state = { mount: true }

  render () {
    return (
      <div>
        <button onClick={() => this.setState({ mount: !this.state.mount })}>
          {this.state.mount ? 'Unmount' : 'Mount'}
        </button>
        {this.state.mount && <Child />}
      </div>
    )
  }
}

class Child extends Component {
  state = { count: 0 }

  componentDidMount () {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

  render () {
    return <div>Count: {this.state.count}</div>
  }
}
