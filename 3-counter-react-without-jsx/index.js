const rootContainer = document.getElementById('root')

// state is immutable

class Counter extends React.Component {
  //   state = {
  //     counter: 0
  //   }

  constructor () {
    super()
    this.state = {
      counter: 0
    }
  }

  valueElement = () => {
    return React.createElement('span', {}, this.state.counter)
  }

  increaseButton = () => {
    return React.createElement(
      'button',
      {
        style: { marginLeft: '10px' },
        onClick: () => {
          this.setState({ counter: this.state.counter + 1 })
        }
      },
      'Increase'
    )
  }

  decreaseButton = () => {
    return React.createElement(
      'button',
      {
        onClick: () => this.setState({ counter: this.state.counter - 1 })
      },
      'decrease'
    )
  }

  render () {
    console.log('render')
    return React.createElement(
      'div',
      {},
      this.valueElement(),
      this.increaseButton(),
      this.decreaseButton()
    )
  }
}

// const el = React.createElement('div', {}, 'salam')
const el = React.createElement(Counter)

const root = ReactDOM.createRoot(rootContainer)

root.render(el)
