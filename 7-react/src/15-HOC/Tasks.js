import React, { Component } from 'react'
import Button from './Button'
import ACL from './ACL'

class Tasks extends Component {
  state = {
    tasks: [
      { id: 1, title: 'task 1' },
      { id: 2, title: 'task 2' },
      { id: 3, title: 'task 3' },
      { id: 4, title: 'task 4' }
    ]
  }

  render () {
    return (
      <div>
        <ul>
          {this.state.tasks.map(task => (
            <li key={task.id}>
              {task.title}
              <Button permission='EDIT_TASK'>Edit</Button>
              <Button permission='DELETE_TASK'>Delete</Button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ACL(Tasks)
