import { configureStore } from '@reduxjs/toolkit'
import dataSilce from './slices/dataSlice'

export const store = configureStore({
  reducer: {
    todo : dataSilce,
  },
  devTools: process.env.NODE_ENV !== "production",
})