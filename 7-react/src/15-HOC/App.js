import React, { Component } from 'react'
import Tasks from './Tasks'
import Button from './Button'

export default class App extends Component {
  render () {
    return (
      <div>
        <h2>Task App</h2>

        <Button permission='ADD_TASK' style={{ color: 'red' }}>
          Add task
        </Button>

        <Tasks permission='VIEW_TASK_LIST' />
      </div>
    )
  }
}
