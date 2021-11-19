import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import {getHacker} from '../api/api'


const initialState = {
  isLoading: false,
  errorMessage: '',
  newsArr:[],
  list: 1,
  stop: false
}
export const fetchNews = createAsyncThunk(
    'fetchNews',
    async (n, thunkAPI) => {
      const response = await getHacker.news(n)
     
      return response
    }
  )

export const NewsReduser = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setStop: (state,action)=>{state.stop = action.payload}
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
     
      return {...state,newsArr: [...state.newsArr,...action.payload],isLoading: false, errorMessage: '',list: state.list + 1}
     
    }),
    builder.addCase(fetchNews.pending, (state)=>{
       return {...state,isLoading : true,errorMessage : ''} 
    }),
    builder.addCase(fetchNews.rejected, (state)=>{
      return {...state,isLoading: false, errorMessage: 'error'}
        
    })

  },
})

export const {setStop} = NewsReduser.actions

export default NewsReduser.reducer