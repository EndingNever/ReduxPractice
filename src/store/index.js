import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter"
import authSlice from "./auth"
import nameSlice from "./name"

const store = configureStore({
  reducer: {counter: counterSlice, auth: authSlice, name: nameSlice}
})

export default store;