import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import styled from 'styled-components/macro'

import { ui } from './reducers/ui'
import { todos } from './reducers/todos'
import { Card } from './lib/Card'

import FloatingActionButton from './components/FloatingActionButton'

import { TodosList } from './components/TodosList'
import {LoadingIndicator} from './components/LoadingIndicator'
import { FetchTodosButton } from './components/FetchTodosButton'

const reducer = combineReducers({
  ui: ui.reducer,
  todos: todos.reducer
})

export const store = configureStore({ reducer })

const ThinnerCard = styled(Card)`
  width: 400px;
`;

// have not mounted any of the components - codealong with Damien in "Async actions - video"
export const App = () => {
  return (
    // <Provider store={store}>
    <>
      <ThinnerCard
        coverImage="https://www.fillmurray.com/500/300"
        thumbnailUrl="https://www.fillmurray.com/100/100"
        title="This is the title" 
        secondaryText="Secondary title"
      >
        Child content here! 
      </ThinnerCard>

      <Card 
        title="Only a title"
        secondaryText="And a secondary text"
      />

      <Card>
        <h1>Hello from Children!</h1>
      </Card>

      <FloatingActionButton 
  //        icon="https://img.icons8.com/ios/50/000000/microphone.png"
            icon="assets/microphone.png"
      />
    </>
    // </Provider>
  )
}
