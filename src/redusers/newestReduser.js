import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit'
import {getHacker} from '../api/api'


const initialState = {
  isLoading: false,
  errorMessage: '',
  newestArr:[],
  list: 1,
  stop: false
}
export const fetchNewest = createAsyncThunk(
    'fetchNewest',
    async (n, thunkAPI) => {
      const response = await getHacker.newest(n)
      console.log('=======fetchNewest resp',response)
      return response
    }
  )

export const NewestReduser = createSlice({
  name: 'newest',
  initialState,
  reducers: {
    setStop: (state,action)=>{state.stop = action.payload}
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNewest.fulfilled, (state, action) => {
     
      return {...state,newestArr: [...state.newestArr,...action.payload],isLoading: false, errorMessage: '',list: state.list + 1}
     
    }),
    builder.addCase(fetchNewest.pending, (state)=>{
       return {...state,isLoading : true,errorMessage : ''} 
    }),
    builder.addCase(fetchNewest.rejected, (state)=>{
      return {...state,isLoading: false, errorMessage: 'error'}
        
    })

  },
})

export const {setStop} = NewestReduser.actions

export default NewestReduser.reducer