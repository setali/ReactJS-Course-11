import React, { useState, useReducer } from 'react'

const DEFAULT_STATE = 5

function reducer (state, { type, payload }) {
  switch (type) {
    case 'ADD':
      return state + payload

    case 'SUB':
      return state - payload

    case 'RESET':
      return DEFAULT_STATE

    default:
      return state
  }
}

export default function App () {
  const [count, setCount] = useState(0)

  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE)

  return (
    <div>
      {state}
      <button onClick={() => dispatch({ type: 'ADD', payload: 1 })}>+</button>
      <button onClick={() => dispatch({ type: 'ADD', payload: 2 })}>+2</button>
      <button onClick={() => dispatch({ type: 'ADD', payload: 3 })}>+3</button>
      <button onClick={() => dispatch({ type: 'SUB', payload: 1 })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
      <hr />
      {count}
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </div>
  )
}
