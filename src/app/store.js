import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/productList/productListSlice'
import mainPageSlice from '../components/mainPage/mainPageSlice'


export default configureStore({
  reducer: {
    counter: counterReducer,
    carInfo: mainPageSlice,
  },
})