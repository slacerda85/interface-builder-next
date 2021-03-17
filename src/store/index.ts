import { combineReducers } from 'redux'

// criação do store pelo configureStore do toolkit 
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'

const rootReducer = combineReducers({
  counter: counterReducer
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>