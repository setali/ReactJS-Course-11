function reducer (state = 10, action) {
  console.log(state, action)
  switch (action.type) {
    case 'INC':
      return state + action.payload

    case 'DEC':
      return state - action.payload

    default:
      return state
  }
}

function createStore (reducer) {
  let state

  function dispatch (action) {
    state = reducer(state, action)
  }

  function getState () {
    return state
  }

  dispatch({type: 'INITIATE'})

  return {
    dispatch,
    getState
  }
}

const { dispatch, getState } = createStore(reducer)

console.log(getState())

dispatch({ type: 'INC', payload: 2 })

console.log(getState())

dispatch({ type: 'INC', payload: 3 })

console.log(getState())

dispatch({ type: 'DEC', payload: 10 })

console.log(getState())
