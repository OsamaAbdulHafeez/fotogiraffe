import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedFilters:{ size: [], cover: [], orientation: [] },
}

export const filterBookSlice = createSlice({
  name: 'filterBook',
  initialState,
  reducers: {
    ChooseFilter: (state,action) => {
        state.selectedFilters = action.payload
    },
  },
})

export const { ChooseFilter} = filterBookSlice.actions

export default filterBookSlice.reducer