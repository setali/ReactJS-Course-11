import React, { useState, useReducer } from 'react'

function getId (todos) {
  return todos.length ? todos[todos.length - 1].id + 1 : 1
}

function reducer (state, { type, payload }) {
  switch (type) {
    case 'ADD_TODO':
      return [...state, { title: payload, id: getId(state) }]

    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== payload)

    default:
      return state
  }
}

export default function TodosUseState () {
  const [todos, dispatch] = useReducer(reducer, [])
  const [task, setTask] = useState('')

  function addTodo (e) {
    e.preventDefault()

    if (task.length > 2) {
      dispatch({ type: 'ADD_TODO', payload: task })
      setTask('')
    }
  }

  function removeTodo (id) {
    dispatch({ type: 'REMOVE_TODO', payload: id })
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder='new todo'
        />
        <button type='submit'>Add Todo</button>
      </form>
      <ol>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.id} - {todo.title}
            <span
              style={{ color: 'red', margin: '10px', cursor: 'pointer' }}
              onClick={() => removeTodo(todo.id)}
            >
              x
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}
