import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/productList/productListSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})