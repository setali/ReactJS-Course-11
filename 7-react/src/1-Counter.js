import React, { Component } from 'react'

export default class Counter extends Component {
  constructor (props) {
    super(props)
    this.increase = this.increase.bind(this)
    this.state = {
      counter: props.defaultCounter || 0
    }
  }

  increase () {
    this.setState({ counter: this.state.counter + 1 })
  }

  decrease = () => {
    this.setState({ counter: this.state.counter - 1 })
  }

  render () {
    return (
      <div>
        Counter: {this.state.counter}
        <button onClick={this.increase}>+</button>
        {/* <button onClick={() => this.increase()}>+</button> */}
        <button onClick={this.decrease}>-</button>
        {/* <button onClick={this.decrease.bind(this)}>-</button> */} | Default
        value is: {this.props.defaultCounter}
      </div>
    )
  }
}
