import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState, // We initialized our initialState in the const above, and using that here as our initial state
  reducers: { // Reducers is an object of all the reducers the state slice needs
    increment(state) { //We don't need the action because the methods will be automatically called for you
      state.counter++; // We can't manipulate the existing state, it looks like we do here but it is not being done
    }, 
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;