import React from 'react' 
import { useDispatch } from 'react-redux'

import {fetchTodos } from '../reducers/todos'

export const FetchTodosButton = () => {
  const dispatch = useDispatch()

  return (
    <button
      type="button"
      onClick={() => dispatch(fetchTodos())} //we invoke fetchTodos BECAUSE it invokes another function inside of it, allows us to pass arguments (destructuring props) between components
    >
      Fetch todos! 
    </button>
  )
}
