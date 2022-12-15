import React, { Component } from 'react'

export default class Parent extends Component {
  render () {
    return (
      <div>
        <h2>My App</h2>
        <ErrorBoundaries>
          <Child />
        </ErrorBoundaries>
      </div>
    )
  }
}

class ErrorBoundaries extends Component {
  state = { hasError: false }

  // static getDerivedStateFromError (error) {
  //   return {
  //     hasError: true
  //   }
  // }

  componentDidCatch (error) {
    this.setState({ hasError: true })
  }

  render () {
    
    if (this.state.hasError) {
      return 'Oooooooooops, there is an error, Please call admin'
    }

    return this.props.children
  }
}

class Child extends Component {
  state = { counter: 1 }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.counter === 5) {
      throw new Error('App crashed!!!')
    }
  }

  render () {
    return (
      <div>
        Child: {this.state.counter}
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
      </div>
    )
  }
}
