import { createReducer } from '@reduxjs/toolkit'
import { setPosts, setPost } from '../actions/post'

export const posts = createReducer([], builder => {
  builder.addCase(setPosts, (state, action) => action.payload)
})

export const post = createReducer({}, builder => {
  builder.addCase(setPost, (state, action) => action.payload)
})
