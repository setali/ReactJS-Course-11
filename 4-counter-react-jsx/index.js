const rootContainer = document.getElementById('root')

const styles = { marginLeft: '10px', backgroundColor: 'red' }

class Counter extends React.Component {
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

const root = ReactDOM.createRoot(rootContainer)

root.render(
  <div>
    <Counter />
    <Counter />
    <Counter />
    <Counter />
    <Counter />
    <Counter />
  </div>
)
