import React, { Component } from 'react'
import ACL from './ACL'

class Button extends Component {
  render () {
    return <button {...this.props}>{this.props.children}</button>
  }
}

const ExportedComponent = ACL(Button)


export default ExportedComponent
