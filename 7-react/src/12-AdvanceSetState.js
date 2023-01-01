import React, { Component } from 'react'

export default class AdvanceSetState extends Component {
  state = {
    todos: [],
    count: 0
  }

  generateTodo () {
    const time = Date.now()

    return {
      title: `Todo ${time}`,
      id: time
    }
  }

  addTodo = () => {
    const todo = this.generateTodo()

    this.setState(
      state => ({
        todos: [...state.todos, todo]
      }),
      () => {
        console.log('Todos updated')
        console.log(this.state.todos)
      }
    )

    this.setState(
      state => {
        return {
          count: state.todos.length
        }
      },
      () => {
        console.log('Count Updated')
      }
    )
  }

  render () {
    return (
      <div>
        <button onClick={this.addTodo}>Add todo</button>

        <div>Count: {this.state.count}</div>
        <ul>
          {this.state.todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}
