import { combineReducers } from 'redux'
import { persons, person } from './person'
import { posts, post } from './post'

const reducer = combineReducers({
  persons,
  person,
  posts,
  post
})

// function reducer (
//   state = { persons: [], posts: [], person: {}, post: {} },
//   action
// ) {
//   // console.log(state, action)
//   switch (action.type) {
//     case 'PERSONS':
//       return { ...state, persons: action.payload }

//     case 'PERSON':
//       return { ...state, person: action.payload }

//     case 'REMOVE_PERSON':
//       return { ...state, persons: state.filter(p => p.id !== action.payload) }

//     case 'POSTS':
//       return { ...state, posts: action.payload }

//     case 'POST':
//       return { ...state, post: action.payload }

//     default:
//       return state
//   }
// }

export default reducer
