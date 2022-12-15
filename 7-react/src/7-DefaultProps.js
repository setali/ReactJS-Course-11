import React, { Component } from 'react'

export default class Title extends Component {
  //   static defaultProps = {
  //     color: 'green',
  //     title: 'Qoli'
  //   }

  render () {
    return (
      <div>
        <h1 style={{ color: this.props.color }}>{this.props.title}</h1>
      </div>
    )
  }
}

Title.defaultProps = {
  color: 'green',
  title: 'Qoli'
}
