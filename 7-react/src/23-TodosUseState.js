import React, { useState } from 'react'

export default function TodosUseState () {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState('')

  function getId () {
    return todos.length ? todos[todos.length - 1].id + 1 : 1
  }

  function addTodo (e) {
    e.preventDefault()

    if (task.length > 2) {
      setTodos(todos => [...todos, { title: task, id: getId() }])
      setTask('')
    }
  }

  function removeTodo (id) {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
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
