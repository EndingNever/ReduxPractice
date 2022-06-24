import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: [
    "Howdy ",
    "Billy ",
    "Joe "
  ]
};

const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    addName(state) {
      state.name.push('Yellow ')
    },
    addUserName(state, action){
      state.name = state.name.concat(action.payload)
    },
  }
})

export const nameActions = nameSlice.actions;
export default nameSlice.reducer;