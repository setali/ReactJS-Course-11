import React from 'react'

const styles = { marginLeft: '10px', backgroundColor: 'yellow' }

export default class Counter extends React.Component {
  state = {
    counter: 0
  }

  increase = () => this.setState({ counter: this.state.counter + 1 })

  decrease = () => this.setState({ counter: this.state.counter - 1 })

  render () {
    return (
      <div>
        <span>{this.state.counter}</span>
        <button style={styles} onClick={this.increase}>
          Increase
        </button>
        <button onClick={this.decrease}>Decrease</button>
      </div>
    )
  }
}
