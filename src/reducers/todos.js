import { createSlice } from '@reduxjs/toolkit'

import { ui } from './ui'

export const todos = createSlice({
  name: 'todos',
  initialState: {
    all: []
  },
  reducers: {
    setTodos: (state, action) => {
      state.all = action.payload
    }
  }
})

//getState can also be in the return as an argument. ---> use to get the current state of our store
export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch('http://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then((json) => { 
        dispatch(todos.actions.setTodos(json)) //json as payload
        dispatch(todos.actions.setLoading(false))
      })
  }
}