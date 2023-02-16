import reducer from '../reducers'
// import { createStore, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'

// const myMiddleware =
//   ({ dispatch, getState }) =>
//   next =>
//   action =>
//     typeof action === 'function' ? action(dispatch, getState) : next(action)

// const store = createStore(reducer, applyMiddleware(thunk))

const store = configureStore({ reducer })

export default store
