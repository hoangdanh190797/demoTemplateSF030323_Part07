import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './slices/todoSlice'

export const store = configureStore({
  reducer: {
    todo : todoSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
})