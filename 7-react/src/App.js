import React, { Component } from 'react'
import Counter from './1-Counter'

export default class App extends Component {
  render () {
    return (
      <div>
        <Counter />
        <Counter defaultCounter={10}/>
        <Counter defaultCounter={50} />
      </div>
    )
  }
}
