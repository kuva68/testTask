import { configureStore } from '@reduxjs/toolkit'
import  NewsReduser  from './redusers/newsReduser'
import  NewestReduser  from './redusers/newestReduser'
import ComonReduser from './redusers/comonReduser'
export const store = configureStore({
  reducer: {
      news: NewsReduser,
      newest: NewestReduser,
      comon: ComonReduser
  },
})