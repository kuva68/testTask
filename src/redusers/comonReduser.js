import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



const initialState = {
  sortMode: '1'
}


export const ComonReduser = createSlice({
  name: 'comon',
  initialState,
  reducers: {
    setSortMode: (state,action)=>{state.sortMode = action.payload}
  },
   
})

export const {setSortMode} = ComonReduser.actions

export default ComonReduser.reducer