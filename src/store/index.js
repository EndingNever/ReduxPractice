import { createSlice, configureStore } from "@reduxjs/toolkit";

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

const initialAuthState = {
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state. isAuthenticated = false;
    },
  }
});

const store = configureStore({
  reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
})

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
//* Old Reducer, no longer needed
// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     }
//   }
//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     }
//   }
//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     }
//   }
//   if (action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     }
//   }
//   return state;
// };