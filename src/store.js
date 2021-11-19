import { configureStore } from '@reduxjs/toolkit'
import  NewsReduser  from './redusers/newsReduser'
import  NewestReduser  from './redusers/newestReduser'
export const store = configureStore({
  reducer: {
      news: NewsReduser,
      newest: NewestReduser
  },
})